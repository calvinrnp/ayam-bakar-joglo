import { Card } from "./Card";

export const FoodGrid = () => {
  return (
    <section className="py-24 bg-hero px-10" id="galeri">
      <div className="container mx-auto px-10 ">
          <div className="flex justify-center items-center space-x-4 md:space-x-32 mt-10">
            <Card
              title=""
              titleClassName="text-right"
              image="/assets/images/ayam-bakar.jpg"
            />
            <Card
              title=""
              titleClassName="text-right"
              image="/assets/images/ayam-goreng.jpg"
            />
          </div>
          <div className="flex justify-center items-center space-x-4 md:space-x-32 mt-1">
            <Card
              title=""
              image="/assets/images/sate.jpg"
            />
            <Card
              title=""
              image="/assets/images/tempe.jpg"
            />
          </div>
      </div>
    </section>
  );
};
