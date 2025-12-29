import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: '£750',
    description: 'Perfect for getting started online',
    features: [
      'Single-page website',
      'Contact form',
      'Responsive design',
      'SEO-ready structure',
      'Basic animations',
      '2 revision rounds',
    ],
    featured: false,
  },
  {
    name: 'Business',
    price: '£1,000',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 4 pages',
      'Blog setup',
      'Brand integration',
      'Advanced animations',
      'Google Maps',
      'Social media linking',
      '3 revision rounds',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    price: '£1,500',
    description: 'For comprehensive web presence',
    features: [
      'Up to 6 pages',
      'Multiple contact forms',
      'Advanced layouts',
      'Image galleries',
      'Priority support',
      'Performance optimization',
      '5 revision rounds',
    ],
    featured: false,
  },
];

const managedServices = [
  'Hosting and technical support',
  'Security updates and monitoring',
  'Automated website backups',
  'Up to 2 small content updates per month',
  'On-page SEO and local optimisation upkeep',
  'Conversion and enquiry path checks',
  'Ongoing site performance monitoring',
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the package that fits your needs. No hidden fees, just great websites.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                plan.featured
                  ? 'glass glow-primary scale-105 border-primary/50'
                  : 'glass hover:glow-primary'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'hero' : 'heroOutline'}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Managed Service Add-on */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 lg:p-10 glow-accent">
            <div className="text-center mb-8">
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                Fully Managed Service
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                £75<span className="text-lg font-normal text-muted-foreground">/month</span>
              </h3>
              <p className="text-muted-foreground">
                Sit back and relax while we take care of everything
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {managedServices.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices exclude VAT. Domain purchased separately.
        </p>
      </div>
    </section>
  );
};
