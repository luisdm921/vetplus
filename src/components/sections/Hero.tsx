"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaCalendarCheck,
  FaShieldAlt,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import {
  TextReveal,
  MagneticHover,
  MorphingBlob,
  FloatingElement,
  Reveal,
} from "@/components/animations";

const stats = [
  { value: "10+", label: "Años de experiencia", icon: FaShieldAlt },
  { value: "5,000+", label: "Mascotas atendidas", icon: FaHeart },
  { value: "24/7", label: "Urgencias disponibles", icon: FaClock },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-primary-50/30"
    >
      {/* Parallax background decorative elements — hidden on small screens for performance */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{ y: bgY }}
      >
        {/* Morphing blobs instead of static gradients */}
        <MorphingBlob
          className="-top-32 -right-32 w-[500px] h-[500px]"
          color="rgba(13, 148, 136, 0.08)"
        />
        <MorphingBlob
          className="-bottom-40 -left-40 w-[400px] h-[400px]"
          color="rgba(245, 158, 11, 0.06)"
        />
        <MorphingBlob
          className="top-1/3 left-1/3 w-[300px] h-[300px]"
          color="rgba(13, 148, 136, 0.04)"
        />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-24 lg:py-32">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge – blur + slide in */}
            <Reveal delay={0.1} blur>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200/60 text-primary-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-soft" />
                Clínica veterinaria de confianza en CDMX
              </span>
            </Reveal>

            {/* Headline – word-by-word reveal */}
            <div className="mb-2">
              <TextReveal
                text="Cuidamos a tu mascota"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
                tag="h1"
                delay={0.2}
                stagger={0.04}
              />
            </div>
            <div className="mb-6">
              <TextReveal
                text="como parte de tu familia"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary-600"
                tag="span"
                delay={0.5}
                stagger={0.04}
              />
            </div>

            {/* Subtitle – fade + blur */}
            <Reveal delay={0.7} blur duration={0.8}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
                Medicina veterinaria con{" "}
                <strong className="text-slate-700">
                  tecnología de vanguardia
                </strong>
                , calidez humana y un equipo que ama lo que hace. Tu
                tranquilidad y la salud de tu compañero son nuestra prioridad.
              </p>
            </Reveal>

            {/* CTAs – Magnetic hover effect */}
            <Reveal delay={0.9} blur>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <MagneticHover strength={0.15}>
                  <a
                    href="https://wa.me/5255500300?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta%20para%20mi%20mascota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 text-base"
                  >
                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                    Contactar por WhatsApp
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <a
                    href="#contacto"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-cream-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-primary-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-base"
                  >
                    <FaCalendarCheck className="text-primary-500 group-hover:scale-110 transition-transform" />
                    Agendar Consulta
                  </a>
                </MagneticHover>
              </div>
            </Reveal>

            {/* Stats row – staggered reveal */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={1.1 + i * 0.12}
                  direction="left"
                  blur
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <stat.icon className="text-lg" />
                    </motion.div>
                    <div>
                      <p className="text-xl font-bold text-slate-900 font-heading leading-none">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Visual / Image placeholder */}
          <Reveal direction="right" delay={0.3} scale blur duration={0.9}>
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
              {/* Main image container */}
              <motion.div
                className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Gradient base behind transparent PNG */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-cream-100 rounded-3xl" />
                {/* Decorative circles */}
                <motion.div
                  className="absolute top-8 right-8 w-32 h-32 rounded-full bg-warm-200/30 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute bottom-12 left-6 w-24 h-24 rounded-full bg-primary-200/40 blur-lg"
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                />
                {/* Dog image */}
                <Image
                  src="/image/dog.png"
                  alt="Perro feliz atendido en Firo Vet"
                  fill
                  className="object-cover object-center scale-110 hover:scale-[1.15] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent" />
              </motion.div>

              {/* Floating card: rating – spring physics float (hidden on mobile) */}
              <FloatingElement
                className="absolute -bottom-4 -left-4 sm:-left-8 z-10 hidden sm:block"
                duration={4}
                distance={10}
              >
                <motion.div
                  className="glass rounded-2xl p-4 shadow-soft-lg"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-slate-900 text-sm leading-none">
                        4.9 / 5.0
                      </p>
                      <p className="text-slate-500 text-xs">+340 reseñas</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Floating card: trust – spring physics float (hidden on mobile) */}
              <FloatingElement
                className="absolute -top-4 -right-4 sm:-right-8 z-10 hidden sm:block"
                duration={5}
                distance={12}
                delay={0.5}
              >
                <motion.div
                  className="glass rounded-2xl p-4 shadow-soft-lg"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    delay: 1.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <FaShieldAlt className="text-primary-600" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-slate-900 text-sm leading-none">
                        Veterinaria
                      </p>
                      <p className="text-slate-500 text-xs">Certificada</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Animated decorative ring (hidden on mobile) */}
              <motion.div
                className="absolute -z-10 -inset-4 rounded-[2rem] border-2 border-dashed border-primary-200/30 hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom wave separator with parallax */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        aria-hidden="true"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 40C240 70 480 80 720 60C960 40 1200 20 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </section>
  );
}
