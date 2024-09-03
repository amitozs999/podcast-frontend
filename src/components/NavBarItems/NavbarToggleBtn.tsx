import React from "react";
import { FC } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface NavbarToggleBtnProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const NavbarToggleBtn: FC<NavbarToggleBtnProps> = ({
  showMenu,
  setShowMenu,
}) => {
  return (
    <button
      //by default display block hoga, jesi he lg it will hide
      //showmenu true he toh add open wali class also

      className={`navbar-toggler-btn d-block d-lg-none ${
        showMenu ? "open" : ""
      }`}
      type="button"
      onClick={() => setShowMenu(!showMenu)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavbarToggleBtn;
