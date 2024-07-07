import my1 from '@/assets/my1.png';
import my2 from '@/assets/my2.jpg';
import my3 from '@/assets/my3.jpg';
import Image from 'next/image';
import styles from './page.module.css'

export default function AboutPage(){
    return(
        <div className={styles.about}>
            <header className={styles.header}>
                <h1 className={styles.highlight}>
                    동아리
                </h1>
                <p>우리동아리</p>
            </header>
            <main className={styles.main}>
                <ul className={styles.perks}>
                    <li>
                
                        <Image src={my1} alt=''/>
                    </li>
                    <li>
                
                        <Image src={my2} alt=''/>
                    </li>
                    <li>
                
                        <Image src={my3} alt=''/>
                    </li>
                </ul>
            </main>
          
        </div>


    )
        
   
}