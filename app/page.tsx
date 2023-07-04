import About from "@/components/About";
import Hero from "@/components/Hero";
import News from "@/components/News";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <main>
        <Hero />
        <About />
        <News />
        <div className="w-full h-10 my-10 bg-slate-200"></div>
      </main>
      <aside>برچسب های خبری</aside>
    </div>
  );
};

export default Home;
