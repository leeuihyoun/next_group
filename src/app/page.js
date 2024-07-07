import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Link from "next/link";
import logo from "@/assets/l_logo.png"
import ImgeSlide from "@/components/image-slider/image-slider";


export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImgeSlide/>
          
        </div>
        <div className={styles.hero}>
          <h1>우리 동아리 홈페이지</h1>
          <div className={styles.cta}>
          <Link href="/about">소개</Link>
          
          <Link href="/group">게스글 보기</Link>
        </div>
        </div>
        
      
      </header>
      <main>
        <section className={styles.section}>
          <p>안녕하세요, 우리동아리 입니다.</p>
          <p>우리 동아리 홈페이지에 오신걸 환영합니다.</p>
        </section>
      </main>
    </div>
  );
}
