"use client";

import { motion } from "framer-motion";
import { FaPaw, FaUserMd, FaClock, FaStar } from "react-icons/fa";
import {
  AnimatedCounter,
  StaggerGrid,
  StaggerGridItem,
  Parallax,
} from "@/components/animations";

const metrics = [
  {
    icon: FaPaw,
    value: 5000,
    suffix: "+",
    label: "Mascotas atendidas",
    description: "Familias que confían en nosotros",
    color: "primary" as const,
  },
  {
    icon: FaUserMd,
    value: 10,
    suffix: "+",
    label: "Años de experiencia",
    description: "Dedicación profesional continua",
    color: "warm" as const,
  },
  {
    icon: FaClock,
    value: 24,
    suffix: "/7",
    label: "Urgencias disponibles",
    description: "Siempre listos cuando nos necesitas",
    color: "primary" as const,
  },
  {
    icon: FaStar,
    value: 99,
    suffix: "%",
    label: "Familias satisfechas",
    description: "Nuestra mejor recomendación",
    color: "warm" as const,
  },
];

export default function TrustMetrics() {
  return (
    <section
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-label="Métricas de confianza"
    >
      {/* Subtle parallax decoration */}
      <Parallax
        speed={0.2}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
      >
        <div className="w-full h-full bg-primary-50/30 rounded-full blur-3xl" />
      </Parallax>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGrid
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          stagger={0.1}
        >
          {metrics.map((metric) => (
            <StaggerGridItem key={metric.label}>
              <motion.div
                className="group relative text-center p-6 sm:p-8 rounded-3xl bg-cream-50/60 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-soft-lg transition-all duration-300"
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {/* Icon with spring hover */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    metric.color === "primary"
                      ? "bg-primary-100 text-primary-600"
                      : "bg-warm-100 text-warm-600"
                  }`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  <metric.icon className="text-2xl" />
                </motion.div>

                {/* Animated counter with spring physics */}
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    duration={2.5}
                  />
                </p>

                {/* Label */}
                <p className="font-heading font-semibold text-slate-700 text-sm sm:text-base mb-1">
                  {metric.label}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm">
                  {metric.description}
                </p>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${
                    metric.color === "primary"
                      ? "bg-primary-100/40"
                      : "bg-warm-100/40"
                  }`}
                />
              </motion.div>
            </StaggerGridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
