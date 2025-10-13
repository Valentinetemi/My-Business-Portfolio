"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Mail, Clock, Phone, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("https://formspree.io/f/xanpllny", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        })
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
      console.error("Form submission error:", error)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's discuss how I can help grow your Nigerian business. Free consultation available via WhatsApp.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-pulse-glow glow-effect">
            <span className="text-sm font-medium text-primary">⚡ Limited slots available this month</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="hover:glow-effect transition-all duration-500">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-red-600 dark:text-red-400">
                      Something went wrong. Please try again or contact me via WhatsApp.
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={status === "submitting"}
                    className="bg-background/50 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={status === "submitting"}
                    className="bg-background/50 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (WhatsApp)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-background/50 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                    disabled={status === "submitting"}
                    required
                  >
                    <SelectTrigger id="projectType" className="bg-background/50 backdrop-blur-sm">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="automation">AI Automation</SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={status === "submitting"}
                    className="bg-background/50 backdrop-blur-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-secondary/10 border-secondary/30 hover:glow-effect-cyan transition-all duration-500">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                  Quick Contact via WhatsApp
                </CardTitle>
                <CardDescription>Fastest way to reach me - I respond within minutes!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold glow-effect-cyan hover:scale-105 transition-all"
                  onClick={() => window.open("https://wa.me/2347030297942", "_blank")}
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Chat on WhatsApp Now
                </Button>

                <div className="text-center text-sm text-muted-foreground">Available Mon-Sat, 8AM-8PM WAT</div>
              </CardContent>
            </Card>

            <Card className="hover:glow-effect transition-all duration-500">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Other Contact Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card backdrop-blur-sm border border-border">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+234 703 029 7942</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-card backdrop-blur-sm border border-border">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">temiloluwa1402@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-card backdrop-blur-sm border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours (usually faster)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:glow-effect transition-all duration-500">
              <CardContent className="pt-6">
                <h3 className="font-heading font-semibold text-lg mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-xs border border-primary/30">
                      1
                    </span>
                    <span>I'll review your message and respond within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-semibold text-xs border border-secondary/30">
                      2
                    </span>
                    <span>We'll have a free consultation call (WhatsApp or Zoom)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-xs border border-primary/30">
                      3
                    </span>
                    <span>I'll provide a detailed proposal with Naira pricing and timeline</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}