// Footer.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // إذا كنت تستخدم React Router

const FooterContainer = styled.footer`
  background-color: #333; /* لون خلفية داكن */
  color: #fff;
  padding: 50px;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 30px;
`;

const FooterLink = styled(Link)`
  font-size: 1.1rem;
  color: #ddd;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    color: #fff;
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
    color: #009688; /* لون أزرق مخضر من اللوجو */
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/">الرئيسية</FooterLink>
        <FooterLink to="/about">من نحن</FooterLink>
        <FooterLink to="/courses">الكورسات</FooterLink>
        <FooterLink to="/contact">تواصل معنا</FooterLink>
        {/* يمكنك إضافة المزيد من الروابط هنا */}
        <FooterLink to="/privacy">سياسة الخصوصية</FooterLink>
        <FooterLink to="/terms">شروط الاستخدام</FooterLink>
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
        {/* يمكنك إضافة المزيد من أيقونات وسائل التواصل هنا */}
      </SocialIcons>
      <Copyright>
        © {new Date().getFullYear()} أكاديمية أثر. جميع الحقوق محفوظة.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
