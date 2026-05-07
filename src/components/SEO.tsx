import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title = "Om Shinde — Builder, Entrepreneur & AI Creator",
  description = "Om Shinde — young builder from India crafting AI tools, websites, SEO growth systems and startup products. Hire a modern digital creator for web development, SEO, and AI solutions.",
  keywords = "Om Shinde, Om Shinde portfolio, web developer India, web developer Pune, SEO expert India, AI developer, startup builder, React developer, full stack developer, freelance web developer India, digital marketing expert",
  image = "https://omshinde.dev/assets/bitmoji.png",
  type = "website",
  author = "Om Shinde",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const location = useLocation();
  const url = `https://omshinde.dev${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Om Shinde Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:creator', '@omshinde');

    // Article specific tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    updateMetaTag('article:author', author, true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Om Shinde",
      "url": "https://omshinde.dev",
      "image": "https://omshinde.dev/assets/bitmoji.png",
      "sameAs": [
        "https://github.com/omshinde2627",
        "https://linkedin.com/in/omshinde",
        "https://twitter.com/omshinde"
      ],
      "jobTitle": "Full Stack Developer & Entrepreneur",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "description": description,
      "knowsAbout": [
        "Web Development",
        "React",
        "TypeScript",
        "SEO",
        "AI Development",
        "Startup Building",
        "Digital Marketing"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Maharashtra"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, type, url, author, publishedTime, modifiedTime]);

  return null;
}
