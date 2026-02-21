import {
  FaPaw,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#sobre-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
  "Consulta General",
  "Vacunación",
  "Cirugía",
  "Urgencias 24/7",
  "Nutrición Animal",
  "Estética & Grooming",
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/FiroVet",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/firovet",
    label: "Instagram",
  },
  { icon: FaTiktok, href: "https://www.tiktok.com/@firovet", label: "TikTok" },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/528445841876",
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center">
                <FaPaw className="text-base" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                Firo Vet
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Cuidado veterinario de excelencia con amor, tecnología y un equipo
              comprometido con la vida de tu mascota.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+528445841876"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-primary-400 text-sm transition-colors"
                >
                  <FaPhoneAlt className="text-xs flex-shrink-0" />
                  +52 844 584 1876
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@firovet.com"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-primary-400 text-sm transition-colors"
                >
                  <FaEnvelope className="text-xs flex-shrink-0" />
                  contacto@firovet.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <FaMapMarkerAlt className="text-xs flex-shrink-0 mt-1" />
                <span>
                  Av. de los Animales 234,
                  <br />
                  Col. Jardines, CDMX 03100
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} Firo Vet. Todos los derechos
              reservados.
            </p>
            <p className="text-slate-600 text-xs italic">
              En memoria de Firo — por siempre en nuestros corazones 🐾
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
