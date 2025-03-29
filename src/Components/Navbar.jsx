import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../Assets/شعار.png";

// Styled Components مع دعم className من Bootstrap
const NavbarContainer = styled(motion.nav)`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoImage = styled(motion.img)`
  height: 40px;
`;

const NavBrand = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const NavTogglerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
    box-shadow: none; /* إزالة الظل عند التركيز */
  }
`;

const NavCollapseDiv = styled.div`
  @media (max-width: 992px) {
    /* تغيير اتجاه العناصر على الشاشات الصغيرة */
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavList = styled(motion.ul)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto; /* دفع القائمة إلى اليمين */

  @media (max-width: 992px) {
    flex-direction: column; /* ترتيب العناصر عمودياً على الشاشات الصغيرة */
    margin-left: 0; /* إزالة الهامش الأيمن */
  }
`;

const NavItem = styled(motion.li)`
  margin-left: 15px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 992px) {
    margin-left: 0; /* إزالة الهامش الأيسر على الشاشات الصغيرة */
    margin-bottom: 10px; /* إضافة هامش سفلي بين العناصر */
  }
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: #555;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const NavbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const LinkVariants = {
  hover: { scale: 1.1 },
};

function Navbar() {
  return (
    <NavbarContainer
      variants={NavbarVariants}
      initial="hidden"
      animate="visible"
      className="navbar navbar-expand-lg navbar-light bg-light custom-navbar" // كلاسات Bootstrap
    >
      <div className="container">
        <NavBrand to="/" className="navbar-brand">
          <LogoImage src={Logo} alt="أثر" className="logo" />
        </NavBrand>
        <NavTogglerButton
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </NavTogglerButton>
        <NavCollapseDiv className="collapse navbar-collapse" id="navbarNav">
          <NavList className="navbar-nav ms-auto">
            <NavItem
              variants={LinkVariants}
              whileHover="hover"
              className="nav-item"
            >
              <NavLink to="/contact" className="nav-link">
                تواصل معنا
              </NavLink>
            </NavItem>
            <NavItem
              variants={LinkVariants}
              whileHover="hover"
              className="nav-item"
            >
              <NavLink to="/about" className="nav-link">
                من نحن
              </NavLink>
            </NavItem>
            <NavItem
              variants={LinkVariants}
              whileHover="hover"
              className="nav-item"
            >
              <NavLink to="/" className="nav-link">
                الرئيسية
              </NavLink>
            </NavItem>
          </NavList>
        </NavCollapseDiv>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
