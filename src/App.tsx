import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ManagementTeamSection } from './components/ManagementTeamSection';
import { TimelineSection } from './components/TimelineSection';
import { CoreCompetenciesSection } from './components/CoreCompetenciesSection';
import { GovernmentRelationsSection } from './components/GovernmentRelationsSection';
import { BusinessCenterSection } from './components/BusinessCenterSection';
import { ClientAdvantagesSection } from './components/ClientAdvantagesSection';
import { OperatingOfficesSection } from './components/OperatingOfficesSection';
import { InternationalClientsSection } from './components/InternationalClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A1B33] font-sans selection:bg-[#1D70B8] selection:text-white">
      
      {/* Executive Corporate Navbar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cover & Brand Identity (Dark Navy #0A1B33) */}
        <Hero />

        {/* About Our Company (Pure White #FFFFFF) */}
        <AboutSection />

        {/* Our Vision & Our Mission (Split: Left Dark Navy #0A1B33, Right Pure White #FFFFFF) */}
        <VisionMissionSection />

        {/* Management Team & Organizational Chart (Pure White #FFFFFF) */}
        <ManagementTeamSection />

        {/* Company Timeline (Dark Navy #0A1B33) */}
        <TimelineSection />

        {/* Core Competencies (Pure White #FFFFFF with Ice-Blue Bars) */}
        <CoreCompetenciesSection />

        {/* Government Relations Checklist (Pure White #FFFFFF) */}
        <GovernmentRelationsSection />

        {/* BIC Business Center (Pure White #FFFFFF) */}
        <BusinessCenterSection />

        {/* Advantages for Clients (Dark Navy #0A1B33) */}
        <ClientAdvantagesSection />

        {/* Operating Offices Across Multiple Countries (Pure White #FFFFFF) */}
        <OperatingOfficesSection />

        {/* International Clients World Map (Dark Navy #0A1B33) */}
        <InternationalClientsSection />

        {/* Contact Us (Dark Navy #0A1B33) */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

    </div>
  );
};

export default App;
