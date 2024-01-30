import React from "react";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Tools } from "@/components/Tools";

const index = () => {
  return (
    <div>
      <div className="flex-auto py-40">
        <Hero />
      </div>
      <div className="flex-auto pt-40">
        <Info />
      </div>
      <div className="flex-auto py-40">
        <Tools />
      </div>
    </div>
  );
};

export default index;