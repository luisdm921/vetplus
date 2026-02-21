"use client";

import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaSyringe,
  FaCut,
  FaAmbulance,
  FaAppleAlt,
  FaHeart,
} from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  TiltCard,
  StaggerGrid,
  StaggerGridItem,
  Parallax,
  MorphingBlob,
} from "@/components/animations";

const services = [
  {
    icon: FaStethoscope,
    title: "Consulta General",
    description:
      "Diagnóstico integral con equipo de última generación. Evaluamos a tu mascota de forma completa para detectar cualquier problema a tiempo.",
    features: [
      "Examen clínico completo",
      "Diagnóstico temprano",
      "Plan de salud personalizado",
    ],
    accent: "primary" as const,
  },
  {
    icon: FaSyringe,
    title: "Vacunación",
    description:
      "Protección completa con esquemas actualizados. Mantenemos a tu mascota protegida contra las enfermedades más comunes.",
    features: [
      "Esquemas personalizados",
      "Vacunas premium",
      "Calendario de recordatorios",
    ],
    accent: "warm" as const,
  },
  {
    icon: FaHeart,
    title: "Cirugía Especializada",
    description:
      "Intervenciones seguras con monitoreo constante y tecnología avanzada. Tu mascota en las manos más experimentadas.",
    features: [
      "Quirófano equipado",
      "Monitoreo continuo",
      "Recuperación supervisada",
    ],
    accent: "primary" as const,
  },
  {
    icon: FaAmbulance,
    title: "Urgencias 24/7",
    description:
      "Atención inmediata cuando más lo necesitas. Nuestro equipo está listo las 24 horas del día, los 7 días de la semana.",
    features: [
      "Respuesta inmediata",
      "Equipo de guardia",
      "Unidad de cuidados intensivos",
    ],
    accent: "warm" as const,
  },
  {
    icon: FaAppleAlt,
    title: "Nutrición Animal",
    description:
      "Planes nutricionales diseñados para cada etapa de vida, raza y condición. Una alimentación correcta es la base de la salud.",
    features: ["Dietas especializadas", "Control de peso", "Suplementación"],
    accent: "primary" as const,
  },
  {
    icon: FaCut,
    title: "Estética & Grooming",
    description:
      "Baño, corte y cuidado estético profesional. Tu mascota saldrá sintiéndose espectacular y llena de energía.",
    features: ["Baño medicado", "Corte de raza", "Limpieza dental"],
    accent: "warm" as const,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-28 bg-cream-50/40 overflow-hidden"
      aria-label="Nuestros servicios"
    >
      {/* Parallax background decorations */}
      <Parallax
        speed={0.15}
        className="absolute top-0 right-0 pointer-events-none"
      >
        <MorphingBlob className="w-80 h-80" color="rgba(13, 148, 136, 0.05)" />
      </Parallax>
      <Parallax
        speed={0.25}
        className="absolute bottom-0 left-0 pointer-events-none"
      >
        <MorphingBlob className="w-64 h-64" color="rgba(245, 158, 11, 0.04)" />
      </Parallax>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-sm font-medium mb-4">
              Servicios Veterinarios
            </span>
          </Reveal>
          <TextReveal
            text="Cuidado completo para cada etapa de vida"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.03}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Desde la primera vacuna hasta los años dorados, ofrecemos atención
              médica integral con la más alta calidad y calidez humana.
            </p>
          </Reveal>
        </div>

        {/* Services grid with 3D tilt cards */}
        <StaggerGrid
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.08}
        >
          {services.map((service) => (
            <StaggerGridItem key={service.title}>
              <TiltCard className="relative h-full" maxTilt={6}>
                <article className="relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-100/80 hover:border-primary-200/50 shadow-soft hover:shadow-soft-xl transition-all duration-300">
                  {/* Icon with spring animation */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${
                      service.accent === "primary"
                        ? "bg-primary-100 text-primary-600"
                        : "bg-warm-100 text-warm-600"
                    }`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      },
                    }}
                  >
                    <service.icon className="text-2xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            service.accent === "primary"
                              ? "bg-primary-400"
                              : "bg-warm-400"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${
                      service.accent === "primary"
                        ? "bg-primary-400"
                        : "bg-warm-400"
                    }`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </article>
              </TiltCard>
            </StaggerGridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
