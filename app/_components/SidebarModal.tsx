import React from "react";

interface NavbarProps {
  mobilemenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const SidebarModal = ({ mobilemenu, setMobileMenu }: NavbarProps) => {
  return (
    <div>
      {mobilemenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm top-0 left-0 bottom-0 right-0 z-40 "
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
};

export default SidebarModal;
