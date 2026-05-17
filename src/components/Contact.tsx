import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedText } from "@/components/ui/animated-underline-text";
import { SocialIcons } from "@/components/ui/social-icons";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/omshinde" },
  { label: "LinkedIn", href: "https://linkedin.com/in/omshinde" },
  { label: "Instagram", href: "https://instagram.com/omshinde" },
  { label: "Email", href: "mailto:hello@omshinde.dev" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.errors[0].message);
      return;
    }
    setLoading(true);
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}${form.phone ? `%0A*Phone:* ${encodeURIComponent(form.phone)}` : ''}%0A%0A*Message:*%0A${encodeURIComponent(form.message)}`;
    
    // Your WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "919579074332"; // India country code (91) + your number
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, '_blank');
      toast.success("Opening WhatsApp to send your message!");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden">
      {/* Component 3 Sticker */}
      <motion.img
        src="/assets/component3.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute top-10 right-10 w-28 md:w-36 h-auto opacity-15 pointer-events-none rotate-[8deg]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Component 4 Sticker */}
      <motion.img
        src="/assets/component4.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute bottom-20 left-5 w-24 md:w-32 h-auto opacity-15 pointer-events-none -rotate-[10deg]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            06 — Contact
          </span>
          <AnimatedText
            text="Let's build something."
            textClassName="font-display text-4xl md:text-7xl font-bold tracking-tight text-foreground"
            underlineClassName="text-primary"
            underlineDuration={1.4}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <ContactCard
            title="Get in touch"
            description="Got a project, idea or growth problem? Drop a message — I reply within 24 hours. Let's build something great together."
            contactInfo={[
              {
                icon: Mail,
                label: "Email",
                value: "omshinde27614@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "9579074332",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Pune, India",
                className: "col-span-2 lg:col-span-1",
              },
            ]}
            className="rounded-2xl border-border/50"
            formSectionClassName="rounded-r-2xl"
          >
            <form onSubmit={submit} className="w-full space-y-3">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm">Name</Label>
                <Input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm">Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  maxLength={255}
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm">Phone</Label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Optional"
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm">Message</Label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you want to build…"
                  maxLength={1000}
                  className="min-h-[100px] resize-none"
                />
              </div>
              <Button className="w-full h-10" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending…
                  </>
                ) : (
                  <>
                    Let's Build <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </ContactCard>
        </motion.div>

        <div className="flex items-center justify-center mt-10">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
