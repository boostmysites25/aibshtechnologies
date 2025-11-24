
import Button from "../../components/common/Button";
import webAboutImg from "../../assets/images/landing page/web-about.jpg";
import appAboutImg from "../../assets/images/landing page/app-about.png";
import IndustriesSection from "../../components/common/IndustriesSection";
import { Link } from "react-scroll";
import ContactForm2 from "../../components/common/ContactForm2";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import { ourServices } from "../../content/ourServices";
import Testimonials from "../../components/common/Testimonials";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import ServicesSlider from "../../components/landingpage/ServicesSlider";
import ClientLogos from "../../components/common/ClientLogos";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import SEO from "../../components/common/SEO";

export default function LandingPage({ page }) {
  const isWeb = page === "web";

  const data = ourServices.find((service) =>
    service.title === isWeb ? "Web Development" : "App Development"
  ).serviceDetails;

  const portfolio = isWeb ? webDevelopmentPortfolio : appDevelopmentPortfolio;

  // SEO data for landing pages
  const seoData = {
    web: {
      title: "Web Development Services - Custom Websites & Web Applications | AIBSH TECHNOLOGIES PVT LTD",
      description: "Elevate your business with cutting-edge web solutions. AIBSH TECHNOLOGIES PVT LTD creates custom-built websites and web applications designed to deliver exceptional user experiences and drive business growth.",
      keywords: "web development, custom websites, web applications, responsive design, e-commerce websites, React development, frontend development, backend development, full-stack development",
      url: "https://aibshtechnologies.in/web-development"
    },
    app: {
      title: "Mobile App Development - iOS & Android Apps | AIBSH TECHNOLOGIES PVT LTD",
      description: "Transform your business with next-generation mobile apps. AIBSH TECHNOLOGIES PVT LTD crafts custom-built mobile applications for iOS, Android, and cross-platform environments that drive engagement and growth.",
      keywords: "mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile applications, app design, mobile development",
      url: "https://aibshtechnologies.in/app-development"
    }
  };

  // Structured data for landing pages
  const landingPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isWeb ? "Web Development Services" : "Mobile App Development Services",
    "description": isWeb 
      ? "Custom web development services including responsive websites, web applications, and e-commerce solutions"
      : "Custom mobile app development services for iOS, Android, and cross-platform applications",
    "url": seoData[isWeb ? 'web' : 'app'].url,
    "provider": {
      "@type": "Organization",
      "name": "AIBSH TECHNOLOGIES PVT LTD",
      "url": "https://aibshtechnologies.in"
    },
    "serviceType": isWeb ? "Web Development" : "Mobile App Development",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
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
          "name": isWeb ? "Web Development" : "App Development",
          "item": seoData[isWeb ? 'web' : 'app'].url
        }
      ]
    }
  };

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

  const currentSeoData = seoData[isWeb ? 'web' : 'app'];

  return (
    <>
      <SEO 
        title={currentSeoData.title}
        description={currentSeoData.description}
        keywords={currentSeoData.keywords}
        url={currentSeoData.url}
        structuredData={landingPageStructuredData}
      />
      
      <section className="min-h-screen flex items-center relative">
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            {isWeb ? (
              <h1 className="text1 font-montserrat max-w-[60rem]">
                Elevate Your Business with Cutting-Edge{" "}
                <span className="text-primary font-montserrat">
                  Web Solutions
                </span>
              </h1>
            ) : (
              <h1 className="text1 font-montserrat max-w-[55rem]">
                Elevate Your Business with Next-Generation{" "}
                <span className="text-primary font-montserrat">
                  Mobile Apps
                </span>
              </h1>
            )}
            <p className="desc max-w-2xl pb-3">
              {isWeb
                ? "Your website is the digital face of your business. It deserves to be innovative, user-friendly, and aligned with the latest trends. At AIBSH TECHNOLOGIES PVT LTD, we create custom-built web solutions designed to deliver exceptional user experiences, seamless functionality, and business growth."
                : "Your business deserves a mobile app that not only meets today's needs but is ready for the challenges of tomorrow. At AIBSH TECHNOLOGIES PVT LTD, we craft custom-built mobile applications that deliver seamless user experiences, drive engagement, and accelerate growth across iOS, Android, and cross-platform environments."}
            </p>
            <Button scrollTo="contact" offset={100}>
              Get Started
            </Button>
          </div>

          {/* <div className="h-[50vh] translate-y-[5rem] lg:h-full w-full lg:w-2/3 lg:absolute -right-[10%] top-1/2 lg:-translate-y-1/2 z-10">
            <Spline
              className=""
              scene="https://prod.spline.design/4q-1rQRL9NalrNPY/scene.splinecode"
            />
          </div> */}
          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            {/* translate-y-[5rem] lg:h-full w-full lg:w-2/3 lg:absolute -right-[10%] top-1/2 lg:-translate-y-1/2 */}
            {/* <Spline
              className=""
              scene="https://prod.spline.design/4q-1rQRL9NalrNPY/scene.splinecode"
            /> */}
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcset={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt={isWeb ? "AI Robot representing AIBSH TECHNOLOGIES PVT LTD's web development solutions" : "AI Robot representing AIBSH TECHNOLOGIES PVT LTD's mobile app development solutions"}
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain"
            />
          </div>
        </div>
      </section>
      <section id="about" className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4 w-full">
            <h3 className="text2">
              Welcome to{" "}
              <span className="text-primary1">
                AIBSH TECHNOLOGIES PVT LTD {isWeb ? "Web" : "App"} Solutions
              </span>
            </h3>
            <h3 className="text2">
              Where Your{" "}
              <span className="text-primary1">
                {isWeb
                  ? "Vision Meets Our Expertise"
                  : "Ideas Turn into Powerful Apps"}
              </span>
            </h3>
            <p
              className="desc hyphens-auto w-full"
              dangerouslySetInnerHTML={{
                __html: isWeb
                  ? `At AIBSH TECHNOLOGIES PVT LTD, we specialize in building high-performance,
              scalable, and visually stunning websites that drive business
              growth. Our team of experts transforms your ideas into powerful
              digital experiences, ensuring a strong online presence for your
              brand. <br/> Our services include custom website development, e-commerce
              solutions, web application development, UI/UX design, SEO
              optimization, and CMS integrations. We leverage the latest
              technologies and best practices to deliver fast, secure, and
              user-friendly web solutions tailored to your business needs.
              <br/> Collaboration is at the heart of what we do. By prioritizing your
              requirements, we craft web solutions that enhance engagement,
              boost conversions, and ensure long-term success in the digital
              landscape.`
                  : `At AIBSH TECHNOLOGIES PVT LTD, we specialize in building high-performance, scalable, and 
    user-friendly mobile and web applications that bring your vision to life. 
    Whether you need a native mobile app, cross-platform solution, or a custom 
    web application, we leverage the latest technologies to create seamless 
    digital experiences. <br/> Our expertise includes iOS and Android app development, progressive web apps 
    (PWAs), UI/UX design, app integrations, API development, and cloud-based 
    solutions. We ensure your app is optimized for performance, security, and 
    user engagement, helping your business stand out in the competitive digital 
    space. <br/> Collaboration is at the core of what we do. By prioritizing your requirements, 
    we develop apps that are innovative, efficient, and built for long-term success.`,
              }}
            ></p>
            <h5 className="text4">
              <span className="text-[#FFD63C]">AIBSH TECHNOLOGIES PVT LTD:</span>{" "}
              {isWeb
                ? "Empowering Your Web Presence with Innovation."
                : "Crafting the Future of Mobile Apps."}
            </h5>
            <div className="flex gap-10 pt-4">
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
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
              src={isWeb ? webAboutImg : appAboutImg}
              width={500}
              height={600}
              alt=""
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <ServicesSlider
        service={isWeb ? "Web" : "App"}
        data={data.ourExpertiseContent}
      />
      <IndustriesSection />
      <DevelopmentProcess content={data.developmentProcess} />
      <section id="works" className="py-14">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center text-primary">
            Few of our Works
          </h2>
          <div className="flex flex-wrap justify-center gap-7 pt-8">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="group relative aspect-square sm:w-[calc(100%/2-1.75rem)] lg:w-[calc(100%/3-1.75rem)] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-110 transition-all duration-500"
                />
                <h5 className="text3 absolute w-full bottom-0 left-0 py-3 bg-primary text-black text-center">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      <Testimonials />
      <ContactForm2 />
    </>
  );
}
