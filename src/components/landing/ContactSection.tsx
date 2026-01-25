import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    toast.success("Sua solicitação foi enviada! Em breve entraremos em contato.");
    setFormData({ name: "", email: "", phone: "", travelers: "" });
  };

  return (
    <section id="formulario" className="py-20 md:py-32 section-ocean relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Sua jornada </span>
              <span className="text-gradient-gold">começa aqui</span>
            </h2>
            <p className="text-primary text-lg">
              Preencha o formulário abaixo e um de nossos consultores entrará em contato em até 24 horas
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-luxury"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-luxury"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Telefone (WhatsApp) *
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input-luxury"
              />
            </div>

            {/* Number of Travelers */}
            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-foreground mb-2">
                Quantidade de Viajantes *
              </label>
              <select
                id="travelers"
                required
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                className="input-luxury"
              >
                <option value="">Quantas pessoas viajam?</option>
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4+">4 ou mais pessoas</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-luxury w-full rounded-md text-center"
            >
              Agendar Minha Consulta Privada
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center">
              Suas informações estão seguras. Nunca compartilhamos seus dados com terceiros.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
