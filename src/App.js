import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./components/website/Layout";
import LandingPageLayout from "./components/landingpage/Layout";

import "aos/dist/aos.css";
import Aos from "aos";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/common/ScrollToTop";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/common/SpinnerContext";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Toaster } from "react-hot-toast";
import WhatsappButton from "./components/common/WhatsappButton";
import Blogs from "./pages/Blogs/Blogs";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Services = lazy(() => import("./pages/Services/Services"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ServiceDetails = lazy(() =>
  import("./pages/ServiceDetails/ServiceDetails")
);

Aos.init({
  once: false,
  duration: 700,
  offset: -250,
});

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BrowserRouter>
        <SpinnerContextProvider>
            <ScrollToTop />
            <WhatsappButton />
            <Toaster />
            <LoadingSpinnerContext />
            <Routes>
              <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:param" element={<ServiceDetails />} />
              </Route>
              <Route path="/" element={<LandingPageLayout />}>
                <Route
                  path="web-development"
                  element={<LandingPage page="web" />}
                />
                <Route
                  path="app-development"
                  element={<LandingPage page="app" />}
                />
              </Route>
               <Route path='/thank-you' element={<ThankYou/>}/>
            </Routes>
        </SpinnerContextProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
