'use client';

import Loader from '@/components/loader/Loader';
import React, { useState } from 'react';
import styles from './registerClient.module.scss';
import LogoPath from '@/assets/colorful.svg';
import Image from 'next/image';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import Link from 'next/link';
import Divider from '@/components/divider/Divider';

const RegisterClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const registUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
              value={email}
              id="email"
              email
              icon={'lock'}
              label="이메일"
              placeholder="이메일을 입력하세요."
            />
            <Input
              value={password}
              id="password"
              password
              icon={'lock'}
              label="패스워드"
              placeholder="패스워드를 입력하세요."
            />
            <Input
              value={confirmPassword}
              id="confirmPassword"
              password
              icon={'lock'}
              label="패스워드 확인"
              placeholder="위와 똑같은 패스워드를 입력하세요."
            />
            {/* buttons */}
            <div>
              <Button>회원가입</Button>
              <Divider />
              <Button secondary>
                <Link href={'/login'}>로그인</Link>
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
