import { motion } from "framer-motion";
import { Users, AlertCircle } from "lucide-react";

interface LimitedSpotsIndicatorProps {
  totalSpots?: number;
  remainingSpots?: number;
}

export const LimitedSpotsIndicator = ({ 
  totalSpots = 20, 
  remainingSpots = 7 
}: LimitedSpotsIndicatorProps) => {
  const filledSpots = totalSpots - remainingSpots;
  const percentageFilled = (filledSpots / totalSpots) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
            <AlertCircle className="w-4 h-4 text-destructive" />
          </div>
          <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Vagas Limitadas
          </span>
        </div>
        <span className="text-sm text-primary font-bold">
          {remainingSpots} restantes
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 rounded-full bg-muted/50 overflow-hidden border border-border/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentageFilled}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-gold-light to-primary rounded-full"
        />
        {/* Glow effect */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentageFilled}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-y-0 left-0 bg-primary/30 blur-sm rounded-full"
        />
      </div>

      {/* Spots Visualization */}
      <div className="flex items-center justify-center gap-1 mt-4">
        {Array.from({ length: totalSpots }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.5 + index * 0.03 }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index < filledSpots 
                ? "bg-primary shadow-[0_0_6px_hsl(var(--primary))]" 
                : "bg-muted/30 border border-primary/20"
            }`}
          />
        ))}
      </div>

      {/* Footer Text */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <Users className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          {filledSpots} viajantes já garantiram suas vagas
        </span>
      </div>
    </motion.div>
  );
};
