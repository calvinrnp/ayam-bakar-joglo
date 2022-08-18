import { MenuItem } from "./MenuItem";
import { MenuItemTitle } from "./MenuItemTitle";

export const Menu = () => {
  return (
    <section className="py-24" id="menu">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold">Menu</h2>
        <p className="text-lg mt-2 text-gray-600 text-center">
          Selasa-Minggu 09.30-22.00
        </p>
        <div className="container flex px-10 mt-10">
          <div className="grid grid-cols-1 justify-center justify-items-start gap-6 md:grid-cols-2 lg:grid-cols-2 xl:justify-items-center xl:grid-cols-4 ">
            <div className="flex flex-col">
              <MenuItemTitle>Singles</MenuItemTitle>
              <MenuItem
                title="Ayam Bakar Madu"
                desc="Ayam bakar madu, sambal, lalapan..........Rp.15.000"
              />
              <MenuItem
                title="Ayam Bakar Kremes"
                desc="Ayam bakar kremes, sambal, lalapan..........Rp.15.000"
              />
            </div>
            <div className="flex flex-col">
              <MenuItemTitle>Paket</MenuItemTitle>
              <MenuItem
                title="Ayam Bakar Madu Asik"
                desc="Ayam bakar madu, sambal, lalapan, nasi..........Rp20.000"
              />
              <MenuItem
                title="Ayam Bakar Madu Asik Banget"
                desc="Ayam bakar madu, sambal, tempe, tahu, lalapan, nasi..........Rp24.000"
              />
              <MenuItem
                title="Ayam Bakar Kremes Asik"
                desc="Ayam bakar kremes, sambal, lalapan, nasi..........Rp20.000"
              />
              <MenuItem
                title="Ayam Bakar Kremes Asik Banget"
                desc="Ayam bakar kremes, sambal, tempe, tahu, lalapan, nasi..........Rp24.000"
              />
            </div>
            <div className="flex flex-col">
              <MenuItemTitle>Tambahan</MenuItemTitle>
              <MenuItem title="Nasi Putih" desc="Rp5.000" />
              <MenuItem title="Extra Sambal" desc="Rp3.000" />
              <MenuItem title="Tempe Goreng" desc="Rp2.500" />
              <MenuItem title="Tempe Bakar" desc="Rp3.000" />
              <MenuItem title="Tahu Goreng" desc="Rp2.000" />
              <MenuItem title="Tahu Bakar" desc="Rp3.000" />
              <MenuItem title="Telur (Dadar/Ceplok)" desc="Rp5.000" />
              <MenuItem title="Terong Goreng" desc="Rp6.000" />
              <MenuItem title="Kol Goreng" desc="Rp5.000" />
              <MenuItem title="Pete Goreng" desc="Rp10.000" />
            </div>
            <div className="flex flex-col">
              <MenuItemTitle>Minuman</MenuItemTitle>
              <MenuItem title="Es Teh Manis" desc="Rp6.000" />
              <MenuItem title="Es Teh Tawar" desc="Rp3.000" />
              <MenuItem title="Teh Manis Panas" desc="Rp5.000" />
              <MenuItem title="Teh Tawar Panas" desc="Rp2.000" />
              <MenuItem title="Es Jeruk Peras" desc="Rp7.000" />
              <MenuItem title="Jeruk Peras Panas" desc="Rp7.000" />
              <MenuItem title="Air Mineral Botol" desc="Rp5.000" />
              <MenuItem title="Air Mineral Gelas" desc="Rp1.000" />
              <MenuItem title="Lemon Tea" desc="Rp7.000" />
              <MenuItem title="Latte" desc="Iced Rp25.000 / Hot Rp.23.000" />
            </div>
            <p className="text-sm mt-2 text-gray-600 text-start">
              *harga yang ada di platform online delivery mungkin berbeda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
