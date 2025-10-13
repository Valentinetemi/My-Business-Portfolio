"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Adjusted positioning and size for mobile */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm glow-effect">
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-foreground">
            AI-Powered Web Solutions
          </span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight px-1">
          Grow Your Nigerian Business with{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            AI-Powered Websites
          </span>{" "}
          That Work 24/7
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-2">
          I'm Temiloluwa Valentine, a Nigerian web developer helping businesses
          in Nigeria grow and scale with intelligent automation. From booking
          systems to customer engagement. I build websites that don't just look
          good but make you money while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full px-4 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group glow-effect hover:scale-105 transition-all"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-secondary text-foreground hover:bg-secondary/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Talk on WhatsApp
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 pt-3 sm:pt-4">
          <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400" />
          <span className="text-xs sm:text-sm text-muted-foreground">
            Serving businesses across Nigeria 🇳🇬
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-8 pt-6 sm:pt-8 max-w-2xl mx-auto px-2">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              8+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Nigerian Businesses & Brands Served
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
              100%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Automated Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
