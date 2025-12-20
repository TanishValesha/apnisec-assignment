import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, ServerCog, Lock, AlertTriangle } from "lucide-react"

export function ServicesSection() {
    const services = [
        {
            icon: ShieldCheck,
            title: "Cyber Resilience",
            description:
                "Build robust systems that withstand and recover from cyber attacks with our comprehensive resilience strategies.",
            features: ["24/7 Monitoring", "Incident Response", "Disaster Recovery"],
        },
        {
            icon: ServerCog,
            title: "Cyber Recovery",
            description: "Rapid recovery solutions to minimize downtime and data loss when security incidents occur.",
            features: ["Data Backup", "System Restoration", "Business Continuity"],
        },
        {
            icon: Lock,
            title: "Cyber Defense",
            description:
                "Proactive threat detection and prevention to safeguard your infrastructure from evolving cyber threats.",
            features: ["Threat Intelligence", "Firewall Management", "Penetration Testing"],
        },
        {
            icon: AlertTriangle,
            title: "Security Consulting",
            description:
                "Expert guidance to assess, plan, and implement comprehensive security strategies tailored to your business.",
            features: ["Risk Assessment", "Compliance Audits", "Security Training"],
        },
    ]

    return (
        <section id="services" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                        Our Best Cyber Security Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {"Specializing in Cyber Recovery, Cyber Resilience, and Cyber Defense"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Card key={service.title} className="group hover:shadow-lg transition-all hover:border-primary/50">
                            <CardHeader>
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
