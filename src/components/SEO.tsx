import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Dream Travels";
const DEFAULT_OG_IMAGE = "/favicon.jpeg";

const SEO = ({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonical,
  noIndex = false,
}: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);

    // Robots
    if (noIndex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    // Open Graph
    setMeta("property", "og:title", title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    } else if (link) {
      link.remove();
    }

    return () => {
      // Cleanup on unmount — reset to defaults
      document.title = `${SITE_NAME} - Live Your Dream`;
    };
  }, [title, description, ogImage, ogType, canonical, noIndex]);

  return null;
};

export default SEO;
