"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tooltip) {
      const timer = setTimeout(() => setTooltip(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [tooltip]);

  const whatsappUrl =
    "https://wa.me/528445841876?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20servicios%20veterinarios.%20Podrian%20ayudarme%3F";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-soft-lg border border-slate-100 max-w-[220px]"
              >
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-300 transition-colors"
                  aria-label="Cerrar tooltip"
                >
                  <FaTimes className="text-[8px]" />
                </button>
                <span className="text-sm text-slate-700 leading-snug">
                  ¿Tu mascota necesita atención?{" "}
                  <span className="font-semibold text-primary-600">
                    ¡Escríbenos!
                  </span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105"
          >
            <FaWhatsapp className="text-2xl sm:text-3xl" />
            {/* Ping */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5">
              <span className="absolute inset-0 rounded-full bg-warm-400 animate-ping opacity-75" />
              <span className="absolute inset-0 rounded-full bg-warm-400" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
