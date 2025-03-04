import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser"; // Import EmailJS
import Swal from "sweetalert2"; // Import SweetAlert2

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
  const form = useRef(); // Create a ref for the form

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bqm8zgm", // استبدال
        "template_odysqen", // استبدال
        form.current,
        "jGGb9ECGdgNciOnIL" // استبدال
      ) // Use the ref
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            // SweetAlert for success
            title: "تم الإرسال!",
            text: "تم إرسال رسالتك بنجاح.",
            icon: "success",
            confirmButtonText: "تمام",
            didOpen: () => {
              const popup = Swal.getPopup();
              popup.style.backgroundColor = "#f8f9fa"; // لون خلفية فاتحة زي الصفحة
              popup.style.borderRadius = "10px";
              popup.style.color = "#333"; // لون النص الأساسي في الصفحة

              const title = popup.querySelector(".swal2-title");
              if (title) {
                title.style.color = "#5d4037"; // لون بني داكن زي اللوجو
              }

              const confirmButton = popup.querySelector(".swal2-confirm");
              if (confirmButton) {
                confirmButton.style.backgroundColor = "#009688"; // لون الزر الأساسي في الصفحة
                confirmButton.style.color = "#fff";
                confirmButton.style.border = "none";
              }
            },
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            // SweetAlert for error
            title: "خطأ!",
            text: "حصل خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
            icon: "error",
            confirmButtonText: "تمام",
          });
        }
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
          <ContactForm ref={form} onSubmit={handleSubmit}>
            {" "}
            {/* Add ref to the form */}
            <FormGroup>
              <FormLabel htmlFor="name">الاسم</FormLabel>
              <FormControl
                type="text"
                id="name"
                name="from_name" // Add name attribute
                placeholder="أدخل اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">البريد الإلكتروني (اختياري)</FormLabel>
              <FormControl
                type="email"
                id="email"
                name="from_email" // Add name attribute
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            {/* إضافة حقل رقم الجوال */}
            <FormGroup>
              <FormLabel htmlFor="phone">رقم الجوال</FormLabel>
              <PhoneNumberInput
                type="tel"
                id="phone"
                name="from_phone" // Add name attribute
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
                name="message" // Add name attribute
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
