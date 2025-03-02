import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion"; // استيراد motion

const AllCoursesContainer = styled(motion.div)`
  // استخدام motion
  padding: 40px; /* تقليل المساحة الداخلية */
  text-align: right;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* ظل خفيف */
  border-radius: 15px; /* زوايا مستديرة */
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem; /* تقليل حجم العنوان */
  font-weight: bold;
  margin-bottom: 30px; /* تقليل المسافة أسفل العنوان */
  color: #5d4037;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -6px; /* تقليل موضع الخط */
    right: 0;
    width: 40px; /* تقليل طول الخط */
    height: 3px; /* تقليل سمك الخط */
    background-color: #009688;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  ); /* تقليل الحد الأدنى للعرض */
  gap: 25px; /* تقليل المسافة بين العناصر */
`;

const CourseCard = styled(motion.div)`
  // استخدام motion
  border: 1px solid #ddd;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* توزيع المساحة عموديا */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ظل خفيف */
  background-color: #fff; /* لون خلفية أبيض */
  height: 320px; /* تقليل الارتفاع الثابت */

  &:hover {
    transform: translateY(-6px); /* تقليل تأثير الرفع */
  }
`;

const CourseIconContainer = styled.div`
  width: 100%;
  height: 200px; /* تقليل ارتفاع الحاوية */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem; /* تقليل حجم الأيقونة */
  color: #009688;
  background-color: #f0f0f0; /* لون خلفية أفتح */
`;

const CourseInfo = styled.div`
  padding: 20px; /* تقليل المساحة الداخلية */
  text-align: center; /* توسيط النص */
`;

const CourseTitle = styled.h3`
  font-size: 1.2rem; /* تقليل حجم العنوان */
  font-weight: bold;
  margin-bottom: 8px; /* تقليل المسافة أسفل العنوان */
  color: #333;
`;

const CourseButton = styled.button`
  background-color: #009688;
  border: none;
  border-radius: 8px;
  padding: 10px 20px; /* تقليل المساحة الداخلية للزر */
  font-size: 1rem; /* تقليل حجم الخط */
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto; /* وضع الزر في الأسفل */

  &:hover {
    background-color: #5d4037;
  }
`;

function AllCourses() {
  const courses = [
    {
      id: 1,
      title: "التسويق الرقمي المتقدم",
      icon: "fas fa-chart-line", // أيقونة التسويق الرقمي
    },
    {
      id: 2,
      title: "تطوير الويب باستخدام React",
      icon: "fas fa-code", // أيقونة تطوير الويب
    },
    {
      id: 3,
      title: "إدارة المشاريع الاحترافية",
      icon: "fas fa-tasks", // أيقونة إدارة المشاريع
    },
    {
      id: 4,
      title: "تصميم الجرافيك باستخدام Photoshop",
      icon: "fas fa-palette", // أيقونة تصميم الجرافيك
    },
    {
      id: 5,
      title: "تحليل البيانات باستخدام Excel",
      icon: "fas fa-table", // أيقونة تحليل البيانات
    },
    {
      id: 6,
      title: "إدارة الموارد البشرية",
      icon: "fas fa-users", // أيقونة إدارة الموارد البشرية
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <AllCoursesContainer
          initial={{ opacity: 0, y: 20 }} // إضافة حركة دخول
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>جميع الكورسات</SectionTitle>
          <CoursesGrid>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                whileHover={{ scale: 1.05 }} // إضافة تأثير التحويم
                whileTap={{ scale: 0.95 }} // إضافة تأثير النقر
              >
                <CourseIconContainer>
                  <i className={course.icon}></i>
                </CourseIconContainer>
                <CourseInfo>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseButton>اعرف المزيد</CourseButton>
                </CourseInfo>
              </CourseCard>
            ))}
          </CoursesGrid>
        </AllCoursesContainer>
      </div>
      <Footer />
    </>
  );
}

export default AllCourses;
