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
  margin-left: 5px; /* تم التعديل إلى اليمين وتقليل الهامش */
  font-size: 1.2em;
`;

// =========================================================================
//  أنماط خاصة بمكون SmartEffect
// =========================================================================

const PackageContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: right;
  overflow: hidden; /* لمنع تجاوز العناصر */
  display: flex; /* استخدام flexbox للتوزيع */
  flex-direction: column; /* العناصر رأسية */
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
  justify-content: space-between; /* توزيع العنوان والسعر */
`;

const PackageTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0; /* إزالة الهوامش */
  display: flex;
  align-items: center;
`;

const PackagePrice = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0; /* إزالة الهوامش */
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
  display: flex; /* عرض الميزات في صف */
  flex-wrap: wrap; /* السماح بالانتقال إلى صف جديد */
  justify-content: center; /* توسيط العناصر */
`;

const PackageFeatureItem = styled.li`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 15px;
  margin: 10px;
  width: calc(50% - 20px); /* ميزتان في الصف */
  text-align: center;
  transition: transform 0.3s ease;
  direction: rtl; /* تحديد اتجاه النص من اليمين إلى اليسار */
  display: flex; /* استخدام flexbox */
  align-items: center; /* توسيط عمودي */
  justify-content: center; /* توسيط أفقي */

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%; /* ميزة واحدة في الصف */
  }
`;

// =========================================================================
//  مكون SmartEffect
// =========================================================================

export default function SmartEffect() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <SectionTitle>خدمات الأثر الذكي</SectionTitle>

        {/* باقة الانطلاقة */}
        <PackageContainer>
          <PackageHeader>
            <PackagePrice>5500 SR </PackagePrice>
            <PackageTitle>
              <PackageIcon className="fas fa-rocket" />
              باقة الانطلاقة
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            انطلاقة قوية لكل مشروع جديد يريد التواجد في السوق بهوية احترافية
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-paint-brush" />
              هوية بصرية
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-photo-video" />
              صفحات السوشيال ميديا
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-calendar-alt" />
              12 تصميم سوشيال ميديا
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-camera" />
              تصوير منتجات
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>

        {/* باقة النمو */}
        <PackageContainer>
          <PackageHeader>
            <PackagePrice>8500 SR </PackagePrice>
            <PackageTitle>
              <PackageIcon className="fas fa-chart-line" />
              باقة النمو
            </PackageTitle>
          </PackageHeader>
          <PackageDescription>
            مثالية للعلامات التجارية التي ترغب في زيادة الوعي وتحقيق تفاعل أعلى
          </PackageDescription>
          <PackageFeatures>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-check-circle" />
              كل مزايا الانطلاقة
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-comments" />
              إدارة التواصل الاجتماعي
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-images" />
              16 تصميم سوشيال ميديا
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-video" />
              فيديو دعائي قصير
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-bullhorn" />
              حملة إعلانية ممولة
            </PackageFeatureItem>
            <PackageFeatureItem>
              <PackageIcon className="fas fa-file-alt" />
              تقرير شهري
            </PackageFeatureItem>
          </PackageFeatures>
        </PackageContainer>
      </div>
      <Footer />
    </>
  );
}
