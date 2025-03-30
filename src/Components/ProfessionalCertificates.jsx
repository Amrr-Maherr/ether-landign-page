import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Styled Components
const CertificatesContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f9f9f9; /* لون خلفية لطيفة */
`;

const CertificatesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
  font-family: "Tajawal", sans-serif; /* خط عربي أنيق */
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const CertificateCard = styled.div`
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* ظل أكثر وضوحًا */
  width: 100%;
  transition: transform 0.3s ease;
  background-color: #fff; /* خلفية بيضاء للبطاقة */

  &:hover {
    transform: translateY(-10px); /* تأثير رفع بسيط عند التحويم */
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
  line-height: 1.6; /* تباعد الأسطر */
`;

const TrainingHours = styled.div`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
  direction: rtl; /* إضافة هذا السطر */
`;

const Price = styled.div`
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
function ProfessionalCertificates() {
  const certificatesData = [
    {
      name: "CBP-M",
      description: "محترف أعمال معتمد في التسويق",
      trainingHours: "25 ساعة تدريبية",
      price: "SR 2690",
      icon: "fas fa-bullhorn", // أيقونة التسويق
    },
    {
      name: "CAPM",
      description: "مساعد إدارة المشاريع",
      trainingHours: "25 ساعة تدريبية",
      price: "SR 3600",
      icon: "fas fa-tasks", // أيقونة إدارة المهام
    },
    {
      name: "APHRI HRCI",
      description: "المشارك المهنية في الموارد البشرية الدولية",
      trainingHours: "25 ساعة تدريبية",
      price: "SR 5300",
      icon: "fas fa-users", // أيقونة الموارد البشرية
    },
    {
      name: "ACP",
      description: "محترف معتمد من أدبي في التصميم المرئي",
      trainingHours: "76 ساعة تدريبية",
      price: "SR 4030",
      icon: "fas fa-palette", // أيقونة التصميم
    },
    {
      name: "CCNA",
      description: "خبير شبكات سيسكو",
      trainingHours: "60 ساعة تدريبية",
      price: "SR 6650",
      icon: "fas fa-network-wired", // أيقونة الشبكات
    },
    {
      name: "CBP-LS",
      description: "محترف أعمال معتمد في القيادة الإدارية",
      trainingHours: "15 ساعة تدريبية",
      price: "SR 1840",
      icon: "fas fa-chart-line", // أيقونة القيادة
    },
    {
      name: "CBP-PM",
      description: "محترف الأعمال في إدارة المشاريع",
      trainingHours: "25 ساعة تدريبية",
      price: "SR 2690",
      icon: "fas fa-project-diagram", // أيقونة إدارة المشاريع
    },
    {
      name: "IC3",
      description: "الشهادة الدولية للحاسب الآلي والانترنت",
      trainingHours: "60 ساعة تدريبية",
      price: "SR 2530",
      icon: "fas fa-globe", // أيقونة الإنترنت
    },
    {
      name: "PMP",
      description: "إدارة المشاريع الاحترافية",
      trainingHours: "35 ساعة تدريبية",
      price: "SR 4600",
      icon: "fas fa-briefcase", // أيقونة حقيبة العمل
    },
    {
      name: "SHRM",
      description: "محترف معتمد من جمعية إدارة الموارد البشرية",
      trainingHours: "80 ساعة تدريبية",
      price: "SR 13440",
      icon: "fas fa-handshake", // أيقونة المصافحة
    },
    {
      name: "CBP-CS",
      description: "محترف أعمال معتمد في خدمة العملاء",
      trainingHours: "15 ساعة تدريبية",
      price: "SR 1840",
      icon: "fas fa-headset", // أيقونة سماعة الرأس
    },
    {
      name: "MOS",
      description: "أخصائي مايكروسوفت أوفيس",
      trainingHours: "60 ساعة تدريبية",
      price: "SR 2960",
      icon: "fas fa-file-excel", // أيقونة Excel
    },
  ];

  return (
    <>
      <Navbar />
      <CertificatesContainer>
        <CertificatesTitle>الشهادات المهنية الاحترافية</CertificatesTitle>
        <CertificatesGrid>
          {certificatesData.map((certificate, index) => (
            <CertificateCard key={index}>
              <CertificateIcon className={certificate.icon}></CertificateIcon>
              <CertificateName>{certificate.name}</CertificateName>
              <CertificateDescription>
                {certificate.description}
              </CertificateDescription>
              <TrainingHours>{certificate.trainingHours}</TrainingHours>
              <Price>{certificate.price}</Price>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </CertificatesContainer>
      <Footer />
    </>
  );
}

export default ProfessionalCertificates;
