"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaCalendarCheck,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const SETMORE_URL = "https://luiso762.setmore.com/luis?lang=es";

const CONTACT_CARDS = [
  {
    icon: FaPhoneAlt,
    title: "Llámanos",
    lines: ["+52 844 584 1876", "Urgencias: 24/7"],
    action: "tel:+528445841876",
    actionLabel: "Llamar ahora",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: ["Respuesta en 5 min", "La forma más rápida"],
    action:
      "https://wa.me/528445841876?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita%20con%20ustedes.%20Tienen%20disponibilidad%3F",
    actionLabel: "Escribir ahora",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Ubicación",
    lines: ["Av. de los Animales 234", "Col. Jardines, CDMX"],
    action: "https://maps.google.com/?q=Av+de+los+Animales+234+CDMX",
    actionLabel: "Cómo llegar",
    gradient: "from-warm-500 to-amber-600",
  },
];

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="agendar"
      className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden"
      aria-label="Agendar cita"
    >
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warm-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-primary-300 font-medium text-sm px-4 py-1.5 rounded-full border border-white/10 mb-4">
            <FaCalendarCheck className="text-xs" /> Agenda en Línea
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Tu Mascota Merece{" "}
            <span className="text-primary-400">Atención Hoy</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Selecciona el servicio, elige fecha y hora, y confirma tu cita en
            segundos. ¡Así de fácil!
          </p>
        </div>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "50ms" }}
        >
          {CONTACT_CARDS.map((card, i) => (
            <a
              key={i}
              href={card.action}
              target={card.action.startsWith("http") ? "_blank" : undefined}
              rel={
                card.action.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <card.icon className="text-white text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-slate-400 text-sm">
                  {line}
                </p>
              ))}
              <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium mt-3 group-hover:text-primary-300 transition-colors">
                {card.actionLabel}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        {/* Map + Setmore Widget grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Map / Location */}
          <div
            className={`lg:col-span-2 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="flex-1 min-h-[250px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661610681498!2d-99.16869032396645!3d19.42702024114498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff315204921d%3A0xf818a3f4f0fc1048!2s%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1708547200000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(.9) contrast(.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                  title="Ubicación de Firo Vet"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      Av. de los Animales 234, Col. Jardines
                    </p>
                    <p className="text-slate-400 text-sm">
                      Del. Benito Juárez, CDMX, 03100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Horario</p>
                    <p className="text-slate-400 text-sm">
                      Lun – Vie: 8:00 – 20:00
                    </p>
                    <p className="text-slate-400 text-sm">Sáb: 9:00 – 15:00</p>
                    <p className="text-primary-400 text-sm font-semibold mt-1">
                      Urgencias: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Setmore Booking Widget */}
          <div
            className={`lg:col-span-3 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 pb-3">
                <h3 className="text-2xl font-heading font-bold text-white mb-1">
                  Agenda tu Cita Online
                </h3>
                <p className="text-slate-400 text-sm">
                  Selecciona servicio, fecha y hora. Confirmación instantánea.
                </p>
              </div>
              <div className="w-full" style={{ minHeight: "580px" }}>
                <iframe
                  src={SETMORE_URL}
                  title="Agenda tu cita — Firo Vet"
                  width="100%"
                  height="580"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
