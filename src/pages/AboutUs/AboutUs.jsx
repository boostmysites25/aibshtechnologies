import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/our-story.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { circleImg, futureGoals } from "../../content/constant";
import Testimonials from "../../components/common/Testimonials";
import ContactForm2 from "../../components/common/ContactForm2";
import SEO from "../../components/common/SEO";

const AboutUs = () => {
  // SEO structured data for About Us page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About AiBik Tech Solutions - Our Story, Mission & Digital Innovation Journey",
    "description": "Discover AiBik Tech Solutions's journey from innovative ideas to technological reality. Learn about our mission to bridge the gap between business challenges and digital transformation solutions.",
    "url": "https://AiBikTechSolutions.com/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "AiBik Tech Solutions",
      "description": "AiBik Tech Solutions was born from a simple yet powerful vision: to bridge the gap between innovative ideas and technological reality. We believe that every business challenge is an opportunity for digital transformation.",
      "foundingDate": "2020",
      "mission": "To transform businesses through innovative technology solutions and strategic digital partnerships",
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
          "item": "https://AiBikTechSolutions.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://AiBikTechSolutions.com/about-us"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="About AiBik Tech Solutions - Our Story, Mission & Digital Innovation Journey"
        description="Discover AiBik Tech Solutions's journey from innovative ideas to technological reality. Learn about our mission to bridge the gap between business challenges and digital transformation solutions."
        keywords="about AiBik Tech Solutions, digital transformation company, technology innovation, software development company, web development team, mobile app developers, AI solutions provider, data science experts"
        url="https://AiBikTechSolutions.com/about-us"
        structuredData={aboutStructuredData}
      />
      
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="AiBik Tech Solutions About Us Banner - Our Digital Innovation Journey"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            The AiBik Tech Solutions Journey
          </h2>
          <div className="grid md:grid-cols-[40%_1fr] gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-square object-cover"
                alt="AiBik Tech Solutions's story and journey in technology innovation"
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                AiBik Tech Solutions was born from a simple yet powerful vision: to bridge the gap between innovative ideas and technological reality. We believe that every business challenge is an opportunity for digital transformation, and every client relationship is a partnership for success. Our journey began with a team of passionate technologists who understood that great software isn't just about code—it's about understanding human needs, business objectives, and market dynamics. Today, AiBik Tech Solutions stands as a testament to our commitment to excellence, innovation, and client success, delivering cutting-edge solutions that drive real business impact across industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-14 relative">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        />
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h2 className="text2">Beyond Projects: Your Digital Transformation Partner</h2>
            <p className="desc">
              At AiBik Tech Solutions, we're not just a service provider—we're your strategic partner in digital transformation. Our commitment extends far beyond project completion, ensuring your long-term success in an ever-evolving digital landscape.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Strategic Roadmapping: </span>
                Long-term technology planning aligned with your business growth objectives.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Quarterly Business Reviews:{" "}
                </span>{" "}
                Regular strategic sessions to assess performance and identify new opportunities.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Technology Evolution:{" "}
                </span>{" "}
                Proactive updates and modernization as new technologies emerge.
              </li>
              <li>
                <span className="text4 text-primary2">Priority Response Team: </span>{" "}
                Dedicated support for urgent business needs and critical system issues.
              </li>
              <li>
                <span className="text4 text-primary2">Market Intelligence: </span>{" "}
                Industry insights and competitive analysis to inform your strategic decisions.
              </li>
              <li>
                <span className="text4 text-primary2">Growth Acceleration: </span>{" "}
                Scalable solutions and infrastructure to support your business expansion.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="Ongoing Support"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="z-[-2] bg-white text-black py-14 relative overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        <div
          data-aos="fade-up-right"
          className="z-[-1] w-[15rem] h-[20rem] rounded-t-[6rem] bg-gradient-to-b from-primary to-transparent absolute bottom-[-2rem] right-[-2rem] drop-shadow-2xl"
        ></div>
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="Partnership Beyond Projects"
              className="object-contain w-full"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Partnership Beyond Projects</h3>
            <p className="desc">
              At AiBik Tech Solutions, we’re committed to your growth, even after
              project completion: Future
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Planning: </span>
                Insights for growth and adaptation.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Consistent Check-Ins:{" "}
                </span>{" "}
                Regular touchpoints to stay aligned.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Solution Enhancements:{" "}
                </span>{" "}
                Updates as your business evolves.
              </li>
              <li>
                <span className="text4 text-primary2"> Priority Support: </span>{" "}
                Fast assistance for ongoing needs.
              </li>
              <li>
                <span className="text4 text-primary2">Industry Insights: </span>{" "}
                Guidance to keep you competitive.
              </li>
              <li>
                <span className="text4 text-primary2">Flexible Scaling: </span>{" "}
                Adjustments as your demands grow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] lef-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div className="wrapper relative text-center space-y-3">
          <div
            data-aos="fade-up-right"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div>
          <h2 data-aos="fade-up" className="text1 text-primary2">
            AiBik Tech Solutions's Vision for Tomorrow
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            AiBik Tech Solutions envisions a future where technology seamlessly bridges the gap between human potential and digital innovation. We strive to be the catalyst that transforms complex business challenges into elegant, AI-powered solutions that drive measurable impact. Our vision extends beyond traditional software development—we're building the foundation for a world where businesses thrive through intelligent automation, data-driven insights, and collaborative innovation. We're committed to empowering organizations to not just adapt to change, but to lead it, creating sustainable growth and meaningful connections in an increasingly digital world.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            AiBik Tech Solutions's Strategic Roadmap
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 isDark={true} />
    </>
  );
};

export default AboutUs;
