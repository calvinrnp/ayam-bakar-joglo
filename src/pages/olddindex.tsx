import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Meta } from "@/components/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { useRouter } from "next/router";

const OldHome: NextPage = () => {
  const router = useRouter();
  return (
    <div
      // className="bg-[url('https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg')] bg-no-repeat bg-center bg-cover min-h-screen">
      className="flex flex-col justify-center bg-gray-100 min-h-screen min-w-full bg-[url('https://www.nicepng.com/png/detail/24-247272_background-pattern-s-white-background-pattern-png.png')] bg-no-repeat bg-center bg-cover"
    >
      <Meta title="Ayam Bakar Joglo" description="" canonical="/" />
      <Navbar />
      <main className="mx-auto mb-auto min-w-full max-w-7xl h-screen px-4">
        <section className="my-5 h-[70vh]">
          <div className="pt-5 pb-6 px-5">
            <h1 className="text-4xl text-center tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              <span className="block xl:inline">Ayam Bakar Madu Joglo</span>
            </h1>
            <p className="mt-3 text-sm text-center text-gray-500 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              Jl. Assofa No.56, Kebon Jeruk, Jakarta Barat
            </p>
          </div>
        </section>
        <section className="my-5">
          <div className="py-5 h-6/12 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <h1 className="text-4xl text-center tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                <span className="block xl:inline">Ayam Bakar Madu Joglo</span>
              </h1>
              <p className="mt-3 text-sm text-center text-gray-500 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
                Jl. Assofa No.56, Kebon Jeruk, Jakarta Barat
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 border-t-2 border-gray-300">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">Footer</div>
        </div>
      </footer>
    </div>
  );
};

export default OldHome;
