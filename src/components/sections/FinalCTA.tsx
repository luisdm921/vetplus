"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import {
  TextReveal,
  Reveal,
  MagneticHover,
  FloatingElement,
} from "@/components/animations";

const guarantees = [
  "Primera consulta con 20% de descuento",
  "Te respondemos en menos de 5 minutos",
  "Sin filas — llegas directo a tu cita",
  "Seguimiento post-consulta por WhatsApp incluido",
];

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="Agendar cita"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800"
        style={{ scale: bgScale }}
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-warm-500/10 rounded-full blur-3xl"
          animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <Reveal blur>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-200 text-sm font-semibold mb-4">
                🎉 Promo para nuevos pacientes
              </span>
            </Reveal>

            <TextReveal
              text="Tu mascota merece la mejor atención. Agenda ahora."
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
              tag="h2"
              stagger={0.03}
            />

            <Reveal delay={0.3} blur>
              <p className="text-primary-100 text-lg leading-relaxed max-w-2xl mb-8">
                Más de <strong className="text-white">5,000 familias</strong> ya confían en nosotros.
                No sigas buscando — da el paso y agenda tu cita hoy con{" "}
                <strong className="text-white">20% de descuento</strong> en la primera consulta.
              </p>
            </Reveal>

            {/* Guarantees */}
            <Reveal delay={0.5} blur>
              <ul className="space-y-3 mb-10">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-center gap-3 text-primary-100 text-sm">
                    <FaCheckCircle className="text-primary-300 text-sm flex-shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.7} blur>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticHover strength={0.15}>
                  <a
                    href="https://wa.me/528445841876?text=Hola%2C%20quiero%20aprovechar%20el%2020%25%20de%20descuento%20en%20la%20primera%20consulta.%20%C2%BFComo%20puedo%20agendar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg"
                  >
                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                    Agendar con 20% de descuento
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <a
                    href="tel:+528445841876"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-base backdrop-blur-sm"
                  >
                    📞 Llamar ahora
                  </a>
                </MagneticHover>
              </div>
            </Reveal>
          </div>

          {/* Right: Cat image */}
          <Reveal
            direction="right"
            delay={0.2}
            scale
            blur
            className="flex justify-center lg:block"
          >
            <div className="relative flex justify-center">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-white/10 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <FloatingElement duration={5} distance={12}>
                <motion.div
                  className="relative w-44 h-56 sm:w-56 sm:h-72 lg:w-72 lg:h-96 drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Image
                    src="/image/cat.png"
                    alt="Gato saludable y feliz en Firo Vet"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 300px"
                  />
                </motion.div>
              </FloatingElement>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
