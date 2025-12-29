import { 
  Building2, 
  Briefcase, 
  Palette, 
  Rocket, 
  MapPin, 
  FileText 
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and drive growth for your business.',
  },
  {
    icon: Briefcase,
    title: 'Small Business Sites',
    description: 'Affordable, effective web presence tailored for small businesses and startups.',
  },
  {
    icon: Palette,
    title: 'Portfolio Websites',
    description: 'Showcase your work beautifully with custom portfolio designs that impress.',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to turn visitors into customers.',
  },
  {
    icon: MapPin,
    title: 'Local Service Sites',
    description: 'Connect with your local community and attract nearby customers.',
  },
  {
    icon: FileText,
    title: 'Blog & Content Sites',
    description: 'Engaging content platforms that keep your audience coming back.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-subtle relative">
      <div className="absolute inset-0 pixel-grid opacity-30" />
      
      <div className="container-wide mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            What We Build
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Websites That{' '}
            <span className="text-gradient">Work for You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From simple landing pages to comprehensive business sites, we deliver websites tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-6 hover:glow-primary transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
