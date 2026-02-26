"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaClock, FaAmbulance, FaPhoneAlt } from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  MagneticHover,
  MorphingBlob,
} from "@/components/animations";

const steps = [
  {
    step: "1",
    title: "Escríbenos por WhatsApp",
    description: "Cuéntanos qué le pasa a tu mascota. Te respondemos en menos de 5 minutos.",
  },
  {
    step: "2",
    title: "Te orientamos de inmediato",
    description: "Un veterinario te indica si necesita atención urgente o puede esperar a una cita.",
  },
  {
    step: "3",
    title: "Agenda y ven (o te visitamos)",
    description: "Te damos cita el mismo día. En urgencias, nuestro equipo está listo 24/7.",
  },
];

export default function Urgency() {
  return (
    <section
      className="relative py-20 sm:py-28 bg-slate-900 overflow-hidden"
      aria-label="Atención rápida y urgencias"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <MorphingBlob
          className="top-0 left-1/4 w-[500px] h-[300px]"
          color="rgba(13, 148, 136, 0.1)"
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(239,68,68,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Urgency message */}
          <div>
            <Reveal blur>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-semibold mb-4">
                <FaAmbulance className="text-xs" />
                Urgencias 24/7 · Respuesta inmediata
              </span>
            </Reveal>

            <TextReveal
              text="Cada minuto cuenta cuando tu mascota te necesita"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
              tag="h2"
              delay={0.1}
              stagger={0.03}
            />

            <Reveal delay={0.3} blur>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                No te quedes con la duda buscando en Google. Escríbenos y{" "}
                <strong className="text-white">un veterinario real te responde en minutos</strong>,
                no un bot. Si es urgencia, te atendemos de inmediato — incluso a las 3am.
              </p>
            </Reveal>

            <Reveal delay={0.5} blur>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticHover strength={0.15}>
                  <a
                    href="https://wa.me/528445841876?text=Hola%2C%20tengo%20una%20emergencia%20con%20mi%20mascota.%20%C2%BFPueden%20atenderme%20ahora%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 transition-all duration-300 text-base"
                  >
                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                    Emergencia — Escribir ahora
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.15}>
                  <a
                    href="tel:+528445841876"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-base backdrop-blur-sm"
                  >
                    <FaPhoneAlt className="text-sm" />
                    Llamar al consultorio
                  </a>
                </MagneticHover>
              </div>
            </Reveal>
          </div>

          {/* Right: How it works steps */}
          <div className="space-y-6">
            <Reveal blur>
              <p className="font-heading font-bold text-white text-lg mb-2">
                Así de fácil es agendar:
              </p>
            </Reveal>

            {steps.map((item, i) => (
              <Reveal key={item.step} delay={0.2 + i * 0.15} direction="right" blur>
                <motion.div
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] backdrop-blur-sm transition-all duration-300"
                  whileHover={{
                    x: 8,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center flex-shrink-0 font-heading font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}

            <Reveal delay={0.7} blur>
              <div className="flex items-center gap-3 pt-4">
                <FaClock className="text-primary-400 text-sm" />
                <p className="text-slate-400 text-sm">
                  Tiempo promedio de respuesta:{" "}
                  <strong className="text-primary-300">3 minutos</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
