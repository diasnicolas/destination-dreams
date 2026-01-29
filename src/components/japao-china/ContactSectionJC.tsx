import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export const ContactSectionJC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", travelers: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.travelers) { toast.error("Por favor, preencha todos os campos."); return; }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://wetraveluk.com.br/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer kRPXbr9REX04TIHDj7xj6v8TmJugoeFOyvFwwJ2oxfwy6u6COXiybV94plWK4gUbJjEE1AyCJK8mUTrFxpcU7ZkoyVm9f05SSg6ghy2fmmKI5", "origin": "https://wetraveluk.com.br" },
        body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, travelers: formData.travelers === "4+" ? 4 : parseInt(formData.travelers) })
      });
      if (response.ok) { toast.success("Solicitação enviada! Em breve entraremos em contato."); setFormData({ name: "", email: "", phone: "", travelers: "" }); }
    } catch { toast.error("Erro ao enviar. Tente novamente."); }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 w-full bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Reserve Sua Vaga</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg border border-primary/20">
            <div><label className="block text-sm font-medium mb-2">Nome Completo *</label><Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Seu nome" /></div>
            <div><label className="block text-sm font-medium mb-2">E-mail *</label><Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="seu@email.com" /></div>
            <div><label className="block text-sm font-medium mb-2">Telefone/WhatsApp *</label><Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required placeholder="(00) 00000-0000" /></div>
            <div><label className="block text-sm font-medium mb-2">Número de viajantes *</label><select value={formData.travelers} onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} required className="w-full p-3 rounded-md border border-input bg-background"><option value="">Selecione...</option><option value="1">1 pessoa</option><option value="2">2 pessoas</option><option value="3">3 pessoas</option><option value="4+">4 ou mais</option></select></div>
            <Button type="submit" disabled={isSubmitting} className="w-full text-lg py-6">{isSubmitting ? "Enviando..." : <><Send className="w-5 h-5 mr-2" />Enviar Solicitação</>}</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
