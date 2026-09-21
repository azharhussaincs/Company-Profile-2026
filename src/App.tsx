import React, { useState, useEffect } from 'react';
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
import { DocumentAuditModal } from './components/DocumentAuditModal';

export const App: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Track active page based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const pageIds = [
        'page-1', 'page-2', 'page-3', 'page-4', 'page-5', 
        'page-6', 'page-7', 'page-8', 'page-9', 'page-10', 
        'page-11', 'page-12', 'page-13', 'page-14', 'page-15', 
        'page-16', 'page-17', 'page-18', 'page-19', 'page-20', 
        'page-21', 'page-22'
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = pageIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(pageIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentPage(i + 1);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A1B33] font-sans selection:bg-[#1D70B8] selection:text-white">
      
      {/* Executive Navbar with live PDF Page Tracker */}
      <Header 
        onOpenAudit={() => setIsAuditModalOpen(true)} 
        currentPage={currentPage}
      />

      {/* Main Content Sections: Exact 22-Page Sequence */}
      <main className="flex-1">
        {/* Page 1: Cover & Brand Identity (Dark Navy #0A1B33) */}
        <Hero />

        {/* Page 2: About Our Company (Pure White #FFFFFF) */}
        <AboutSection />

        {/* Page 3: Our Vision & Our Mission (Split: Left Dark Navy #0A1B33, Right Pure White #FFFFFF) */}
        <VisionMissionSection />

        {/* Page 4: Management Team & Organizational Chart (Pure White #FFFFFF) */}
        <ManagementTeamSection />

        {/* Page 5: Company Timeline (Dark Navy #0A1B33) */}
        <TimelineSection />

        {/* Pages 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18: Core Competencies (Pure White #FFFFFF with Ice-Blue Bars) */}
        <CoreCompetenciesSection />

        {/* Page 14: 45 Government Relations Checklist (Pure White #FFFFFF) */}
        <GovernmentRelationsSection />

        {/* Page 9: BIC Business Center (Pure White #FFFFFF) */}
        <BusinessCenterSection />

        {/* Page 19: Advantages for Clients (Dark Navy #0A1B33) */}
        <ClientAdvantagesSection />

        {/* Page 20: Operating Offices Across Multiple Countries (Pure White #FFFFFF) */}
        <OperatingOfficesSection />

        {/* Page 21: International Clients World Map (Dark Navy #0A1B33) */}
        <InternationalClientsSection />

        {/* Page 22: Get In Touch! (Dark Navy #0A1B33) */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* 22-Page Verification Audit Modal */}
      <DocumentAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

    </div>
  );
};

export default App;
