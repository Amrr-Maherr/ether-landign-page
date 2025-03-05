import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components مع دعم className من Bootstrap
const CoursesContainer = styled(motion.div)`
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

const CoursesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const CourseCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 15px; /* زيادة استدارة الزوايا */
  overflow: hidden;
  text-align: center;
  width: calc(33.33% - 30px); /* ثلاثة عناصر في الصف للشاشات الكبيرة */
  margin-bottom: 30px; /* زيادة المسافة أسفل البطاقة */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* إضافة ظل خفيف */
  background-color: #f9f9f9; /* تغيير لون الخلفية */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px); /* زيادة تأثير الرفع عند التحويم */
  }

  @media (max-width: 768px) {
    width: calc(50% - 30px); /* عنصران في الصف للشاشات المتوسطة */
  }

  @media (max-width: 576px) {
    width: 100%; /* عنصر واحد في الصف للشاشات الصغيرة */
  }
`;

const CourseIcon = styled.i`
  font-size: 5rem; /* زيادة حجم الأيقونة */
  color: #009688;
  margin-bottom: 25px; /* زيادة المسافة أسفل الأيقونة */
  display: flex;
  justify-content: center;
`;

const CourseInfo = styled.div`
  padding: 25px; /* زيادة المساحة الداخلية */
`;

const CourseTitle = styled.h3`
  font-size: 1.4rem; /* زيادة حجم العنوان */
  font-weight: bold;
  margin-bottom: 15px; /* زيادة المسافة أسفل العنوان */
  color: #333;
`;

const CourseDescription = styled.p`
  font-size: 1.1rem; /* زيادة حجم الوصف */
  color: #555;
  margin-bottom: 25px; /* زيادة المسافة أسفل الوصف */
  line-height: 1.7; /* زيادة تباعد الأسطر */
`;

const CourseButton = styled.button`
  background-color: #009688;
  border: none;
  border-radius: 8px; /* زيادة استدارة الزوايا */
  padding: 12px 25px; /* زيادة المساحة الداخلية للزر */
  font-size: 1.1rem; /* زيادة حجم الخط */
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5d4037;
  }
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

function MostPopularCourses() {
  const services = [
    {
      id: 1,
      title: "ذكاء الأعمال ودعم القرار",
      description:
        "توفير خدمات شاملة تهدف إلى تعزيز الكفاءة التشغيلية وزيادة الإيرادات",
      icon: "fas fa-lightbulb", // أيقونة ذكاء الأعمال
    },
    {
      id: 2,
      title: "الأثر العلمي (دولياً ومحلياً)",
      description:
        "خدمات لتحسين تجربة التعليم وتطوير الأنظمة التعليمية والشهادات الاحترافية",
      icon: "fas fa-graduation-cap", // أيقونة التعليم
    },
    {
      id: 3,
      title: "الأثر الذكي",
      description:
        "خدمات للتسويق الرقمي والتواصل، مثل تطوير العلامة التجارية وتحسين محركات البحث",
      icon: "fas fa-rocket", // أيقونة الأثر الذكي
    },
  ];

  return (
    <div className="container">
      <CoursesContainer>
        <SectionTitle>خدماتنا المتميزة</SectionTitle>
        <CoursesGrid>
          {services.map((service) => (
            <CourseCard
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="my-4">
                <CourseIcon className={service.icon}></CourseIcon>
              </div>
              <CourseInfo>
                <CourseTitle>{service.title}</CourseTitle>
                <CourseDescription>{service.description}</CourseDescription>
                <CourseButton>اعرف المزيد</CourseButton>
              </CourseInfo>
            </CourseCard>
          ))}
        </CoursesGrid>
      </CoursesContainer>
    </div>
  );
}

export default MostPopularCourses;
