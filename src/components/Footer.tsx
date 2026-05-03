import { SocialIcons } from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono">© 2026 Om Shinde · Built with intent.</span>
        </div>
        <SocialIcons />
        <div className="font-mono text-xs uppercase tracking-widest">
          Builder · Entrepreneur · AI Creator
        </div>
      </div>
    </footer>
  );
}
