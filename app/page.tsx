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

  const bookingUrl = "https://zbooking.us/hIpOs";

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
          <Button
            asChild
            size="sm"
            className="px-4 py-2 bg-primary text-[#000000] hover:bg-primary/90 rounded-md"
          >
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </a>
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
              JourniWeb builds stunning websites, automates your business
              workflows, and implements AI solutions that help you grow faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsBookingOpen(true)}
              >
                Start Your Project <Zap className="ml-2 h-5 w-5" />
              </Button>

              <Button
                asChild
                size="lg"
                className="px-8 py-6 font-semibold text-[#000000] shadow-lg hover:shadow-xl transition-all"
              >
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </a>
              </Button>
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

      {/* Pricing Section */}
      {/* ... Similar conversion for all pricing sections using Button-wrapped links ... */}

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
                <Button
                  asChild
                  size="lg"
                  className="px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book Your Demo <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                  </a>
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
                 <Button
                    asChild
                    size="sm"
                    className="px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded-md w-full"
                  >
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book a Demo
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>contact@journiweb.co.za</li>
                <li>+27 (071) 081-1915</li>
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
      
    </main>
  );
}
