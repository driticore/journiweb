"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendlyModal } from "@/components/calendly-modal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/40 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="JourniWeb Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
          </div>
          <a
            href="https://zbooking.us/hIpOs"
            className="font-semibold"
          >
            Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </a>
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
              JourniWeb builds stunning websites, automates your business
              workflows, and implements AI solutions that help you grow faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Project <Zap className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="https://zbooking.us/hIpOs"
                className="font-semibold"
              >
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How We Work
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Four simple steps to transform your digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Discovery & Planning",
                description:
                  "We understand your business goals and create a custom strategy for your success",
                icon: MessageSquare,
                delay: 100,
              },
              {
                step: 2,
                title: "Design & Development",
                description:
                  "Our team builds your website or automation solution with modern technologies",
                icon: Code,
                delay: 200,
              },
              {
                step: 3,
                title: "Testing & Launch",
                description:
                  "We rigorously test everything and launch your project with full support",
                icon: Workflow,
                delay: 300,
              },
              {
                step: 4,
                title: "Growth & Optimization",
                description:
                  "Ongoing support, updates, and optimization to maximize your results",
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
                  <CardDescription className="text-base leading-relaxed">
                    {description}
                  </CardDescription>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Services
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Full-service web agency offering development, automation, and AI
              solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Website Development",
                description:
                  "Premium, conversion-focused websites and landing pages engineered for speed, SEO dominance, and measurable growth.",
                icon: Globe,
              },
              {
                title: "Business Automation",
                description:
                  "Advanced automation systems that eliminate manual tasks, optimize workflows, and turn your business into a scalable machine.",
                icon: Workflow,
              },
              {
                title: "AI Lead Generation",
                description:
                  "Intelligent AI-powered chatbots and funnels that capture, qualify, and book high-value clients for you 24/7.",
                icon: Bot,
              },
              {
                title: "E-commerce Solutions",
                description:
                  "Enterprise-ready online stores with secure payments, inventory control, and seamless customer experiences.",
                icon: Laptop,
              },
              {
                title: "Mobile-Responsive Design",
                description:
                  "Strategically designed, mobile-first experiences that perform flawlessly across all devices.",
                icon: Smartphone,
              },
              {
                title: "Meta Ads Management",
                description:
                  "Strategic, data-driven Meta ad campaigns built to generate consistent qualified leads and maximize ROI.",
                icon: TrendingUp,
              },
              {
                title: "Business Registration & SMME Support",
                description:
                  "Complete company registration and digital setup services to launch, structure, and position your business for long-term success.",
                icon: Building,
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
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why Choose JourniWeb
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Partner with a modern web agency that delivers results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Modern Technology Stack",
                description:
                  "We use the latest frameworks and tools to build fast, secure, and scalable solutions",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Professional web services at prices that work for South African businesses",
              },
              {
                title: "Fast Turnaround",
                description:
                  "Get your project live quickly without compromising on quality or functionality",
              },
              {
                title: "Ongoing Support",
                description:
                  "We're here after launch with maintenance, updates, and technical assistance",
              },
              {
                title: "SEO Optimized",
                description:
                  "Every website is built with search engine optimization best practices from day one",
              },
              {
                title: "Mobile-First Design",
                description:
                  "All our solutions work beautifully on mobile, tablet, and desktop devices",
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
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          {/** Map all pricing sections dynamically **/}
          {[
            { title: "AI Lead Generation" },
            { title: "Web Development" },
            { title: "Business Automation" },
            { title: "SMME & Business Support" },
          ].map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-12 text-primary">
                {section.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[1, 2, 3].map((_, planIndex) => (
                  <Card
                    key={planIndex}
                    className="relative hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-4 border-2"
                    style={{ animationDelay: `${planIndex * 150}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl">Plan {planIndex + 1}</CardTitle>
                      <CardDescription className="text-base">
                        Pricing depends on your budget
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">
                            Features will be tailored to your business needs
                          </span>
                        </li>
                      </ul>
                      <a
                        href="https://zbooking.us/hIpOs"
                        className="w-full font-semibold"
                      >
                        Get Started <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-2 shadow-xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to 10x Your Lead Generation?
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of businesses using AI to generate more qualified
                leads, close deals faster, and grow predictably.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  size="lg"
                  href="https://zbooking.us/hIpOs"
                  className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
              <Image
                src="/logo.png"
                alt="JourniWeb Logo"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
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
                  <Link href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="mailto:contact@journiweb.co.za" className="hover:text-foreground transition-colors">
                    contact@journiweb.co.za
                  </a>
                </li>
                <li>
                  <a href="tel:+27710811915" className="hover:text-foreground transition-colors">
                    +27 (071) 081-1915
                  </a>
                </li>
                <li>
                  <a href="https://zbooking.us/hIpOs" className="hover:text-foreground transition-colors">
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-foreground/50 text-center">
            &copy; {new Date().getFullYear()} JourniWeb. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Calendly Modal */}
      <CalendlyModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </main>
  );
}
