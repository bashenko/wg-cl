"use client";
import { motion } from "framer-motion";
import InternationalItem from "./international/internationalItem";

interface InternationalProps {
  items: { id: number; Name: string; Link: string; Image: string }[] | null; // Allow items to be null
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

export default function International({ items }: InternationalProps) {
  return (
    <div className="flex flex-col justify-center scroll-mt-[100px]" id="international">
      <div className="flex flex-col sm:grid md:grid-cols-12 sm:grid-cols-4 relative">
        <motion.h4
          className="col-span-12 text-wgs-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
        >
          GSF International
        </motion.h4>
      </div>

      <div className="grid gap-8 mt-12 xl:grid-cols-12 lg:grid-cols-8 grid-cols-4">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <motion.div
              key={item.id}
              className="xl:col-span-12 col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.4 + index * 0.2)}
            >
              <InternationalItem
                buttonText={item.Name}
                url={item.Link}
                backgroundImage={`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${item.Image}`} // Adjust URL as needed
              />
            </motion.div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
}