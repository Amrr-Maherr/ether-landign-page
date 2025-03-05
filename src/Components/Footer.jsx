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
  margin-bottom: 20px; /* مساحة أسفل اللوجو */
`;

const LogoImage = styled.img`
  max-width: 150px; /* تحديد أقصى عرض للوجو */
  height: auto; /* الحفاظ على نسبة العرض إلى الارتفاع */
`;

const FooterLinks = styled.div`
  margin-bottom: 30px;
`;

const FooterLink = styled(Link)`
  font-size: 1.1rem;
  color: #ddd;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease; /* إضافة انتقال سلس للألوان */
  position: relative; /* لإنشاء تأثير الخط السفلي */

  &:hover {
    color: #fff;
  }

  /* إضافة خط سفلي أنيق عند التحويم */
  &:after {
    content: "";
    position: absolute;
    bottom: -3px; /* تعديل موقع الخط السفلي */
    left: 0;
    width: 0; /* البداية بدون خط */
    height: 2px; /* سمك الخط السفلي */
    background-color: #009688; /* لون الخط السفلي */
    transition: width 0.3s ease; /* إضافة انتقال سلس للعرض */
  }

  &:hover:after {
    width: 100%; /* عرض كامل للخط عند التحويم */
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
      {/* إضافة مكان اللوجو هنا */}
      <LogoContainer>
        {/* استخدم الصورة المستوردة هنا */}
        <LogoImage src={Logo} alt="شعار أكاديمية أثر" />
      </LogoContainer>

      <FooterLinks>
        <FooterLink to="/">الرئيسية</FooterLink>
        <FooterLink to="/about">من نحن</FooterLink>
        <FooterLink >الخدمات</FooterLink>{" "}
        {/* Changed to Services */}
        <FooterLink to="/contact">تواصل معنا</FooterLink>
        <FooterLink >سياسة الخصوصية</FooterLink>
        <FooterLink >شروط الاستخدام</FooterLink>
      </FooterLinks>

      <SocialIcons>
        <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </SocialIconLink>
        <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialIconLink>
        <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
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
