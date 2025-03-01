// Register.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RegisterContainer = styled(motion.div)`
  padding: 50px;
  text-align: right;
  background-color: #f8f9fa; /* لون خلفية فاتحة */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #5d4037; /* لون بني داكن من اللوجو */
  position: relative; /* لإنشاء خط سفلي */
  padding-bottom: 10px;

  /* إضافة خط سفلي أنيق */
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 3px;
    background-color: #009688; /* لون أزرق مخضر من اللوجو */
  }
`;

const RegisterForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #009688; /* لون أزرق مخضر من اللوجو */
    box-shadow: 0 0 0 0.2rem rgba(0, 150, 136, 0.25); /* ظل خفيف */
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
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #5d4037;
    transform: translateY(-2px); /* رفع الزر قليلاً */
  }
`;

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
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

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا إضافة الكود لتسجيل المستخدم
    console.log(
      "Name:",
      name,
      "Email:",
      email,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword
    );
    // قم بإعادة تعيين قيم الحقول بعد الإرسال
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <RegisterContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle>تسجيل</SectionTitle>
            <RegisterForm onSubmit={handleSubmit}>
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

              <FormGroup>
                <FormLabel htmlFor="password">كلمة المرور</FormLabel>
                <FormControl
                  type="password"
                  id="password"
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="confirmPassword">
                  تأكيد كلمة المرور
                </FormLabel>
                <FormControl
                  type="password"
                  id="confirmPassword"
                  placeholder="أكد كلمة المرور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </FormGroup>

              <SubmitButton
                variants={buttonVariants}
                whileHover="hover"
                type="submit"
                className="btn btn-primary" // إضافة كلاس Bootstrap للزر
              >
                تسجيل
              </SubmitButton>
            </RegisterForm>
          </RegisterContainer>
        </div>
      </div>
    </div>
  );
}

export default Register;
