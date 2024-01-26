import React from "react";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";

const index = () => {
  return (
    <div>
      <div className="flex-auto px-40 pt-40 m-40">
        <Hero />
      </div>
      <div className="flex-auto px-50 pt-50 m-40">
        <Info />
      </div>
    </div>
  );
};

export default index;