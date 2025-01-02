import React from 'react';
import { Brain, Zap, ShieldCheck, ArrowRight, Play, CheckCircle } from 'lucide-react';

const Badge = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
    {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
    <span className="text-sm text-white/70">{children}</span>
  </div>
);

const Button = ({ children, variant = 'primary', icon: Icon }) => {
  const styles = variant === 'primary' 
    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90"
    : "border border-white/10 text-white/70 hover:bg-white/5";
  
  return (
    <button className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${styles}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

const Card = ({ icon: Icon, title, description, items = [] }) => (
  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
    {items.length > 0 && (
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-white/70">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const features = [
  {
    icon: Zap,
    title: "Emissão Automática",
    description: "Notas fiscais em segundos",
    items: ["Integração hospitalar", "Multi-convênios", "Relatórios"]
  },
  {
    icon: Brain,
    title: "Diagnóstico IA",
    description: "Análise avançada de imagens",
    items: ["98% precisão", "Suporte 24/7", "Detecção precoce"]
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Proteção LGPD",
    items: ["Criptografia", "Backup", "Auditoria"]
  }
];

const Preview = () => (
  <div className="bg-slate-950 min-h-screen">
    <section className="relative pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge icon={Zap}>Sistema Premiado</Badge>
          <h1 className="text-6xl font-bold text-white mt-6 mb-6">
            Notas Fiscais e 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Diagnóstico IA</span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Sistema completo para cirurgiões: automatize suas notas fiscais e
            economize <span className="text-cyan-400">5h por semana</span> em burocracia.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button icon={Play}>Ver Demo</Button>
            <Button variant="secondary">Começar Agora</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Dashboard</h3>
            <p className="text-sm text-white/50">Sistema Integrado</p>
          </div>
          <Button variant="primary">+ Nova Nota</Button>
        </div>
        
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Notas Emitidas", value: "1.234" },
              { label: "Valor Total", value: "R$ 123.456" },
              { label: "Tempo Médio", value: "45s" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Preview;
