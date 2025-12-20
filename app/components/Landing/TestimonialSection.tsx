import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO",
            company: "TechCorp",
            content:
                "ApniSec transformed our security posture. Their team is professional, knowledgeable, and always available when we need them.",
            avatar: "/professional-woman-diverse.png",
        },
        {
            name: "Michael Chen",
            role: "IT Director",
            company: "FinanceHub",
            content:
                "The incident response time is incredible. They helped us recover from a critical breach in record time with minimal data loss.",
            avatar: "/professional-man.jpg",
        },
        {
            name: "Emily Rodriguez",
            role: "Security Manager",
            company: "HealthCare Plus",
            content:
                "Outstanding service! Their comprehensive approach to cybersecurity gives us peace of mind as we handle sensitive patient data.",
            avatar: "/professional-woman-doctor.png",
        },
        {
            name: "David Park",
            role: "CEO",
            company: "StartupXYZ",
            content:
                "ApniSec scaled with our growth. They understand the unique challenges of startups and provide flexible, effective solutions.",
            avatar: "/professional-ceo.png",
        },
        {
            name: "Lisa Anderson",
            role: "Operations Lead",
            company: "RetailChain",
            content:
                "Their proactive monitoring caught threats before they became problems. The ROI on their services has been exceptional.",
            avatar: "/professional-woman-executive.png",
        },
        {
            name: "James Wilson",
            role: "VP Technology",
            company: "MediaCorp",
            content:
                "World-class expertise with a personal touch. ApniSec doesn't just protect our systems, they educate our entire organization.",
            avatar: "/professional-man-vp.jpg",
        },
    ]

    return (
        <section id="testimonials" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{"What Our Clients Say"}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {"Trusted by industry leaders across multiple sectors"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                                        <AvatarFallback>
                                            {testimonial.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground italic">{`"${testimonial.content}"`}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
