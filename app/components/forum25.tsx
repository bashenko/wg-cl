"use client";
import { motion } from "framer-motion";
import ForumItem from "./forum/forumItem";

interface Forum25Props {
  intro: string;
  items: { id: number; Title: string; Text: string; Image: string }[] | null; // Allow items to be null
}


// Animation variants with customizable delay
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

export default function Forum25({ intro, items }: Forum25Props) {
  return (
    <div className="flex flex-col justify-center scroll-mt-[100px]" id="forum">
      <div className="flex flex-col sm:grid md:grid-cols-12 sm:grid-cols-4 gap-8 relative">
        {/* Animated heading with no delay */}
        <motion.h4
          className="md:col-span-12 col-span-4 text-wgs-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
        >
          Government Services Forum 2025
        </motion.h4>

        {/* Animated paragraph with 0.2s delay */}
        <motion.p
          className="md:col-span-12 col-span-4 intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)}
        >
          {intro}
        </motion.p>
      </div>

      <div className="grid gap-8 mt-12 xl:grid-cols-12 lg:grid-cols-8 grid-cols-4">
      {items && items.length > 0 ? (
        items
          .filter(item => item.Title && item.Text && item.Image) // Filter out incomplete items
          .map((item, index) => (
            <motion.div
              key={item.id}
              className="xl:col-span-6 col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.4 + index * 0.2)} // Staggered animation
            >
              <ForumItem
                headerText={item.Title}
                paragraphText={item.Text}
                backgroundImage={`/api/proxy/assets/${item.Image}`} // Assuming images are hosted in Directus
              />
            </motion.div>
          ))
        ) : (
          <p>No items available.</p> // Display a message if no items are present
        )}
      </div>
    </div>
  );
}