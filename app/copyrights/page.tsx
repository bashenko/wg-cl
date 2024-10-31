"use client"
import Footer from "../components/footer";
import Menu from "../components/menu/menu";
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

export default function Copyrights() {
    return (
      <div className="flex flex-col justify-center items-center min-w-full min-h-screen">
        <Menu />
        <div className="w-full flex flex-grow flex-col gap-28 my-12 xl:grid-cols-12 lg:grid-cols-8 grid-cols-4  xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm md:px-0 px-4 ">
        
          <div className="flex flex-col sm:grid md:grid-cols-12 sm:grid-cols-4 gap-8 relative">
            {/* Animated heading with no delay */}
            <motion.h4
              className="md:col-span-12 col-span-4 text-wgs-blue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0)}
            >
              Copyrights
            </motion.h4>

            {/* Animated paragraph with 0.2s delay */}
            <motion.p
              className="md:col-span-12 col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.2)}
            >
                All copy right reserved ©2024<br /><br />
                The contents of this Website including, but not limited to, the text, logos, images, files, links and sounds are protected by copyright. All rights reserved copyright, trademark, patent, intellectual and other property rights in the information and services contained in this site provided in any means in the Website. Any unauthorized use or publication or stored in a retrieval system or reproduction or printing of the information, materials and proprietary rights contained in this Website is strictly prohibited for the commercial or marketing use and/ or the copy of the Intellectual property rights.
            </motion.p>
          </div>
        
        </div>
        
        <Footer />
        
      </div>
    );
  }