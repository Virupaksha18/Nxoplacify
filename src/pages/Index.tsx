import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Building2, 
  CheckCircle, 
  Clock,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: 'Centralized Tracking',
      description: 'All your internship opportunities in one place. Never miss a deadline again.',
    },
    {
      icon: Zap,
      title: 'One-Click Apply',
      description: 'Apply to multiple positions instantly with your stored resume and profile.',
    },
    {
      icon: Shield,
      title: 'Real-time Updates',
      description: 'Get instant notifications about application status and interview schedules.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CS Student, IIT Delhi',
      content: 'Got my dream internship at Google thanks to PlacementTracker. The organized approach made all the difference!',
      rating: 5,
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Placement Officer, NIT Warangal',
      content: 'Managing 500+ students is now effortless. The analytics help us track success rates and improve our process.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose PlacementTracker?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your placement process with powerful features designed for both students and faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center shadow-card hover:shadow-hover transition-smooth bg-gradient-card">
                  <CardHeader>
                    <div className="bg-gradient-primary w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Students & Faculty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="shadow-card bg-background">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Placement Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of students and faculty already using PlacementTracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hover transition-bounce"
              asChild
            >
              <Link to="/dashboard">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-smooth"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
