import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
    <header className="w-full sticky top-0 z-50" style={{ backgroundColor: "hsl(var(--primary))", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h1 className="text-2xl font-bold cursor-pointer" style={{ color: "hsl(var(--primary-foreground))", margin: "0" }}>DevSphere Studio</h1>
      <div className="flex gap-6" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="/" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Home</a>
        <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>About</a>
        <a href="/services" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Services</a>
        <a href="/portfolio" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Portfolio</a>
        <a href="/contact" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Contact</a>
      </div>
    </header>
    <div className="py-20 px-8 text-center" style={{ background: "linear-gradient(135deg, hsl(198 93% 55%), hsl(263 70% 60%))", minHeight: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="text-5xl font-bold mb-6" style={{ color: "white" }}>Get In Touch</h1>
      <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.9)" }}>We'd love to hear from you. Send us a message!</p>
    </div>
    <div className="py-20 px-8" style={{ maxWidth: "800px", margin: "0 auto", background: "#231c4a" }}>
      <div className="p-8" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "16px" }}>
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "hsl(var(--foreground))" }}>Send us a message</h2>
        <Input type="text" placeholder="Your Name" className="w-full mb-4" />
        <Input type="email" placeholder="Your Email" className="w-full mb-4" />
        <Input type="text" placeholder="Subject" className="w-full mb-4" />
        <Textarea placeholder="Your Message" rows={6} className="w-full mb-6" />
        <Button variant="default" size="lg" className="w-full">
          Send Message
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">123 Studio St, Design City, DC 12345</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">hello@devsphere.studio</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">+1 (555) 123-4567</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
      </div>
    </div>
    <div className="bg-background text-foreground p-8" style={{ backgroundColor: "hsl(var(--muted))" }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-muted-foreground mb-2">Our Story</p>
          <p className="text-muted-foreground mb-2">Careers</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <p className="text-muted-foreground mb-2">Features</p>
          <p className="text-muted-foreground mb-2">Pricing</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-muted-foreground mb-2">Contact Us</p>
          <p className="text-muted-foreground mb-2">FAQ</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <p className="text-muted-foreground">FB</p>
            <p className="text-muted-foreground">TW</p>
            <p className="text-muted-foreground">IG</p>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground pt-4 border-t border-border">© 2024 Your Company, Inc. All rights reserved.</p>
    </div>
    </div>
  );
}