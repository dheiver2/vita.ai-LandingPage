import React, { useState } from 'react';
import { Brain, Zap, ShieldCheck, ArrowRight, Play, CheckCircle } from 'lucide-react';

// Componentes reutilizáveis
const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const Badge = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
    {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
    <span className="text-sm text-white/70">{children}</span>
  </div>
);

const Button = ({ children, variant = 'primary', icon: Icon, className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-full flex items-center gap-2 transition-all";
  const variants = {
    primary: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90",
    secondary: "border border-white/10 text-white/70 hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

const Card = ({ icon: Icon, title, description, items = [] }) => (
  <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
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

// Dados mockados para reutilização
const features = [
  {
    icon: Zap,
    title: "Emissão Automática",
    description: "Notas fiscais em segundos após cirurgias",
    items: [
      "Integração com hospitais",
      "Multi-convênios",
      "Relatórios automáticos"
    ]
  },
  {
    icon: Brain,
    title: "Diagnóstico IA",
    description: "Análise avançada de imagens médicas",
    items: [
      "98% de precisão",
      "Suporte 24/7",
      "Detecção precoce"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Proteção completa LGPD",
    items: [
      "Criptografia",
      "Backup automático",
      "Auditoria"
    ]
  }
];

const NotasPreview = () => (
  <div className="h-full flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-lg font-semibold text-white">Notas Fiscais - Centro Cirúrgico</h3>
        <p className="text-sm text-white/50">Hospital Santa Clara</p>
      </div>
      <Button variant="primary">+ Nova Nota</Button>
    </div>
    <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4">
      <table className="w-full">
        <thead>
          <tr className="text-sm text-white/50 border-b border-white/10">
            <th className="text-left pb-4">Data</th>
            <th className="text-left pb-4">Procedimento</th>
            <th className="text-left pb-4">Valor</th>
            <th className="text-left pb-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { date: "12/06", proc: "Cirurgia Cardíaca", value: "R$ 5.000", status: "Emitida" },
            { date: "11/06", proc: "Artroscopia", value: "R$ 3.500", status: "Processando" },
            { date: "10/06", proc: "Neurocirurgia", value: "R$ 7.200", status: "Emitida" }
          ].map((item, i) => (
            <tr key={i} className="text-sm border-b border-white/5">
              <td className="py-4 text-white/70">{item.date}</td>
              <td className="py-4 text-white/70">{item.proc}</td>
              <td className="py-4 text-white/70">{item.value}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === "Emitida" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
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
              <GradientText> Diagnóstico IA</GradientText>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Sistema completo para cirurgiões: automatize suas notas fiscais e
              economize <GradientText>5h por semana</GradientText> em burocracia.
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

      {/* Preview Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <NotasPreview />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
