"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { FaPaw, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { MagneticHover, ScrollProgress } from "@/components/animations";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#sobre-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  /* Hide on scroll down, show on scroll up */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > 400 && latest > prev) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <motion.header
        animate={{ y: hidden && !mobileOpen ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glass background */}
        <motion.div
          className="absolute inset-0 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm"
          style={{ opacity: bgOpacity }}
          aria-hidden="true"
        />

        <nav
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Navegación principal"
        >
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <motion.div
                className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                <FaPaw className="text-base" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-slate-900 leading-none">
                  Firo Vet
                </span>
                <span
                  className={`text-[10px] leading-none mt-0.5 transition-colors ${scrolled ? "text-slate-400" : "text-slate-500"}`}
                >
                  Cuidado Animal con Corazón
                </span>
              </div>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? "text-slate-600 hover:text-primary-700"
                      : "text-slate-600 hover:text-primary-700"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <MagneticHover strength={0.15}>
                <motion.a
                  href="https://wa.me/528445841876?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita%20con%20ustedes.%20Tienen%20disponibilidad%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl shadow-sm shadow-primary-500/20 transition-all duration-300"
                  whileHover={{
                    backgroundColor: "#0f766e",
                    boxShadow: "0 8px 24px rgba(13,148,136,0.3)",
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <FaWhatsapp className="text-base" />
                  Agendar Cita
                </motion.a>
              </MagneticHover>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? (
                    <FaTimes className="text-lg" />
                  ) : (
                    <FaBars className="text-lg" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-100"
            >
              <nav className="flex flex-col p-6 gap-1" aria-label="Menú móvil">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 hover:text-primary-700 hover:bg-primary-50 font-medium text-base transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  className="mt-4 pt-4 border-t border-slate-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="https://wa.me/528445841876?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita%20con%20ustedes.%20Tienen%20disponibilidad%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl text-base transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    Agendar Cita por WhatsApp
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
