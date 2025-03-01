// OurTrainers.js
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
  background-color: #fff; /* خلفية بيضاء */
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5d4037; /* لون بني داكن من اللوجو */
`;

const TrainerCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  margin: 0 10px; /* إضافة هوامش جانبية */
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TrainerIcon = styled.i`
  font-size: 4rem; /* حجم الأيقونة */
  color: #009688; /* لون الأيقونة */
  margin-bottom: 20px;
`;

const TrainerName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const TrainerDescription = styled.p`
  font-size: 1rem;
  color: #555;
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
      description: "مدرب خبير في مجال التسويق الرقمي بخبرة تزيد عن 10 سنوات.",
      icon: "fas fa-chart-line", // أيقونة التسويق الرقمي
    },
    {
      id: 2,
      name: "أ. سارة أحمد",
      description: "مدربة متميزة في مجال تطوير الويب باستخدام React.",
      icon: "fas fa-code", // أيقونة تطوير الويب
    },
    {
      id: 3,
      name: "أ. خالد إبراهيم",
      description: "مدرب متخصص في إدارة المشاريع الاحترافية.",
      icon: "fas fa-tasks", // أيقونة إدارة المشاريع
    },
    {
      id: 4,
      name: "أ. ليلى سعيد",
      description: "مدربة محترفة في مجال التصميم الجرافيكي.",
      icon: "fas fa-paint-brush", // أيقونة التصميم الجرافيكي
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
