import banner from "../../assets/images/banners/contactus.png";
import { Link, useNavigate } from "react-router-dom";
import { IoLocation, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { companyDetails } from "../../content/constant";
import MapComponent from "../../components/website/MapComponent";
import { useContext } from "react";
import { SpinnerContext } from "../../components/common/SpinnerContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import SEO from "../../components/common/SEO";

const ContactUs = () => {
  const { setLoading } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "all",
  });

  // SEO structured data for Contact Us page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AIBSH TECHNOLOGIES PVT LTD - Get in Touch for Digital Innovation Solutions",
    "description": "Contact AIBSH TECHNOLOGIES PVT LTD for expert web development, mobile apps, AI solutions, and digital transformation services. Get in touch with our team of technology experts.",
    "url": "https://AiBikTechSolutions.com/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "AIBSH TECHNOLOGIES PVT LTD",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": `+91-${companyDetails.phone}`,
        "contactType": "customer service",
        "email": companyDetails.email,
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "226, Saraswati lane, Aravindo nagar, Pandra Square",
        "addressLocality": "Bhuvaneswar",
        "addressRegion": "Khorda",
        "postalCode": "751010",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "20.2961",
        "longitude": "85.8245"
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
          "name": "Contact Us",
          "item": "https://AiBikTechSolutions.com/contact-us"
        }
      ]
    }
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let body =
        "Full Name : " +
        values.fullName +
        "\n\n" +
        "Email : " +
        values.email +
        "\n\n" +
        "Phone : " +
        values.phone +
        "\n\n" +
        "Message : " +
        values.message +
        "\n\n";

      const data = {
        body,
        name: "AIBSH TECHNOLOGIES PVT LTD",
        subject: values.subject,
        to: companyDetails.email,
      };

      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        data
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <SEO 
        title="Contact AIBSH TECHNOLOGIES PVT LTD - Get in Touch for Digital Innovation Solutions"
        description="Contact AIBSH TECHNOLOGIES PVT LTD for expert web development, mobile apps, AI solutions, and digital transformation services. Get in touch with our team of technology experts."
        keywords="contact AIBSH TECHNOLOGIES PVT LTD, web development contact, mobile app development contact, AI solutions contact, digital transformation contact, technology consulting contact"
        url="https://AiBikTechSolutions.com/contact-us"
        structuredData={contactStructuredData}
      />
      
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Contact AIBSH TECHNOLOGIES PVT LTD - Get in Touch for Digital Innovation Solutions"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-right"
            className="p-6 space-y-4 rounded-2xl bg-[#EDEDED] text-black"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="space-y-1 grid">
                <label className="text-sm">Full Name</label>
                <input
                  type="text"
                  className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                  placeholder="Enter your full name"
                  {...register("fullName", {
                    required: "Full Name is required",
                    validate: (value) => {
                      if (value.trim() === "") {
                        return "Full Name is required";
                      }
                    },
                  })}
                />
                {errors.fullName && (
                  <small className="text-red-500">
                    {errors.fullName.message}
                  </small>
                )}
              </div>
              <div className="space-y-1 grid">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </div>
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Phone Number</label>
              <input
                type="tel"
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[\d\s\-()]{6,14}\d$/,
                    message: "Entered phone number is invalid",
                  },
                })}
              />
              <small className="text-red-500">{errors.phone?.message}</small>
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (value) => {
                    if (value.trim() === "") {
                      return "Subject is required";
                    }
                  },
                })}
              />
              {errors.subject && (
                <small className="text-red-500">{errors.subject.message}</small>
              )}
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Message</label>
              <textarea
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter your message here"
                {...register("message", {
                  required: "Message is required",
                  validate: (value) => {
                    if (value.trim() === "") {
                      return "Message is required";
                    }
                  },
                })}
              />
              {errors.message && (
                <small className="text-red-500">{errors.message.message}</small>
              )}
            </div>
            <button
              type="submit"
              className="btn bg-[#222222] hover:bg-black w-full text-white"
            >
              Submit Now
            </button>
          </form>
          <div data-aos="fade-up" className="space-y-4">
            <h2 className="text1 text-primary">Get It Touch</h2>
            <div className="h-2 w-[18rem] bg-white"></div>
            <h5 className="text2">
              Let’s Build Something Extraordinary Together!
            </h5>
            <p className="desc">
              Your website is more than an online presence—it’s a gateway to
              success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <ImPhone size={24} className="text-black" />
                </div>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="desc hover:text-primary"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <IoMail size={24} className="text-black" />
                </div>
                <Link
                  to={`mailto:${companyDetails.email}`}
                  className="desc hover:text-primary"
                >
                  {companyDetails.email}
                </Link>
              </div>

              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <IoLocation size={28} className="text-black" />
                </div>
                <p className="desc max-w-[16rem]">{companyDetails.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapComponent />
    </>
  );
};

export default ContactUs;
