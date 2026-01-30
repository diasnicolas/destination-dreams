import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  ogImage?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  ogImage,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string, attribute: string = "content") => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement("meta");
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) element.setAttribute("name", name);
        } else if (selector.startsWith('meta[property=')) {
          const property = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (property) element.setAttribute("property", property);
        }
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', ogTitle || title);
    updateMetaTag('meta[property="og:description"]', ogDescription || description);
    
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', ogImage);
    }

    // Update Twitter tags
    updateMetaTag('meta[name="twitter:title"]', twitterTitle || ogTitle || title);
    updateMetaTag('meta[name="twitter:description"]', twitterDescription || ogDescription || description);

    // Cleanup function to reset to default when component unmounts
    return () => {
      document.title = "WE Travel UK | Viagens Exclusivas em Grupo";
    };
  }, [title, description, keywords, ogTitle, ogDescription, twitterTitle, twitterDescription, ogImage]);

  return null;
};
