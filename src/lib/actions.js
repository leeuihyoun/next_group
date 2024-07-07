'use server';
import { connectDB } from '@/util/db';
import { redirect } from 'next/navigation';
import fs from 'node:fs/promises';
import path from 'node:path';
import slugify from 'slugify';
import {v4 as uuidv4} from 'uuid';
export default async function shareAction(formData) {
    console.log(formData);
    const data = {
        title : formData.get('title'),
        summary:formData.get('summary'),
        content:formData.get('content'),
        image:formData.get('image'),
        creator:formData.get('name'),
        creator_email : formData.get('email')
    }
    
    await saveData(data);
    redirect('/group') //끝났으면 그룹 페이지로
 }
// 이미지 파일과 DB에 데이터를 저장
async function saveData(data){
    data.slug = slugify(data.title , {lower : true});
    
    if(data.image){
        //이미지 이름을 결정, 확장자 파악
        const extension = data.image.name.split('.').pop();

        const fileName = `${uuidv4()}.${extension}`; //이미지명 결정
        const filePath = path.join('public','images',fileName); // 이미지 경로 및 이름 설정
        if(extension == 'png' || extension == 'jpg' || extension== 'jpeg'){
            //해당 확장자에 대해 파일로 저장
            const BufImage = await data.image.arrayBuffer();//이미지를 바이너리로 변환
            await fs.writeFile(filePath, Buffer.from(BufImage)); // 이미지 파일 저장
            data.image = `/images/${fileName}`
        }
    }else{
        data.image = '';
    }
    //DB에 내용 젖아
    const db = (await connectDB).db('mydb');
    let result = await db.collection('group').insertOne(data);

}
