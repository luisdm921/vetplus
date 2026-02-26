"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  Marquee,
  MorphingBlob,
  MagneticHover,
} from "@/components/animations";

const testimonials = [
  {
    name: "Andrea Martínez",
    pet: "Max — Golden Retriever",
    rating: 5,
    text: "Desde que encontramos Firo Vet, Max recibe el mejor cuidado posible. La Dra. María siempre nos explica todo con paciencia y cariño. ¡Totalmente recomendados!",
    initial: "AM",
  },
  {
    name: "Carlos Ramírez",
    pet: "Luna — Gata Persa",
    rating: 5,
    text: "Luna le tenía miedo a los veterinarios hasta que conoció al equipo de Firo Vet. El ambiente es increíblemente tranquilo y profesional. Es otro nivel.",
    initial: "CR",
  },
  {
    name: "Familia Gutiérrez",
    pet: "Rocky & Coco",
    rating: 5,
    text: "Tenemos dos perritos y siempre nos atienden con la misma dedicación a ambos. Los precios son justos y el seguimiento post-consulta es excelente.",
    initial: "FG",
  },
  {
    name: "Sofía Hernández",
    pet: "Michi — Gato Siamés",
    rating: 5,
    text: "Llevé a Michi de emergencia a las 2am y nos atendieron de inmediato. Le salvaron la vida. Eternamente agradecida con todo el equipo.",
    initial: "SH",
  },
  {
    name: "Diego López",
    pet: "Thor — Bulldog Francés",
    rating: 5,
    text: "El servicio de grooming es espectacular. Thor sale como nuevo cada vez. Además, el plan nutricional que nos dieron ha mejorado muchísimo su salud.",
    initial: "DL",
  },
  {
    name: "María Fernanda V.",
    pet: "Pelusa — Coneja",
    rating: 5,
    text: "Es difícil encontrar veterinarios que atiendan conejos con verdadera experiencia. En Firo Vet tratan a Pelusa con un cuidado increíble. Los mejores.",
    initial: "MF",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar key={i} className="text-warm-400 text-sm" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <motion.blockquote
      className="relative flex flex-col w-[340px] sm:w-[380px] flex-shrink-0 p-6 sm:p-8 rounded-3xl bg-cream-50/50 hover:bg-white border border-slate-100/60 hover:border-primary-200/40 shadow-soft hover:shadow-soft-lg transition-all duration-300"
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Quote icon */}
      <FaQuoteLeft className="text-2xl text-primary-200 mb-4" />

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Rating */}
      <StarRating rating={t.rating} />

      {/* Author */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
        <motion.div
          className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          {t.initial}
        </motion.div>
        <div>
          <p className="font-heading font-semibold text-slate-900 text-sm">
            {t.name}
          </p>
          <p className="text-slate-400 text-xs">{t.pet}</p>
        </div>
      </div>
    </motion.blockquote>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-label="Testimonios"
    >
      {/* Background blobs */}
      <MorphingBlob
        className="top-20 -left-20 w-72 h-72"
        color="rgba(13, 148, 136, 0.04)"
      />
      <MorphingBlob
        className="bottom-20 -right-20 w-72 h-72"
        color="rgba(245, 158, 11, 0.04)"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-50 border border-warm-200/50 text-warm-700 text-sm font-medium mb-4">
              Testimonios Reales
            </span>
          </Reveal>
          <TextReveal
            text="+340 familias nos dan 4.9 estrellas. Esto es lo que dicen:"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.03}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Historias reales de dueños que eligieron Firo Vet para sus
              mascotas. Lee por qué siguen viniendo.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Infinite horizontal marquee — full bleed */}
      <Reveal direction="none" blur>
        <Marquee speed={40} pauseOnHover>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </Reveal>

      {/* CTA after social proof */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Reveal blur>
          <div className="text-center">
            <p className="text-slate-600 text-base mb-4 font-medium">
              Únete a las familias que ya confían en nosotros
            </p>
            <MagneticHover strength={0.12}>
              <a
                href="https://wa.me/528445841876?text=Hola%2C%20vi%20las%20rese%C3%B1as%20de%20Firo%20Vet%20y%20me%20gustaria%20agendar%20una%20cita%20para%20mi%20mascota."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-2xl shadow-lg shadow-[#25D366]/25 transition-all duration-300 text-base"
              >
                <FaWhatsapp className="text-xl" />
                Quiero la misma atención para mi mascota
              </a>
            </MagneticHover>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
