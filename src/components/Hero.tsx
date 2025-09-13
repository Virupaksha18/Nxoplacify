import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '2,500+' },
    { icon: Building2, label: 'Partner Companies', value: '150+' },
    { icon: TrendingUp, label: 'Placement Success', value: '95%' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/5 bg-[length:60px_60px] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Gateway to
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Dream Internships
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Centralized platform connecting students with top companies. Track applications, 
            manage deadlines, and never miss an opportunity again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hover transition-bounce"
              asChild
            >
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-smooth"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-smooth hover:bg-white/15">
                    <Icon className="h-8 w-8 text-white mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;