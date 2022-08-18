import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="container min-w-full max-h-screen mx-auto py-24" id="hero">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="mx-auto text-3xl text-center tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl font-display">
          <span className="block xl:inline">Ayam Bakar Madu Joglo</span>
        </h1>
        <Button
          variant="solid-red"
          className="mt-7 text-xs sm:text-base md:text-xl"
          href="#menu"
        >
          Menu Kami
        </Button>
        <p className="mx-auto text-sm sm:text-lg mt-7">
          Jl. Ashofa No.56, Kebon Jeruk, Jakarta Barat
        </p>
        <h1 className="mx-auto mt-24 text-xl text-center tracking-tight font-bold text-gray-900 sm:text-xl md:text-2xl">
          <span className="hidden sm:block">Tersedia di</span>
          <span className="block sm:hidden">Klik untuk memesan online</span>
        </h1>
        <div className=" flex flex-col justify-center items-center text-center sm:flex-row">
          <a href="https://gofood.co.id/jakarta/restaurant/ayam-bakar-madu-joglo-cabang-ashofa-4237adf3-7e24-47f6-97c6-fc3e2119cae1">
            <img
              src="/assets/images/gofood.png"
              alt="gofood"
              className="h-16 md:h-20"
            />
          </a>
          <a href="https://food.grab.com/id/en/restaurant/ayam-bakar-madu-sukabumi-utara-delivery/6-C23DAUDFL253CT">
            <img
              src="/assets/images/grabfood.png"
              alt="grabfood"
              className="h-16 md:h-20"
            />
          </a>
          <a href="https://shopee.co.id/universal-link/now-food/shop/20217028?deep_and_deferred=1&shareChannel=copy_link">
            <img
              src="/assets/images/shopeefood.png"
              alt="shopeefood"
              className="h-16 md:h-20"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
