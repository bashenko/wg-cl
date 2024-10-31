"use client"
import Footer from "../components/footer";
// import Menu from "../components/menu/menu";
import Navigation from "../components/navigation/Navigation";
import { motion } from "framer-motion";

// Animation variants with customizable delay
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

export default function Tampere() {
    return (
      <div className="flex flex-col justify-center items-center min-w-full min-h-screen">
        <Navigation forceScrolled={true} />
        <div className="w-full flex flex-grow flex-col gap-28 my-[120px] xl:grid-cols-12 lg:grid-cols-8 grid-cols-4  xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm md:px-0 px-4 ">
        
          <div className="flex flex-col sm:grid md:grid-cols-12 sm:grid-cols-4 gap-8 relative">
            {/* Animated heading with no delay */}
            <motion.h4
              className="md:col-span-12 col-span-4 text-wgs-blue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0)}
            >
              GSF GovTech Lab Tampere
            </motion.h4>

            {/* Animated paragraph with 0.2s delay */}
            <motion.p
              className="md:col-span-12 col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.2)}
            >
              This privacy policy constitutes a part of the Terms & Conditions of this website.<br /><br />
              This website collects no personal information about the viewers and users unless the viewer/user specifically and knowingly decided to provide such information to us.<br /><br />
              If you choose to provide information to us, we use it only to fulfill your request for receiving information, services and participate in the website. By using this website the viewer /user accepts the terms of this Privacy Policy.<br /><br />
              The World Government Summit organization at the UAE Prime Minister’s office reserves the right to modify or amend the terms of our Privacy Policy, Terms& Conditions from time to time without notice. If you wish to continue to use our site it will mean that you accept the Privacy Policy, terms& Conditions and any further post changes.<br /><br />
              This site has security measures in place to protect the loss, misuse, and alteration of the information under the organization control. The organization shall not be responsible for any harm that the user/reviewer or any person may suffer as a result of a breach of confidentiality with respect to information the reviewer/user transmitted to the site.<br /><br />
              Any legal proceedings in connection or arising in relation to this website shall be governed by United Arab Emirates Laws, UAE courts shall have the exclusive jurisdiction over any disputes, claims and legal proceedings in connection or relating to this website.<br />
            </motion.p>
          </div>
        
        </div>
        
        <Footer />
        
      </div>
    );
  }