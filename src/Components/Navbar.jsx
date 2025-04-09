import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../Assets/شعار.png"; // تأكد من صحة المسار

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

// --- التعديل هنا ---
const NavCollapseDiv = styled.div`
  /* تأكد من أن هذه الأنماط لا تتعارض مع Bootstrap بشكل غير مقصود */
  /* يمكنك إزالة الأنماط الافتراضية إذا كانت Bootstrap كافية */
  @media (max-width: 991.98px) {
    /* استخدام نفس نقطة الفصل الخاصة بـ lg في Bootstrap */
    /* تغيير اتجاه العناصر على الشاشات الصغيرة */
    /* flex-direction: column; Bootstrap يقوم بهذا تلقائياً لـ .navbar-nav داخل .navbar-collapse */
    align-items: flex-end !important; /* محاذاة العناصر الفرعية (القائمة) إلى اليمين */
    /* يمكنك استخدام important للتأكد من تجاوز أي أنماط أخرى قد تتعارض */
    /* أو اجعل المحدد أكثر تحديدًا إذا أمكن */
  }
`;
// --- نهاية التعديل ---

const NavList = styled(motion.ul)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  /* margin-left: auto; Bootstrap's ms-auto يفعل هذا */

  @media (max-width: 991.98px) {
    /* استخدام نفس نقطة الفصل الخاصة بـ lg في Bootstrap */
    flex-direction: column-reverse;
    /* margin-left: 0; تم التعامل مع المحاذاة في NavCollapseDiv */
    width: auto; /* اسمح للقائمة بأخذ عرض محتواها فقط */
    align-items: flex-end; /* محاذاة النصوص داخل العناصر لليمين */
    margin-top: 0.5rem; /* إضافة مسافة بسيطة فوق القائمة عند الفتح */
  }
`;

const NavItem = styled(motion.li)`
  margin-left: 15px; // للشاشات الكبيرة

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 991.98px) {
    /* استخدام نفس نقطة الفصل الخاصة بـ lg في Bootstrap */
    margin-left: 0; /* إزالة الهامش الأيسر على الشاشات الصغيرة */
    margin-bottom: 10px; /* إضافة هامش سفلي بين العناصر */
    width: 100%; /* اجعل كل عنصر يأخذ عرض القائمة */
    text-align: right; /* محاذاة النص داخل العنصر لليمين */
  }
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: #555;
  text-decoration: none;
  display: block; /* يجعل الرابط يملأ عنصر القائمة li */
  padding: 0.5rem 1rem; /* إضافة padding لتسهيل النقر */

  &:hover {
    color: #007bff;
  }

  @media (max-width: 991.98px) {
    padding: 0.5rem 0; /* تعديل الـ padding للشاشات الصغيرة إذا لزم الأمر */
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
  hover: { scale: 1.05 }, // تقليل الحركة قليلاً
};

function Navbar() {
  return (
    <NavbarContainer
      variants={NavbarVariants}
      initial="hidden"
      animate="visible"
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container">
        <NavBrand to="/" className="navbar-brand p-0">
          <LogoImage
            src={Logo}
            alt="أثر"
            className="d-inline-block align-top"
          />
        </NavBrand>
        <NavTogglerButton
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavContent"
          aria-controls="navbarNavContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </NavTogglerButton>
        <NavCollapseDiv
          className="collapse navbar-collapse"
          id="navbarNavContent"
        >
          {/* --- التعديل هنا: إعادة ترتيب NavItem --- */}
          <NavList className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* 1. تواصل معنا */}
            <NavItem
              variants={LinkVariants}
              whileHover="hover"
              className="nav-item"
            >
              <NavLink to="/contact" className="nav-link">
                تواصل معنا
              </NavLink>
            </NavItem>
            {/* 2. من نحن */}
            <NavItem
              variants={LinkVariants}
              whileHover="hover"
              className="nav-item"
            >
              <NavLink to="/about" className="nav-link">
                من نحن
              </NavLink>
            </NavItem>
            {/* 3. الرئيسية */}
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
          {/* --- نهاية التعديل --- */}
        </NavCollapseDiv>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
