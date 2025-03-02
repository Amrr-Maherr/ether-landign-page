import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

// استيراد الصور مباشرة
import perImage from "../Assets/per.jpg";

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

const TeamContainer = styled.div`
  margin-top: 50px;
`;

const TeamMember = styled.div`
  margin-bottom: 30px;
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const TeamMemberTitle = styled.h4`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const TeamMemberDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "أ. محمد العبدالله",
      title: "المدير التنفيذي",
      description:
        "يمتلك أ. محمد خبرة واسعة في مجال الإدارة والتخطيط الاستراتيجي، وهو حاصل على شهادات معتمدة في القيادة والإدارة.",
      image: perImage, // استخدام الصورة المستوردة
    },
    {
      id: 2,
      name: "أ. سارة المحمد",
      title: "مديرة التسويق",
      description:
        "تتمتع أ. سارة بخبرة كبيرة في مجال التسويق الرقمي وإدارة العلامات التجارية، وهي مسؤولة عن تطوير وتنفيذ استراتيجيات التسويق في الأكاديمية.",
      image: perImage, // استخدام الصورة المستوردة
    },
    {
      id: 3,
      name: "أ. خالد الإبراهيم",
      title: "مدير العمليات",
      description:
        "يشرف أ. خالد على جميع العمليات التشغيلية في الأكاديمية، وهو مسؤول عن ضمان جودة الخدمات المقدمة وتلبية احتياجات الطلاب.",
      image: perImage, // استخدام الصورة المستوردة
    },
  ];

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
            تقديم تجربة تعليمية فريدة ومميزة، تجمع بين الأصالة والمعاصرة، وتواكب
            أحدث التطورات في مجالات العلوم والتكنولوجيا، لنلهم جيلاً من القادة
            والمبتكرين القادرين على إحداث تغيير إيجابي في مجتمعاتهم.
          </Paragraph>

          <SectionTitle>رؤيتنا</SectionTitle>
          <Paragraph>
            أن نصبح المؤسسة التعليمية الرائدة في المنطقة، المعروفة بتميزها في
            تقديم برامج تعليمية مبتكرة ومناهج متطورة، وأن نكون الخيار الأول
            للطلاب الذين يسعون إلى تحقيق التميز والنجاح في حياتهم المهنية
            والشخصية.
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

          <SectionTitle>فريق العمل</SectionTitle>
          <TeamContainer>
            <div className="row">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-md-4">
                  <TeamMember>
                    <TeamMemberImage src={member.image} alt={member.name} />
                    <TeamMemberName>{member.name}</TeamMemberName>
                    <TeamMemberTitle>{member.title}</TeamMemberTitle>
                    <TeamMemberDescription>
                      {member.description}
                    </TeamMemberDescription>
                  </TeamMember>
                </div>
              ))}
            </div>
          </TeamContainer>
        </AboutUsContainer>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
