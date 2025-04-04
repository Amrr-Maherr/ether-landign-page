import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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

        {/* خدمات الصحة والسلامة المهنية */}
        <PackageContainer>
          <PackageHeader>
            <Link
              to="/Health-Certificates"
              style={{ textDecoration: "none", color: "white" }}
            >
              <PackagePrice>اكتشف هنا</PackagePrice>
            </Link>
            <PackageTitle>
              <PackageIcon className="fas fa-shield-alt mx-3"></PackageIcon>
              خدمات الصحة والسلامة المهنية
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            نقدم خدمات متخصصة في مجال الصحة والسلامة المهنية لضمان بيئة عمل آمنة
            وصحية، وتشمل تقييم المخاطر، وتطوير السياسات والإجراءات، وتنفيذ برامج
            التدريب
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              تقييم المخاطر
              <PackageIcon className="fas fa-exclamation-triangle mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تطوير السياسات
              <PackageIcon className="fas fa-file-alt mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              برامج التدريب
              <PackageIcon className="fas fa-users mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>

        {/* خدمات الإدارة العامة */}
        <PackageContainer>
          <PackageHeader>
            <Link
              to="/Professional-Certificates"
              style={{ textDecoration: "none", color: "white" }}
            >
              <PackagePrice>اكتشف هنا</PackagePrice>
            </Link>
            <PackageTitle>
              <PackageIcon className="fas fa-tasks mx-3"></PackageIcon>
              خدمات الإدارة العامة
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            نقدم حلولًا شاملة في مجال الإدارة العامة، بما في ذلك التخطيط
            الاستراتيجي، وإدارة المشاريع، وتحسين العمليات الإدارية، بهدف تحقيق
            الكفاءة والفعالية في الأداء
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              التخطيط الاستراتيجي
              <PackageIcon className="fas fa-compass mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              إدارة المشاريع
              <PackageIcon className="fas fa-project-diagram mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              تحسين العمليات
              <PackageIcon className="fas fa-cogs mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>

        {/* خدمات الموارد البشرية */}
        <PackageContainer>
          <PackageHeader>
            <Link
              to="/Human-Resources"
              style={{ textDecoration: "none", color: "white" }}
            >
              <PackagePrice>اكتشف هنا</PackagePrice>
            </Link>
            <PackageTitle>
              <PackageIcon className="fas fa-users mx-3"></PackageIcon>
              خدمات الموارد البشرية
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            نوفر خدمات متكاملة في مجال الموارد البشرية، تشمل التوظيف، والتدريب
            والتطوير، وإدارة الأداء، بهدف بناء فريق عمل مؤهل ومتكامل يساهم في
            تحقيق أهداف المنظمة
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              التوظيف
              <PackageIcon className="fas fa-user-plus mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              التدريب والتطوير
              <PackageIcon className="fas fa-graduation-cap mx-3"></PackageIcon>
            </PackageFeatureItem>
            <PackageFeatureItem>
              إدارة الأداء
              <PackageIcon className="fas fa-chart-line mx-3"></PackageIcon>
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>
      </div>
      <Footer />
    </>
  );
}
