"use client";

import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Contents from "./components/Contents";

const App: React.FC = () => {
  const sections = [
    { id: "about", Component: About },
    { id: "contacts", Component: Contacts },
    { id: "contents", Component: Contents },
  ];

  return (
    <div>
      {sections.map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 1.5 }}
          className="w-full snap-start"
        >
          <Component />
        </motion.section>
      ))}
    </div>
  );
};

export default App;
