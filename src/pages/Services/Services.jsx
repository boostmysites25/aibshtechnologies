import { Link } from "react-router-dom";
import banner from "../../assets/images/banners/services.jpg";
import Testimonials from "../../components/common/Testimonials";
import Faqs from "../../components/common/Faqs";
import CTA from "../../components/common/CTA";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";
import SEO from "../../components/common/SEO";

const Services = () => {
  // SEO structured data for Services page
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Codexa Digital Services",
    "description": "Comprehensive digital services including web development, mobile apps, AI solutions, data science, custom software, game development, and UI/UX design",
    "url": "https://codexa.com/services",
    "itemListElement": ourServices.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.desc,
      "url": `https://codexa.com/services/${createUrlParam(service.title)}`,
      "provider": {
        "@type": "Organization",
        "name": "Codexa"
      }
    })),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://codexa.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://codexa.com/services"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Our Services - Web Development, Mobile Apps, AI Solutions & Digital Innovation"
        description="Explore Codexa's comprehensive digital services including web development, mobile apps, AI solutions, data science, custom software, game development, and UI/UX design."
        keywords="web development services, mobile app development, AI solutions, data science services, custom software development, game development, UI UX design, digital transformation services, technology consulting"
        url="https://codexa.com/services"
        structuredData={servicesStructuredData}
      />
      
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/50 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Codexa Services Banner - Comprehensive Digital Solutions"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-center justify-start">
          <h1 data-aos="fade-right" className="text_xl">
            Our Services
          </h1>
        </div>
      </section>
      <section className="py-14 bg-[#111111]">
        <div className="wrapper grid lg:grid-cols-2 gap-10">
          {ourServices.map((item) => (
            <article data-aos="fade-up" key={item.id} className="lg:last:col-span-2 lg:last:w-1/2 mx-auto">
              <Link
                to={`/services/${createUrlParam(item.title)}`}
                className="group bg-white hover:bg-primary transition-all duration-300 text-black rounded-xl grid sm:grid-cols-2 overflow-hidden"
                aria-label={`Learn more about ${item.title} services`}
              >
                <div className="w-full overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={`${item.title} - ${item.subHeading}`}
                    className="group-hover:scale-110 aspect-[16/11] sm:aspect-[4/3] lg:aspect-square transition-all duration-300 object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 space-y-4">
                  <h2 className="text2">{item.title}</h2>
                  <p className="desc">{item.desc}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Faqs />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Services;
