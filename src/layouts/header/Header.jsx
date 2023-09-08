"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/firebase/firebase";
import InnerHeader from "@/layouts/innerHeader/InnerHeader";

const Header = () => {
  const router = useRouter();
  //   const dispath = useDispatch();
  const pathname = usePathname();

  const isLoggedIn = false;
  const [displayName, setDisplayName] = useState("");

  const logoutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 되었습니다.");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const ul = user.email.substring(0, user.email.lastIndexOf("@"));
          const uName = ul.charAt(0).toUpperCase() + ul.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        // 유저 정보를 redux store 에 저장하기
      } else {
        setDisplayName("");
        // 유저 정보를 redux store 에서 제거하기
      }
    });
  }, [displayName]);

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/reset"
  ) {
    return null;
  }

  return (
    <header>
      <div className={styles.loginBar}>
        <ul className={styles.list}>
          {isLoggedIn ? (
            <li className={styles.item}>
              <Link href="/login">로그인</Link>
            </li>
          ) : (
            <>
              <li className={styles.item}>
                <Link href="/admin/dashboard">관리자</Link>
              </li>
              <li className={styles.item}>
                <Link href="/order-history">주문 목록</Link>
              </li>
              <li className={styles.item}>
                <Link href="/" onClick={logoutUser}>
                  로그아웃
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/">제휴 마케팅</Link>
              </li>
              <li className={styles.item}>
                <Link href="/">쿠팡 플레이</Link>
              </li>
              <li className={styles.item}>
                <Link href="/">고객센터</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {pathname.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;
