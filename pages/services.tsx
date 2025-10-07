import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
    <header className="w-full sticky top-0 z-50" style={{ backgroundColor: "hsl(var(--primary))", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", background: "linear-gradient(220deg, #16263f 0%, #1d204e 100%)" }}>
      <h1 className="text-2xl font-bold cursor-pointer" style={{ color: "hsl(var(--primary-foreground))", margin: "0" }}>DevSphere Studio</h1>
      <div className="flex gap-6" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="/" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Home</a>
        <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>About</a>
        <a href="/services" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Services</a>
        <a href="/portfolio" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Portfolio</a>
        <a href="/contact" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Contact</a>
      </div>
    </header>
    <div className="py-20 px-8 text-center" style={{ background: "linear-gradient(239deg, #16263f 0%, #1d204e 100%)", minHeight: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="text-5xl font-bold mb-6" style={{ color: "white" }}>Our Services</h1>
      <p className="text-xl" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Everything you need to build amazing websites</p>
    </div>
    <div className="py-20 px-8" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", background: "#141c2f" }}>
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
        <p className="text-muted-foreground mb-4">Create stunning websites with our drag-and-drop builder</p>
        <Button variant="default">
          Learn More
        </Button>
      </div>
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
        <p className="text-muted-foreground mb-4">Access hundreds of professionally designed templates</p>
        <Button variant="default">
          Learn More
        </Button>
      </div>
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
        <p className="text-muted-foreground mb-4">Build and reuse your own custom components</p>
        <Button variant="default">
          Learn More
        </Button>
      </div>
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
        <p className="text-muted-foreground mb-4">Export clean, optimized code for any project</p>
        <Button variant="default">
          Learn More
        </Button>
      </div>
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
        <p className="text-muted-foreground mb-4">One-click deployment to the cloud</p>
        <Button variant="default">
          Learn More
        </Button>
      </div>
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", minHeight: "200px" }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--card-foreground))" }}>Heading 3</h3>
        <p className="text-muted-foreground mb-4">Get help whenever you need it from our expert team</p>
        <Button variant="default">
          Learn More
        </Button>
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