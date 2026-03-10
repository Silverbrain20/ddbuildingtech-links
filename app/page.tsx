import type { Viewport } from "next";
import Image from "next/image";
import {
  Globe,
  ShoppingBag,
  Images,
  BookOpen,
  Layers,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const onlineLinks = [
  {
    label: "Visit Our Website",
    href: "https://www.ddbuildingtech.com",
    icon: Globe,
  },
  {
    label: "Shop",
    href: "https://www.ddbuildingtech.com/products.php",
    icon: ShoppingBag,
  },
  {
    label: "Gallery",
    href: "https://www.ddbuildingtech.com/gallery.php",
    icon: Images,
  },
  {
    label: "Blog",
    href: "https://www.ddbuildingtech.com/blog.php",
    icon: BookOpen,
  },
  {
    label: "Our Services",
    href: "/services",
    icon: Layers,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dd-buildingtech/",
    icon: Linkedin,
  },
];

const contactLinks = [
  {
    label: "+234 916 121 2301",
    href: "tel:+2349161212301",
    icon: Phone,
  },
  {
    label: "+234 806 611 3394",
    href: "tel:+2348066113394",
    icon: Phone,
  },
  {
    label: "WhatsApp Us",
    href: "https://wa.me/2349161212301",
    icon: MessageCircle,
  },
  {
    label: "sales@ddbuildingtech.com",
    href: "mailto:sales@ddbuildingtech.com",
    icon: Mail,
  },
  {
    label: "support@ddbuildingtech.com",
    href: "mailto:support@ddbuildingtech.com",
    icon: Mail,
  },
  {
    label: "Awka Office — View on Map",
    href: "https://maps.google.com/?q=Awka+Anambra+Nigeria",
    icon: MapPin,
  },
];

function LinkCard({
  label,
  href,
  icon: Icon,
  external = true,
}: {
  label: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="link-card"
    >
      <span className="icon">
        <Icon size={18} />
        <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>{label}</span>
      </span>
      <ChevronRight size={16} className="chevron" />
    </a>
  );
}

export default function Home() {
  return (
    <div className="content">
      {/* Header */}
      <header
        style={{
          background:
            "linear-gradient(180deg, rgba(15,32,68,0.9) 0%, rgba(10,22,40,0.6) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          paddingBottom: "2.5rem",
        }}
      >
        <div
          className="mobile-pad"
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "3rem 1.5rem 0",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "96px",
              height: "96px",
              margin: "0 auto 1.25rem",
              borderRadius: "50%",
              overflow: "hidden",
              background: "rgba(255,255,255,0.08)",
              border: "2px solid rgba(249,115,22,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 30px rgba(59,130,246,0.2)",
              padding: "8px",
            }}
          >
            <Image
              src="/dd_logo.png"
              alt="DD Building Tech logo"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Company Name */}
          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
            }}
          >
            <span className="gradient-text">DD Building Tech</span>
          </h1>

          {/* Accent Line */}
          <div className="accent-line" />

          {/* Tagline */}
          <p
            style={{
              color: "#94a3b8",
              fontWeight: 300,
              fontSize: "clamp(0.8rem, 3.5vw, 0.9rem)",
              lineHeight: 1.6,
              maxWidth: "380px",
              margin: "0 auto",
            }}
          >
            Power the Grid. Secure the Perimeter.
            <br />
            Advanced systems for solar energy, security & building automation.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main
        className="mobile-pad"
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          padding: "2rem 1.5rem 3rem",
        }}
      >
        {/* Online */}
        <section style={{ marginBottom: "2rem" }}>
          <p className="section-label">Online</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {onlineLinks.map((link) => (
              <LinkCard
                key={link.href}
                {...link}
                external={link.href.startsWith("http")}
              />
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Social */}
        <section style={{ marginBottom: "2rem" }}>
          <p className="section-label">Social Media</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {socialLinks.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Contact */}
        <section style={{ marginBottom: "2rem" }}>
          <p className="section-label">Contact</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {contactLinks.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#475569" }}>
            © {new Date().getFullYear()} DD Building Tech — Advanced Systems
          </p>
        </div>
      </main>
    </div>
  );
}
