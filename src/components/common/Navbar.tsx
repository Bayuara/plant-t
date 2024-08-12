import Logo from "./Logo";
import Button from "./Button";
import clsx from "clsx";
import React from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={clsx(
        "w-auto flex justify-between items-center bg-slate-400 p-4",
        className
      )}
    >
      <Logo />
      <div className="space-x-8">
        <Button className="border border-black">Button 1</Button>
        <Button className="border border-black">Button 2</Button>
        <Button className="border border-black">Button 3</Button>
        <Button className="border border-black">Button 4</Button>
      </div>
    </nav>
  );
};

export default Navbar;
