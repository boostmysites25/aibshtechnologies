import React from "react";
import banner from "../../assets/images/banners/blogs.jpg";
import SEO from "../../components/common/SEO";
// import { Link } from "react-router-dom";

const Blogs = () => {
  // SEO structured data for Blogs page
  const blogsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AIBSH TECHNOLOGIES PVT LTD Insights & Innovation Blog",
    "description": "Stay updated with the latest insights, trends, and innovations in web development, mobile apps, AI solutions, and digital transformation from AIBSH TECHNOLOGIES PVT LTD.",
    "url": "https://aibshtechnologies.in/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "AIBSH TECHNOLOGIES PVT LTD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aibshtechnologies.in/logo.png"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aibshtechnologies.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://aibshtechnologies.in/blogs"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="AIBSH TECHNOLOGIES PVT LTD Insights & Innovation Blog - Latest Tech Trends & Updates"
        description="Stay updated with the latest insights, trends, and innovations in web development, mobile apps, AI solutions, and digital transformation from AIBSH TECHNOLOGIES PVT LTD."
        keywords="technology blog, web development blog, mobile app development blog, AI solutions blog, digital transformation insights, tech trends, software development blog, technology news"
        url="https://aibshtechnologies.in/blogs"
        structuredData={blogsStructuredData}
      />
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="AIBSH TECHNOLOGIES PVT LTD Insights & Innovation Blog Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            AIBSH TECHNOLOGIES PVT LTD Insights & Innovation
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[4rem]">
          <h5 className="text-xl text-center">Coming soon...</h5>
        </div>
      </section>
    </>
  );
};

export default Blogs;
