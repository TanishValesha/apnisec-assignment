import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Mail, Database, Cloud, Smartphone, Building2 } from "lucide-react"

export function UseCasesSection() {
    const useCases = [
        {
            icon: Network,
            title: "Network Security",
            description: "Protect your network infrastructure from unauthorized access and cyber threats.",
        },
        {
            icon: Mail,
            title: "Email Protection",
            description: "Secure email communications and prevent phishing attacks and malware.",
        },
        {
            icon: Database,
            title: "Data Security",
            description: "Safeguard sensitive data with encryption and access controls.",
        },
        {
            icon: Cloud,
            title: "Cloud Security",
            description: "Secure cloud infrastructure and applications across multiple platforms.",
        },
        {
            icon: Smartphone,
            title: "Endpoint Protection",
            description: "Protect devices and endpoints from malware and unauthorized access.",
        },
        {
            icon: Building2,
            title: "Enterprise Security",
            description: "Comprehensive security solutions for large-scale organizations.",
        },
    ]

    return (
        <section id="use-cases" className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Use Cases</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {"Comprehensive security solutions for every aspect of your digital infrastructure"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase) => (
                        <Card key={useCase.title} className="group hover:shadow-lg transition-all hover:border-primary/50">
                            <CardHeader>
                                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                    <useCase.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                                <CardDescription className="text-sm leading-relaxed">{useCase.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
