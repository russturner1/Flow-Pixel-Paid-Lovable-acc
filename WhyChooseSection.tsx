import { 
  Clock, 
  RefreshCw, 
  PoundSterling, 
  HeadphonesIcon,
  Workflow,
  Sparkles
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Get your website live quickly without compromising quality.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Updates',
    description: 'Simple to update content yourself whenever needed.',
  },
  {
    icon: PoundSterling,
    title: 'Affordable Packages',
    description: 'Quality websites at prices that work for your budget.',
  },
  {
    icon: HeadphonesIcon,
    title: 'UK-Based Support',
    description: 'Real support from real people, right here in the UK.',
  },
  {
    icon: Workflow,
    title: 'Simple Process',
    description: 'Straightforward workflow from concept to launch.',
  },
  {
    icon: Sparkles,
    title: 'Latest AI Tools',
    description: 'Built using cutting-edge technology for better results.',
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-20" />
      
      <div className="container-wide mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Flowpixel
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Success is{' '}
            <span className="text-gradient">Our Priority</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to delivering exceptional results with a process that's easy and enjoyable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-10 text-center glow-primary">
          <div className="text-4xl mb-4">"</div>
          <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
            Flowpixel transformed our online presence. The website is beautiful, fast, and our 
            customers love it. The team was professional, responsive, and delivered exactly what we needed.
          </p>
          <div>
            <p className="font-display font-semibold text-foreground">Sarah Mitchell</p>
            <p className="text-sm text-muted-foreground">Founder, Bloom Creative</p>
          </div>
        </div>
      </div>
    </section>
  );
};
