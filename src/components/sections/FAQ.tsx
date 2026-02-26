"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import { Reveal, TextReveal, MagneticHover } from "@/components/animations";

const faqs = [
  {
    question: "¿Cuánto cuesta una consulta general?",
    answer:
      "La consulta general tiene un costo accesible que incluye examen clínico completo. Además, para nuevos pacientes tenemos 20% de descuento en la primera consulta. Escríbenos por WhatsApp para conocer el precio exacto y agendar.",
  },
  {
    question: "¿Atienden urgencias en la madrugada?",
    answer:
      "Sí, atendemos urgencias las 24 horas, los 7 días de la semana, incluyendo madrugadas, fines de semana y días festivos. Solo escríbenos por WhatsApp o llámanos y te indicamos cómo proceder de inmediato.",
  },
  {
    question: "¿Necesito hacer cita o puedo llegar directamente?",
    answer:
      "Recomendamos agendar por WhatsApp para garantizar tu horario y reducir tiempos de espera. Sin embargo, en caso de urgencia puedes llegar directamente y te atendemos lo antes posible.",
  },
  {
    question: "¿Atienden mascotas exóticas (conejos, aves, reptiles)?",
    answer:
      "Sí, contamos con experiencia en aves, conejos, hurones y otras mascotas exóticas. Contáctanos para confirmar disponibilidad del especialista en exóticos.",
  },
  {
    question: "¿Las cirugías son seguras? ¿Qué incluyen?",
    answer:
      "Todas nuestras cirugías incluyen anestesia monitoreada, quirófano equipado, y seguimiento post-operatorio sin costo adicional. Te explicamos todo el procedimiento antes de la intervención para que estés tranquilo/a.",
  },
  {
    question: "¿Ofrecen facilidades de pago?",
    answer:
      "Sí, aceptamos efectivo, tarjeta de débito/crédito, y transferencia. También ofrecemos planes de pago para cirugías y tratamientos más extensos. Pregúntanos por WhatsApp sin compromiso.",
  },
  {
    question: "¿Dónde están ubicados y cómo llego?",
    answer:
      "Estamos en Av. de los Animales 234, Col. Jardines, Del. Benito Juárez, CDMX 03100. Hay estacionamiento disponible y estamos a 5 min del metro. Mándanos un WhatsApp y te compartimos la ubicación exacta en Google Maps.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "bg-white border-primary-200/50 shadow-soft-lg"
          : "bg-white/60 border-slate-100 hover:border-slate-200 shadow-soft"
      }`}
      whileHover={!isOpen ? { y: -2 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-slate-900 text-sm sm:text-base pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center"
        >
          <FaChevronDown className="text-xs" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-500 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="preguntas"
      className="relative py-20 sm:py-28 bg-cream-50/40 overflow-hidden"
      aria-label="Preguntas frecuentes"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal blur>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-sm font-medium mb-4">
              Resolvemos tus dudas
            </span>
          </Reveal>
          <TextReveal
            text="Preguntas que nos hacen todos los días"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            tag="h2"
            delay={0.1}
            stagger={0.03}
          />
          <Reveal delay={0.3} blur>
            <p className="text-slate-500 text-lg leading-relaxed">
              Si tienes otra duda, escríbenos por WhatsApp. Te respondemos en minutos, no en días.
            </p>
          </Reveal>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05} blur>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA after FAQ */}
        <Reveal delay={0.3} blur>
          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">
              ¿No encontraste tu pregunta? Pregúntanos directamente:
            </p>
            <MagneticHover strength={0.12}>
              <a
                href="https://wa.me/528445841876?text=Hola%2C%20tengo%20una%20duda%20sobre%20sus%20servicios%20veterinarios.%20%C2%BFMe%20pueden%20ayudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Preguntar por WhatsApp
              </a>
            </MagneticHover>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
