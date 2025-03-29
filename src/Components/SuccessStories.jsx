import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// استيراد الصور
import partner1 from "../Assets/WhatsApp Image 2025-03-29 at 16.08.55_2700963b.jpg";
import partner2 from "../Assets/WhatsApp Image 2025-03-29 at 16.08.56_11572024.jpg";
import partner3 from "../Assets/WhatsApp Image 2025-03-29 at 16.08.56_e7489341.jpg";
import partner4 from "../Assets/WhatsApp Image 2025-03-29 at 16.08.57_03a7938e.jpg";
import partner5 from "../Assets/WhatsApp Image 2025-03-29 at 16.08.59_ee45f6ae.jpg";
import partner6 from "../Assets/WhatsApp Image 2025-03-29 at 16.09.00_c0f67063.jpg";
import partner7 from "../Assets/WhatsApp Image 2025-03-29 at 16.09.01_d8ef0fe8.jpg";
import partner8 from "../Assets/WhatsApp Image 2025-03-29 at 16.09.02_6c0be5ef.jpg";

// Styled Components
const SimpleSliderContainer = styled.div`
  padding: 30px;
  background-color: #f0f0f0;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5d4037;
  text-align: right; /* محاذاة العنوان إلى اليمين */
  position: relative;

  /* إضافة خط سفلي أنيق */
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 0; /* وضع الخط على اليمين */
    width: 50px;
    height: 3px;
    background-color: #009688;
  }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 300px; /* ارتفاع ثابت للصور */
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SlideContainer = styled.div`
  padding: 0 10px; /* إضافة مساحة على جانبي كل صورة */
`;

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // عرض 3 صور في كل مرة
    slidesToScroll: 1,
    autoplay: true, // تفعيل التشغيل التلقائي
    autoplaySpeed: 3000, // تحديد سرعة الانتقال (بالمللي ثانية)
    pauseOnHover: true,
    rtl: true, // تفعيل اتجاه الكتابة من اليمين إلى اليسار
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // عرض صورتين على الشاشات الصغيرة
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // عرض صورة واحدة على الشاشات الصغيرة جدًا
        },
      },
    ],
  };

  const images = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
  ];

  return (
    <SimpleSliderContainer>
      <SectionTitle>شركاء النجاح</SectionTitle>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideContainer key={index}>
            <SliderImage src={image} alt={`Image ${index + 1}`} />
          </SlideContainer>
        ))}
      </Slider>
    </SimpleSliderContainer>
  );
}

export default SimpleSlider;
