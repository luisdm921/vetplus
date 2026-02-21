"use client";

import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaShieldAlt,
  FaDog,
  FaHandHoldingHeart,
  FaLeaf,
  FaClipboardCheck,
} from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  TiltCard,
  StaggerGrid,
  StaggerGridItem,
  Parallax,
} from "@/components/animations";

const reasons = [
  {
    icon: FaMicroscope,
    title: "Diagnóstico Preciso",
    description:
      "Tecnología de última generación para resultados rápidos y confiables. Laboratorio propio con análisis en minutos.",
  },
  {
    icon: FaShieldAlt,
    title: "Seguridad Garantizada",
    description:
      "Protocolos estrictos de bioseguridad y equipos esterilizados en cada procedimiento. Tu mascota siempre protegida.",
  },
  {
    icon: FaDog,
    title: "Ambiente Amigable",
    description:
      "Instalaciones diseñadas para reducir el estrés. Áreas separadas para perros y gatos, con música relajante.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Precios Justos",
    description:
      "Transparencia total en costos. Ofrecemos planes de pago y paquetes preventivos para cuidar tu bolsillo.",
  },
  {
    icon: FaLeaf,
    title: "Medicina Integrativa",
    description:
      "Combinamos medicina convencional con terapias complementarias como acupuntura y fitoterapia veterinaria.",
  },
  {
    icon: FaClipboardCheck,
    title: "Seguimiento Post-Consulta",
    description:
      "No te dejamos solo después de la consulta. Seguimiento por WhatsApp y llamadas de control incluidas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="nosotros"
      className="relative py-20 sm:py-28 bg-slate-900 overflow-hidden"
      aria-label="Por qué elegirnos"
    >
      {/* Animated background accents with parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Parallax
          speed={0.2}
          className="absolute top-0 left-1/2 -translate-x-1/2"
        >
          <div className="w-[800px] h-[400px] bg-primary-800/20 rounded-full blur-3xl" />
        </Parallax>
        <Parallax speed={0.3} className="absolute bottom-0 right-0">
          <div className="w-64 h-64 bg-warm-600/10 rounded-full blur-3xl" />
        </Parallax>
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)",
          }}
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)",
              "radial-gradient(ellipse at 80% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)",
              "radial-gradient(ellipse at 20% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-primary-300 text-sm font-medium mb-4">
              La Diferencia Firo Vet
            </span>
          </Reveal>
          <TextReveal
            text="¿Por qué las familias nos eligen?"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.03}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-400 text-lg leading-relaxed">
              Más que una clínica veterinaria, somos un equipo comprometido con
              la vida y el bienestar de tu compañero.
            </p>
          </Reveal>
        </div>

        {/* Reasons grid with 3D tilt + glassmorphism */}
        <StaggerGrid
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.08}
        >
          {reasons.map((reason) => (
            <StaggerGridItem key={reason.title}>
              <TiltCard className="relative h-full" maxTilt={8} glare>
                <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-primary-500/20 backdrop-blur-sm transition-all duration-300">
                  {/* Icon with spring hover */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 mb-5"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      backgroundColor: "rgba(13, 148, 136, 0.2)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      },
                    }}
                  >
                    <reason.icon className="text-xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl bg-primary-500/5" />
                </div>
              </TiltCard>
            </StaggerGridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
