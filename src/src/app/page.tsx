"use client";

import React from "react";
import Presentation from "./components/Presentation";
import ExamsSection from "./exams/page";

// home page :)
const App: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <Presentation />
      <ExamsSection />
    </div>
  );
};

export default App;
