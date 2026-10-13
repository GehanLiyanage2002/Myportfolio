import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';
import { DETAILED_PROJECTS_DATA, ARTICLES_LIST_DATA } from '../constants';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const DevOpsTerminal: React.FC<{ onNavigate?: (section: string) => void }> = ({ onNavigate }) => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-emerald-400 font-semibold">✨ Welcome to Gehan Liyanage&apos;s Interactive Cloud Shell (v2.4.0)</p>
          <p className="text-slate-400 text-xs">Type a command or click a quick shortcut below to inspect infrastructure, projects, and skills.</p>
        </div>
      )
    }
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-violet-400 font-medium">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 pt-1 font-mono">
              <div><span className="text-emerald-400">whoami</span> - Display developer bio & focus</div>
              <div><span className="text-emerald-400">skills</span> - Inspect cloud & DevOps stack</div>
              <div><span className="text-emerald-400">projects</span> - List deployed architectures</div>
              <div><span className="text-emerald-400">articles</span> - Read Medium technical stories</div>
              <div><span className="text-emerald-400">contact</span> - Show communication channels</div>
              <div><span className="text-emerald-400">status</span> - Cloud cluster node health</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal session</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p><span className="text-violet-400 font-semibold">Name:</span> Gehan Chamikara Liyanage</p>
            <p><span className="text-violet-400 font-semibold">Role:</span> DevOps Enthusiast & CS Undergraduate</p>
            <p><span className="text-violet-400 font-semibold">University:</span> Uva Wellassa University of Sri Lanka (B.Sc. Hons in Industrial IT)</p>
            <p><span className="text-violet-400 font-semibold">Community:</span> Webmaster at Microsoft Student Club (UWU) | Microsoft Learn Student Ambassador</p>
            <p><span className="text-violet-400 font-semibold">Core Focus:</span> Kubernetes Orchestration, Cloud Architecture, CI/CD Automation, Linux Systems</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <div>
              <span className="text-sky-400 font-semibold">[Cloud & Infra]:</span> Azure (AKS, VMs, Blob), Linux (Ubuntu), Cloud Architecture
            </div>
            <div>
              <span className="text-emerald-400 font-semibold">[DevOps & CI/CD]:</span> Docker, Kubernetes, GitHub Actions, Nginx Reverse Proxy, Bash Automation
            </div>
            <div>
              <span className="text-amber-400 font-semibold">[Languages & Web]:</span> Python (Flask), React.js, TypeScript, JavaScript, Tailwind CSS
            </div>
            <div>
              <span className="text-purple-400 font-semibold">[Databases & Tools]:</span> MySQL, Git/GitHub, Docker Compose, Postman, VS Code
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-violet-400 font-medium">Deployed Projects:</p>
            {DETAILED_PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="pl-2 border-l-2 border-violet-500/50 py-0.5">
                <span className="text-emerald-400 font-semibold">{proj.title}</span>
                <p className="text-slate-400 text-[11px]">{proj.description}</p>
                <a 
                  href={proj.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-violet-400 underline hover:text-violet-300 inline-block mt-0.5"
                >
                  GitHub Repository &rarr;
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'articles':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-violet-400 font-medium">Published Medium Articles:</p>
            {ARTICLES_LIST_DATA.map((art, idx) => (
              <div key={idx} className="pl-2 border-l-2 border-emerald-500/50 py-0.5">
                <span className="text-amber-300 font-semibold">{art.title}</span>
                <p className="text-slate-400 text-[11px]">{art.description}</p>
                <a 
                  href={art.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 underline hover:text-emerald-300 inline-block mt-0.5"
                >
                  Read on Medium ({art.readTime}) &rarr;
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p><span className="text-emerald-400">Email:</span> gahenliyanage@gmail.com</p>
            <p><span className="text-emerald-400">LinkedIn:</span> https://linkedin.com/in/gehan-liyanage</p>
            <p><span className="text-emerald-400">GitHub:</span> https://github.com/GehanLiyanage2002</p>
            <p className="text-slate-400 pt-1">Feel free to reach out for DevOps collaborations, internships, or cloud discussions!</p>
          </div>
        );
        break;

      case 'status':
        output = (
          <div className="space-y-1 text-slate-300 text-xs font-mono">
            <p className="text-emerald-400">● Cluster: Production AKS (East US)</p>
            <p>● Node Pool: 3/3 Nodes Ready (Linux Ubuntu 22.04 LTS)</p>
            <p>● Kubelet Version: v1.30.2</p>
            <p>● Ingress Controller: Nginx (Active - 0 5xx errors)</p>
            <p>● Availability: 100% Operational</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            Command not recognized: <span className="text-slate-200 font-mono">&apos;{cmd}&apos;</span>. Type <span className="text-emerald-400 font-semibold">&apos;help&apos;</span> to see available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'articles', 'contact', 'status', 'clear'];

  const copyShellOutput = () => {
    const text = history.map(h => `$ ${h.command}\n`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl font-mono text-left transition-all hover:border-violet-500/50">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          <span className="ml-3 text-xs text-slate-400 font-sans flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            gehan@cloud-cluster:~ (bash)
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AKS Active
          </span>
          <button 
            onClick={copyShellOutput}
            className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            title="Copy session output"
            aria-label="Copy session output"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div 
        className="p-5 max-h-80 overflow-y-auto space-y-3 text-sm scrollbar-thin scrollbar-thumb-slate-800"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            {item.command !== 'init' && (
              <div className="flex items-center gap-2 text-violet-400 font-semibold text-xs">
                <span className="text-emerald-400">gehan@portfolio:~$</span>
                <span className="text-slate-100 font-mono">{item.command}</span>
              </div>
            )}
            <div className="pl-1">{item.output}</div>
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 text-xs font-semibold select-none flex-shrink-0">
            gehan@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'projects'..."
            className="w-full bg-transparent border-none outline-none text-slate-100 text-xs font-mono placeholder:text-slate-600 focus:ring-0"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1 text-slate-400 hover:text-emerald-400 transition-colors"
            title="Execute command"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] text-slate-500 font-sans flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-violet-400" />
          Quick commands:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 hover:bg-violet-600 hover:text-white border border-slate-700 hover:border-violet-500 transition-all duration-150 active:scale-95"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DevOpsTerminal;
