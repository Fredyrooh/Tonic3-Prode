import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

export const PodiumTable3 = () => {
  const [data, setData] = useState([
    {premio: "🥉 Auto 0km BMW"},
  ]);

  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
        delay: 5.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        className="container mx-auto grid md:gap-2 mt-6 place-items-center"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {data.map((premio, i) => (
          <motion.div className="w-96 py-5 px-5 text-center rounded-xl" style={{ background: "#172236" }} key={i} variants={item}>
            <span className="text-white">{premio.premio}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
