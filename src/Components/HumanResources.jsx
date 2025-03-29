import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Styled Components
const HRContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f9f9f9; /* لون خلفية لطيف */
`;

const HRTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
  font-family: "Tajawal", sans-serif; /* خط عربي أنيق */
`;

const HRGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const HRCard = styled.div`
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

const HRName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  font-family: "Tajawal", sans-serif;
`;

const HRDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TrainingHours = styled.div`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
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
  text-decoration: line-through;
`;

const DiscountPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #009688;
`;

const HRIcon = styled.i`
  font-size: 4rem; /* حجم الأيقونة */
  color: #009688; /* لون الأيقونة */
  margin-bottom: 20px; /* مسافة أسفل الأيقونة */
`;

// Component
function HumanResources() {
  const hrData = [
    {
      name: "SHRM-CP",
      description: "محترف معتمد من جمعية إدارة الموارد البشرية",
      trainingHours: "80 ساعة تدريبية",
      originalPrice: "SR 18434",
      discountPrice: "SR 13440",
      icon: "fas fa-id-card-alt", // أيقونة SHRM-CP
    },
    {
      name: "HRCI-APHRI",
      description: "محترف مشارك في الموارد البشرية الدولية",
      trainingHours: "25 ساعة تدريبية",
      originalPrice: "SR 7294",
      discountPrice: "SR 5300",
      icon: "fas fa-globe", // أيقونة HRCI-APHRI
    },
  ];

  return (
    <>
      <Navbar />
      <HRContainer>
        <HRTitle>الموارد البشرية</HRTitle>
        <HRGrid>
          {hrData.map((hr, index) => (
            <HRCard key={index}>
              <HRIcon className={hr.icon}></HRIcon>
              <HRName>{hr.name}</HRName>
              <HRDescription>{hr.description}</HRDescription>
              <TrainingHours>{hr.trainingHours}</TrainingHours>
              <PriceContainer>
                {hr.originalPrice !== hr.discountPrice && (
                  <OriginalPrice>{hr.originalPrice}</OriginalPrice>
                )}
                <DiscountPrice>{hr.discountPrice}</DiscountPrice>
              </PriceContainer>
            </HRCard>
          ))}
        </HRGrid>
      </HRContainer>
      <Footer />
    </>
  );
}

export default HumanResources;
