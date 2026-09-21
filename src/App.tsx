import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1A2E] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* Main Content Sections representing all 22 pages */}
      <main className="flex-1">
        {/* Page 1: Hero / Cover */}
        <Hero />

        {/* Page 2: About Our Company */}
        <AboutSection />

        {/* Page 3: Our Vision & Our Mission */}
        <VisionMissionSection />

        {/* Page 4: Management Team & Organizational Chart */}
        <ManagementTeamSection />

        {/* Page 5: Company Timeline */}
        <TimelineSection />

        {/* Pages 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18: Core Competencies (All 17) */}
        <CoreCompetenciesSection />

        {/* Page 14: Government Relations 45 Detailed Services */}
        <GovernmentRelationsSection />

        {/* Page 9: BIC Business Center */}
        <BusinessCenterSection />

        {/* Page 19: Client Advantages */}
        <ClientAdvantagesSection />

        {/* Page 20: Operating Offices Across Multiple Countries */}
        <OperatingOfficesSection />

        {/* Page 21: International Clients / World Map */}
        <InternationalClientsSection />

        {/* Page 22: Get in Touch / Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* 22-Page Verification Modal */}
      <DocumentAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
};

export default App;
