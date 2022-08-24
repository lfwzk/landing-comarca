import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <NavbarBrand>CO MARCA</NavbarBrand>
          </a>
          {/* <img src="./assets/img/cw11.svg" class="mr-3 h-6 sm:h-9"/> */}

          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink href="/" target="_blank" rel="noreferrer" ripple="light">
                <Icon name="home" size="2xl" />
                &nbsp;Home
              </NavLink>
              <NavLink href="/services">
                <Link to="/login"></Link>
                <Icon name="apps" size="2xl" />
                &nbsp;Servicios
              </NavLink>
              <div className="text-white">
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon name="view_carousel" size="2xl" color="white" />
                      <span className="ml-2">Grupo</span>
                    </div>
                  }
                  ripple="light"
                >
                  <Link to="/">
                    <DropdownItem color="lightBlue">Landing</DropdownItem>
                  </Link>
                  <Link to="/profile">
                    <DropdownItem color="lightBlue">Profile</DropdownItem>
                  </Link>
                  <Link to="/login">
                    <DropdownItem color="lightBlue">Login</DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem color="lightBlue">Register</DropdownItem>
                  </Link>
                </Dropdown>
              </div>
              <NavLink
                href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon family="font-awesome" name="fab fa-file" size="xl" />
                &nbsp;Blog
              </NavLink>

              <a href="/login" target="_blank" rel="noreferrer">
                <Button
                  color="transparent"
                  className="bg-comarca text-white ml-4"
                  ripple="dark"
                >
                  Login
                </Button>
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
