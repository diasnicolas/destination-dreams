import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Waves } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para converter o valor de travelers para número
  const parseTravelersValue = (value: string) => {
    if (value === "4+") {
      return 4; // ou o valor que a API espera para "4 ou mais"
    }
    return parseInt(value, 10) || 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.travelers) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar o corpo da requisição conforme especificado
      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        travelers: parseTravelersValue(formData.travelers) // Convertendo para número
      };

      console.log("Enviando dados:", requestBody); // Para debug

      // Fazer a requisição POST com os headers corretos
      const response = await fetch("https://wetraveluk.com.br/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer kRPXbr9REX04TIHDj7xj6v8TmJugoeFOyvFwwJ2oxfwy6u6COXiybV94plWK4gUbJjEE1AyCJK8mUTrFxpcU7ZkoyVm9f05SSg6ghy2fmmKI5",
          "origin": "https://wetraveluk.com.br"
        },
        body: JSON.stringify(requestBody)
      });

      console.log("Resposta da API:", {
        status: response.status,
        ok: response.ok
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log("Dados da resposta:", data);
      
      // Verificar se a resposta foi bem sucedida
      if (data.success || response.ok) {
        toast.success("Sua solicitação foi enviada! Em breve entraremos em contato.");
        setFormData({ name: "", email: "", phone: "", travelers: "" });
      } else {
        toast.error("Houve um problema ao enviar sua solicitação. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario" className="py-20 md:py-32 w-full bg-gradient-to-b from-ocean-deep via-ocean-medium to-ocean-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-turquoise/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-turquoise/10 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl" />
      </div>

      {/* Floating waves */}
      <motion.div
        animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-turquoise/10"
      >
        <Waves className="w-32 h-32" />
      </motion.div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Send className="w-7 h-7 text-primary" />
            </div>
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
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6 border border-turquoise/20"
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              className="btn-luxury w-full rounded-md text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Quero saber mais
                </>
              )}
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