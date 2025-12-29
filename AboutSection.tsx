import { Zap, Eye, Users } from 'lucide-react';
import showcaseElectrician from '@/assets/showcase-electrician.png';
import showcasePrint from '@/assets/showcase-print.png';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-wide mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              
              {/* Main visual container - stacked website previews */}
              <div className="relative">
                {/* Back card */}
                <div className="absolute top-6 left-6 right-0 glass rounded-2xl overflow-hidden opacity-60 transform rotate-3">
                  <img 
                    src={showcasePrint} 
                    alt="Website example" 
                    className="w-full aspect-video object-cover object-top"
                  />
                </div>
                
                {/* Front card */}
                <div className="relative glass rounded-2xl overflow-hidden glow-primary transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={showcaseElectrician} 
                    alt="Website example" 
                    className="w-full aspect-video object-cover object-top"
                  />
                </div>
              </div>

              {/* Satisfaction badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="text-xs text-muted-foreground">Satisfaction</p>
                <p className="font-display text-xl font-bold text-accent">100%</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              About Flowpixel
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Modern Websites Built Around{' '}
              <span className="text-gradient">Clarity & Speed</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Flowpixel creates modern websites built around clarity, speed and user experience. 
              We combine clean design with practical functionality to help businesses stand out online.
            </p>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Lightning Fast</h3>
                  <p className="text-muted-foreground text-sm">
                    Optimized for speed and performance, ensuring your visitors never wait.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Beautifully Designed</h3>
                  <p className="text-muted-foreground text-sm">
                    Clean, modern aesthetics that make your brand shine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">User-Focused</h3>
                  <p className="text-muted-foreground text-sm">
                    Every element designed with your visitors in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
