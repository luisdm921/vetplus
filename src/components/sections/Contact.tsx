"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
} from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  MagneticHover,
  TiltCard,
} from "@/components/animations";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-label="Ubicación y contacto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-sm font-medium mb-4">
              <FaMapMarkerAlt className="text-xs" />
              Ubicación & Contacto
            </span>
          </Reveal>
          <TextReveal
            text="Encuéntranos fácilmente"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.04}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Estamos en una zona céntrica con fácil acceso y estacionamiento.
              Escríbenos para que te compartamos la ubicación exacta.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Map */}
          <Reveal direction="left" blur>
            <div className="relative w-full h-full min-h-[350px] rounded-3xl overflow-hidden border border-slate-200 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661610681498!2d-99.16869032396645!3d19.42702024114498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff315204921d%3A0xf818a3f4f0fc1048!2s%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1708547200000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Firo Vet"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </Reveal>

          {/* Right: Info cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <Reveal delay={0.1} blur>
              <motion.div
                className="p-6 rounded-2xl bg-cream-50/60 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-slate-900 text-sm mb-1">
                      Dirección
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Av. de los Animales 234, Col. Jardines,
                      <br />
                      Del. Benito Juárez, CDMX, 03100
                    </p>
                    <a
                      href="https://maps.google.com/?q=Av+de+los+Animales+234+CDMX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary-600 text-xs font-semibold mt-2 hover:text-primary-700 transition-colors"
                    >
                      <FaDirections className="text-xs" />
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={0.2} blur>
              <motion.div
                className="p-6 rounded-2xl bg-cream-50/60 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-warm-100 text-warm-600 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-lg" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-slate-900 text-sm mb-1">
                      Horarios
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Lunes a Viernes: 8:00 – 20:00
                      <br />
                      Sábados: 9:00 – 15:00
                    </p>
                    <p className="text-primary-600 text-sm font-semibold mt-1">
                      Urgencias: 24/7 — Siempre abiertos
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* Quick contact — WhatsApp primary */}
            <Reveal delay={0.3} blur>
              <motion.div
                className="p-6 rounded-2xl bg-cream-50/60 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-slate-900 text-sm mb-1">
                      WhatsApp (la forma más rápida)
                    </p>
                    <p className="text-slate-500 text-sm">+52 844 584 1876</p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      Respuesta promedio: 3 minutos
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* Phone fallback */}
            <Reveal delay={0.35} blur>
              <a
                href="tel:+528445841876"
                className="flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:text-primary-600 transition-colors text-sm"
              >
                <FaPhoneAlt className="text-xs" />
                ¿Prefieres llamar? +52 844 584 1876
              </a>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.4} blur>
              <TiltCard className="relative" maxTilt={5}>
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden shadow-lg">
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <h3 className="font-heading text-lg font-bold mb-2">
                      ¿Listo para agendar?
                    </h3>
                    <p className="text-primary-100 text-sm mb-4 leading-relaxed">
                      Primera consulta con 20% de descuento para nuevos pacientes.
                    </p>
                    <MagneticHover strength={0.12}>
                      <a
                        href="https://wa.me/528445841876?text=Hola%2C%20quiero%20agendar%20una%20cita.%20Vi%20que%20tienen%2020%25%20de%20descuento%20en%20la%20primera%20consulta.%20%C2%BFComo%20procedo%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                      >
                        <FaWhatsapp className="text-lg" />
                        Agendar cita por WhatsApp
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
