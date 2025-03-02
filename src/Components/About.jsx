import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUsContainer = styled.div`
  padding: 50px;
  text-align: right;
  background-color: #f8f9fa; /* لون خلفية فاتحة */
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

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #333;

  &:before {
    content: "• ";
    color: #009688; /* لون أزرق مخضر من اللوجو */
    margin-left: -15px;
    margin-right: 5px;
  }
`;

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <AboutUsContainer>
          <SectionTitle>من نحن</SectionTitle>
          <Paragraph>
            نسعى لأن يكون الأثر هو المرجع الرئيسي لتحقيق التمكين المهني، ومصدرًا
            مستدامًا لإحداث الأثر الإيجابي في تنمية القدرات الفردية والمؤسسية.
          </Paragraph>
          <Paragraph>
            نسعى في الأثر إلى تمكين الأفراد والمؤسسات من تحقيق أقصى إمكاناتهم من
            خلال تقديم برامج استشارية متميزة تعتمد على أحدث الاتجاهات والأساليب
            المبتكرة. نركز على إحداث أثر طويل الأمد يساهم في رفع كفاءة الأداء
            وتعزيز قدرات التنافس على المستويات المحلية والإقليمية والدولية.
          </Paragraph>

          <SectionTitle>رسالتنا</SectionTitle>
          <Paragraph>
            نسعى في الأثر إلى تمكين الأفراد والمؤسسات من تحقيق أقصى إمكاناتهم من
            خلال تقديم برامج استشارية متميزة تعتمد على أحدث الاتجاهات والأساليب
            المبتكرة. نركز على إحداث أثر طويل الأمد يساهم في رفع كفاءة الأداء
            وتعزيز قدرات التنافس على المستويات المحلية والإقليمية والدولية.
          </Paragraph>

          <SectionTitle>رؤيتنا</SectionTitle>
          <Paragraph>
            نسعى لأن يكون الأثر هو المرجع الرئيسي لتحقيق التمكين المهني، ومصدرًا
            مستدامًا لإحداث الأثر الإيجابي في تنمية القدرات الفردية والمؤسسية.
          </Paragraph>

          <SectionTitle>قيمنا الريادية</SectionTitle>
          <List>
            <ListItem>الابتكار</ListItem>
            <ListItem>الجودة</ListItem>
            <ListItem>الاحترافية</ListItem>
            <ListItem>التعليم المستمر</ListItem>
            <ListItem>الشراكة</ListItem>
            <ListItem>الاستدامة</ListItem>
          </List>

          <SectionTitle>أهدافنا التحويلية</SectionTitle>
          <List>
            <ListItem>
              إحداث أثر مستدام في تطوير القدرات البشرية والمؤسسية
            </ListItem>
            <ListItem>تمكين الريادة والابتكار في المؤسسات</ListItem>
            <ListItem>تعزيز الكفاءة</ListItem>
            <ListItem>المساهمة في التنمية المجتمعية</ListItem>
          </List>
        </AboutUsContainer>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
