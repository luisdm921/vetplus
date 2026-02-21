"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  StaggerGrid,
  StaggerGridItem,
  TiltCard,
  MagneticHover,
} from "@/components/animations";

const contactMethods = [
  {
    icon: FaPhoneAlt,
    label: "Teléfono",
    value: "+52 844 584 1876",
    href: "tel:+528445841876",
    description: "Llámanos directamente",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+52 844 584 1876",
    href: "https://wa.me/528445841876?text=Hola%2C%20me%20interesa%20agendar%20una%20cita.%20Podrian%20indicarme%20disponibilidad%20y%20costos%3F",
    description: "Respuesta en minutos",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contacto@firovet.com",
    href: "mailto:contacto@firovet.com",
    description: "Para consultas detalladas",
  },
  {
    icon: FaClock,
    label: "Urgencias 24/7",
    value: "+52 844 584 1876",
    href: "tel:+528445841876",
    description: "Línea de emergencia",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 bg-cream-50/40 overflow-hidden"
      aria-label="Contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-sm font-medium mb-4">
              Contacto
            </span>
          </Reveal>
          <TextReveal
            text="Estamos listos para atenderte"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.04}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Agenda tu cita en segundos o contáctanos por el medio que
              prefieras. Siempre respondemos rápido.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact methods + info */}
          <div>
            <StaggerGrid
              className="grid sm:grid-cols-2 gap-4 mb-10"
              stagger={0.08}
            >
              {contactMethods.map((method) => (
                <StaggerGridItem key={method.label}>
                  <motion.a
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white hover:bg-primary-50/50 border border-slate-100 hover:border-primary-200/50 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                    whileHover={{
                      y: -4,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      }}
                    >
                      <method.icon className="text-lg" />
                    </motion.div>
                    <div>
                      <p className="font-heading font-semibold text-slate-900 text-sm">
                        {method.label}
                      </p>
                      <p className="text-primary-600 text-sm font-medium">
                        {method.value}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                </StaggerGridItem>
              ))}
            </StaggerGrid>

            {/* Address & Hours */}
            <Reveal delay={0.2} blur>
              <motion.div
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-soft"
                whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <FaMapMarkerAlt className="text-primary-500 text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-slate-900 text-sm">
                      Dirección
                    </p>
                    <p className="text-slate-500 text-sm">
                      Av. de los Animales 234, Col. Jardines,
                      <br />
                      Del. Benito Juárez, CDMX, 03100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-500 text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-slate-900 text-sm">
                      Horarios
                    </p>
                    <p className="text-slate-500 text-sm">
                      Lunes a Viernes: 8:00 – 20:00
                      <br />
                      Sábados: 9:00 – 15:00
                      <br />
                      <span className="text-primary-600 font-medium">
                        Urgencias: 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Right: Map + CTA */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <Reveal direction="right" blur className="flex-1">
              <div className="relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden border border-slate-200 shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661610681498!2d-99.16869032396645!3d19.42702024114498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff315204921d%3A0xf818a3f4f0fc1048!2s%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1708547200000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación - Ángel de la Independencia"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </Reveal>

            {/* CTA Card with tilt */}
            <Reveal direction="right" delay={0.15} blur>
              <TiltCard className="relative" maxTilt={5}>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden shadow-lg">
                  {/* Decorative */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <h3 className="font-heading text-xl font-bold mb-2">
                      Primera consulta con 20% de descuento
                    </h3>
                    <p className="text-primary-100 text-sm mb-6 leading-relaxed">
                      Agenda hoy y aprovecha esta promoción especial para nuevos
                      pacientes. Tu mascota merece la mejor atención.
                    </p>
                    <MagneticHover strength={0.12}>
                      <a
                        href="https://wa.me/528445841876?text=Hola%2C%20vi%20la%20promocion%20del%2020%25%20de%20descuento%20en%20primera%20consulta%20y%20me%20gustaria%20aprovecharla.%20Como%20puedo%20agendar%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                      >
                        <FaWhatsapp className="text-lg" />
                        Agendar con Descuento
                      </a>
                    </MagneticHover>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
