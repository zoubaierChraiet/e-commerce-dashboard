import React from "react";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Shirt,
  LayoutList,
  Coins,
  Users2,
  PhoneCall,
  MapPin,
} from "lucide-react";

interface IProps {}

const NavBar: React.FC<IProps> = (props) => {
  return (
    <div className="pt-16 p-4 hidden md:block md:min-w-[250px] border-r-2 mt-5 mb-5">
      <nav className="">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Store
        </h2>
        <div className="space-y-1">
          <Link href="dashboard/products">
            <Button variant="ghost" className="w-full justify-start">
              <Shirt className="mr-2 h-4 w-4" />
              Products
            </Button>
          </Link>
        </div>
        <div className="space-y-1">
          <Link href="dashboard/categories">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutList className="mr-2 h-4 w-4" />
              Categories
            </Button>
          </Link>
        </div>
        <div className="space-y-1">
          <Link href="dashboard/sales">
            <Button variant="ghost" className="w-full justify-start">
              <Coins className="mr-2 h-4 w-4" />
              Sales
            </Button>
          </Link>
        </div>
        <div className="mb-4" />
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Management
        </h2>
        <div className="space-y-1">
          <Link href="dashboard/users">
            <Button variant="ghost" className="w-full justify-start">
              <Coins className="mr-2 h-4 w-4" />
              Users
            </Button>
          </Link>
        </div>
        <div className="space-y-1">
          <Link href="dashboard/orders">
            <Button variant="ghost" className="w-full justify-start">
              <Users2 className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </Link>
        </div>
        <div className="mb-4" />
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Contacts
        </h2>
        <div className="space-y-1">
          <Link href="dashboard/contact">
            <Button variant="ghost" className="w-full justify-start">
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </Link>
        </div>
        <div className="space-y-1">
          <Link href="dashboard/">
            <Button variant="ghost" className="w-full justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              Locations
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
