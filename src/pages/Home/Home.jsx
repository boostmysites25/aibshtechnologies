import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/faq.jpeg";
import { Link } from "react-router-dom";
import IndustriesSection from "../../components/common/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import ContactForm2 from "../../components/common/ContactForm2";
import SEO from "../../components/common/SEO";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  // SEO structured data for homepage
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AIBSH TECHNOLOGIES PVT LTD - Leading Web Development, Mobile Apps, AI Solutions & Digital Innovation",
    "description": "AIBSH TECHNOLOGIES PVT LTD transforms businesses with cutting-edge web development, mobile apps, AI solutions, data science, and custom software. Expert digital innovation partner for modern businesses.",
    "url": "https://aibshtechnologies.in",
    "mainEntity": {
      "@type": "Organization",
      "name": "AIBSH TECHNOLOGIES PVT LTD",
      "description": "Leading technology company specializing in digital transformation and innovative software solutions",
      "url": "https://aibshtechnologies.in",
      "logo": "https://aibshtechnologies.in/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8018705115",
        "contactType": "customer service",
        "email": "abc@example.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "226, Saraswati lane, Aravindo nagar, Pandra Square",
        "addressLocality": "Bhuvaneswar",
        "addressRegion": "Khorda",
        "postalCode": "751010",
        "addressCountry": "IN"
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
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="AIBSH TECHNOLOGIES PVT LTD - Leading Web Development, Mobile Apps, AI Solutions & Digital Innovation"
        description="AIBSH TECHNOLOGIES PVT LTD transforms businesses with cutting-edge web development, mobile apps, AI solutions, data science, and custom software. Expert digital innovation partner for modern businesses."
        keywords="web development, mobile app development, AI solutions, data science, custom software, digital transformation, technology consulting, React development, iOS apps, Android apps, machine learning, artificial intelligence, e-commerce solutions, healthcare technology, fintech solutions"
        url="https://aibshtechnologies.in"
        structuredData={homeStructuredData}
      />
      
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            <h1 className="text1 font-montserrat max-w-[60rem]">
              AIBSH TECHNOLOGIES PVT LTD: Where Your Ideas Shape <br />
              <span className="text-primary font-montserrat">
                Tomorrow's Technology
              </span>
            </h1>
            <p className="desc max-w-2xl pb-3">
              At <span className="font-bold">AIBSH TECHNOLOGIES PVT LTD</span>, we're more than just a tech company — we're your innovation partner. With expertise spanning web development, mobile apps, AI solutions, data science, and custom software, we transform your vision into powerful digital solutions that drive real business impact.
            </p>
            <Button to="/contact-us">Get Started</Button>
          </div>

          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="AI Robot representing AIBSH TECHNOLOGIES PVT LTD's innovative technology solutions"
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4">
            <h2 className="text2">
              <span className="text-primary1">Innovation</span> Meets
              Execution at AIBSH TECHNOLOGIES PVT LTD
            </h2>
            <p className="desc hyphens-auto">
              At AIBSH TECHNOLOGIES PVT LTD, we believe that every great innovation starts with a bold idea. We're a team of passionate technologists, designers, and strategists who transform your vision into cutting-edge digital solutions that drive real business results. <br />
              Our comprehensive expertise covers the full spectrum of modern technology: from responsive web applications and native mobile apps to AI-powered automation, data analytics, and immersive gaming experiences. We specialize in creating scalable, secure, and user-centric solutions that adapt to your evolving business needs. <br />
              What sets AIBSH TECHNOLOGIES PVT LTD apart is our collaborative approach. We work closely with you to understand your unique challenges, market position, and growth objectives. This deep partnership enables us to deliver not just technology, but strategic solutions that position your business for success in the digital age.
            </p>
            <div className="flex gap-10 pt-4">
              <Link
                to="/about-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Quick Inquiry
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <img
              data-aos="fade-up"
              loading="lazy"
              src={aboutImg}
              width={500}
              height={600}
              alt="AIBSH TECHNOLOGIES PVT LTD innovation and technology expertise"
              className="max-w-[20rem] md:max-w-max mx-auto w-full h-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>
      <IndustriesSection />
      <ServicesSection />
      <WorkProcess />
      <ContactForm2 />
    </>
  );
}
