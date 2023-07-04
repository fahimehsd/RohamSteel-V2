import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <main>
        <Hero />
        <About />
      </main>
      <aside>برچسب های خبری</aside>
    </div>
  );
};

export default Home;
