export const Location = () => {
  return (
    <section className="py-24 bg-white" id="lokasi">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl text-center font-bold">Lokasi</h2>
        <p className="text-lg mt-2 text-gray-600 text-center">
          Takeout & Delivery // Indoor & Outdoor Dining
        </p>
        <div className="flex p-10 justify-center items-center h-[600px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.89932047011817!2d106.7789166708071!3d-6.212300945142032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7e3699406b9%3A0x3579da3fa1ff0271!2sAyam%20Bakar%20Madu%20Joglo!5e0!3m2!1sen!2sid!4v1660802707847!5m2!1sen!2sid"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
