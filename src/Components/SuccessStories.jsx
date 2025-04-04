import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// استيراد الصور
import partner1 from "../Assets/WhatsApp Image 2025-04-04 at 16.58.30_986712a4.jpg";
import partner2 from "../Assets/WhatsApp Image 2025-04-04 at 16.58.44_c02f31b6.jpg";
import partner3 from "../Assets/WhatsApp Image 2025-04-04 at 16.58.50_759d7bc4.jpg";
import partner4 from "../Assets/WhatsApp Image 2025-04-04 at 16.58.58_b1f0be02.jpg";
import partner5 from "../Assets/WhatsApp Image 2025-04-04 at 16.59.04_08d115f0.jpg";
import partner6 from "../Assets/WhatsApp Image 2025-04-04 at 16.59.17_96d3e4eb.jpg";
import partner7 from "../Assets/WhatsApp Image 2025-04-04 at 16.59.24_4422f840.jpg";
import partner8 from "../Assets/WhatsApp Image 2025-04-04 at 16.59.29_0e2ca2c8.jpg";
import partner9 from "../Assets/imges.jpg";
import partner10 from "../Assets/WhatsApp Image 2025-04-04 at 16.59.43_2eeba6c1.jpg";
import partner11 from "../Assets/WhatsApp Image 2025-04-04 at 16.59.55_604f14b5.jpg";
import partner12 from "../Assets/WhatsApp Image 2025-04-04 at 17.00.49_b24146c7.jpg";
import partner13 from "../Assets/WhatsApp Image 2025-04-04 at 17.01.10_1680f379.jpg";
import partner14 from "../Assets/WhatsApp Image 2025-04-04 at 17.01.25_c26576d8.jpg";

// Styled Components
const SimpleSliderContainer = styled.div`
  padding: 30px;
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

// --- التعديل هنا ---
const SliderImage = styled.img`
  width: 100%; /* اجعل الصورة تأخذ عرض الحاوية */
  height: 200px;
  /* object-fit: cover; - تم إزالة هذه الخاصية */
  max-height: 250px; /* يمكنك إضافة ارتفاع أقصى اختياري لمنع الصور الطويلة جداً */
  object-fit: contain; /* اجعل الصورة بأكملها مرئية داخل أبعادها، مع الحفاظ على النسبة */
  display: block; /* يمنع وجود مسافات إضافية أسفل الصورة */
  margin: 0 auto; /* لتوسيط الصورة إذا كانت أضيق من الحاوية */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  vertical-align: middle; /* لتحسين المحاذاة العمودية داخل السلايدر */

  &:hover {
    transform: scale(1.05);
  }
`;
// --- نهاية التعديل ---

const SlideContainer = styled.div`
  padding: 0 10px; /* إضافة مساحة على جانبي كل صورة */
  /* قد تحتاج لتعديل الـ padding أو إضافة min-height هنا إذا واجهت مشاكل في المحاذاة */
  /* مثال: min-height: 150px; align-items: center; display: flex !important; */
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
    variableWidth: false, // أبقه false إذا كنت تريد أن تكون عرض الشرائح متساوياً
    adaptiveHeight: true, // اجعل السلايدر يتكيف مع ارتفاع الشريحة الحالية
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
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
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
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
