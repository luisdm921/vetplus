"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeartbeat, FaAward, FaPaw, FaUsers } from "react-icons/fa";
import {
  Reveal,
  TextReveal,
  Parallax,
  StaggerGrid,
  StaggerGridItem,
  MorphingBlob,
} from "@/components/animations";

const highlights = [
  {
    icon: FaHeartbeat,
    title: "Atención con Amor",
    description:
      "Cada paciente recibe un trato cálido, personalizado y lleno de cariño genuino.",
  },
  {
    icon: FaAward,
    title: "Equipo Certificado",
    description:
      "Veterinarios egresados de la UNAM, UAM e IPN con formación continua.",
  },
  {
    icon: FaPaw,
    title: "Todas las Especies",
    description:
      "Atendemos perros, gatos, aves, conejos y mascotas exóticas con experiencia.",
  },
  {
    icon: FaUsers,
    title: "Comunidad Firo",
    description:
      "Más de 5,000 familias confían en nosotros. Tú y tu mascota ya son parte.",
  },
];

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
      aria-label="Sobre nosotros"
    >
      {/* Background morphing blob */}
      <MorphingBlob
        className="top-1/4 -right-20 w-[400px] h-[400px]"
        color="rgba(13, 148, 136, 0.03)"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image placeholder with parallax decorations */}
          <Reveal direction="left" blur scale>
            <div className="relative">
              <motion.div
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src="/image/vet.jpg"
                  alt="Dra. María López y el equipo veterinario de Firo Vet"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-transparent" />
                {/* Name overlay at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="glass rounded-2xl px-5 py-3 inline-flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-soft" />
                    <div>
                      <p className="font-heading font-bold text-slate-900 text-sm leading-none">
                        Dra. María López
                      </p>
                      <p className="text-slate-500 text-xs">
                        MVZ · +10 años de experiencia
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* Parallax decorative accents */}
              <Parallax
                speed={0.3}
                className="absolute -bottom-4 -right-4 -z-10"
              >
                <div className="w-32 h-32 rounded-2xl bg-warm-100/60" />
              </Parallax>
              <Parallax speed={0.2} className="absolute -top-4 -left-4 -z-10">
                <div className="w-24 h-24 rounded-2xl bg-primary-100/60" />
              </Parallax>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <Reveal blur>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-sm font-medium mb-4">
                Sobre Firo Vet
              </span>
            </Reveal>

            <TextReveal
              text="Más que veterinarios, somos familia"
              className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight"
              tag="h2"
              delay={0.1}
              stagger={0.04}
            />

            <Reveal delay={0.3} blur>
              <p className="text-slate-500 text-lg leading-relaxed mb-4">
                <strong className="text-slate-700">Firo Vet</strong> nació del
                amor por los animales y la vocación de la{" "}
                <strong className="text-slate-700">Dra. María López</strong>,
                Médica Veterinaria Zootecnista con más de 10 años dedicados a
                brindar la mejor atención integral a cada paciente.
              </p>
            </Reveal>

            <Reveal delay={0.4} blur>
              <p className="text-slate-500 leading-relaxed mb-8">
                Nuestro nombre honra a <em>Firo</em>, el compañero que inspiró
                esta misión. Cada mascota que atendemos recibe el mismo cuidado
                que le daríamos a la nuestra: con ciencia, tecnología y mucho
                corazón.
              </p>
            </Reveal>

            {/* Highlights with 3D spring hover */}
            <StaggerGrid className="grid sm:grid-cols-2 gap-4" stagger={0.08}>
              {highlights.map((h) => (
                <StaggerGridItem key={h.title}>
                  <motion.div
                    className="group flex items-start gap-3 p-4 rounded-2xl hover:bg-cream-50/60 transition-colors duration-300"
                    whileHover={{
                      x: 4,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      }}
                    >
                      <h.icon className="text-lg" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-sm mb-0.5">
                        {h.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerGridItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
