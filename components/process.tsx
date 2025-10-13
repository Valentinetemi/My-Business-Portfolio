import { Search, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    timeline: "Day 1-2",
    description: "Understanding your business goals and technical needs",
  },
  {
    icon: Palette,
    title: "Design",
    timeline: "Day 3-4",
    description: "I create mockups and prototypes for your approval",
  },
  {
    icon: Code,
    title: "Development",
    timeline: "Day 5-8",
    description: "Clean, optimized code built with modern tech",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    timeline: "Day 9-10",
    description: "Quality checks, deployment, and handover training",
  },
]

export function Process() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-balance">How We Work Together</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto text-pretty">
            A proven process that delivers results on time, every time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connecting line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}

                <div className="relative z-10 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-lg">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{step.timeline}</p>
                    <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
