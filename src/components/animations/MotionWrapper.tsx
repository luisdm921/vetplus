"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  type Variants,
} from "framer-motion";
import { type ReactNode, useRef, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════
   DEFAULT EXPORT — backward compatible MotionWrapper
   ═══════════════════════════════════════════════ */
interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  amount?: number;
}

const directionOffsets = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function MotionWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  amount = 0.2,
}: MotionWrapperProps) {
  const offset = directionOffsets[direction];
  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.4, 0.25, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   STAGGER CONTAINERS
   ═══════════════════════════════════════════════ */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   PARALLAX — moves element at a different speed
   ═══════════════════════════════════════════════ */
export function Parallax({
  children,
  className = "",
  speed = 0.5,
  direction = "y",
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "x" | "y";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 100 * speed;
  const raw = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const value = useSpring(raw, { stiffness: 100, damping: 30, mass: 0.5 });
  const style: CSSProperties = {};
  if (direction === "y") (style as Record<string, unknown>).y = value;
  else (style as Record<string, unknown>).x = value;

  return (
    <motion.div ref={ref} className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   REVEAL — fade + slide + optional blur/scale
   ═══════════════════════════════════════════════ */
const offsets: Record<string, { x: number; y: number }> = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  amount = 0.15,
  scale = false,
  blur = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  amount?: number;
  scale?: boolean;
  blur?: boolean;
}) {
  const off = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: off.x,
        y: off.y,
        scale: scale ? 0.95 : 1,
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   TEXT REVEAL — word-by-word or char-by-char
   ═══════════════════════════════════════════════ */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  mode = "word",
  once = true,
  tag: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "word" | "char";
  once?: boolean;
  tag?: "p" | "h1" | "h2" | "h3" | "span";
}) {
  const units = mode === "word" ? text.split(" ") : text.split("");
  const separator = mode === "word" ? "\u00A0" : "";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const unitVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={containerVariants}
      aria-label={text}
    >
      <Tag className={className}>
        {units.map((unit, i) => (
          <motion.span
            key={i}
            variants={unitVariants}
            className="inline-block"
            aria-hidden="true"
          >
            {unit}
            {separator}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   STAGGER GRID — staggered reveal for card grids
   ═══════════════════════════════════════════════ */
export function StaggerGrid({
  children,
  className = "",
  stagger = 0.07,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGridItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAGNETIC HOVER — element follows cursor subtly
   ═══════════════════════════════════════════════ */
export function MagneticHover({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };
  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TILT CARD — 3D perspective tilt on hover
   ═══════════════════════════════════════════════ */
export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxTilt * 2;
    const rotateY = (x - 0.5) * maxTilt * 2;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.15), transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }
  };
  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };
  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-primary-400 to-warm-400 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}

/* ═══════════════════════════════════════════════
   ANIMATED COUNTER — spring-based count up
   ═══════════════════════════════════════════════ */
function SpringNumber({ spring }: { spring: ReturnType<typeof useSpring> }) {
  const ref = useRef<HTMLSpanElement>(null);
  spring.on("change", (v) => {
    if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString();
  });
  return <span ref={ref}>0</span>;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const started = useRef(false);
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  if (isInView && !started.current) {
    springValue.set(target);
    started.current = true;
  }

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {isInView ? <SpringNumber spring={springValue} /> : "0"}
      {suffix}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════
   MORPHING BLOB — animated background shape
   ═══════════════════════════════════════════════ */
export function MorphingBlob({
  className = "",
  color = "rgba(13, 148, 136, 0.08)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "50% 50% 30% 70% / 60% 40% 60% 40%",
          "70% 30% 50% 50% / 40% 60% 40% 60%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        scale: [1, 1.05, 0.98, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE — infinite horizontal scroll
   ═══════════════════════════════════════════════ */
export function Marquee({
  children,
  className = "",
  speed = 30,
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex gap-8 w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { duration: speed, repeat: Infinity, ease: "linear" },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   FLOATING ELEMENT — gentle float animation
   ═══════════════════════════════════════════════ */
export function FloatingElement({
  children,
  className = "",
  duration = 4,
  distance = 12,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
        rotate: [-1, 1, -1],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
