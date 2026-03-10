import { Sun, Camera, Fingerprint, Bell, Building2, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    label: "Solar Energy Solutions",
    description: "Cutting-edge solar infrastructure and renewable energy systems.",
    href: "https://www.ddbuildingtech.com/solar-energy-solutions.php",
    icon: Sun,
    color: "#f97316",
  },
  {
    label: "CCTV Solutions",
    description: "Advanced surveillance and high-definition monitoring systems.",
    href: "https://www.ddbuildingtech.com/cctv-solutions.php",
    icon: Camera,
    color: "#3b82f6",
  },
  {
    label: "Access Control & Time Attendance",
    description: "Intelligent access control and biometric attendance tracking.",
    href: "https://www.ddbuildingtech.com/access-control-time-attendance.php",
    icon: Fingerprint,
    color: "#60a5fa",
  },
  {
    label: "Fire Alarm",
    description: "State-of-the-art fire detection and alarm systems.",
    href: "https://www.ddbuildingtech.com/fire-alarm.php",
    icon: Bell,
    color: "#ef4444",
  },
  {
    label: "Building Automation",
    description: "Integrated smart building systems for energy efficiency and comfort.",
    href: "https://www.ddbuildingtech.com/building-automation.php",
    icon: Building2,
    color: "#a78bfa",
  },
];

export default function ServicesPage() {
  return (
    <div className="content">
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>
        {/* Back */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#94a3b8",
            fontSize: "0.85rem",
            textDecoration: "none",
            marginBottom: "2rem",
            transition: "color 0.2s",
          }}
          className="back-link"
        >
          <ArrowLeft size={15} />
          Back to links
        </Link>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            <span className="gradient-text">Our Services</span>
          </h1>
          <div className="accent-line" />
          <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
            Tap a service to learn more on our website.
          </p>
        </div>

        {/* Services */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.href}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  color: "white",
                  transition: "all 0.25s ease",
                }}
                className="link-card"
              >
                <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${service.color}18`,
                      border: `1px solid ${service.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={service.color} />
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {service.label}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "#64748b",
                        lineHeight: 1.4,
                      }}
                    >
                      {service.description}
                    </span>
                  </span>
                </span>
                <ChevronRight size={16} className="chevron" style={{ flexShrink: 0 }} />
              </a>
            );
          })}
        </div>

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
      </div>
    </div>
  );
}
