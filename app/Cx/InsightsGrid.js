import Image from "next/image";

const articles = [
  {
    title:
      "ESI, GenAI & Emerging Technologies in Modern Litigation: What Lawyers Need to Know Now",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=960&q=80",
    alt: "Abstract digital documents and technology visualization",
  },
  {
    title: "Moving From Data Overload to Actionable Insights",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=960&q=80",
    alt: "Modern office workspace with laptops and natural light",
  },
  {
    title: "Million-Record Reality: How to Keep Review Fast and Defensible",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=960&q=80",
    alt: "Skyscrapers viewed from below against the sky",
  },
  {
    title: "The Ethical Reality of GenAI in Legal Practice",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=960&q=80",
    alt: "Laptop on a desk with code on screen",
  },
  {
    title: "A Bigger, Bolder 2026 Is Underway",
    image: "/hero-bg.png",
    alt: "City skyline hero imagery",
  },
  {
    title:
      "Right Discovery & Everlaw Bring the West Coast Roadshow to California",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=960&q=80",
    alt: "Coastal city skyline reflected on water at dusk",
  },
  {
    title:
      "From Debate to Doctrine: The ABA's AI Turning Point",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=960&q=80",
    alt: "Abstract neural network and AI visualization with vivid color",
  },
  {
    title:
      "Rockin' Around the Data Tree: A Holiday Moment in eDiscovery",
    image:
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=960&q=80",
    alt: "Christmas tree decorated with gold and red ornaments",
  },
  {
    title:
      "Shining a Light on Hope: How the Life Preservers Project Champions Survivors Through Community, Advocacy & Heart",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=960&q=80",
    alt: "Grand architecture and winter trees in an urban plaza",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title:
      "eDiscovery Made Simple: Celebrate the Future of Legal Technology",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=960&q=80",
    alt: "Server racks and network cabling in a modern data center",
  },
  {
    title:
      "From Data Dumps to A-Ha Moments: Kevin Leads a Standout Session at Masters Conference Atlanta",
    image: "/hero-bg.png",
    alt: "Atlanta skyline at sunset framed by trees",
  },
  {
    title:
      "Before the Review Begins: How Smart Teams Win with Early Data Insights",
    image: "/relativity-screen.png",
    alt: "Analytics dashboard with charts supporting early case insights",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title:
      "Join Us in Atlanta for The Masters Conference — Where Legal Innovation Meets Southern Momentum",
    image: "/hero-bg.png",
    alt: "Atlanta skyline at dusk with city lights",
  },
  {
    title:
      "See What's Next for GenAI and the Law at Everlaw Summit '25",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=960&q=80",
    alt: "Golden Gate Bridge and bay at sunset",
  },
  {
    title:
      "Big Ideas. Bold Conversations. Real-World Lessons Await at The Masters Conference: Seattle",
    image:
      "https://images.unsplash.com/photo-1549149168-f792fee75371?auto=format&fit=crop&w=960&q=80",
    alt: "Seattle skyline at night with the Space Needle illuminated",
  },
  {
    title:
      "Brotherly Love, Breakthrough Insights: Masters Conference Comes to Philly",
    image:
      "https://images.unsplash.com/photo-1569820747449-ac984142593f?auto=format&fit=crop&w=960&q=80",
    alt: "Philadelphia skyline along a tree-lined avenue toward City Hall at dusk",
  },
  {
    title:
      'Early Case Intelligence: Why "Good Enough" ECA Isn\'t Good Enough Anymore',
    image: "/ediscovery-screen.png",
    alt: "Legal discovery software interface suggesting structured early case analysis",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title:
      "Join us at the Texas Legal Showdown: Dallas Game Night, Sept 10th",
    image:
      "https://images.unsplash.com/photo-1541270946837-e549fefcccc8?auto=format&fit=crop&w=960&q=80",
    alt: "Poker chips and cards during a casual game night",
  },
  {
    title:
      "Taming the Mobile Beast: eDiscovery in the Age of Data Overload",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1cbd886e?auto=format&fit=crop&w=960&q=80",
    alt: "Person holding a smartphone showing messaging or chat",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title:
      "Turning Pressure into Progress: Lessons from Legal Ops Trailblazers",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=960&q=80",
    alt: "Laptop and printed charts showing analytics on a desk",
  },
  {
    title:
      "Not Your Old-School Outsourcing: Offshore Legal Gets an Upgrade",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=960&q=80",
    alt: "Digital globe with interconnected network lines",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title: "GenAI—From Hype to Hands-On",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=960&q=80",
    alt: "Vivid abstract visualization suggesting artificial intelligence and circuits",
  },
  {
    title:
      "Unlocking Social Media Data – Next-Level Discovery & Investigations Support",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=960&q=80",
    alt: "Smartphone home screen with colorful application icons",
  },
  {
    title:
      "THE TAR TRILOGY: Three Cases that Transformed TAR in eDiscovery",
    image: "/everlaw-screen.png",
    alt: "Legal technology interface illustrating predictive coding and review workflows",
  },
  {
    title:
      "Right Discovery Earns ISO 27001 Certification, Strengthening Information Security Across All Services",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=960&q=80",
    alt: "Cybersecurity concept with digital padlock and circuit imagery",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title:
      "Bright Minds, Big Ideas, and a Bite of the Big Apple: The Masters Conference Hits NYC",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0ac62cd8?auto=format&fit=crop&w=960&q=80",
    alt: "New York City skyline at sunset with midtown towers",
  },
  {
    title: "Beyond the Buzz: How Legal Teams Are Really Using AI",
    image: "/caseguild-screen.png",
    alt: "Legal workspace showing folders, documents, and evidence navigation",
  },
  {
    title:
      "Under Attack: Crisis Management Lessons from the Cybersecurity Front Lines",
    image:
      "https://images.unsplash.com/photo-1557599939-ab677504417f?auto=format&fit=crop&w=960&q=80",
    alt: "Laptop displaying a security incident warning with hands at the keyboard",
  },
  {
    title: "Beyond the Bench: How AI Is Rewriting the Legal Playbook",
    image:
      "https://images.unsplash.com/photo-1647169420879-aeda10784191?auto=format&fit=crop&w=960&q=80",
    alt: "Close-up of a processor chip on a circuit board suggesting AI compute",
  },
  {
    title:
      "The Cost of Doing Nothing: Inside the Data Governance Roundtable at the Masters Conference Denver",
    image: "/rocket-screen.png",
    alt: "Data collections dashboard and hosting infrastructure interface",
  },
  {
    title:
      "Legal Holds and Preservation Best Practices in eDiscovery",
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=960&q=80",
    alt: "Computer keyboard highlighting digital preservation and save workflows",
  },
  {
    title: "Tackling Cloud Data Challenges in eDiscovery",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=960&q=80",
    alt: "Digital visualization suggesting hybrid cloud connectivity across regions",
  },
  {
    title: "eDiscovery in Action: How It Is Shaping Legal Strategy",
    image:
      "https://images.unsplash.com/photo-1639322536708-daacfff29683?auto=format&fit=crop&w=960&q=80",
    alt: "Abstract globe mesh suggesting global litigation data networks",
  },
  {
    title:
      "Why You'll Want to Be in the Room at Masters Conference Denver",
    image: "/hero-bg.png",
    alt: "Sunset skyline evoking Masters programming in Denver",
  },
  {
    title:
      "Legal AI in Focus: Unpack What's Next at Legal Geek Chicago",
    image:
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1089fc?auto=format&fit=crop&w=960&q=80",
    alt: "Chicago skyline at night with reflections along the river",
  },
  {
    title:
      "Sustainability in Practice: How Legal Tech Can Lead the Way",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=960&q=80",
    alt: "Young seedlings growing from soil in natural sunlight",
  },
  {
    title:
      "The Privilege Protection Showdown – Kevin's CLE Edition in Washington DC",
    image: "/ceo.png",
    alt: "Kevin Clark representing privilege-focused CLE programming",
  },
  {
    title:
      "AI Meets Litigation: The Game-Changer CLE You Can't Miss!",
    image: "/firm.png",
    alt: "Professional legal professionals collaborating at an educational event",
  },
  {
    title:
      "The Law Firm That Reviewed 126,000 Documents in 1 Day - with AI",
    image: "/everlaw-screen.png",
    alt: "Everlaw-powered review session showcasing accelerated document throughput",
  },
  {
    title:
      "From Data to Strategy - Faster: Right Discovery & CaseGuild Join Forces to Transform Early Case Evaluation",
    image: "/caseguild-screen.png",
    alt: "CaseGuild brand representing early case evaluation partnership",
  },
  {
    title:
      "Revolutionizing AI-Powered Document Review: Right Discovery and eDiscovery AI Announce Strategic Partnership",
    image: "/ediscovery-screen.png",
    alt: "eDiscovery AI logo highlighting strategic partnership announcement",
  },
  {
    title:
      "The Legal Tech Dynasty Returns to Dallas – Masters Conference March 5th",
    image:
      "https://images.unsplash.com/photo-1516466723877-e8ec95cfb397?auto=format&fit=crop&w=960&q=80",
    alt: "Longhorn cattle grazing on Texas pasture beneath blue skies",
  },
  {
    title:
      "Modern Communications, Data and Discovery: Leveraging All Available Data to Tell the Story",
    image: "/relativity-screen.png",
    alt: "Legal analytics dashboard illustrating communications and discovery data",
  },
  {
    title:
      "Masters Conference Los Angeles: AI, Legal Data Intelligence, and the Future of eDiscovery",
    image:
      "https://images.unsplash.com/photo-1549696748-a621dcfac922?auto=format&fit=crop&w=960&q=80",
    alt: "Los Angeles skyline featuring downtown towers under clear skies",
  },
  {
    title:
      "Right Discovery Welcomes Industry Veteran Marla Mohr, CEDS, to Drive Client Growth and Engagement",
    image: "/people.png",
    alt: "Professional portrait collage celebrating leadership hires",
  },
  {
    title:
      "Streamlining Legal Data Review with Continuous Active Learning",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=960&q=80",
    alt: "Colorful nebula imagery representing algorithmic learning in vast datasets",
  },
  {
    title:
      "Kevin's Lone Star Adventure: Right Discovery Heads to Austin for ACEDS eDiscovery Day!",
    image: "/ceo.png",
    alt: "Kevin Clark celebrating ACEDS community programming in Austin",
  },
  {
    title:
      "Navigate the Next Wave: AI, Cybersecurity, and Legal Tech at the Masters Conference",
    image:
      "https://images.unsplash.com/photo-1550684848-fac346659672?auto=format&fit=crop&w=960&q=80",
    alt: "Neon-lit skyline silhouette suggesting emerging legal technology themes",
  },
  {
    title:
      "From Hard Drives to High Crimes: Digital Forensics Meets CSI - Style Investigation",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=960&q=80",
    alt: "Forensic digital investigation concept with dramatic cyber visualization",
    imageClassName: "grayscale contrast-[1.06]",
  },
  {
    title:
      "Right Discovery Enhances Legal Support Services Through a Strengthened and Strategic Partnership with Everlaw",
    image: "/everlaw-screen.png",
    alt: "Everlaw logo marking expanded strategic partnership",
  },
  {
    title:
      "Right Discovery Selects iCONECT as the Preferred Incident Response Review Software Provider",
    image: "/iconet-screen.png",
    alt: "iCONECT incident response review workspace",
  },
  {
    title:
      "Get the Inside Scoop on Next Week's Legal Power Skills Conference: An Exclusive Interview with Rich Robinson",
    image: "/lawyer.png",
    alt: "Legal professionals discussing insights ahead of Legal Power Skills Conference",
  },
  {
    title:
      "From Paper Chase to Pixel Perfect: How eDiscovery Software Evolved and Ushered in a New Era of eDiscovery",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=960&q=80",
    alt: "Stacks of legal paper transitioning toward digital discovery workflows",
  },
  {
    title:
      "Join us for the launch of Masters Conference Legal Power Skills on July 25th in NYC!",
    image: "/firm.png",
    alt: "Legal teammates celebrating a successful conference launch",
  },
  {
    title:
      "Be sure to attend the Masters Conference New York on July 24th!",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0ac62cd8?auto=format&fit=crop&w=960&q=80",
    alt: "New York City skyline at dusk highlighting Masters programming",
  },
  {
    title:
      "EDRM: The Foundational Framework for Conceptualizing the eDiscovery Process",
    image:
      "https://images.unsplash.com/photo-1589829547916-cf909fbdfc40?auto=format&fit=crop&w=960&q=80",
    alt: "Keyboard with magnifying glass emphasizing structured discovery frameworks",
  },
  {
    title: "Mastering eDiscovery Project Management",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=960&q=80",
    alt: "Legal operations professionals collaborating in a conference-style workspace",
  },
  {
    title:
      "Federal Trade Commission Adopts a Comprehensive Ban on New Noncompetes",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=960&q=80",
    alt: "Attorney drafting regulatory guidance related to employment agreements",
  },
  {
    title: "Embracing Change: COVID-19's Ongoing Impact",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=960&q=80",
    alt: "Laboratory setting illustrating public-health-driven operational change",
  },
  {
    title:
      "Masters Conference Washington DC: Modern Data & Devices in Transit Discussion Panel",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=960&q=80",
    alt: "Modern smartphone illustrating mobile discovery and device-centric collections",
  },
  {
    title:
      "Unlocking Efficiency: The Role of Legal Tech in Trial Preparation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=960&q=80",
    alt: "Financial charts and analytics supporting trial preparation workflows",
  },
  {
    title:
      "Harnessing Transformation: GAI's Influence on Legal Project Managers",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=960&q=80",
    alt: "Executive reviewing connected insights on a tablet device",
  },
  {
    title:
      "Join Right Discovery's CEO, Kevin Clark, at the Masters Conference San Diego",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803368640e?auto=format&fit=crop&w=960&q=80",
    alt: "San Diego skyline featuring waterfront towers under sunny skies",
  },
  {
    title:
      "Integrating Digital Forensics & eDiscovery Collection in Modern Litigation",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1cbd886e?auto=format&fit=crop&w=960&q=80",
    alt: "Mobile phone illustrating forensic collection touchpoints in litigation",
  },
  {
    title: "Right Discovery Welcomes Kevin M. Clark as New CEO",
    image: "/ceo.png",
    alt: "Kevin M. Clark headshot welcoming leadership announcement",
  },
  {
    title:
      "Attorney At Law Professional Spotlight: Dominic Harwood",
    image: "/vid-placeholder.png",
    alt: "Professional spotlight graphic pairing editorial coverage with attorney branding",
  },
  {
    title: "Unveiling the Keys to eDiscovery Success",
    image: "/firm.png",
    alt: "Legal leaders collaborating while reviewing discovery outcomes",
  },
  {
    title:
      "Navigating the Digital Maze: The Benefits of eDiscovery Hosting Solutions",
    image: "/rocket-screen.png",
    alt: "Hosted collections dashboard illustrating centralized discovery infrastructure",
  },
  {
    title: "The Crucial Role of eDiscovery Forensics Collection",
    image: "/lawyer.png",
    alt: "Investigators coordinating forensic collection strategies",
  },
  {
    title:
      "Navigating eDiscovery: The Indispensable Role of Project Management",
    image: "/firm.png",
    alt: "Project managers partnering with counsel on discovery timelines",
  },
];

function InsightCard({ title, image, alt, imageClassName }) {
  const isRemote = image.startsWith("http");

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-[#0e5599] shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-video w-full bg-black/30">
        <Image
          src={image}
          alt={alt}
          fill
          unoptimized={isRemote}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover ${imageClassName ?? ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5 md:py-6">
        <h2 className="text-left text-sm font-bold leading-snug text-white sm:text-[15px] md:text-base">
          {title}
        </h2>
      </div>
    </article>
  );
}

export default function InsightsGrid() {
  return (
    <section className="relative overflow-hidden bg-[#333333] px-4 pb-16 pt-2 sm:px-6 sm:pb-20 md:pb-24 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55] mask-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_15%,black_40%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_15%,black_40%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.11) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {articles.map((item) => (
            <InsightCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
