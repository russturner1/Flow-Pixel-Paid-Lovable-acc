import { Check } from 'lucide-react';

const designStrengths = [
  'Clean, modern design',
  'Smooth user journeys',
  'Strong typography',
  'Brand-aligned colours',
  'Clear, simple layouts',
  'Accessibility-friendly',
];

export const DesignQualitySection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-wide mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Design Quality
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pixel-Perfect Design{' '}
              <span className="text-gradient">That Converts</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe great design is about more than just aesthetics. It's about creating experiences 
              that guide users naturally toward their goals while representing your brand beautifully.
            </p>

            {/* Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {designStrengths.map((strength) => (
                <div key={strength} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main mockup */}
              <div className="glass rounded-2xl p-3 glow-primary">
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                  </div>
                  
                  {/* Content preview */}
                  <div className="p-6 space-y-4">
                    <div className="w-24 h-3 bg-primary/30 rounded-full" />
                    <div className="w-full h-4 bg-muted/50 rounded-full" />
                    <div className="w-4/5 h-4 bg-muted/50 rounded-full" />
                    <div className="w-3/5 h-4 bg-muted/50 rounded-full" />
                    
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <div className="px-6 py-2 bg-primary rounded-lg" />
                      <div className="px-6 py-2 border border-border rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile mockup */}
              <div className="absolute -bottom-8 -right-4 w-32 glass rounded-2xl p-2 glow-accent animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="bg-card rounded-xl overflow-hidden">
                  <div className="p-3 space-y-2">
                    <div className="w-8 h-2 bg-primary/30 rounded-full" />
                    <div className="w-full h-2 bg-muted/50 rounded-full" />
                    <div className="w-4/5 h-2 bg-muted/50 rounded-full" />
                    <div className="aspect-square rounded-md bg-gradient-to-br from-primary/20 to-accent/20 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
