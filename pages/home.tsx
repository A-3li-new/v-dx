import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
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
    <div className="py-20 px-4" style={{ textAlign: "center", background: "linear-gradient(135deg, hsl(263 70% 60%), hsl(198 93% 55%))", minHeight: "600px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="text-6xl font-bold mb-6" style={{ color: "white" }}>Build Stunning Websites Visually</h1>
      <p className="text-2xl mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Create professional web applications without writing code</p>
      <Button variant="default" size="lg" style={{ backgroundColor: "white", color: "hsl(263 70% 60%)", padding: "16px 32px", fontSize: "18px", fontWeight: "bold" }}>
        Start Building Now
      </Button>
    </div>
    <div className="py-20 px-4 bg-background" style={{ backgroundColor: "hsl(var(--background))" }}>
      <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "hsl(var(--foreground))" }}>Powerful Features</h2>
      <div className="max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">Intuitive visual editor with drag and drop components</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">Build mobile-first responsive layouts effortlessly</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">Export clean, production-ready code anytime</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">See your changes instantly as you build</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">Pre-built components and templates to speed up development</p>
          <Button variant="default">
            Learn More
          </Button>
        </div>
        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
          <p className="text-muted-foreground mb-4">Multiple themes and full style customization</p>
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