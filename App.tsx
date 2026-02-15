import React, { useState, useEffect } from 'react';
import { Language, ResearchArea, Publication, GalleryItem } from './types';
import { content, educationData, experienceData, publicationsData, awardsData, patentsData, skillsData, projectsData, galleryData } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Patents from './components/Patents';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResearchDetail from './components/ResearchDetail';
import PublicationDetail from './components/PublicationDetail';
import GalleryDetail from './components/GalleryDetail';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import { AnimatePresence } from 'framer-motion';

const Section: React.FC<{ id: string; title?: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-24 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {title && (
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>
      )}
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedResearch, setSelectedResearch] = useState<ResearchArea | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigateHome = () => {
    setSelectedResearch(null);
    setSelectedPublication(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = content[lang];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-500">
        
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          content={t}
          onNavigateHome={handleNavigateHome}
        />
        
        <ScrollToTop />

        {/* Modals */}
        <AnimatePresence>
            {selectedPublication && (
                <PublicationDetail 
                    publication={selectedPublication} 
                    onClose={() => setSelectedPublication(null)} 
                />
            )}
            {selectedGalleryItem && (
                <GalleryDetail 
                    item={selectedGalleryItem}
                    onClose={() => setSelectedGalleryItem(null)}
                />
            )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {selectedResearch ? (
            <ResearchDetail 
              key="detail"
              area={selectedResearch} 
              allPublications={publicationsData}
              content={t}
              onBack={handleNavigateHome}
              onSelectPublication={setSelectedPublication}
            />
          ) : (
            <div key="home" className="animate-fadeIn">
              <Hero content={t} onSelectResearch={setSelectedResearch} />

              <Section id="about" title={t.hero.aboutTitle} className="bg-white dark:bg-slate-900/20">
                <About content={t} education={educationData} />
              </Section>

              <Section id="experience" title={t.sectionTitles.experience}>
                <Experience 
                  experience={experienceData} 
                  content={t}
                />
              </Section>

              <Section id="publications" title={t.sectionTitles.publications}>
                <Publications 
                    publications={publicationsData} 
                    content={t} 
                    onSelect={setSelectedPublication}
                />
              </Section>

              <Section id="patents" title={t.sectionTitles.patents} className="bg-slate-50 dark:bg-slate-900/30">
                 <Patents patents={patentsData} />
              </Section>

              <Section id="awards" title={t.sectionTitles.awards} className="bg-white dark:bg-slate-900/20">
                <Awards awards={awardsData} />
              </Section>

              <Section id="gallery" title={t.sectionTitles.gallery} className="bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
                 <Gallery 
                    items={galleryData} 
                    onSelect={setSelectedGalleryItem}
                 />
              </Section>

              <Section id="projects" title={t.sectionTitles.projects}>
                <Projects projects={projectsData} />
              </Section>

              <Section id="skills" title={t.sectionTitles.skills} className="bg-slate-100 dark:bg-black">
                <Skills skills={skillsData[lang]} />
              </Section>
            </div>
          )}
        </AnimatePresence>

        <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-900">
          <p>&copy; {new Date().getFullYear()} Chengbang Lu. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;
