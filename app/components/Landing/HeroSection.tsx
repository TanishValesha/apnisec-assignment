import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg.png')",
                }}
            />

            {/* Gradient Overlays for Blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/30 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm font-medium shadow-sm">
                        <Star className="h-3 w-3 fill-blue-600 text-blue-600" />
                        <span>Cyber Security Excellence</span>
                        <span className="ml-2 font-bold">★★★★★ 4.9/5</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Protecting Your
                        <span className="block bg-gradient-to-r bg-primary bg-clip-text text-transparent">
                            Digital Future
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Specializing in Cyber Recovery, Cyber Resilience, and Cyber Defense for enterprises worldwide
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-bold text-2xl text-gray-900">46,664+</span>
                            <span className="text-gray-600">Happy Customers</span>
                        </div>
                        <div className="hidden sm:block w-px h-8 bg-gray-300" />
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-bold text-2xl text-gray-900">2,343+</span>
                            <span className="text-gray-600">5-Star Reviews</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl group"
                        >
                            Get Started
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg hover:bg-white hover:border-gray-400 transition-all shadow-sm hover:shadow-md"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700 pointer-events-none" />
        </section>
    );
}

export default HeroSection;