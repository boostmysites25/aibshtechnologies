import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData = null,
  noindex = false,
  nofollow = false
}) => {
  const location = useLocation();
  const baseUrl = "https://AiBikTechSolutions.com";
  
  const defaultTitle = "AIBSH TECHNOLOGIES PVT LTD - Leading Web Development, Mobile Apps, AI Solutions & Digital Innovation";
  const defaultDescription = "AIBSH TECHNOLOGIES PVT LTD transforms businesses with cutting-edge web development, mobile apps, AI solutions, data science, and custom software. Expert digital innovation partner for modern businesses.";
  const defaultKeywords = "web development, mobile app development, AI solutions, data science, custom software, digital transformation, technology consulting, React development, iOS apps, Android apps, machine learning, artificial intelligence, e-commerce solutions, healthcare technology, fintech solutions";
  const defaultImage = `${baseUrl}/logo.png`;
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;

  useEffect(() => {
    // Calculate final URL and canonical URL inside useEffect - ensure they're defined first
    const currentPath = location.pathname || '/';
    const finalUrl = url || `${baseUrl}${currentPath}`;
    const canonicalUrl = finalUrl && finalUrl.startsWith('http') ? finalUrl : `${baseUrl}${finalUrl || currentPath}`;
    
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
    
    // Robots meta tag
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    else robotsContent.push('index');
    if (nofollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    updateMetaTag('robots', robotsContent.join(', '));
    
    // Additional SEO meta tags
    updateMetaTag('author', 'AIBSH TECHNOLOGIES PVT LTD');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    
    // Update canonical URL - always use absolute URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    
    // Update Open Graph tags
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:url', canonicalUrl);
    updatePropertyTag('og:title', finalTitle);
    updatePropertyTag('og:description', finalDescription);
    updatePropertyTag('og:image', finalImage.startsWith('http') ? finalImage : `${baseUrl}${finalImage}`);
    updatePropertyTag('og:image:width', '1200');
    updatePropertyTag('og:image:height', '630');
    updatePropertyTag('og:image:alt', finalTitle);
    updatePropertyTag('og:site_name', 'AIBSH TECHNOLOGIES PVT LTD');
    updatePropertyTag('og:locale', 'en_US');
    updatePropertyTag('og:locale:alternate', 'en_US');
    
    // Update Twitter tags
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:url', canonicalUrl);
    updatePropertyTag('twitter:title', finalTitle);
    updatePropertyTag('twitter:description', finalDescription);
    updatePropertyTag('twitter:image', finalImage.startsWith('http') ? finalImage : `${baseUrl}${finalImage}`);
    updatePropertyTag('twitter:image:alt', finalTitle);
    updatePropertyTag('twitter:site', '@AIBSHTECH');
    updatePropertyTag('twitter:creator', '@AIBSHTECH');
    
    // Add alternate hreflang tags (if needed for international SEO)
    // Remove existing hreflang tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(link => link.remove());
    
    // Add default hreflang (x-default points to the main language version)
    const hreflangDefault = document.createElement('link');
    hreflangDefault.rel = 'alternate';
    hreflangDefault.hreflang = 'x-default';
    hreflangDefault.href = canonicalUrl;
    document.head.appendChild(hreflangDefault);
    
    // Add English hreflang
    const hreflangEn = document.createElement('link');
    hreflangEn.rel = 'alternate';
    hreflangEn.hreflang = 'en';
    hreflangEn.href = canonicalUrl;
    document.head.appendChild(hreflangEn);

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
  }, [finalTitle, finalDescription, finalKeywords, finalImage, url, type, structuredData, noindex, nofollow, location.pathname, baseUrl]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
