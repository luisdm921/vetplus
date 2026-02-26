"use client";

import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaSyringe,
  FaCut,
  FaAmbulance,
  FaAppleAlt,
  FaHeart,
  FaWhatsapp,
  FaArrowRight,
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
    benefit: "Detecta problemas antes de que se agraven",
    description:
      "Un chequeo completo para que sepas exactamente cómo está tu mascota. Incluye examen físico, diagnóstico y plan de tratamiento personalizado.",
    whatsappMsg:
      "Hola%2C%20quiero%20agendar%20una%20consulta%20general%20para%20mi%20mascota.%20%C2%BFTienen%20disponibilidad%20hoy%3F",
    accent: "primary" as const,
  },
  {
    icon: FaSyringe,
    title: "Vacunación",
    benefit: "Protege a tu mascota (y a tu familia)",
    description:
      "Esquemas actualizados con vacunas de alta calidad. Te mandamos recordatorios por WhatsApp para que nunca se te pase una dosis.",
    whatsappMsg:
      "Hola%2C%20necesito%20poner%20al%20dia%20las%20vacunas%20de%20mi%20mascota.%20%C2%BFCuanto%20cuesta%20y%20cuando%20puedo%20ir%3F",
    accent: "warm" as const,
  },
  {
    icon: FaHeart,
    title: "Cirugía Segura",
    benefit: "Quirófano equipado + monitoreo constante",
    description:
      "Esterilizaciones, cirugías de tejidos blandos y más. Incluye anestesia monitoreada y seguimiento post-operatorio sin costo extra.",
    whatsappMsg:
      "Hola%2C%20mi%20mascota%20necesita%20cirugia.%20Quisiera%20informacion%20sobre%20el%20procedimiento%2C%20costos%20y%20cuidados.%20Gracias.",
    accent: "primary" as const,
  },
  {
    icon: FaAmbulance,
    title: "Urgencias 24/7",
    benefit: "Te atendemos incluso a las 3am",
    description:
      "No esperes hasta mañana cuando tu mascota te necesita ahora. Equipo de guardia listo para atenderte las 24 horas, todos los días.",
    whatsappMsg:
      "Hola%2C%20tengo%20una%20emergencia%20con%20mi%20mascota.%20%C2%BFPueden%20atenderme%20ahora%3F",
    accent: "warm" as const,
  },
  {
    icon: FaAppleAlt,
    title: "Nutrición a Medida",
    benefit: "La dieta correcta puede cambiarle la vida",
    description:
      "Planes nutricionales para cada etapa: cachorros, adultos, senior, sobrepeso. Mej ora su energía, pelaje y calidad de vida.",
    whatsappMsg:
      "Hola%2C%20quiero%20una%20asesoria%20nutricional%20para%20mi%20mascota.%20%C2%BFComo%20puedo%20agendar%3F",
    accent: "primary" as const,
  },
  {
    icon: FaCut,
    title: "Estética & Grooming",
    benefit: "Tu mascota limpia, sana y feliz",
    description:
      "Baño, corte, limpieza dental y tratamientos para piel. Más que estética — es salud e higiene para tu compañero.",
    whatsappMsg:
      "Hola%2C%20quiero%20agendar%20un%20ba%C3%B1o%20y%20corte%20para%20mi%20mascota.%20%C2%BFCuanto%20cuesta%20y%20cuando%20tienen%20espacio%3F",
    accent: "warm" as const,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-label="Nuestros servicios"
    >
      <Parallax speed={0.15} className="absolute top-0 right-0 pointer-events-none">
        <MorphingBlob className="w-80 h-80" color="rgba(13, 148, 136, 0.05)" />
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
            text="Todo lo que tu mascota necesita, en un solo lugar"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.03}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Cada servicio está pensado para resolver un problema
              específico. Elige el tuyo y agenda por WhatsApp en segundos.
            </p>
          </Reveal>
        </div>

        {/* Services grid */}
        <StaggerGrid
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.08}
        >
          {services.map((service) => (
            <StaggerGridItem key={service.title}>
              <TiltCard className="relative h-full" maxTilt={6}>
                <article className="relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-100/80 hover:border-primary-200/50 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                      service.accent === "primary"
                        ? "bg-primary-100 text-primary-600"
                        : "bg-warm-100 text-warm-600"
                    }`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    <service.icon className="text-2xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>

                  {/* Benefit line — the key differentiator */}
                  <p className={`text-sm font-semibold mb-3 ${
                    service.accent === "primary" ? "text-primary-600" : "text-warm-600"
                  }`}>
                    {service.benefit}
                  </p>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* WhatsApp CTA per service */}
                  <a
                    href={`https://wa.me/528445841876?text=${service.whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    <FaWhatsapp className="text-base" />
                    Agendar este servicio
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </a>

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
