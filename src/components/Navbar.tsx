import { useScrollPosition } from "@/utils/useScrollPositions";
import { Popover, Transition } from "@headlessui/react";
import {
  DocumentTextIcon,
  HomeIcon,
  LocationMarkerIcon,
  MenuIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import { Button } from "./Button";

const navitems = [
  {
    name: "Home",
    description: "Homepage.",
    href: "#hero",
    icon: HomeIcon,
  },
  {
    name: "Menu",
    description: "Pilihan Makanan dan Minuman yang tersedia di restoran kami.",
    href: "#menu",
    icon: DocumentTextIcon,
  },
  {
    name: "Galeri",
    description: "Kami tersedia di berbagai macam platform delivery.",
    href: "#galeri",
    icon: PhotographIcon,
  },
  {
    name: "Lokasi",
    description: "Informasi tentang lokasi restoran kami.",
    href: "#lokasi",
    icon: LocationMarkerIcon,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const scrollPos = useScrollPosition();
  return (
    <Popover
      className={classNames(
        scrollPos > 200 ? "shadow bg-white" : "shadow-none",
        "sticky top-0 z-20 h-full transition-all ease-in-out"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 px-10 xl:px-0 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Ayam Bakar Madu Joglo</span>
              <img
                className={classNames(
                  scrollPos > 50 ? "h-12" : "h-12 sm:h-20",
                  "w-auto transition-all ease-in-out"
                )}
                src={`/assets/images/300px-low-qual.png`}
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navitems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-bold hover:text-gray-500"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="https://wa.me/+6281210994266">
              <svg
                className="w-8 h-8 text-base fill-current hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={"/assets/images/300px-low-qual.png"}
                    alt="Ayam Bakar Madu Joglo"
                  />
                </div>
                {/* <div className="flex">
                  Ayam Bakar Madu Joglo
                </div> */}
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navitems.map((item) => (
                    <Popover.Button>
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-ayam-red"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Button
                  variant="outline-red"
                  href="https://wa.me/+6281210994266"
                >
                  Hubungi Kami di WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
