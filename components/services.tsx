"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Sparkles, TrendingUp, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Web Design & Development",
    description:
      "Modern, mobile-first websites built with Next.js. Optimized for Nigerian internet speeds and mobile data.",
  
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "AI Automation Integration",
    description:
      "Chatbots, booking systems, email automation. Reduce staff costs by up to 80% and serve customers 24/7.",
 
    color: "secondary",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance Optimization",
    description:
      "Rank #1 on Google Nigeria. Technical SEO audits and optimization for Lagos, Abuja, and nationwide visibility.",
  
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy & Consulting",
    description: "Digital presence strategy tailored for the Nigerian market. Tech stack recommendations for growth.",
 
    color: "secondary",
  },
]

export function Services() {
  return (
    <section className="py-24 px-4 bg-card/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-balance">How I Can Help Your Business</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive web solutions tailored to Nigerian businesses. Flexible payment plans available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 hover:scale-105 hover:glow-effect"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:bg-${service.color}/20 transition-all group-hover:scale-110 ${service.color === "primary" ? "group-hover:glow-effect" : "group-hover:glow-effect-cyan"}`}
                  >
                    <Icon className={`w-6 h-6 text-${service.color}`} />
                  </div>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 transition-all"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get a Quote
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted Payment Methods</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="px-4 py-2 rounded-lg bg-card border border-border">
              <span className="text-sm font-medium">Bank Transfer</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card border border-border">
              <span className="text-sm font-medium">Paystack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
