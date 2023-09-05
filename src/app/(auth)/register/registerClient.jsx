"use client";

import Loader from "@/components/loader/Loader";
import React, { useState } from "react";
import styles from "./registerClient.module.scss";
import LogoPath from "@/assets/colorful.svg";
import Image from "next/image";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Link from "next/link";
import Divider from "@/components/divider/Divider";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

const RegisterClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("패스워드가 일치하지 않습니다.");
    }

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        const user = useCredential.user;
        console.log(user);

        setIsLoading(false);

        toast.success("회원가입 성공");
        router.push("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message, "회원가입 실패");
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.pages}>
        <div className={styles.container}>
          {/* logo */}
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>

          <form className={styles.form} onSubmit={registUser}>
            {/* inputs */}
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="패스워드"
              placeholder="패스워드를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="패스워드 확인"
              placeholder="위와 똑같은 패스워드를 입력하세요."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* buttons */}
            <div>
              <Button onClick={registUser}>회원가입</Button>
              <Divider />
              <Button secondary>
                <Link href={"/login"}>로그인</Link>
              </Button>
              <Divider />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;
