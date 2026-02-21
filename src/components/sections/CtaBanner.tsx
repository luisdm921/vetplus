"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  TextReveal,
  Reveal,
  MagneticHover,
  FloatingElement,
} from "@/components/animations";

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const patternY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 overflow-hidden"
      aria-label="Llamada a la acción"
    >
      {/* Gradient background with parallax scale */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800"
        style={{ scale: bgScale }}
      />

      {/* Decorative elements with parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-warm-500/10 rounded-full blur-3xl"
          animate={{
            x: [20, -20, 20],
            y: [10, -10, 10],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Paw pattern with parallax */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            y: patternY,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 35c-3 0-5.5 2.5-5.5 5.5S37 46 40 46s5.5-2.5 5.5-5.5S43 35 40 35zm-10-5c-2 0-3.5 1.5-3.5 3.5S28 37 30 37s3.5-1.5 3.5-3.5S32 30 30 30zm20 0c-2 0-3.5 1.5-3.5 3.5S48 37 50 37s3.5-1.5 3.5-3.5S52 30 50 30zm-15-8c-2 0-3.5 1.5-3.5 3.5S33 29 35 29s3.5-1.5 3.5-3.5S37 22 35 22zm10 0c-2 0-3.5 1.5-3.5 3.5S43 29 45 29s3.5-1.5 3.5-3.5S47 22 45 22z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.span
              className="text-5xl mb-6 block"
              animate={{ rotate: [-5, 5, -5], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🐾
            </motion.span>

            <TextReveal
              text="¿Tu mascota necesita atención?"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight"
              tag="h2"
              stagger={0.04}
            />

            <Reveal delay={0.3} blur>
              <p className="text-primary-100 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                No esperes más. Agenda tu cita hoy y dale a tu compañero el
                cuidado que merece. Primera consulta con{" "}
                <strong className="text-white">20% de descuento</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.5} blur>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticHover strength={0.15}>
                  <a
                    href="https://wa.me/528445841876?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta%20para%20mi%20mascota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base"
                  >
                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                    Agendar por WhatsApp
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <a
                    href="tel:+528445841876"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-base backdrop-blur-sm"
                  >
                    Llamar Ahora
                  </a>
                </MagneticHover>
              </div>
            </Reveal>
          </div>

          {/* Right: Cat image with floating animation */}
          <Reveal
            direction="right"
            delay={0.2}
            scale
            blur
            className="hidden lg:block"
          >
            <div className="relative flex justify-center">
              {/* Glow behind cat */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/10 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
              <FloatingElement duration={5} distance={12}>
                <motion.div
                  className="relative w-72 h-96 drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Image
                    src="/image/cat.png"
                    alt="Gato saludable y feliz en Firo Vet"
                    fill
                    className="object-contain"
                    sizes="300px"
                  />
                </motion.div>
              </FloatingElement>
              {/* Floating pill badge */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-2 shadow-lg z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <p className="text-sm font-semibold text-primary-700 whitespace-nowrap">
                  🩺 Primera consulta -20%
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
