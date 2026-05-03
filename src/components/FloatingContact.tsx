import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(5, "Tell me a bit more").max(1000),
});

interface FloatingContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingContact({ isOpen, onClose }: FloatingContactProps) {
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
      onClose();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Floating Contact Card */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              <div className="glass glow-border rounded-3xl p-6 md:p-8 relative shadow-elevated bg-background">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Let's Connect</h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Got a project, idea or growth problem? Drop a message — I reply within 24 hours.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl glass border border-border/50">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium truncate">omshinde27614@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl glass border border-border/50">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium">9579074332</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl glass border border-border/50">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">Pune</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm">Name</Label>
                      <Input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        maxLength={100}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm">Email</Label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm">Phone (Optional)</Label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm">Message</Label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me what you want to build…"
                      maxLength={1000}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button className="w-full" type="submit" disabled={loading} size="lg">
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
