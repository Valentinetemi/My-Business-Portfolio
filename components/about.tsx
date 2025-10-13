const stats = [
  { value: "8+", label: "Projects Delivered" },
  { value: "5-Star", label: "Client Rating" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
]

export function About() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-balance">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />

            <div className="space-y-4 text-lg text-secondary leading-relaxed">
  <p>
    Hi, I'm <span className="font-semibold text-foreground">Temiloluwa Valentine</span>, a web developer
    passionate about building intelligent digital solutions for Nigerian businesses. I specialize in creating 
    websites that don't just look good—they work hard for your business through AI automation and smart integrations.
  </p>
  <p>
    With expertise in modern frameworks like Next.js and AI tools, I help businesses streamline operations,
    reduce costs, and serve customers 24/7. From booking systems to e-commerce platforms, I build fast, 
    mobile-optimized solutions that actually grow your revenue.
  </p>
  <p>
    Based in Nigeria, I understand the unique challenges of our market—slow internet speeds, mobile-first users, 
    and budget constraints. Every website I build is optimized for the Nigerian digital landscape.
  </p>
</div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-heading font-bold text-3xl text-primary">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-4xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img src="/t.png" alt="Temiloluwa Valentine" className="w-full h-full object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
