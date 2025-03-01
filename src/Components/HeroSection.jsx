// HeroSection.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import One from "../Assets/pexels-anastasiya-gepp-654466-1462630.jpg";
import Two from "../Assets/pexels-pixabay-159844.jpg";
import Three from "../Assets/pexels-pixabay-247899.jpg";
import MostPopularCourses from "./MostPopularCourses";
import SuccessStories from "./SuccessStories";
import Navbar from "./Navbar";
import OurTrainers from "./OurTrainers";
import Footer from "./Footer";
const HeroSectionContainer = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  height: auto; /* السماح بارتفاع متغير بناءً على المحتوى */
  padding-bottom: 60%; /* الحفاظ على نسبة العرض إلى الارتفاع (مثال) */
  @media (max-width: 768px) {
    padding-bottom: 100%; /* زيادة الارتفاع على الشاشات الصغيرة */
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
  width: 80%;
  @media (max-width: 768px) {
    width: 90%; /* زيادة العرض على الشاشات الصغيرة */
  }
`;

const SlideTitle = styled.h1`
  font-size: 2.5rem; /* تقليل حجم الخط قليلاً */
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 2rem; /* تقليل حجم الخط على الشاشات الصغيرة */
  }
`;

const SlideDescription = styled.p`
  font-size: 1rem; /* تقليل حجم الخط قليلاً */
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 0.9rem; /* تقليل حجم الخط على الشاشات الصغيرة */
  }
`;

const CustomButton = styled.button`
  background-color: #009688;
  border: none;
  border-radius: 5px;
  padding: 10px 20px; /* تقليل الحجم قليلاً */
  font-size: 1rem; /* تقليل حجم الخط قليلاً */
  font-weight: bold;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5d4037;
  }
`;

/* تخصيص نقاط التنقل */
const StyledDots = styled.ul`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex !important;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2; /* التأكد من ظهور النقاط فوق المحتوى */

  li {
    margin: 0 5px;
  }

  button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 15px;
    height: 15px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: #fff;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  li.slick-active button {
    opacity: 1;
  }
`;

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  };

  const slides = [
    {
      image: One, // تمرير المتغير مباشرة
      title: "اكتشف عالم المعرفة",
      description: "كورسات متخصصة لتطوير مهاراتك وتحقيق أهدافك.",
    },
    {
      image: Two, // تمرير المتغير مباشرة
      title: "طور مهاراتك مع أثر",
      description: "مدربون خبراء ومناهج تعليمية مبتكرة.",
    },
    {
      image: Three, // تمرير المتغير مباشرة
      title: "مستقبلك يبدأ هنا",
      description: "انضم إلى مجتمع أثر وابدأ رحلتك التعليمية.",
    },
  ];

  return (
      <>
          <Navbar/>
      <HeroSectionContainer>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <SlideImage src={slide.image} alt={slide.title} />
              <SlideContent>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideDescription>{slide.description}</SlideDescription>
                <CustomButton>استكشف الكورسات</CustomButton>
              </SlideContent>
            </Slide>
          ))}
        </Slider>
      </HeroSectionContainer>
      <MostPopularCourses/>
          <SuccessStories />
          <OurTrainers />
          <Footer/>
    </>
  );
}

export default HeroSection;
