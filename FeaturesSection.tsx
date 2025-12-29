import { 
  Smartphone, 
  Search, 
  Mail, 
  Image, 
  PenTool, 
  Navigation,
  Zap,
  Sparkles,
  MapPin,
  Share2
} from 'lucide-react';

const features = [
  { icon: Smartphone, title: 'Fully Responsive', description: 'Perfect on every device' },
  { icon: Search, title: 'SEO-Ready', description: 'Built to rank on Google' },
  { icon: Mail, title: 'Contact Forms', description: 'Easy lead capture' },
  { icon: Image, title: 'Image Galleries', description: 'Showcase visuals beautifully' },
  { icon: PenTool, title: 'Blog Setup', description: 'Share your stories' },
  { icon: Navigation, title: 'Clear Navigation', description: 'Intuitive user flow' },
  { icon: Zap, title: 'Fast Loading', description: 'Optimized performance' },
  { icon: Sparkles, title: 'Smooth Animations', description: 'Polished interactions' },
  { icon: MapPin, title: 'Google Maps', description: 'Location integration' },
  { icon: Share2, title: 'Social Linking', description: 'Connect your platforms' },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Features & Functionality
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Site{' '}
            <span className="text-gradient">Needs to Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every website comes packed with essential features to help your business thrive online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
