import React from "react";

const Services = () => {
  const services = [
    {
      title: "Virtual Assistants",
      description: "Dedicated professionals who become an extension of your team, handling day-to-day tasks with precision and care.",
      features: ["Email management", "Calendar coordination", "Travel planning", "Project management"],
    },
    {
      title: "Administrative Support",
      description: "Comprehensive administrative services that keep your business running smoothly while you focus on growth.",
      features: ["Data entry", "Document preparation", "CRM management", "Customer service"],
    },
    {
      title: "Research & Analysis",
      description: "In-depth research and analytical services that provide you with the insights needed for informed decision-making.",
      features: ["Market research", "Competitor analysis", "Lead generation", "Data analysis"],
    },
    {
      title: "Content Creation",
      description: "Professional content development that enhances your brand presence and engages your target audience.",
      features: ["Blog writing", "Social media content", "Email campaigns", "Presentation design"],
    },
  ];

  // Duplicate the services array for seamless looping
  const loopedServices = [...services, ...services];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive virtual assistant services designed to streamline your operations and boost productivity
          </p>
        </div>
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Keyframes animation style */}
          <style>{`
            @keyframes scroll-desktop {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-mobile {
              0% { transform: translateX(0); }
              100% { transform: translateX(-150%); }
            }
            .services-carousel-track {
              display: flex;
              width: 200%; /* Double the width for seamless looping */
              animation: scroll-desktop 50s linear infinite;
            }
            @media (max-width: 640px) {
              .services-carousel-track {
                animation: scroll-mobile 30s linear infinite;
              }
            }
            .services-carousel-card {
              flex: 0 0 25%; /* 4 cards per view */
              min-width: 300px;
              max-width: 350px;
              margin-right: 2rem;
              transition: color 0.3s;
            }
            .services-carousel-card:hover .service-title,
            .services-carousel-card:hover .service-description {
              color: #fff !important;
            }
            .services-carousel-card ul li:hover {
              color: #2563eb !important; /* Tailwind blue-600 */
            }
            @media (max-width: 1024px) {
              .services-carousel-card { flex: 0 0 50%; }
            }
            @media (max-width: 640px) {
              .services-carousel-card { flex: 0 0 80%; }
            }
          `}</style>
          <div className="services-carousel-track">
            {loopedServices.map((service, index) => (
              <div key={index} className="services-carousel-card bg-card p-6 rounded-sm border border-border hover:border-muted transition-colors duration-300">
                <h3 className="service-title text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="service-description text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-foreground rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
