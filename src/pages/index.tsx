import type { NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Hero } from "@/components/Hero";
import { FoodGrid } from "@/components/FoodGrid";
import { Menu } from "@/components/Menu";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center bg-hero"></div>
      <div className="relative">
        <Meta title="Ayam Bakar Madu Joglo" description="" canonical="/" />
        <Navbar />
        <Hero />
        <Menu />
        <FoodGrid />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default Home;
