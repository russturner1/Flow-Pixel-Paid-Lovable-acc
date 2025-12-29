import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pixel-grid">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating Pixels */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-sm animate-float opacity-60" />
      <div className="absolute top-40 left-32 w-3 h-3 bg-accent rounded-sm animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-primary/80 rounded-sm animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-accent/80 rounded-sm animate-float opacity-60" style={{ animationDelay: '0.5s' }} />

      <div className="container-wide mx-auto px-4 md:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">UK-Based Web Design Studio</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Precision Websites{' '}
              <span className="text-gradient">Crafted to Flow</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up stagger-1">
              Flowpixel builds beautiful, fast and functional websites designed to help businesses grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-2">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2" size={18} />
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start animate-fade-in stagger-3">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">UK</p>
                <p className="text-xs text-muted-foreground">Based Support</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground">Managed Service</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Browser Mockup */}
              <div className="glass rounded-2xl p-2 glow-primary animate-float">
                <div className="bg-card rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground w-fit">
                        flowpixel.co.uk
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-card to-accent/10 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 p-8">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 glass rounded-xl p-4 animate-float glow-accent" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Site Live!</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
