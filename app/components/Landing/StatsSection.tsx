export function StatsSection() {
    const stats = [
        { value: "120+", label: "Projects Completed" },
        { value: "900+", label: "Satisfied Clients" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Support Available" },
    ]

    return (
        <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        {"Your Trusted Partner in Cybersecurity"}
                    </h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
                        {"Empowering businesses to protect digital assets and ensure cybersecurity for organizations of all sizes"}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
