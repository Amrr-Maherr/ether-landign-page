import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Assets/2.png";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px;
  text-align: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  max-width: 150px;
  height: auto;
`;

const FooterLinks = styled.div`
  margin-bottom: 30px;
`;

const FooterLink = styled(Link)`
  font-size: 1.1rem;
  color: #ddd;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #fff;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #009688;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  margin-bottom: 30px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 10px;

  &:hover {
    color: #009688;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="شعار أكاديمية أثر" />
      </LogoContainer>

      <FooterLinks>
        <FooterLink to="/">الرئيسية</FooterLink>
        <FooterLink to="/about">من نحن</FooterLink>
        <FooterLink>الخدمات</FooterLink>
        <FooterLink to="/contact">تواصل معنا</FooterLink>
        <FooterLink>سياسة الخصوصية</FooterLink>
        <FooterLink>شروط الاستخدام</FooterLink>
      </FooterLinks>

      <SocialIcons>
        <SocialIconLink
          href="https://x.com/sit_ksa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
        </SocialIconLink>
        <SocialIconLink
          href="https://www.instagram.com/sit_ksa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </SocialIconLink>
        <SocialIconLink
          href="https://www.tiktok.com/@sit_ksa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok"></i>
        </SocialIconLink>
      </SocialIcons>

      <Copyright>
        Email:{" "}
        <a href="mailto:info@sit.edu.sa" style={{ color: "#aaa" }}>
          info@sit.edu.sa
        </a>{" "}
        | Phone:{" "}
        <a href="tel:+966598810235" style={{ color: "#aaa" }}>
          +966598810235
        </a>
        ,
        <a href="tel:+966537172700" style={{ color: "#aaa" }}>
          +966537172700
        </a>
        <br />© {new Date().getFullYear()} أثر Agency All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
