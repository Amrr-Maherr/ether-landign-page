import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Styled Components مع دعم className من Bootstrap
const ContactUsContainer = styled(motion.div)`
  padding: 50px;
  text-align: right;
  background-color: #f8f9fa; /* لون خلفية فاتحة */
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5d4037; /* لون بني داكن من اللوجو */
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  text-align: right; /* إضافة هذه الخاصية */

  &:focus {
    outline: none;
    border-color: #009688; /* لون أزرق مخضر من اللوجو */
  }
`;

const PhoneNumberInput = styled(FormControl)`
  direction: ltr; /* فرض اتجاه النص من اليسار إلى اليمين */
  text-align: right; /* محاذاة النص إلى اليمين */
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  text-align: right; /* إضافة هذه الخاصية */

  &:focus {
    outline: none;
    border-color: #009688; /* لون أزرق مخضر من اللوجو */
  }
`;

const SubmitButton = styled(motion.button)`
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // إضافة حالة لرقم الجوال
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا إضافة الكود لإرسال النموذج
    console.log(
      "Name:",
      name,
      "Email:",
      email,
      "Phone:",
      phone, // تضمين رقم الجوال في التسجيل
      "Message:",
      message
    );
    // قم بإعادة تعيين قيم الحقول بعد الإرسال
    setName("");
    setEmail("");
    setPhone(""); // إعادة تعيين رقم الجوال
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <ContactUsContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SectionTitle>تواصل معنا</SectionTitle>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">الاسم</FormLabel>
              <FormControl
                type="text"
                id="name"
                placeholder="أدخل اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">البريد الإلكتروني</FormLabel>
              <FormControl
                type="email"
                id="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            {/* إضافة حقل رقم الجوال */}
            <FormGroup>
              <FormLabel htmlFor="phone">رقم الجوال</FormLabel>
              <PhoneNumberInput
                type="tel"
                id="phone"
                placeholder="أدخل رقم جوالك"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">الرسالة</FormLabel>
              <FormTextarea
                type="text" // تحديد نوع الحقل
                id="message"
                rows={3}
                placeholder="أدخل رسالتك"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>

            <SubmitButton
              variants={buttonVariants}
              whileHover="hover"
              type="submit"
              className="btn btn-primary" // إضافة كلاس Bootstrap للزر
            >
              إرسال
            </SubmitButton>
          </ContactForm>
        </ContactUsContainer>
      </div>
      <Footer />
    </>
  );
}
