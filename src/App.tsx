import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ServiceItem } from './types';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactPreselectedService, setContactPreselectedService] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header & Navigation */}
      <Navbar onOpenContact={() => scrollToSection('contact')} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onRequestConsultation={() => scrollToSection('contact')}
        />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Contact Section */}
        <ContactSection preselectedService={contactPreselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />
    </div>
  );
}
