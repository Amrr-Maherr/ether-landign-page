import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AllCoursesContainer = styled.div`
  padding: 50px;
  text-align: right;
  background-color: #fff; /* لون خلفية بيضاء */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5d4037; /* لون بني داكن من اللوجو */
  position: relative; /* لإنشاء خط سفلي */

  /* إضافة خط سفلي أنيق */
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 50px;
    height: 3px;
    background-color: #009688; /* لون أزرق مخضر من اللوجو */
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const CourseCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex; /* Make it a flex container */
  flex-direction: column; /* Stack content vertically */

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseIconContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem; /* Adjust icon size as needed */
  color: #009688; /* Icon color */
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

function AllCourses() {
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
    {
      id: 4,
      title: "تصميم الجرافيك باستخدام Photoshop",
      description: "تعلم أساسيات تصميم الجرافيك باستخدام برنامج Photoshop.",
      icon: "fas fa-palette", // أيقونة تصميم الجرافيك
    },
    {
      id: 5,
      title: "تحليل البيانات باستخدام Excel",
      description:
        "تعلم كيفية تحليل البيانات واستخلاص رؤى قيمة باستخدام Excel.",
      icon: "fas fa-table", // أيقونة تحليل البيانات
    },
    {
      id: 6,
      title: "إدارة الموارد البشرية",
      description:
        "تعلم كيفية إدارة الموارد البشرية بفعالية لتحقيق أهداف المؤسسة.",
      icon: "fas fa-users", // أيقونة إدارة الموارد البشرية
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <AllCoursesContainer>
          <SectionTitle>جميع الكورسات</SectionTitle>
          <CoursesGrid>
            {courses.map((course) => (
              <CourseCard key={course.id}>
                <CourseIconContainer>
                  <i className={course.icon}></i>
                </CourseIconContainer>
                <CourseInfo>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseDescription>{course.description}</CourseDescription>
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
