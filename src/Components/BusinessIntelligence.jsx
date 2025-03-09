import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// =========================================================================
//  الأنماط العامة (التي يمكن إعادة استخدامها)
// =========================================================================

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #5d4037;
  position: relative;
  text-align: right;
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

const PackageIcon = styled.i`
  color: #009688;
  font-size: 1.2em;
`;

// =========================================================================
//  أنماط خاصة بالمكونات (مُعاد استخدامها)
// =========================================================================

const PackageContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: right;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PackageHeader = styled.div`
  background-color: #009688;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PackageTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
`;

const PackagePrice = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`;

const PackageDescription = styled.div`
  padding: 20px;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`;

const PackageFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PackageFeatureItem = styled.li`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 15px;
  margin: 10px;
  width: calc(100% - 20px); /* عرض كامل مع هامش */
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 80px; /* ارتفاع ثابت لجميع العناصر */
`;

// =========================================================================
//  مكون ذكاء الأعمال
// =========================================================================

export default function BusinessIntelligence() {
  const features = [
    {
      icon: "fas fa-user-tie mx-3",
      text: "مندوبي مبيعات: فريق من مندوبي مبيعات متخصصين يعملون مباشرة مع فريقك لتحسين استراتيجيات المبيعات وتنفيذ أساليب جديدة لزيادة المبيعات وتحقيق أهداف المنشأة",
    },
    {
      icon: "fas fa-user-shield mx-3",
      text: "مدير مبيعات: يشرف المدير على فريق المبيعات، يحدد الاستراتيجيات، ويوجه مندوبي المبيعات لتحقيق الأهداف. يعمل على تدريب الفريق وتحقيق التنسيق بين جميع الأنشطة",
    },
    {
      icon: "fas fa-palette mx-3",
      text: "مصمم هوية بصرية: تطوير هوية بصرية شاملة للمنشأة تشمل الشعارات، الألوان، المواد الدعائية، وكل ما يعزز تواجد العلامة التجارية في السوق",
    },
    {
      icon: "fas fa-chart-bar mx-3",
      text: "خبير تسويق رقمي: إدارة حملات تسويقية على منصات التواصل الاجتماعي، وتحليل بيانات الحملة للوصول إلى جمهور مستهدف وزيادة التفاعل",
    },
    {
      icon: "fas fa-search-dollar mx-3",
      text: "محلل بيانات تسويقية: تحليل أداء الحملات التسويقية والمبيعات بشكل دوري، وتقديم تقارير مفصلة مع التوصيات لتحسين الاستراتيجيات وزيادة الكفاءة",
    },
    {
      icon: "fas fa-camera mx-3",
      text: "إنتاج محتوى احترافي: تصميم وتصوير مواد تسويقية مخصصة (صور، فيديوهات دعائية، منشورات سوشيال ميديا) لتعزيز الحضور البصري للعلامة التجارية",
    },
    {
      icon: "fas fa-globe mx-3",
      text: "إدارة حملات إعلانية متعددة القنوات: إدارة الحملات الإعلانية على منصات متعددة (مثل فيسبوك، إنستغرام، جوجل) لضمان الوصول إلى أكبر عدد من العملاء المحتملين وتحقيق أفضل نتائج",
    },
    {
      icon: "fas fa-chalkboard-teacher mx-3",
      text: "تدريب داخلي للفرق: تقديم دورات تدريبية متخصصة لفريق المنشأة في مجالات التسويق، المبيعات، وخدمة العملاء لتحسين الأداء وتعزيز المهارات",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <SectionTitle>ذكاء الأعمال ودعم القرار</SectionTitle>
        <PackageContainer>
          <PackageHeader>
            <PackageTitle>
              <PackageIcon className="fas fa-lightbulb"></PackageIcon>
              باقة ذكاء الأعمال ودعم القرار
            </PackageTitle>
            <PackagePrice>35000 ريال</PackagePrice>
          </PackageHeader>
          <PackageDescription>
            باقة ذكاء الاعمال ودعم القرار هي الخيار الأفضل للمنظمات التي تسعى
            للسيطرة على السوق وبناء استراتيجية تسويقية قوية من خلال إضافة فريق
            من خبرائنا للعمل داخل فريق المنشأة نضمن لك تعزيز الأداء في المبيعات
            التسويق والتصميم بشكل متكامل لضمان هيمنة قوية في السوق
          </PackageDescription>

          <PackageFeatures>
            {features.map((feature, index) => (
              <PackageFeatureItem key={index}>
                <PackageIcon className={feature.icon}></PackageIcon>
                {feature.text}
              </PackageFeatureItem>
            ))}
          </PackageFeatures>
        </PackageContainer>
      </div>
      <Footer />
    </>
  );
}
