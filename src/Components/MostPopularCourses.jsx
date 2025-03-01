// MostPopularCourses.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components مع دعم className من Bootstrap
const CoursesContainer = styled(motion.div)`
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

const CoursesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const CourseCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  width: calc(33.33% - 30px); /* ثلاثة عناصر في الصف للشاشات الكبيرة */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 30px); /* عنصران في الصف للشاشات المتوسطة */
  }

  @media (max-width: 576px) {
    width: 100%; /* عنصر واحد في الصف للشاشات الصغيرة */
  }
`;

const CourseIcon = styled.i`
  font-size: 4rem; /* حجم الأيقونة */
  color: #009688; /* لون الأيقونة */
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const CourseInfo = styled.div`
  padding: 20px;
`;

const CourseTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const CourseButton = styled.button`
  background-color: #009688;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
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
  const courses = [
    {
      id: 1,
      title: "التسويق الرقمي المتقدم",
      description: "تعلم أحدث استراتيجيات التسويق الرقمي لزيادة مبيعاتك.",
      icon: "fas fa-chart-line", // أيقونة التسويق الرقمي
    },
    {
      id: 2,
      title: "تطوير الويب باستخدام React",
      description: "تعلم كيفية بناء تطبيقات ويب حديثة باستخدام React.",
      icon: "fas fa-code", // أيقونة تطوير الويب
    },
    {
      id: 3,
      title: "إدارة المشاريع الاحترافية",
      description: "تعلم كيفية إدارة المشاريع بفعالية لتحقيق أهدافك.",
      icon: "fas fa-tasks", // أيقونة إدارة المشاريع
    },
  ];

  return (
    <div className="container">
      <CoursesContainer>
        <SectionTitle>الكورسات الأكثر طلبًا</SectionTitle>
        <CoursesGrid>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <CourseIcon className={course.icon}></CourseIcon>
              <CourseInfo>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
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
