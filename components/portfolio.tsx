import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Delly Cakes",
    description:
      "Elegant bakery website showcasing cakes with modern, responsive design",
    result:
      "Professional bakery website boosting visibility and customer engagement",
    tech: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Real-time availability",
      "Automated reminders",
      "Automated Booking",
    ],
    image: "/image2.png",
    caseStudyUrl: "/https://delly-cake.vercel.app/",
  },
  {
    title: "GoldCard Spa",
    description: "SEO-optimized gym and spa website with maps integration",
    result:
      "Increased client bookings, higher revenue, improved online visibility",
    tech: ["Next.js", "Vercel", "Google Analytics", "Google Maps"],
    features: ["Smart contact forms", "SEO Integration", "Analytics dashboard"],
    image: "/image3.png",
    caseStudyUrl: "/https://goldcardspa.com.ng/",
  },

  {
    title: "Valbot — Intelligent Conversational AI Assistant",
    description:
      "AI-powered chatbot that educates, entertains, and assists users",
    result:
      "Enhanced user engagement, improved accessibility, and smarter customer interactions",
    tech: ["Python", "Html", "Css", "Javascript"],
    features: [
      "Real-time responses",
      "Educational interactionsl",
      "API Integration",
    ],
    image: "/image5.png",
    caseStudyUrl: "/https://youtu.be/P0LaTboOQyE?si=Wdu34jQ2XuJP_6uS/",
  },
  {
    title: "Scentaris",
    description: " Luxury Perfume Branding & Mockup",
    result: "Boosted online presence by 60% in first quarter",
    tech: ["Canva", "Figma"],
    features: ["Mockups", "Logos", "Responsive Website"],
    image: "/image7.png",
    caseStudyUrl:
      "/https://www.behance.net/gallery/223176613/Scentaris-Luxury-Perfume-Branding-Mockups/",
  },
  {
    title: "ELAN MODE",
    description:
      "Elegant ecommerce website blending streetwear style with refined sophistication",
    result:
      "Increased brand appeal, higher sales conversions, and stronger online presence",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    features: ["Payment Intergration", "Shopping cart", "Responsive Design"],
    image: "/image4.png",
    caseStudyUrl:
      "/https://valentinetemi.github.io/Elan-Mode--Fashion-Website/index.html#home/",
  },

  {
    title: "Poutella",
    description: "Where Beauty Meets Elegance",
    result: "Developed seamless look across all touchpoints.",
    tech: ["Canva", "Figma"],
    features: ["Beautiful mockup", "Attractive Logo"],
    image: "/image8.jpeg",
    caseStudyUrl:
      "/ https://www.behance.net/gallery/222611113/Poutella-Where-Beauty-Meets-Elegance/",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 px-3 sm:px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-balance px-1">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Real results from real clients. See how I've helped businesses
            transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-1 sm:px-0">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 overflow-hidden hover:scale-105 hover:glow-effect w-full"
            >
              <div className="relative h-36 sm:h-40 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
              </div>

              <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6">
                <CardTitle className="font-heading text-lg sm:text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 px-3 sm:px-6">
                <div className="flex items-start gap-2 p-2 sm:p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:glow-effect transition-all">
                  <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-foreground">
                    {project.result}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full group/btn hover:bg-primary/10 hover:text-primary transition-all text-sm sm:text-base"
                >
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
