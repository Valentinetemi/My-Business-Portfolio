import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Manager, Gold Card Spa",
    role: "Spa Manager",
    location: "Lagos, Nigeria",
    date: "October 2025",
    quote:
      "Temiloluwa built us a website that's very lovely, dope and sleek. The design is modern and our customers find it easy to navigate. she delivered exactly what we needed and I'm definitely referring her to other businesses.",
    image: "/professional-woman-headshot.png",
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-balance">What Nigerian Clients Say</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto text-pretty">
            Real results from businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg hover:glow-effect transition-all duration-500">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-secondary leading-relaxed">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-secondary">{testimonial.role}</div>
                    <div className="flex items-center gap-1 text-xs text-cyan-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
