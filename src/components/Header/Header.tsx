import React from "react";
import Logo from "../NavBarItems/Logo";
import { siteIdentity } from "../../data/WebSiteInfo";
import { useState } from "react";
import NavbarToggleBtn from "../NavBarItems/NavbarToggleBtn";
import AuthBtn from "../NavBarItems/AuthBtn";
import SearchBar from "../NavBarItems/SearchBar";
import Wishlist from "../NavBarItems/Wishlist";
import { navLink } from "../../data/NavLink";
import NavMenu from "../NavBarItems/NavMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header-section position-fixed top-0  w-100 pt-4 bgc-1">
      <div className="container-fluid px-lg-0">
        <nav className="nav-wrapper d-between flex-row">
          <Logo data={siteIdentity} />

          {/* menu-toggler makes menu visible in mobile */}
          <div
            className={`menu-toggler d-flex align-items-center justify-content-lg-between flex-column flex-lg-row gap-4  gap-xxl-6 w-100 ${
              showMenu ? "active" : ""
            }`}
          >
            <div className="search-wishlist-area order-first order-lg-1 d-flex align-items-center justify-content-lg-end gap-2 gap-xl-4  gap-xxl-6 w-100">
              <SearchBar />
              <Wishlist />
            </div>
            <div className="category-nav-menu d-center flex-column flex-lg-row gap-4 gap-xxl-6  w-100">
              <NavMenu data={navLink} />
            </div>

            <AuthBtn />
          </div>
          <NavbarToggleBtn showMenu={showMenu} setShowMenu={setShowMenu} />
        </nav>
      </div>
      2424
    </header>
  );
};

export default Header;
