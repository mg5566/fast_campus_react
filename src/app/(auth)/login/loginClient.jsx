'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';
import styles from './loginClient.module.scss';
import Loader from '@/components/loader/Loader';
import Input from '@/components/input/Input';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push('/');
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>

          <form className={styles.form} onSubmit={loginUser}>
            input
            <Input 
              email
              icon='letter'
              id="email"
              name="email"
              label="이메일"
              placeholder='이메일을 입력하라 email@email.com'            
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
                          <Input 
              password
              icon='lock'
              id="password"
              name="password"
              label="패스워드"
              placeholder='비밀번호를 입력하시오'            
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <div className={styles.optionGroup}>자동 로그인, 비밀번호 수정</div>
            <div className={styles.buttonGroup}>로그인 버튼</div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
