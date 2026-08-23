import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { ChatWidget } from "@/components/site/ChatWidget";
import { BackToTop } from "@/components/site/BackToTop";
import { siteConfig } from "@/config/site";

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let node = document.head.querySelector<HTMLMetaElement>(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(node);
  }
  node.content = content;
}

export default function App() {
  useEffect(() => {
    document.title = siteConfig.seoTitle;
    setMeta("description", siteConfig.seoDescription);
    setMeta("author", siteConfig.name);
    setMeta("og:site_name", siteConfig.name, true);
    setMeta("og:title", siteConfig.seoTitle, true);
    setMeta("og:description", siteConfig.seoDescription, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <QuoteCta />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
