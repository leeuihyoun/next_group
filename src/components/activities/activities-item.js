import Link from 'next/link';
import styles from './activites-item.module.css';
import Image from 'next/image';

export default function ActivitiesItem({_id,title,slug,image,summary,content,creator,creator_email}){
    return(
        <div className={styles.activities}>
            <header className={styles.imgHeader}>
                <div className={styles.image}>
                    <Image src={image} alt= {title} fill/>
                </div>
            </header>
            <div className={styles.headerText}>
                <h2>{title}</h2>
                <p>작성자: {creator}</p>
            </div>
            <div className={styles.content}>
                <p className={styles.summary}>{summary}</p>
                <div className={styles.actions}>
                    <Link href={`/group/${_id}`}>자세히 보기</Link>
                </div>
            </div>
        </div>
    )

}