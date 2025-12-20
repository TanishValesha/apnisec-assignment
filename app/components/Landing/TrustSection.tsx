import { Card } from "@/components/ui/card"

export function TrustSection() {
    const stats = [
        { company: "Microsoft", rating: "4.8/5", reviews: "192 Client Review" },
        { company: "Google", rating: "4.9/5", reviews: "362 Client Review" },
        { company: "AWS", rating: "4.8/5", reviews: "156 Client Review" },
    ]

    const partners = ["CISCO", "Palo Alto", "CrowdStrike", "Fortinet", "McAfee"]

    return (
        <section className="py-12 lg:py-16 border-y border-border bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {"Trusted by "}
                        <span className="text-primary">{"over 50,000+"}</span>
                        {" businesses worldwide"}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat) => (
                        <Card
                            key={stat.company}
                            className="p-6 text-center border-primary/20 hover:border-primary/40 transition-colors"
                        >
                            <div className="flex items-center justify-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-primary text-lg">
                                        ★
                                    </span>
                                ))}
                                <span className="ml-2 font-bold">{stat.rating}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{stat.reviews}</p>
                            <p className="font-semibold">{stat.company}</p>
                        </Card>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-muted-foreground">
                    {partners.map((partner) => (
                        <div key={partner} className="text-xl font-semibold opacity-60 hover:opacity-100 transition-opacity">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
