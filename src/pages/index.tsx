import AboutSection from '@components/AboutSection';
import ContactSection from '@components/ContactSection';
import ElementorSection from '@components/ElementorSection';
import HelpSection from '@components/HelpSection';
import HeroSection from '@components/HeroSection';
import PageWrapper from '@components/PageWrapper';
import ServiceSection from '@components/ServiceSection';
import TeamSection from '@components/TeamSection';
const Home = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <ElementorSection />
      <AboutSection className="pt-20" />
      <ServiceSection className="py-20" />
      <HelpSection />
      <TeamSection className="pt-20" />
      <ContactSection className="pt-20" />
    </PageWrapper>
  );
};
export default Home;
