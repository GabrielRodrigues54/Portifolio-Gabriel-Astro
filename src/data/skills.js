import {
  Globe,
  Palette,
  Zap,
  Atom,
  Heart,
  FileText,
  Wind,
  Code,
  Server,
  TerminalSquare,
  GitBranch,
  Container,
  Cloud,
  Figma,
  Monitor,
  Package,
  Boxes,
  Brackets,
  FolderGit2,
  Brain,
  BadgeCheck,
  Cpu,
  Rocket
} from 'lucide-react';

export const skills = {
  frontend: [
    { name: "HTML5", level: 95, icon: FileText },        // Ícone de documento
    { name: "CSS3", level: 90, icon: Palette },          // Ícone de paleta de cores
    { name: "JavaScript", level: 92, icon: Zap },        // Ícone de raio = dinamismo
    { name: "React", level: 88, icon: Atom },            // Ícone de átomo
    { name: "NextJs", level: 80, icon: Globe },          // Web app global
    { name: "TypeScript", level: 85, icon: Brackets },   // Ícone de código tipado
    { name: "Tailwind CSS", level: 90, icon: Wind },     // Ícone de vento
    { name: "Bootstrap", level: 90, icon: BadgeCheck },  // Sinal de UI pronta / confiável
    { name: "AstroJs", level: 90, icon: Rocket }         // Lançamento espacial = Astro
  ],
  backend: [
    { name: "Node.js", level: 87, icon: Server },        // Ícone de servidor
    { name: "Python", level: 82, icon: Cpu },            // Ícone de cérebro/processamento
  ],
  tools: [
    { name: "Git", level: 88, icon: GitBranch },         // Controle de versão
    { name: "Docker", level: 75, icon: Container },      // Container
    { name: "Github", level: 70, icon: FolderGit2 },     // Projeto Git
    { name: "Figma", level: 85, icon: Figma },           // Design
    { name: "VS Code", level: 95, icon: Monitor }       // Ambiente de desenvolvimento
  ]
};
