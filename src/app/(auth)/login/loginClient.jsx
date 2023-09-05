"use client";

import Image from "next/image";
import React, { useState } from "react";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";
import styles from "./loginClient.module.scss";
import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";
import AutoSignInCheckbox from "@/components/autoSignInCheckBox/AutoSignInCheckbox";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";
import Link from "next/link";
import Arrow from "@/assets/arrow.svg";
import { toast } from "react-toastify";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.info("성공");
  };

  const signInWithGoogle = () => {};

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="이메일을 입력하라 email@email.com"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="패스워드"
              placeholder="비밀번호를 입력하시오"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.optionGroup}>
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => {
                  setIsAutoLogin(e.target.checked);
                }}
              />
              {/* 비밀번호 수정 */}
              <Link href={"/reset"} className={styles.findLink}>
                비밀번호 변경
                <Image
                  className={styles.findLinkArrow}
                  src={Arrow}
                  alt="비밀번호 변경 화살표"
                />
              </Link>
            </div>
            <div className={styles.buttonGroup}>
              <Button type="submit" width="100%">
                로그인 버튼
              </Button>
              <Divider />
              <Button width="100%" secondary>
                <Link href={"/register"}>회원가입 버튼</Link>
              </Button>
              <Divider />
              <div>
                <Button onClick={signInWithGoogle}>구글 로그인</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
