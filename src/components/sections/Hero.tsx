"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import {
  TextReveal,
  MagneticHover,
  MorphingBlob,
  FloatingElement,
  Reveal,
} from "@/components/animations";

const urgencyPoints = [
  { icon: FaClock, text: "Te respondemos en menos de 5 minutos" },
  { icon: FaCheckCircle, text: "Citas disponibles hoy mismo" },
  { icon: FaShieldAlt, text: "10+ años · 5,000+ mascotas atendidas" },
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
      {/* Parallax background decorative elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{ y: bgY }}
      >
        <MorphingBlob
          className="-top-32 -right-32 w-[500px] h-[500px]"
          color="rgba(13, 148, 136, 0.08)"
        />
        <MorphingBlob
          className="-bottom-40 -left-40 w-[400px] h-[400px]"
          color="rgba(245, 158, 11, 0.06)"
        />
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
            {/* Urgency badge */}
            <Reveal delay={0.1} blur>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-50 border border-warm-200/60 text-warm-700 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-warm-500 animate-pulse-soft" />
                Urgencias 24/7 — Atendemos hoy mismo
              </span>
            </Reveal>

            {/* Headline — problem-focused */}
            <div className="mb-2">
              <TextReveal
                text="¿Tu mascota está enferma"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
                tag="h1"
                delay={0.2}
                stagger={0.04}
              />
            </div>
            <div className="mb-6">
              <TextReveal
                text="o necesita un chequeo?"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary-600"
                tag="span"
                delay={0.5}
                stagger={0.04}
              />
            </div>

            {/* Subtitle — benefit-driven, empathetic */}
            <Reveal delay={0.7} blur duration={0.8}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
                Sabemos lo preocupante que es ver a tu compañero mal.{" "}
                <strong className="text-slate-800">
                  Escríbenos por WhatsApp y en menos de 5 minutos
                </strong>{" "}
                un veterinario certificado te orientará. Sin filas, sin esperas.
              </p>
            </Reveal>

            {/* Primary CTA — WhatsApp focused */}
            <Reveal delay={0.9} blur>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <MagneticHover strength={0.15}>
                  <a
                    href="https://wa.me/528445841876?text=Hola%2C%20necesito%20una%20cita%20para%20mi%20mascota.%20%C2%BFTienen%20disponibilidad%20hoy%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 text-base sm:text-lg"
                  >
                    <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                    Agendar cita por WhatsApp ahora
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <a
                    href="tel:+528445841876"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-cream-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-primary-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-base"
                  >
                    📞 Llamar ahora
                  </a>
                </MagneticHover>
              </div>
            </Reveal>

            {/* Micro-trust points */}
            <div className="flex flex-col gap-3">
              {urgencyPoints.map((point, i) => (
                <Reveal
                  key={point.text}
                  delay={1.1 + i * 0.1}
                  direction="left"
                  blur
                >
                  <div className="flex items-center gap-3">
                    <point.icon className="text-primary-500 text-sm flex-shrink-0" />
                    <p className="text-sm text-slate-600">{point.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <Reveal direction="right" delay={0.3} scale blur duration={0.9}>
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
              {/* Main image container */}
              <motion.div
                className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-cream-100 rounded-3xl" />
                <motion.div
                  className="absolute top-8 right-8 w-32 h-32 rounded-full bg-warm-200/30 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <Image
                  src="/image/dog.png"
                  alt="Mascota feliz y saludable atendida en Firo Vet"
                  fill
                  className="object-cover object-center scale-110 hover:scale-[1.15] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent" />
              </motion.div>

              {/* Floating card: Google rating */}
              <FloatingElement
                className="absolute -bottom-4 -left-4 sm:-left-8 z-10 hidden sm:block"
                duration={4}
                distance={10}
              >
                <motion.div
                  className="glass rounded-2xl p-4 shadow-soft-lg"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
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
                      <p className="text-slate-500 text-xs">+340 reseñas en Google</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Floating card: Response time */}
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
                  transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <FaClock className="text-primary-600" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-slate-900 text-sm leading-none">
                        Respuesta
                      </p>
                      <p className="text-slate-500 text-xs">en 5 min o menos</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              <motion.div
                className="absolute -z-10 -inset-4 rounded-[2rem] border-2 border-dashed border-primary-200/30 hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom wave */}
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
