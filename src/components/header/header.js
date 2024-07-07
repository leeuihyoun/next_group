'use client'
//css 중복 방지를 위한 .module.css 파일
import Link from "next/link"
import styles from "./header.module.css"

import navLogo from '@/assets/l_logo.png'
import { usePathname } from "next/navigation"
import HeaderBackground from "./header-background"

//컴포넌트 이름은 대문자로 시작!
export default function Header(){
    // 현재 경로가 어딘지 찾고  ==> LINK의 색을 변경
    const path = usePathname(); // URL정보('use client')


    return(
        <>
        <HeaderBackground />
        <div className={styles.headerContainer}>
            <Link href='/'>
                <img className={styles.l_logo} src={navLogo.src} alt="우리동아리"/>
            </Link>
            <ul>
                <li >
                    <Link href='/group' className={path.startsWith('/group') ? styles.active : undefined}>동아리 게시글</Link>
                    
                </li>
                <li>
                    <Link href='/about' className={path.startsWith('/about')? styles.active : undefined}>소개</Link> 
                </li>
            </ul>
        </div>
        </>
    )
}

//이 네비게이션 헤더는 모든 페이지의 최상단에 놓을 거니깐
// layout.js 의 {children} 위에 추가한다.