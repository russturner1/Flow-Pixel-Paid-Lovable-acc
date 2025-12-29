import { ExternalLink } from 'lucide-react';
import showcaseElectrician from '@/assets/showcase-electrician.png';
import showcasePrint from '@/assets/showcase-print.png';
import showcaseRenovation from '@/assets/showcase-renovation.png';
import showcaseTshirts from '@/assets/showcase-tshirts.png';

const showcaseItems = [
  {
    title: 'ElectricianSOS',
    description: 'Professional electrical services',
    image: showcaseElectrician,
    url: 'https://mylocaltradesite.co.uk',
  },
  {
    title: 'Formara Print',
    description: 'Award-winning print & marketing',
    image: showcasePrint,
    url: 'https://formara.co.uk',
  },
  {
    title: 'RenoCost',
    description: 'Renovation cost estimator',
    image: showcaseRenovation,
    url: 'https://renocost.co.uk',
  },
  {
    title: 'GallantTees',
    description: 'Custom t-shirt printing',
    image: showcaseTshirts,
    url: 'https://gallanttees.co.uk',
  },
];

export const ShowcaseSection = () => {
  return (
    <section id="showcase" className="section-padding relative">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Websites{' '}
            <span className="text-gradient">We've Built</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real projects for real businesses. See what we can create for you.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {showcaseItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl glass hover:glow-primary transition-all duration-500"
            >
              {/* Preview Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} website screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-primary font-display font-semibold flex items-center gap-2">
                    Visit Site <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
