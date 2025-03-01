// SuccessStories.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components مع دعم className من Bootstrap
const StoriesContainer = styled(motion.div)`
  padding: 50px;
  text-align: right;
  background-color: #f8f9fa; /* لون خلفية فاتحة */
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5d4037; /* لون بني داكن من اللوجو */
`;

const StoryCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
  margin: 0 10px; /* إضافة هوامش جانبية */

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%; /* عرض كامل على الشاشات الصغيرة */
  }
`;

const StoryIcon = styled.i`
  font-size: 4rem; /* حجم الأيقونة */
  color: #009688; /* لون الأيقونة */
  margin-bottom: 20px;
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

const StoryName = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #009688; /* لون أزرق مخضر من اللوجو */
`;

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: 3,
    },
  },
};

function SuccessStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // عرض قصة واحدة في كل مرة
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // عرض قصة واحدة على الشاشات الصغيرة
        },
      },
    ],
  };

  const stories = [
    {
      id: 1,
      name: "أحمد محمد",
      text: "بفضل كورسات أكاديمية أثر، تمكنت من الحصول على وظيفة أحلامي في مجال التسويق الرقمي.",
      icon: "fas fa-user-graduate", // أيقونة الخريج
    },
    {
      id: 2,
      name: "فاطمة علي",
      text: "كورسات أكاديمية أثر ساعدتني على تطوير مهاراتي في البرمجة وزيادة فرصي الوظيفية.",
      icon: "fas fa-laptop-code", // أيقونة البرمجة
    },
    {
      id: 3,
      name: "يوسف محمود",
      text: "أكاديمية أثر غيرت حياتي المهنية، الآن أنا قائد فريق في شركة عالمية.",
      icon: "fas fa-briefcase", // أيقونة حقيبة العمل
    },
  ];

  return (
    <div className="container">
      <StoriesContainer>
        <SectionTitle>قصص نجاح</SectionTitle>
        <Slider {...settings}>
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <StoryIcon className={story.icon}></StoryIcon>
              <StoryText>{story.text}</StoryText>
              <StoryName>{story.name}</StoryName>
            </StoryCard>
          ))}
        </Slider>
      </StoriesContainer>
    </div>
  );
}

export default SuccessStories;
