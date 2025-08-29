import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../../content/constant";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <Link
      to={companyDetails.whatsapp}
      target="_blank"
      className="fixed z-50 bottom-6 right-6 text-[2rem] bg-primary2 text-black border-black border-2 rounded-full p-4 hover:bg-black hover:border-primary2 hover:text-primary2 transition-all duration-300 hover:-translate-y-1"
    >
      <BsWhatsapp />
    </Link>
  );
};

export default WhatsappButton;
