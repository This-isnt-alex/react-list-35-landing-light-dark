import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Mail,
  Lock,
  User,
  Github,
  Chrome,
  Eye,
  EyeOff,
  CheckCircle,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthPageProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ isDark, setIsDark }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('login');

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

  const handleSocialAuth = (provider: 'google' | 'github') => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Here you would integrate with your actual auth provider
      console.log(`Authenticating with ${provider}`);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      console.log(`${activeTab} submitted`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Giroscope.io
            </div>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="relative z-10"
          >
            {isDark ? <span>☀️</span> : <span>🌙</span>}
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <motion.div
          className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Side - Marketing Content */}
          <motion.div variants={fadeInUp} className="hidden lg:block space-y-6">
            <Badge variant="secondary" className="mb-4">
              Trusted by 10,000+ investors
            </Badge>
            <h1 className="text-4xl font-bold leading-tight">
              Join the future of
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                portfolio management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get started in minutes and transform how you analyze and manage your investments.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "Bank-level security",
                  description: "Your data is protected with enterprise-grade encryption"
                },
                {
                  icon: Zap,
                  title: "Lightning fast setup",
                  description: "Connect your accounts and start analyzing in under 2 minutes"
                },
                {
                  icon: CheckCircle,
                  title: "No credit card required",
                  description: "Start with our free plan and upgrade when you're ready"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Auth Form */}
          <motion.div variants={fadeInUp}>
            <Card className="glass-card border-border/50 shadow-2xl backdrop-blur-xl">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold">Welcome to Giroscope</CardTitle>
                <CardDescription>
                  Create your account or sign in to continue
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Social Auth Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12 relative overflow-hidden group"
                    onClick={() => handleSocialAuth('google')}
                    disabled={isLoading}
                  >
                    <Chrome className="h-5 w-5 mr-3" />
                    Continue with Google
                    {isLoading && (
                      <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-12 relative overflow-hidden group"
                    onClick={() => handleSocialAuth('github')}
                    disabled={isLoading}
                  >
                    <Github className="h-5 w-5 mr-3" />
                    Continue with GitHub
                    {isLoading && (
                      <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Sign In</TabsTrigger>
                    <TabsTrigger value="register">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-4 mt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="login-email" className="text-sm font-medium">
                          Email address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="login-email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="login-password" className="text-sm font-medium">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded border-border" />
                          <span>Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-primary hover:bg-primary/90"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-4 mt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="register-name" className="text-sm font-medium">
                          Full name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="register-name"
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="register-email" className="text-sm font-medium">
                          Email address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="register-email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="register-password" className="text-sm font-medium">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-start space-x-2 text-sm">
                          <input type="checkbox" className="rounded border-border mt-0.5" required />
                          <span className="leading-relaxed">
                            I agree to the{' '}
                            <a href="#" className="text-primary hover:underline">Terms of Service</a>
                            {' '}and{' '}
                            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                          </span>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-primary hover:bg-primary/90"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                {/* Footer Links */}
                <div className="text-center text-sm text-muted-foreground">
                  Need help?{' '}
                  <a href="#" className="text-primary hover:underline">
                    Contact Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
