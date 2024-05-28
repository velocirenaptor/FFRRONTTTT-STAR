// NavbarComponent.jsx
import React, { Component } from "react";
import styled from "styled-components";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from "@nextui-org/react";

const StyledNavbarContent = styled(NavbarContent)`
  @media (min-width: 640px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 639px) {
    display: none;
  }
`;

const StyledNavbarContentMobile = styled(NavbarContent)`
  @media (min-width: 640px) {
    display: none;
  }
  @media (max-width: 639px) {
    display: flex;
    justify-content: start;
  }
`;

const StyledNavbarContentEnd = styled(NavbarContent)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    .lg-hidden {
      display: none;
    }
  }
`;

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.setIsMenuOpen = this.setIsMenuOpen.bind(this);
  }

  setIsMenuOpen(isMenuOpen) {
    this.setState({ isMenuOpen });
  }

  render() {
    const { isMenuOpen } = this.state;

    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];

    return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={this.setIsMenuOpen}
      >
        <StyledNavbarContentMobile>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </StyledNavbarContentMobile>

        <StyledNavbarContent className="gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </StyledNavbarContent>

        <StyledNavbarContentEnd>
          <NavbarItem className="lg-hidden">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </StyledNavbarContentEnd>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default NavbarComponent;
