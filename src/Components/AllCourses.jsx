// AllCourses.js
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

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "تطوير الويب باستخدام React",
      description: "تعلم كيفية بناء تطبيقات ويب حديثة باستخدام React.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "إدارة المشاريع الاحترافية",
      description: "تعلم كيفية إدارة المشاريع بفعالية لتحقيق أهدافك.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 4,
      title: "تصميم الجرافيك باستخدام Photoshop",
      description: "تعلم أساسيات تصميم الجرافيك باستخدام برنامج Photoshop.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 5,
      title: "تحليل البيانات باستخدام Excel",
      description:
        "تعلم كيفية تحليل البيانات واستخلاص رؤى قيمة باستخدام Excel.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 6,
      title: "إدارة الموارد البشرية",
      description:
        "تعلم كيفية إدارة الموارد البشرية بفعالية لتحقيق أهداف المؤسسة.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
      <>
          <Navbar/>
      <div className="container">
        <AllCoursesContainer>
          <SectionTitle>جميع الكورسات</SectionTitle>
          <CoursesGrid>
            {courses.map((course) => (
              <CourseCard key={course.id}>
                <CourseImage src={course.image} alt={course.title} />
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
          <Footer/>
    </>
  );
}

export default AllCourses;
