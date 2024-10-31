"use client";
import { motion } from "framer-motion";
import ReportItem from "./reports/reportItem";

interface ReportsProps {
  items: {id: number; Name: string; Image: string; File: string}[] | null;
}

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

export default function Reports({ items }: ReportsProps) {
  return (
    <div className="flex flex-col justify-center scroll-mt-[100px]" id="reports">
      <div className="flex flex-col sm:grid md:grid-cols-12 sm:grid-cols-4 gap-8 relative">
        <motion.h4
          className="col-span-12 text-wgs-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
        >
          Reports
        </motion.h4>
      </div>

      <div className="flex flex-col sm:grid lg:gap-8 gap-4 mt-12 lg:grid-cols-12 grid-cols-4">
      {items && items.length > 0 ? (
          items.map((item, index) => (
          <motion.div
            key={item.id}
            className="lg:col-span-3 col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(0.4 + index * 0.2)} // Staggered animation delay
          >
            <ReportItem
              Name={item.Name}
              File={`http://localhost:8055/assets/${item.File}`}
              backgroundImage={`http://localhost:8055/assets/${item.Image}`}
            />
          </motion.div>
        ))) : (
          <p>No items available.</p> // Display a message if no items are present
        )}
      </div>
    </div>
  );
}