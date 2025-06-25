import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  PieChart,
  Target,
  Briefcase,
  DollarSign,
  Moon,
  Sun
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LandingPageProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ isDark, setIsDark }) => {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Giroscope.io
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
              <a href="#demo" className="text-sm hover:text-primary transition-colors">Demo</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                Smart dividend tracking & analytics
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold leading-tight mb-6"
            >
              Dividend tracking
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                made simple
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              The ultimate dividend tracking tool for smart investors.
              Track dividends, monitor income growth, and optimize your dividend portfolio effortlessly.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/auth">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Product Preview */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-border">
              <div className="bg-card rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Dividend Dashboard</h3>
                  <Badge variant="outline">Live Preview</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Income</p>
                          <p className="text-2xl font-bold text-green-500">€2,847</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Avg. Yield</p>
                          <p className="text-2xl font-bold text-blue-500">4.2%</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Next Payment</p>
                          <p className="text-2xl font-bold text-purple-500">3 days</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-purple-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Experience the Power</h2>
            <p className="text-xl text-muted-foreground">Try our interactive demo and see the difference yourself</p>
          </motion.div>

          <motion.div
            className="bg-card rounded-3xl p-8 shadow-xl border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                <Play className="mr-2 h-6 w-6" />
                Launch Interactive Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Everything you need for dividend tracking</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dividend management tools designed for individual investors who want to maximize their passive income
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BarChart3,
                title: "Dividend Tracking",
                description: "Track dividend payments by stock with yield calculations and income overviews across your entire portfolio"
              },
              {
                icon: Target,
                title: "Dividend Calendar",
                description: "Never miss a payment with our built-in calendar showing upcoming dividends for all your holdings"
              },
              {
                icon: Zap,
                title: "Import & Export",
                description: "Easily import your portfolio from CSV/Excel files and export data for tax reporting and analysis"
              },
              {
                icon: Globe,
                title: "Multi-Currency",
                description: "Track international dividends with automatic currency conversion and foreign tax considerations"
              },
              {
                icon: Users,
                title: "DRIP Tracking",
                description: "Monitor dividend reinvestment plans and see how compounding affects your portfolio growth"
              },
              {
                icon: Shield,
                title: "Tax Optimization",
                description: "Separate taxable and tax-deferred accounts with detailed reporting for tax season"
              }
            ].map((feature, index) => (
              <motion.div key={`feature-${feature.title}`} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Perfect for every dividend strategy</h2>
            <p className="text-xl text-muted-foreground">Whether you're building passive income or growing wealth, we've got you covered</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Income Investors",
                description: "Build a reliable passive income stream with dividend-focused investing",
                features: ["Monthly income tracking", "Yield optimization", "Payment calendar", "Tax-efficient planning"]
              },
              {
                icon: TrendingUp,
                title: "Growth Investors",
                description: "Combine dividend growth with capital appreciation for long-term wealth building",
                features: ["Dividend growth tracking", "DRIP management", "Compound growth analysis", "Performance metrics"]
              },
              {
                icon: PieChart,
                title: "Retirement Planning",
                description: "Prepare for retirement with strategic dividend portfolio management",
                features: ["Tax-deferred tracking", "Multiple account support", "Forecasting tools", "Withdrawal planning"]
              }
            ].map((strategy, index) => (
              <motion.div
                key={`strategy-${strategy.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <strategy.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{strategy.title}</h3>
                    <p className="text-muted-foreground mb-6">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.features.map((feature, featureIndex) => (
                        <li key={`${strategy.title}-feature-${featureIndex}`} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Dividend Tracker Features</h2>
            <p className="text-xl text-muted-foreground">Advanced tools for individual dividend investors</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Deep insights into your dividend portfolio performance and trends",
                features: ["Dividend growth tracking", "Yield analysis", "Income forecasting", "Performance metrics"]
              },
              {
                icon: Globe,
                title: "Multi-Portfolio Support",
                description: "Manage multiple portfolios across different account types",
                features: ["Taxable accounts", "Retirement accounts", "Custom grouping", "Cross-portfolio analysis"]
              },
              {
                icon: Shield,
                title: "Tax & Compliance",
                description: "Stay compliant with comprehensive tax reporting and tracking",
                features: ["Tax reporting", "Withholding tax tracking", "Account separation", "Export for tax prep"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={`benefit-${benefit.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-6">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={`${benefit.title}-feature-${featureIndex}`} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-foreground mb-8">Choose the plan that fits your needs</p>

            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
              <span className={`text-sm ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Annual</span>
              {isAnnual && <Badge variant="secondary">Save 20%</Badge>}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: 0,
                description: "Perfect for getting started with dividend tracking",
                features: ["Track up to 10 stocks", "Basic dividend calendar", "Simple portfolio overview", "Manual data entry"]
              },
              {
                name: "Premium",
                price: isAnnual ? 7.19 : 7.99,
                originalPrice: isAnnual ? 7.99 : null,
                description: "Complete dividend tracking and analytics",
                features: ["Unlimited stocks", "Advanced analytics", "Import/Export CSV", "Tax reporting", "Multi-currency support", "DRIP tracking"],
                popular: true
              },
              {
                name: "Lifetime",
                price: "€299",
                description: "One-time payment for lifetime access",
                features: ["All Premium features", "Lifetime updates", "Priority support", "Early access to new features", "No recurring fees"]
              }
            ].map((plan, index) => (
              <motion.div
                key={`plan-${plan.name}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      {plan.name === "Free" ? (
                        <span className="text-4xl font-bold">Free</span>
                      ) : plan.name === "Lifetime" ? (
                        <span className="text-4xl font-bold">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">€{plan.price}</span>
                          <span className="text-muted-foreground">/month</span>
                          {isAnnual && plan.originalPrice && (
                            <div className="text-sm text-muted-foreground">
                              <span className="line-through">€{plan.originalPrice}</span>
                              <span className="text-green-500 ml-2">Save 10%</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={`${plan.name}-feature-${featureIndex}`} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/auth" className="block">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.name === "Free" ? "Get Started Free" : plan.name === "Lifetime" ? "Buy Lifetime" : "Start Free Trial"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Loved by dividend investors</h2>
            <p className="text-xl text-muted-foreground">See how Giroscope helps investors optimize their dividend income</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Giroscope has completely transformed how I track my dividend income. I never miss a payment and can easily see my yield trends.",
                author: "Sarah Chen",
                role: "Dividend Investor",
                avatar: "SC"
              },
              {
                quote: "The tax reporting features saved me hours during tax season. All my dividend income is perfectly organized and ready for my accountant.",
                author: "Michael Rodriguez",
                role: "Retiree",
                avatar: "MR"
              },
              {
                quote: "Love the DRIP tracking and forecasting tools. I can see exactly how my reinvested dividends are compounding over time.",
                author: "Emily Johnson",
                role: "Long-term Investor",
                avatar: "EJ"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={`testimonial-${testimonial.author}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`star-${testimonial.author}-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Start building your dividend empire today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of dividend investors using Giroscope to track income, optimize yields, and build lasting wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="text-black">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="/api" className="text-sm text-muted-foreground hover:text-primary">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/docs" className="text-sm text-muted-foreground hover:text-primary">Documentation</a></li>
                <li><a href="/help" className="text-sm text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</a></li>
                <li><a href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</a></li>
                <li><a href="/security" className="text-sm text-muted-foreground hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Giroscope.io
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Giroscope. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
