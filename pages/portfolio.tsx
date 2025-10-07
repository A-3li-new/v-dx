import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
    <header className="w-full sticky top-0 z-50" style={{ backgroundColor: "hsl(var(--primary))", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", background: "linear-gradient(90deg, #273a59 0%, #191c43 100%)" }}>
      <h1 className="text-2xl font-bold cursor-pointer" style={{ color: "hsl(var(--primary-foreground))", margin: "0" }}>DevSphere Studio</h1>
      <div className="flex gap-6" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="/" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Home</a>
        <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>About</a>
        <a href="/services" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Services</a>
        <a href="/portfolio" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Portfolio</a>
        <a href="/contact" className="hover:opacity-80 transition-opacity" style={{ color: "hsl(var(--primary-foreground))", textDecoration: "none", fontWeight: "500" }}>Contact</a>
      </div>
    </header>
    <div className="py-20 px-8 text-center" style={{ backgroundColor: "hsl(var(--background))" }}>
      <h1 className="text-5xl font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>Our Portfolio</h1>
      <p className="text-xl" style={{ color: "hsl(var(--muted-foreground))" }}>Explore projects built with DevSphere Studio</p>
    </div>
    <div className="py-16 px-8" style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", background: "linear-gradient(118deg, #273a59 0%, #191c43 100%)" }}>
      <div className="overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}>
        <img src="/placeholder.svg" alt="Project 1" className="w-full" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>Project 1</h3>
          <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>A beautiful website built with DevSphere Studio showcasing modern design and functionality.</p>
          <Button variant="outline" className="w-full">
            View Project
          </Button>
        </div>
      </div>
      <div className="overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}>
        <img src="/placeholder.svg" alt="Project 2" className="w-full" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>Project 2</h3>
          <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>A beautiful website built with DevSphere Studio showcasing modern design and functionality.</p>
          <Button variant="outline" className="w-full">
            View Project
          </Button>
        </div>
      </div>
      <div className="overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}>
        <img src="/placeholder.svg" alt="Project 3" className="w-full" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>Project 3</h3>
          <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>A beautiful website built with DevSphere Studio showcasing modern design and functionality.</p>
          <Button variant="outline" className="w-full">
            View Project
          </Button>
        </div>
      </div>
      <div className="overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}>
        <img src="/placeholder.svg" alt="Project 4" className="w-full" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>Project 4</h3>
          <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>A beautiful website built with DevSphere Studio showcasing modern design and functionality.</p>
          <Button variant="outline" className="w-full">
            View Project
          </Button>
        </div>
      </div>
      <div className="overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}>
        <img src="/placeholder.svg" alt="Project 5" className="w-full" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>Project 5</h3>
          <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>A beautiful website built with DevSphere Studio showcasing modern design and functionality.</p>
          <Button variant="outline" className="w-full">
            View Project
          </Button>
        </div>
      </div>
      <div className="overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }}>
        <img src="/placeholder.svg" alt="Project 6" className="w-full" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>Project 6</h3>
          <p className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>A beautiful website built with DevSphere Studio showcasing modern design and functionality.</p>
          <Button variant="outline" className="w-full">
            View Project
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