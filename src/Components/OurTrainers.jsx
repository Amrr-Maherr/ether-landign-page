import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components مع دعم className من Bootstrap
const TrainersContainer = styled(motion.div)`
  padding: 50px;
  text-align: right;
  background-color: #fff;
  overflow: hidden; /* لمنع تجاوز المحتوى */
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px; /* زيادة المسافة أسفل العنوان */
  color: #5d4037;
  position: relative;

  /* إضافة خط سفلي أنيق */
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 50px;
    height: 3px;
    background-color: #009688;
  }
`;

const TrainerCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 15px; /* زيادة استدارة الزوايا */
  text-align: center;
  margin: 15px; /* زيادة الهوامش من جميع الجهات */
  padding: 30px; /* زيادة المساحة الداخلية */
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* إضافة ظل خفيف */
  background-color: #f9f9f9; /* لون خلفية أفتح */

  &:hover {
    transform: translateY(-8px); /* زيادة تأثير الرفع عند التحويم */
  }
`;

const TrainerIcon = styled.i`
  font-size: 5rem; /* حجم الأيقونة */
  color: #009688;
  margin-bottom: 25px; /* زيادة المسافة أسفل الأيقونة */
`;

const TrainerName = styled.h3`
  font-size: 1.3rem; /* زيادة حجم اسم المدرب */
  font-weight: bold;
  color: #333;
  margin-bottom: 15px; /* زيادة المسافة أسفل الاسم */
`;

const TrainerDescription = styled.p`
  font-size: 1.1rem; /* زيادة حجم وصف المدرب */
  color: #555;
  line-height: 1.7; /* زيادة تباعد الأسطر */
`;

const cardVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function OurTrainers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // عرض ثلاثة مدربين في كل مرة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // عرض اثنين على الشاشات المتوسطة
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // عرض مدرب واحد على الشاشات الصغيرة
        },
      },
    ],
  };

  const trainers = [
    {
      id: 1,
      name: "أ. محمد عبد الله",
      description: "خبير في استراتيجيات ذكاء الأعمال وتحليل البيانات.",
      icon: "fas fa-brain", // أيقونة ذكاء الأعمال
      expertise: "ذكاء الأعمال ودعم القرار",
    },
    {
      id: 2,
      name: "أ. سارة أحمد",
      description:
        "متخصصة في تطوير المناهج التعليمية الحديثة والابتكار في التدريس.",
      icon: "fas fa-chalkboard-teacher", // أيقونة التعليم
      expertise: "الأثر العلمي",
    },
    {
      id: 3,
      name: "أ. خالد إبراهيم",
      description: "مستشار تسويق رقمي و خبير في تحسين تجربة المستخدم.",
      icon: "fas fa-rocket", // أيقونة التسويق الرقمي
      expertise: "الأثر الذكي",
    },
    {
      id: 4,
      name: "أ. ليلى سعيد",
      description: "خبيرة في تطوير العلامات التجارية.",
      icon: "fas fa-award", // أيقونة العلامة التجارية
      expertise: "الأثر الذكي",
    },
  ];

  return (
    <div className="container">
      <TrainersContainer>
        <SectionTitle>مدربونا</SectionTitle>
        <Slider {...settings}>
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <TrainerIcon className={trainer.icon}></TrainerIcon>
              <TrainerName>{trainer.name}</TrainerName>
              <TrainerDescription>{trainer.description}</TrainerDescription>
            </TrainerCard>
          ))}
        </Slider>
      </TrainersContainer>
    </div>
  );
}

export default OurTrainers;
