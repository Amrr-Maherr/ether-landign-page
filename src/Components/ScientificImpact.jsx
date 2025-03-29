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
  margin-left: 10px;
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
  width: calc(50% - 20px);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// =========================================================================
//  مكون ScientificImpact
// =========================================================================

export default function ScientificImpact() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <SectionTitle>خدمات الأثر العلمي</SectionTitle>

        {/* خدمات التعليم في روسيا */}
        <PackageContainer>
          <PackageHeader>
            <PackagePrice>7,150 SR </PackagePrice>
            <PackageTitle>
              <PackageIcon className="fas fa-graduation-cap mx-3"></PackageIcon>
              خدمات التعليم في روسيا
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            دعم كامل للطلاب الراغبين في الدراسة في روسيا، يشمل توجيههم لاختيار
            التخصصات، تقديم طلبات القبول، وتسهيل إجراءات الفيزا والإقامة،
            بالإضافة إلى الدعم قبل الوصول الى الجامعة.
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              توجيه التخصصات
              <PackageIcon className="fas fa-graduation-cap mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              طلبات القبول
              <PackageIcon className="fas fa-file-alt mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تسهيل الفيزا
              <PackageIcon className="fas fa-passport mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تسهيل الإقامة
              <PackageIcon className="fas fa-home mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>

        {/* خدمات التعليم في ماليزيا */}
        <PackageContainer>
          <PackageHeader>
            <PackagePrice>6,500 SR </PackagePrice>
            <PackageTitle>
              خدمات التعليم في ماليزيا
              <PackageIcon className="fas fa-university mx-3"></PackageIcon>
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            توجيه للطلاب الراغبين في الدراسة في ماليزيا، يشمل التقديم على
            الجامعات والتخصصات المناسبة، مساعدتهم في الحصول على تأشيرات الدراسة،
            بالإضافة إلى الدعم قبل الوصول الى الجامعة.
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              التقديم على الجامعات
              <PackageIcon className="fas fa-university mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              التخصصات المناسبة
              <PackageIcon className="fas fa-book mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تأشيرات الدراسة
              <PackageIcon className="fas fa-passport mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              الدعم قبل الوصول
              <PackageIcon className="fas fa-handshake mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>

        {/* خدمات أخصائي الحساب الآلي */}
        <PackageContainer>
          <PackageHeader>
            <PackagePrice>2,990 SR </PackagePrice>
            <PackageTitle>
              <PackageIcon className="fas fa-calculator mx-3"></PackageIcon>
              خدمات أخصائي الحساب الآلي
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            دعم في تطبيق تقنيات الحساب الآلي، تحسين الكفاءة الحسابية باستخدام
            البرمجيات، وأتمتة العمليات الحسابية لتحسين الإنتاجية والدقة.
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              تطبيق التقنيات
              <PackageIcon className="fas fa-code mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تحسين الكفاءة
              <PackageIcon className="fas fa-chart-line mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              أتمتة العمليات
              <PackageIcon className="fas fa-robot mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>

        {/* خدمات أخصائي الموارد البشرية */}
        <PackageContainer>
          <PackageHeader>
            <PackagePrice>4,500 SR </PackagePrice>
            <PackageTitle>
              <PackageIcon className="fas fa-users mx-3"></PackageIcon>
              خدمات أخصائي الموارد البشرية
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            مساعدة في تصميم سياسات الموارد البشرية، تحسين استراتيجيات التوظيف،
            تنظيم التدريب، وتحليل أداء الموظفين لضمان بيئة عمل فعّالة.
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              تصميم السياسات
              <PackageIcon className="fas fa-file-invoice mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تحسين التوظيف
              <PackageIcon className="fas fa-search mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تنظيم التدريب
              <PackageIcon className="fas fa-chalkboard-teacher mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تحليل الأداء
              <PackageIcon className="fas fa-chart-pie mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>
      </div>
      <Footer />
    </>
  );
}