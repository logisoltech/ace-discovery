import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../Cx/Footer";
import InsightArticleAbaAiTurningPointContent from "../../Cx/InsightArticleAbaAiTurningPointContent";
import InsightArticleAtlantaMastersMomentumContent from "../../Cx/InsightArticleAtlantaMastersMomentumContent";
import InsightArticleBeforeReviewBeginsContent from "../../Cx/InsightArticleBeforeReviewBeginsContent";
import InsightArticleBeyondBenchAiContent from "../../Cx/InsightArticleBeyondBenchAiContent";
import InsightArticleBeyondBuzzAiContent from "../../Cx/InsightArticleBeyondBuzzAiContent";
import InsightArticleBolder2026Content from "../../Cx/InsightArticleBolder2026Content";
import InsightArticleDataGovernanceDenverContent from "../../Cx/InsightArticleDataGovernanceDenverContent";
import InsightArticleDataOverloadContent from "../../Cx/InsightArticleDataOverloadContent";
import InsightArticleDataTreeHolidayContent from "../../Cx/InsightArticleDataTreeHolidayContent";
import InsightArticleEarlyCaseIntelligenceContent from "../../Cx/InsightArticleEarlyCaseIntelligenceContent";
import InsightArticleEdiscoveryMadeSimpleContent from "../../Cx/InsightArticleEdiscoveryMadeSimpleContent";
import InsightArticleEverlawSummit25Content from "../../Cx/InsightArticleEverlawSummit25Content";
import InsightArticleEsiGenaiContent from "../../Cx/InsightArticleEsiGenaiContent";
import InsightArticleGenaiEthicsContent from "../../Cx/InsightArticleGenaiEthicsContent";
import InsightArticleGenaiHypeHandsContent from "../../Cx/InsightArticleGenaiHypeHandsContent";
import InsightArticleIso27001Content from "../../Cx/InsightArticleIso27001Content";
import InsightArticleLegalOpsTrailblazersContent from "../../Cx/InsightArticleLegalOpsTrailblazersContent";
import InsightArticleLifePreserversContent from "../../Cx/InsightArticleLifePreserversContent";
import InsightArticleMastersAtlantaRecapContent from "../../Cx/InsightArticleMastersAtlantaRecapContent";
import InsightArticleMastersNycContent from "../../Cx/InsightArticleMastersNycContent";
import InsightArticleMastersPhillyContent from "../../Cx/InsightArticleMastersPhillyContent";
import InsightArticleMastersSeattleContent from "../../Cx/InsightArticleMastersSeattleContent";
import InsightArticleMillionRecordContent from "../../Cx/InsightArticleMillionRecordContent";
import InsightArticleMobileBeastContent from "../../Cx/InsightArticleMobileBeastContent";
import InsightArticleOffshoreUpgradeContent from "../../Cx/InsightArticleOffshoreUpgradeContent";
import InsightArticleSocialMediaSocmintContent from "../../Cx/InsightArticleSocialMediaSocmintContent";
import InsightArticleTarTrilogyContent from "../../Cx/InsightArticleTarTrilogyContent";
import InsightArticleTexasShowdownContent from "../../Cx/InsightArticleTexasShowdownContent";
import InsightArticleUnderAttackCyberContent from "../../Cx/InsightArticleUnderAttackCyberContent";
import InsightArticleWestCoastRoadshowContent from "../../Cx/InsightArticleWestCoastRoadshowContent";
import {
  DETAIL_SLUG_ABA_AI_TURNING_POINT,
  DETAIL_SLUG_ATLANTA_MASTERS_MOMENTUM,
  DETAIL_SLUG_BEFORE_REVIEW_BEGINS,
  DETAIL_SLUG_BEYOND_BENCH_AI,
  DETAIL_SLUG_BEYOND_BUZZ_AI,
  DETAIL_SLUG_BOLDER_2026,
  DETAIL_SLUG_DATA_GOVERNANCE_DENVER,
  DETAIL_SLUG_DATA_OVERLOAD,
  DETAIL_SLUG_DATA_TREE_HOLIDAY,
  DETAIL_SLUG_EARLY_CASE_INTELLIGENCE,
  DETAIL_SLUG_EDISCOVERY_SIMPLE,
  DETAIL_SLUG_ESI_GENAI,
  DETAIL_SLUG_EVERLAW_SUMMIT_25,
  DETAIL_SLUG_GENAI_ETHICS,
  DETAIL_SLUG_GENAI_HYPE_HANDS,
  DETAIL_SLUG_ISO_27001,
  DETAIL_SLUG_LEGAL_OPS_TRAILBLAZERS,
  DETAIL_SLUG_LIFE_PRESERVERS,
  DETAIL_SLUG_MASTERS_ATLANTA_RECAP,
  DETAIL_SLUG_MASTERS_NYC,
  DETAIL_SLUG_MASTERS_PHILLY,
  DETAIL_SLUG_MASTERS_SEATTLE,
  DETAIL_SLUG_MILLION_RECORD,
  DETAIL_SLUG_MOBILE_BEAST,
  DETAIL_SLUG_OFFSHORE_UPGRADE,
  DETAIL_SLUG_SOCIAL_MEDIA_DISCOVERY,
  DETAIL_SLUG_TAR_TRILOGY,
  DETAIL_SLUG_TEXAS_SHOWDOWN,
  DETAIL_SLUG_UNDER_ATTACK_CYBER,
  DETAIL_SLUG_WEST_COAST_ROADSHOW,
  getInsightBySlug,
  INSIGHT_BRAND_BLUE,
} from "../../Cx/insightArticlesData";
import Nav from "../../Cx/Nav";

const ARTICLE_BODY_BY_SLUG = {
  [DETAIL_SLUG_ESI_GENAI]: InsightArticleEsiGenaiContent,
  [DETAIL_SLUG_DATA_OVERLOAD]: InsightArticleDataOverloadContent,
  [DETAIL_SLUG_MILLION_RECORD]: InsightArticleMillionRecordContent,
  [DETAIL_SLUG_GENAI_ETHICS]: InsightArticleGenaiEthicsContent,
  [DETAIL_SLUG_BOLDER_2026]: InsightArticleBolder2026Content,
  [DETAIL_SLUG_WEST_COAST_ROADSHOW]: InsightArticleWestCoastRoadshowContent,
  [DETAIL_SLUG_ABA_AI_TURNING_POINT]: InsightArticleAbaAiTurningPointContent,
  [DETAIL_SLUG_DATA_TREE_HOLIDAY]: InsightArticleDataTreeHolidayContent,
  [DETAIL_SLUG_LIFE_PRESERVERS]: InsightArticleLifePreserversContent,
  [DETAIL_SLUG_EDISCOVERY_SIMPLE]: InsightArticleEdiscoveryMadeSimpleContent,
  [DETAIL_SLUG_MASTERS_ATLANTA_RECAP]: InsightArticleMastersAtlantaRecapContent,
  [DETAIL_SLUG_BEFORE_REVIEW_BEGINS]: InsightArticleBeforeReviewBeginsContent,
  [DETAIL_SLUG_ATLANTA_MASTERS_MOMENTUM]: InsightArticleAtlantaMastersMomentumContent,
  [DETAIL_SLUG_EVERLAW_SUMMIT_25]: InsightArticleEverlawSummit25Content,
  [DETAIL_SLUG_MASTERS_SEATTLE]: InsightArticleMastersSeattleContent,
  [DETAIL_SLUG_MASTERS_PHILLY]: InsightArticleMastersPhillyContent,
  [DETAIL_SLUG_EARLY_CASE_INTELLIGENCE]: InsightArticleEarlyCaseIntelligenceContent,
  [DETAIL_SLUG_TEXAS_SHOWDOWN]: InsightArticleTexasShowdownContent,
  [DETAIL_SLUG_MOBILE_BEAST]: InsightArticleMobileBeastContent,
  [DETAIL_SLUG_LEGAL_OPS_TRAILBLAZERS]: InsightArticleLegalOpsTrailblazersContent,
  [DETAIL_SLUG_OFFSHORE_UPGRADE]: InsightArticleOffshoreUpgradeContent,
  [DETAIL_SLUG_GENAI_HYPE_HANDS]: InsightArticleGenaiHypeHandsContent,
  [DETAIL_SLUG_SOCIAL_MEDIA_DISCOVERY]: InsightArticleSocialMediaSocmintContent,
  [DETAIL_SLUG_TAR_TRILOGY]: InsightArticleTarTrilogyContent,
  [DETAIL_SLUG_ISO_27001]: InsightArticleIso27001Content,
  [DETAIL_SLUG_MASTERS_NYC]: InsightArticleMastersNycContent,
  [DETAIL_SLUG_BEYOND_BUZZ_AI]: InsightArticleBeyondBuzzAiContent,
  [DETAIL_SLUG_UNDER_ATTACK_CYBER]: InsightArticleUnderAttackCyberContent,
  [DETAIL_SLUG_BEYOND_BENCH_AI]: InsightArticleBeyondBenchAiContent,
  [DETAIL_SLUG_DATA_GOVERNANCE_DENVER]: InsightArticleDataGovernanceDenverContent,
};

export function generateStaticParams() {
  return Object.keys(ARTICLE_BODY_BY_SLUG).map((slug) => ({ slug }));
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article?.hasArticlePage) {
    notFound();
  }

  const ArticleBody = ARTICLE_BODY_BY_SLUG[slug];

  if (!ArticleBody) {
    notFound();
  }

  const isRemote = article.image.startsWith("http");

  return (
    <main className="relative min-h-screen bg-black">
      <Nav />
      <div className="relative w-full min-h-[240px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px]">
        <Image
          src={article.image}
          alt={article.alt}
          fill
          priority
          unoptimized={isRemote}
          sizes="100vw"
          className={`object-cover ${article.imageClassName ?? ""}`}
        />
      </div>
      <header
        className="px-4 py-8 sm:px-6 sm:py-10 md:py-12"
        style={{ backgroundColor: INSIGHT_BRAND_BLUE }}
      >
        <h1 className="mx-auto max-w-4xl text-center text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-tight">
          {article.title}
        </h1>
      </header>
      <div className="bg-black text-white">
        <ArticleBody />
      </div>
      <Footer />
    </main>
  );
}
