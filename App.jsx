import React, { useState } from 'react';
import { Brain, Zap, ShieldCheck, ArrowRight, Play, CheckCircle, Menu, X, Activity, HeartPulse } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
        <HeartPulse className="w-6 h-6 text-white absolute" />
        <Activity className="w-6 h-6 text-white/30 absolute animate-pulse" />
      </div>
      <div className="absolute -right-1 -bottom-1 text-[8px] px-1 rounded-md bg-cyan-500 text-white font-bold">
        AI
      </div>
    </div>
    <div className="flex items-baseline">
      <span className="text-xl font-bold text-white">vita</span>
      <span className="text-sm font-medium text-cyan-400">.ai</span>
    </div>
  </div>
);

const Badge = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 rounded-full border border-white/10">
    {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
    <span className="text-xs md:text-sm text-white/70">{children}</span>
  </div>
);

const Button = ({ children, variant = 'primary', icon: Icon, className = '' }) => {
  const styles = variant === 'primary' 
    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
    : "border border-white/10 text-white/70 hover:bg-white/5";
  
  return (
    <button className={`w-full md:w-auto px-4 md:px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${styles} ${className}`}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

const Card = ({ icon: Icon, title, description, items = [] }) => (
  <div className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all">
    <div className="flex items-start md:items-center gap-3 mb-4">
      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg shrink-0">
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
    icon: Brain,
    title: "Diagnóstico IA",
    description: "Análise inteligente de exames",
    items: ["98% precisão", "Detecção precoce", "Suporte 24/7"]
  },
  {
    icon: HeartPulse,
    title: "Monitoramento",
    description: "Acompanhamento em tempo real",
    items: ["Alertas inteligentes", "Dados vitais", "Histórico completo"]
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Proteção de dados LGPD",
    items: ["Criptografia", "Backups", "Auditoria"]
  }
];

const Preview = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-sm z-50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#solucoes" className="text-white/70 hover:text-white">Soluções</a>
              <a href="#especialidades" className="text-white/70 hover:text-white">Especialidades</a>
              <a href="#contato" className="text-white/70 hover:text-white">Contato</a>
              <Button variant="primary">Portal Médico</Button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#solucoes" className="text-white/70 hover:text-white py-2">Soluções</a>
                <a href="#especialidades" className="text-white/70 hover:text-white py-2">Especialidades</a>
                <a href="#contato" className="text-white/70 hover:text-white py-2">Contato</a>
                <Button variant="primary">Portal Médico</Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="relative pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500 opacity-20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500 opacity-20 blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge icon={Brain}>IA para Saúde</Badge>
            <h1 className="text-3xl md:text-6xl font-bold text-white mt-6 mb-6">
              Transforme seus
              <span className="block md:inline bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Diagnósticos
              </span>
            </h1>
            <p className="text-base md:text-xl text-white/70 mb-8 px-4 md:px-0">
              Inteligência artificial para diagnósticos mais precisos e{" "}
              <span className="text-cyan-400">90% mais rápidos</span>
            </p>
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4">
              <Button icon={Play}>Ver Demonstração</Button>
              <Button variant="secondary">Agendar Conversa</Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card key={i} {...feature} />
            ))}
          </div>
        </div>
      </main>

      {/* Dashboard Preview */}
      <section className="py-16 md:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Painel Inteligente</h3>
              <p className="text-sm text-white/50">Análise em Tempo Real</p>
            </div>
            <Button variant="primary">Novo Diagnóstico</Button>
          </div>
          
          <div className="bg-white/5 rounded-xl border border-white/10 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Diagnósticos", value: "12.453" },
                { label: "Precisão Média", value: "98.5%" },
                { label: "Tempo Médio", value: "2min" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preview;
