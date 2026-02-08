"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  ChevronRight,
  Bot,
  BarChart3,
  Globe,
  MessageSquare,
  Workflow,
  Code,
  Smartphone,
  Laptop,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendlyModal } from "@/components/calendly-modal"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/40 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="JourniWeb Logo" width={180} height={40} className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
          </div>
          <Button onClick={() => setIsBookingOpen(true)} className="font-semibold">
            Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Web Development · Automation · AI Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Modern Web Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                That Drive Real Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              JourniWeb builds stunning websites, automates your business workflows, and implements AI solutions that
              help you grow faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Project <Zap className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsBookingOpen(true)}
                className="text-lg px-8 py-6 font-semibold border-2"
              >
            Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We Work</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Four simple steps to transform your digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Discovery & Planning",
                description: "We understand your business goals and create a custom strategy for your success",
                icon: MessageSquare,
                delay: 100,
              },
              {
                step: 2,
                title: "Design & Development",
                description: "Our team builds your website or automation solution with modern technologies",
                icon: Code,
                delay: 200,
              },
              {
                step: 3,
                title: "Testing & Launch",
                description: "We rigorously test everything and launch your project with full support",
                icon: Workflow,
                delay: 300,
              },
              {
                step: 4,
                title: "Growth & Optimization",
                description: "Ongoing support, updates, and optimization to maximize your results",
                icon: BarChart3,
                delay: 400,
              },
            ].map(({ step, title, description, icon: Icon, delay }) => (
              <Card
                key={step}
                className="relative border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${delay}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Full-service web agency offering development, automation, and AI solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Website Development",
                description:
                  "Custom websites and landing pages built with modern frameworks for speed, SEO, and conversions",
                icon: Globe,
              },
              {
                title: "Business Automation",
                description:
                  "Streamline operations with workflow automation, CRM integration, and process optimization",
                icon: Workflow,
              },
              {
                title: "AI Lead Generation",
                description: "Intelligent chatbots and automated systems that qualify leads and book appointments 24/7",
                icon: Bot,
              },
              {
                title: "E-commerce Solutions",
                description: "Complete online stores with payment processing, inventory management, and order tracking",
                icon: Laptop,
              },
              {
                title: "Mobile-Responsive Design",
                description: "Beautiful designs that work flawlessly on all devices, from phones to desktops",
                icon: Smartphone,
              },
              {
                title: "Meta Ads Management",
                description: "Strategic ad campaigns with AI-powered targeting to drive qualified traffic and leads",
                icon: TrendingUp,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:border-primary/50 border-2 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose JourniWeb</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Partner with a modern web agency that delivers results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Modern Technology Stack",
                description: "We use the latest frameworks and tools to build fast, secure, and scalable solutions",
              },
              {
                title: "Affordable Pricing",
                description: "Professional web services at prices that work for South African businesses",
              },
              {
                title: "Fast Turnaround",
                description: "Get your project live quickly without compromising on quality or functionality",
              },
              {
                title: "Ongoing Support",
                description: "We're here after launch with maintenance, updates, and technical assistance",
              },
              {
                title: "SEO Optimized",
                description: "Every website is built with search engine optimization best practices from day one",
              },
              {
                title: "Mobile-First Design",
                description: "All our solutions work beautifully on mobile, tablet, and desktop devices",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl hover:bg-muted/50 transition-colors animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          {/* AI Lead Generation Pricing Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">AI Lead Generation</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "R4,999",
                  description: "Perfect for small businesses getting started",
                  features: [
                    "AI Chatbot on 1 website",
                    "Up to 50 leads/month",
                    "Basic CRM integration",
                    "Email support",
                    "Monthly reporting",
                  ],
                  highlighted: false,
                },
                {
                  name: "Growth",
                  price: "R9,999",
                  description: "For growing businesses scaling fast",
                  features: [
                    "AI Chatbot on 3 websites",
                    "Up to 200 leads/month",
                    "Advanced CRM automation",
                    "Priority support",
                    "Weekly reporting",
                    "Custom landing pages",
                    "Meta Ads management",
                  ],
                  highlighted: true,
                },
                {
                  name: "Scale",
                  price: "R19,999",
                  description: "Enterprise-grade automation",
                  features: [
                    "Unlimited websites",
                    "Unlimited leads",
                    "Full workflow automation",
                    "Dedicated account manager",
                    "Real-time reporting",
                    "Custom AI training",
                    "White-label options",
                    "API access",
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-4 ${plan.highlighted ? "border-primary border-4 shadow-lg scale-105" : "border-2"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-foreground/60">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full font-semibold"
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
                    >
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Web Development Pricing Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Web Development</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Landing Page",
                  price: "R2,999",
                  description: "Single page website for your business",
                  features: [
                    "1 custom landing page",
                    "Mobile responsive design",
                    "Contact form integration",
                    "Fast loading speed",
                    "2 rounds of revisions",
                    "1 month free support",
                  ],
                  highlighted: false,
                },
                {
                  name: "Business Website",
                  price: "R7,999",
                  description: "Multi-page website for your business",
                  features: [
                    "Up to 5 custom pages",
                    "Modern responsive design",
                    "SEO optimization",
                    "Contact & booking forms",
                    "Google Analytics setup",
                    "3 rounds of revisions",
                    "3 months free support",
                  ],
                  highlighted: true,
                },
                {
                  name: "E-Commerce",
                  price: "R14,999",
                  description: "Full online store with payment processing",
                  features: [
                    "Up to 50 products",
                    "Payment gateway integration",
                    "Shopping cart & checkout",
                    "Product management system",
                    "Order tracking",
                    "Mobile app-like experience",
                    "Unlimited revisions",
                    "6 months free support",
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-4 ${plan.highlighted ? "border-primary border-4 shadow-lg scale-105" : "border-2"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-foreground/60 text-sm"> one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full font-semibold"
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
                    >
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Automation Pricing Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Business Automation</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Essential",
                  price: "R3,499",
                  description: "Automate your basic workflows",
                  features: [
                    "Up to 3 automation workflows",
                    "Email automation",
                    "Calendar & scheduling",
                    "Basic data syncing",
                    "Setup & training included",
                    "1 month support",
                  ],
                  highlighted: false,
                },
                {
                  name: "Professional",
                  price: "R6,999",
                  description: "Complete automation for growing teams",
                  features: [
                    "Up to 10 automation workflows",
                    "CRM integration",
                    "Invoice & payment automation",
                    "Document generation",
                    "Slack/Teams integration",
                    "Custom reporting",
                    "3 months support",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "R12,999",
                  description: "Advanced automation for scale",
                  features: [
                    "Unlimited workflows",
                    "Multi-platform integration",
                    "AI-powered automation",
                    "Custom API connections",
                    "Advanced analytics",
                    "Dedicated automation specialist",
                    "Priority support",
                    "6 months support",
                  ],
                  highlighted: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-4 ${plan.highlighted ? "border-primary border-4 shadow-lg scale-105" : "border-2"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-foreground/60 text-sm"> one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full font-semibold"
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
                    >
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-2 shadow-xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to 10x Your Lead Generation?</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of businesses using AI to generate more qualified leads, close deals faster, and grow
                predictably.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                  className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/40">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Image src="/logo.png" alt="JourniWeb Logo" width={180} height={40} className="h-8 w-auto" />
              <p className="text-sm text-foreground/60 leading-relaxed">
                AI-powered lead generation and automation for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    Business Automation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    AI Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    E-commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    Mobile-Responsive Design
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-foreground transition-colors">
                    Meta Ads Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <button onClick={() => setIsBookingOpen(true)} className="hover:text-foreground transition-colors">
                    Book a Demo
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>contact@journiweb.com</li>
                <li>+(27) 71-081-1915</li>
                <li className="flex gap-4 pt-2">
                  <Link href="https://www.linkedin.com/in/journiweb-za-a5b80b3a9/" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61578639140595" className="hover:text-foreground transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">© 2025 JourniWeb. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-foreground/60">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <p>Powered by JourniWeb</p>
            </div>
          </div>
        </div>
      </footer>

      <CalendlyModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        calendlyUrl="https://calendly.com/akadinso-osuagwu/30min"
      />
    </main>
  )
}
