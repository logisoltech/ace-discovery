import Footer from "../Cx/Footer";
import Nav from "../Cx/Nav";
import TechnologyHero from "../Cx/TechnologyHero";
import TechnologyRow from "../Cx/TechnologyRow";

export default function TechnologyPage() {
  return (
    <main className="relative bg-black">
      <Nav />
      <TechnologyHero />
      <TechnologyRow
        screenSrc="/everlaw-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/everlaw.png"
        logoWidth={500}
        logoHeight={107}
        logoAlt="Everlaw"
        description="Everlaw's advanced technology empowers organizations to navigate the increasingly complex ediscovery landscape, tackle the most pressing technological challenges, and chart a straighter path to the truth—transforming their approach to discovery and litigation in the process."
      />
      <TechnologyRow
        reverse
        cardClassName="bg-white/21"
        arrowLinkClassName="text-[#5eb3ff] hover:text-[#93c5fd]"
        screenSrc="/relativity-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/relativity.png"
        logoWidth={1998}
        logoHeight={545}
        logoAlt="RelativityOne"
        description="RelativityOne's state-of-the-art AI technology allows organizations to increase their productivity by pulling data straight from the source without leaving the cloud. Their automated systems and proactive data protection integrations streamline the entire process, thus reducing time, cost and risk with one end-to-end tool."
      />
      <TechnologyRow
        screenSrc="/caseguild-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/caseguild.png"
        logoWidth={500}
        logoHeight={107}
        logoAlt="CaseGuild"
        description="CaseGuild is building the industry's most advanced evidence reasoning platform. We assist legal teams in complex litigation to find key evidence that supports their cases. As a growing startup based in Seattle, we are passionate about delivering innovative solutions that make a tangible impact on the legal industry."
      />
      <TechnologyRow
        reverse
        cardClassName="bg-white/21"
        arrowLinkClassName="text-[#5eb3ff] hover:text-[#93c5fd]"
        screenSrc="/iconet-screen.png"
        screenWidth={800}
        screenHeight={600}
        logoSrc="/iconet.png"
        logoWidth={1600}
        logoHeight={358}
        logoAlt="iCONECT"
        description="iCONECT is a team of experienced, creative, agile problem solvers obsessed with simplifying your data. Focused on four primary pillars – Legal, Government, Data Governance, and Incident Response Data Mining – relying on a single underlying platform and providing world-class support services to empower their clients in any vertical. Their software solutions are highly secure, scalable, and easy-to-use, allowing for the ability to gain big data insights quickly, easily, and affordably, whether on site or in the cloud."
      />
      <TechnologyRow
        screenSrc="/ediscovery-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/ediscovery.png"
        logoWidth={500}
        logoHeight={107}
        logoAlt="eDiscovery AI"
        description="eDiscovery AI is at the forefront of legal technology, providing AI-powered solutions to streamline and optimize the document review process. eDiscovery AI's mission is to empower legal teams with advanced AI technology that maximizes efficiency, enhances accuracy and improves cost effectiveness. eDiscovery AI's suites of solutions – Early Case Intelligence, Review, Privacy, and Multimedia – deliver industry leading features, speed and accuracy."
      />
      <TechnologyRow
        reverse
        cardClassName="bg-white/21"
        arrowLinkClassName="text-[#5eb3ff] hover:text-[#93c5fd]"
        screenSrc="/rocket-screen.png"
        screenWidth={1000}
        screenHeight={750}
        logoSrc="/rocket.png"
        logoWidth={500}
        logoHeight={141}
        logoAlt="Rocketcloud"
        description="Rocketcloud is a browser-based application that organizes the entire digital investigation process into a single dashboard. Their 24/7 collection and delivery service relieves the burden of eDiscovery from its users and prioritizes data collections to allow organizations more time for analysis."
      />
      <Footer/>
    </main>
  );
}
