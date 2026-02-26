"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  StaggerGrid,
  StaggerGridItem,
  MorphingBlob,
} from "@/components/animations";

const problems = [
  {
    problem: "Mi mascota dejó de comer y está decaída",
    solution:
      "Puede ser desde una infección hasta algo más grave. Con nuestro diagnóstico rápido en consultorio, identificamos la causa en la primera visita y te damos un plan de acción claro.",
    whatsappMsg:
      "Hola%2C%20mi%20mascota%20dejo%20de%20comer%20y%20esta%20muy%20decaida.%20Necesito%20una%20consulta%20urgente.%20%C2%BFTienen%20disponibilidad%20hoy%3F",
    emoji: "😟",
  },
  {
    problem: "Tiene vómito o diarrea y no sé qué hacer",
    solution:
      "No esperes a que empeore. El vómito persistente puede causar deshidratación severa en horas. Atendemos urgencias 24/7 — escríbenos y te orientamos de inmediato.",
    whatsappMsg:
      "Hola%2C%20mi%20mascota%20tiene%20vomito%20y%20diarrea.%20%C2%BFPueden%20atenderme%20hoy%20de%20urgencia%3F",
    emoji: "🤢",
  },
  {
    problem: "No sé si sus vacunas están al día",
    solution:
      "Un esquema de vacunación incompleto pone en riesgo a tu mascota y a tu familia. Te creamos un calendario personalizado y te mandamos recordatorios por WhatsApp.",
    whatsappMsg:
      "Hola%2C%20necesito%20revisar%20el%20esquema%20de%20vacunacion%20de%20mi%20mascota.%20%C2%BFPueden%20agendar%20una%20cita%3F",
    emoji: "💉",
  },
  {
    problem: "Necesita una cirugía y me da miedo",
    solution:
      "Entendemos tu preocupación. Usamos anestesia monitoreada, quirófano equipado y seguimiento post-operatorio incluido. Tu mascota estará en las manos más seguras.",
    whatsappMsg:
      "Hola%2C%20mi%20mascota%20necesita%20cirugia%20y%20quisiera%20informacion%20sobre%20el%20procedimiento%20y%20costos.%20Gracias.",
    emoji: "🏥",
  },
];

export default function ProblemsAndSolutions() {
  return (
    <section
      id="problemas"
      className="relative py-20 sm:py-28 bg-cream-50/40 overflow-hidden"
      aria-label="Problemas comunes y soluciones"
    >
      <MorphingBlob
        className="top-20 -right-20 w-72 h-72"
        color="rgba(245, 158, 11, 0.04)"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-50 border border-warm-200/50 text-warm-700 text-sm font-medium mb-4">
              <FaExclamationTriangle className="text-xs" />
              ¿Te identificas con alguno?
            </span>
          </Reveal>
          <TextReveal
            text="Sabemos lo que estás pasando"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.03}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Estos son los problemas más comunes que resolvemos cada día. Si te
              identificas con alguno, <strong className="text-slate-700">no esperes más</strong>.
            </p>
          </Reveal>
        </div>

        {/* Problems grid */}
        <StaggerGrid
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
          stagger={0.1}
        >
          {problems.map((item) => (
            <StaggerGridItem key={item.problem}>
              <motion.div
                className="group relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary-200/50 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {/* Problem */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                    &ldquo;{item.problem}&rdquo;
                  </h3>
                </div>

                {/* Solution */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.solution}
                </p>

                {/* WhatsApp CTA for this problem */}
                <a
                  href={`https://wa.me/528445841876?text=${item.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
                >
                  <FaWhatsapp className="text-base" />
                  Quiero que revisen a mi mascota
                  <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </StaggerGridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
