import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Zap,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
} from "lucide-react";
import { architectureModels } from "@/lib/data";

export default function ArchitectureExplorer() {
  const [selectedModelId, setSelectedModelId] = useState("linux-kernel");
  const currentModel =
    architectureModels.find((m) => m.id === selectedModelId) ||
    architectureModels[0];

  const getIcon = (id) => {
    switch (id) {
      case "linux-kernel":
        return Terminal;
      case "freertos-stack":
        return Zap;
      case "baremetal-bus":
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <div className="w-full">
      {/* Model Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface border border-border mb-8">
        {architectureModels.map((model) => {
          const Icon = getIcon(model.id);
          const active = model.id === selectedModelId;

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setSelectedModelId(model.id)}
              className={`w-full sm:flex-1 sm:min-w-[200px] flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-xs font-mono font-medium transition-all ${
                active
                  ? "bg-card text-foreground border border-primary/40 shadow-hardware"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-surface text-muted-foreground border border-border"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="text-left truncate">
                <div
                  className={`font-semibold truncate ${
                    active ? "text-primary" : "text-foreground"
                  }`}
                >
                  {model.title}
                </div>
                <div className="text-[10px] text-muted-foreground truncate">
                  {model.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Architecture Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentModel.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="hw-card p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Subtle PCB dot pattern background */}
          <div
            className="absolute inset-0 bg-pcb-grid opacity-25 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="register-badge">ARCH_SPEC // v6.x</span>
                  <span className="font-mono text-xs text-primary font-semibold">
                    {currentModel.subtitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  {currentModel.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                {currentModel.description}
              </p>
            </div>

            {/* Architecture Vertical Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {currentModel.nodes.map((node, index) => (
                <div
                  key={node.layer}
                  className={`relative rounded-xl border p-4 flex flex-col justify-between ${node.accent} transition-all duration-300 hover:border-primary/60`}
                >
                  {/* Layer Header */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                        LEVEL {index + 1}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border text-muted-foreground">
                        {node.tag}
                      </span>
                    </div>

                    <h4 className="font-mono text-xs font-bold text-foreground mb-3 pb-2 border-b border-border/50">
                      {node.layer}
                    </h4>

                    {/* Node Items */}
                    <div className="space-y-3">
                      {node.items.map((item) => (
                        <div
                          key={item.name}
                          className="p-2.5 rounded-lg bg-card/80 border border-border/70 text-xs"
                        >
                          <div className="font-mono font-semibold text-foreground flex items-center gap-1.5 mb-1 text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow arrow indicator */}
                  {index < currentModel.nodes.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-card border border-border items-center justify-center text-primary shadow-sm">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hardware Execution Note */}
            <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Deterministic Execution &bull; Zero Polling Overhead</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px]">ARM ABI Compliant</span>
                <span className="text-border">|</span>
                <span className="text-[11px] text-primary">MISRA C Aligned</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
