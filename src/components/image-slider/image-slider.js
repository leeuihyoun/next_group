'use client'

import './image-slider.css'
import Image from 'next/image'
import slide1 from '@/assets/slide1.jpg'
import slide2 from '@/assets/slide2.jpg'
import slide3 from '@/assets/slide3.jpg'
import slide4 from '@/assets/slide4.jpg'
import slide5 from '@/assets/slide5.jpg'
import slide6 from '@/assets/slide6.jpg'
import slide7 from '@/assets/slide7.jpg'
import { useEffect, useState } from 'react'

// 화면을 그때그때 바꿔주기 위해 useState와  useEffect를 사용

const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7
];

export default function ImgeSlide(){
    const [curSlideIdx,setCurSlideIdx] = useState(0);
    useEffect(()=>{
       //오래 걸리는 작업을 별도로 실행시키게함
        const slideTimer = setInterval(()=>{
            setCurSlideIdx(prev => {return(prev < images.length -1 ? prev+1 : 0)});
        },3000) // 3000ms에 한번씩 실행하는 함수

       return ()=>clearInterval(slideTimer);

    },[curSlideIdx])
    return(
        <div className='slideshow'>
            {
            images.map((image,index)=>{
                return(
                    <Image  src={image} 
                    className={index == curSlideIdx ? 'active' : ''}
                    alt='...' key={index}/>

                )
              
            
            })
            }
        </div>
        
    )
}