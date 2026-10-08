import {
  Activity,
  Bug,
  ChartColumn,
  Cpu,
  Database,
  Filter,
  Fingerprint,
  Gauge,
  HardDrive,
  KeyRound,
  Landmark,
  Lock,
  Network,
  RefreshCw,
  Scale,
  ScrollText,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  Terminal,
  Timer,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  speed: Gauge,
  timer: Timer,
  balance: Scale,
  verified: ShieldCheck,
  account: Landmark,
  policy: ScrollText,
  stats: ChartColumn,
  schema: Network,
  bolt: Zap,
  fingerprint: Fingerprint,
  storage: Database,
  monitoring: Activity,
  emergency: Siren,
  memory: Cpu,
  filter: Filter,
  encryption: Lock,
  tune: SlidersHorizontal,
  terminal: Terminal,
  sync: RefreshCw,
  cloud: Database,
  database: Database,
  lock: Lock,
  key: KeyRound,
  encrypted: HardDrive,
  bug: Bug,
  group: Users,
};

export function TeeoIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Activity;
  return <Icon className={className} aria-hidden="true" />;
}

export function Kicker({ children, tone = "text-primary" }: { children: string; tone?: string }) {
  return (
    <span className={`font-mono text-[11px] font-bold uppercase tracking-[0.08em] ${tone}`}>{children}</span>
  );
}

export function AccentDot({ tone }: { tone: "primary" | "secondary" | "tertiary" }) {
  const color = tone === "primary" ? "bg-primary" : tone === "secondary" ? "bg-secondary" : "bg-tertiary";
  return <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${color}`} aria-hidden="true" />;
}
