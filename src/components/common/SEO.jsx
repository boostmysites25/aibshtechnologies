import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData = null 
}) => {
  const defaultTitle = "AiBik Tech Solutions - Leading Web Development, Mobile Apps, AI Solutions & Digital Innovation";
  const defaultDescription = "AiBik Tech Solutions transforms businesses with cutting-edge web development, mobile apps, AI solutions, data science, and custom software. Expert digital innovation partner for modern businesses.";
  const defaultKeywords = "web development, mobile app development, AI solutions, data science, custom software, digital transformation, technology consulting, React development, iOS apps, Android apps, machine learning, artificial intelligence, e-commerce solutions, healthcare technology, fintech solutions";
  const defaultImage = "/logo.png";
  const defaultUrl = "https://AiBikTechSolutions.com";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('title', finalTitle);
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    
    // Update Open Graph tags
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:url', finalUrl);
    updatePropertyTag('og:title', finalTitle);
    updatePropertyTag('og:description', finalDescription);
    updatePropertyTag('og:image', finalImage);
    updatePropertyTag('og:site_name', 'AiBik Tech Solutions');
    updatePropertyTag('og:locale', 'en_US');
    
    // Update Twitter tags
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:url', finalUrl);
    updatePropertyTag('twitter:title', finalTitle);
    updatePropertyTag('twitter:description', finalDescription);
    updatePropertyTag('twitter:image', finalImage);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = finalUrl;

    // Add structured data
    if (structuredData) {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.textContent.includes('"@context":"https://schema.org"')) {
          script.remove();
        }
      });

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Reset to default title when component unmounts
      document.title = defaultTitle;
    };
  }, [finalTitle, finalDescription, finalKeywords, finalImage, finalUrl, type, structuredData]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
