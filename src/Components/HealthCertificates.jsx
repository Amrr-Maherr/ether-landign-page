import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Styled Components
const HealthCertificatesContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f9f9f9; /* لون خلفية لطيف */
`;

const HealthCertificatesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
  font-family: "Tajawal", sans-serif; /* خط عربي أنيق */
`;

const HealthCertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const HealthCertificateCard = styled.div`
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: transform 0.3s ease;
  background-color: #fff;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CertificateName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  font-family: "Tajawal", sans-serif;
`;

const CertificateDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TrainingHours = styled.div`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
  direction: rtl; /* إضافة هذا السطر */
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through; /* خط يتوسط السعر الأصلي */
`;

const DiscountPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #009688;
`;

const CertificateIcon = styled.i`
  font-size: 4rem; /* حجم الأيقونة */
  color: #009688; /* لون الأيقونة */
  margin-bottom: 20px; /* مسافة أسفل الأيقونة */
`;

// Component
function HealthCertificates() {
  const certificatesData = [
    {
      name: "OSHA",
      description: "إدارة الصحة والسلامة المهنية",
      trainingHours: "30 ساعة تدريبية",
      originalPrice: "SR 2470", // السعر الأصلي
      discountPrice: "SR 1730", // سعر الخصم
      icon: "fas fa-medkit", // أيقونة صندوق الإسعافات الأولية
    },
    {
      name: "CPHQ",
      description: "أخصائي إدارة الجودة والرعاية الصحية",
      trainingHours: "40 ساعة تدريبية",
      originalPrice: "SR 5764",
      discountPrice: "SR 5764", // لا يوجد خصم
      icon: "fas fa-stethoscope", // أيقونة سماعة الطبيب
    },
    {
      name: "CIC",
      description: "الوقاية من العدوى ومكافحتها",
      trainingHours: "25 ساعة تدريبية",
      originalPrice: "SR 1882", // السعر الأصلي
      discountPrice: "SR 1600", // سعر الخصم
      icon: "fas fa-viruses", // أيقونة الفيروسات
    },
    {
      name: "CBP-CS",
      description: "الشهادة المعتمدة Lean Six Sigma Yellow Belt",
      trainingHours: "25 ساعة تدريبية",
      originalPrice: "SR 3764", // السعر الأصلي
      discountPrice: "SR 3200", // سعر الخصم
      icon: "fas fa-certificate", // أيقونة الشهادة
    },
  ];

  return (
    <>
      <Navbar />
      <HealthCertificatesContainer>
        <HealthCertificatesTitle>مجال الصحة</HealthCertificatesTitle>
        <HealthCertificatesGrid>
          {certificatesData.map((certificate, index) => (
            <HealthCertificateCard key={index}>
              <CertificateIcon className={certificate.icon}></CertificateIcon>
              <CertificateName>{certificate.name}</CertificateName>
              <CertificateDescription>
                {certificate.description}
              </CertificateDescription>
              <TrainingHours>{certificate.trainingHours}</TrainingHours>
              <PriceContainer>
                {certificate.originalPrice !== certificate.discountPrice && (
                  <OriginalPrice>{certificate.originalPrice}</OriginalPrice>
                )}
                <DiscountPrice>{certificate.discountPrice}</DiscountPrice>
              </PriceContainer>
            </HealthCertificateCard>
          ))}
        </HealthCertificatesGrid>
      </HealthCertificatesContainer>
      <Footer />
    </>
  );
}

export default HealthCertificates;
