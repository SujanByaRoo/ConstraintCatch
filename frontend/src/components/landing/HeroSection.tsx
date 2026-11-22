import React, { useState } from 'react';
import { ArrowRight, ShieldAlert, Cpu, CheckCircle2, AlertOctagon, Terminal, Play, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
import { StatusBadge } from '../ui/StatusBadge';

interface HeroSectionProps {
  onLaunchApp?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLaunchApp }) => {
  const [simulationState, setSimulationState] = useState<'intercepted' | 'passed'>('intercepted');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden tech-radial">
      {/* Decorative background grid */}
      <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900/80 border border-cyan-500/30 backdrop-blur-md shadow-glow-cyan text-xs font-mono text-cyan-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>CONSTRAINT-PRESERVATION LAYER FOR AGENTIC AI</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Stop Silent Requirement Failures in{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
              Multi-Agent Handoffs
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            When AI agents collaborate, critical constraints get dropped, modified, or weakened during task handoffs. 
            <span className="text-white font-medium"> ConstraintCatch</span> enforces an active verification layer to halt execution before invalid code ships.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={onLaunchApp}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Launch Workflow Studio
            </Button>
            <a href="#problem">
              <Button variant="secondary" size="lg">
                Explore Failure Modes
              </Button>
            </a>
          </div>
        </div>

        {/* Live Interactive Multi-Agent Handoff Illustration */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative">
            
            {/* Visualizer Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-midnight-800 border border-white/[0.08]">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Live Multi-Agent Handoff Inspection</h3>
                  <p className="text-xs text-slate-400 font-mono">Simulating Task Flow: Auth & Rate Limiting Module</p>
                </div>
              </div>

              {/* Simulation State Switcher */}
              <div className="flex items-center gap-2 bg-midnight-950/80 p-1 rounded-lg border border-white/[0.08]">
                <button
                  onClick={() => setSimulationState('intercepted')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    simulationState === 'intercepted' 
                      ? 'bg-coral-500/20 text-coral-300 border border-coral-500/40 shadow-glow-coral' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Simulate Silent Failure
                </button>
                <button
                  onClick={() => setSimulationState('passed')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    simulationState === 'passed' 
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Simulate Preserved
                </button>
              </div>
            </div>

            {/* Workflow Agent Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Node 1: Original Requirement */}
              <div className="clay-card rounded-xl p-5 border-l-4 border-l-cyan-400">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 tracking-wider">INPUT SPECIFICATION</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    CID: #C01
                  </span>
                </div>
                <h4 className="text-xs font-semibold uppercase text-slate-400">Original Constraint</h4>
                <p className="mt-1.5 text-sm font-mono text-slate-100 bg-midnight-950/90 p-2.5 rounded-lg border border-white/[0.06]">
                  "Lock account strictly after <span className="text-cyan-300 font-bold underline">5 failed attempts</span> within 15 minutes."
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Mandatory Security Constraint</span>
                </div>
              </div>

              {/* Node 2: Agent Handoff (The Danger Zone) */}
              <div className={`clay-card rounded-xl p-5 border-l-4 transition-colors ${
                simulationState === 'intercepted' ? 'border-l-amber-400' : 'border-l-teal-400'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400">AGENT 2 ? AGENT 3 HANDOFF</span>
                  <span className="text-[10px] font-mono text-slate-400">API Gateway Agent</span>
                </div>
                <h4 className="text-xs font-semibold uppercase text-slate-400">Received Implementation Payload</h4>
                <p className="mt-1.5 text-sm font-mono text-slate-200 bg-midnight-950/90 p-2.5 rounded-lg border border-white/[0.06]">
                  {simulationState === 'intercepted' ? (
                    <>
                      "Configured redis rate-limiter: lock account after{' '}
                      <span className="text-coral-400 font-bold bg-coral-500/10 px-1 py-0.5 rounded border border-coral-500/30">
                        10 failed attempts
                      </span>."
                    </>
                  ) : (
                    <>
                      "Configured redis rate-limiter: lock account after{' '}
                      <span className="text-teal-300 font-bold">5 failed attempts</span>."
                    </>
                  )}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Semantic Similarity:</span>
                  <span className="font-mono text-amber-300">94.2% (Deceptive Match)</span>
                </div>
              </div>

              {/* Node 3: ConstraintCatch Runtime Safety Gate */}
              <div className={`clay-card rounded-xl p-5 border-l-4 ${
                simulationState === 'intercepted' 
                  ? 'border-l-coral-500 bg-coral-950/10' 
                  : 'border-l-teal-400 bg-teal-950/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-coral-400" />
                    CONSTRAINTCATCH GATE
                  </span>
                  <StatusBadge 
                    status={simulationState === 'intercepted' ? 'MODIFIED' : 'PRESERVED'} 
                    size="sm" 
                  />
                </div>

                <div className="space-y-2 mt-2">
                  <div className="text-xs font-mono text-slate-300">
                    <div className="flex justify-between py-1 border-b border-white/[0.05]">
                      <span className="text-slate-400">Detection Signal:</span>
                      <span className="text-cyan-300 font-semibold">Strict Numerical Diff</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.05]">
                      <span className="text-slate-400">Delta Found:</span>
                      <span className="text-coral-400 font-semibold">
                        {simulationState === 'intercepted' ? 'Expected 5, Found 10' : 'Zero Drift'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Gate Decision:</span>
                      <span className={`font-bold ${
                        simulationState === 'intercepted' ? 'text-coral-400' : 'text-teal-300'
                      }`}>
                        {simulationState === 'intercepted' ? 'CRITICAL: PAUSE WORKFLOW' : 'PASSED: CONTINUE'}
                      </span>
                    </div>
                  </div>
                </div>

                {simulationState === 'intercepted' && (
                  <div className="mt-3 p-2 rounded bg-coral-500/10 border border-coral-500/20 text-[11px] text-coral-300 flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4 shrink-0 text-coral-400" />
                    <span>Downstream Agent 3 execution blocked until constraint restored.</span>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
