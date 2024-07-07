const {MongoClient} = require('mongodb');

// title, slug, image, summary, content, creator, creator_email
const initData = [
    {
        title: '환경 보호 캠페인 활동',
        slug: 'environmental-campaign',
        image: '/images/photo1.jpg',
        summary: '환경 보호를 위한 캠페인을 진행했습니다.',
        content: `저희 동아리는 지난 주에 환경 보호 캠페인을 진행했습니다. 
        지역 주민들과 함께 쓰레기 줍기 활동을 하며 환경 보호의 중요성을 알렸습니다.`,
        creator: '김철수',
        creator_email: 'chulsu@example.com'
    },
    {
        title: '양로원 봉사 활동',
        slug: 'nursing-home-volunteer',
        image: '/images/photo2.jpg',
        summary: '양로원에서 봉사 활동을 했습니다.',
        content: `저희 동아리는 양로원을 방문하여 어르신들과 함께 시간을 보내며 다양한 활동을 했습니다. 
        모두가 기뻐하는 시간을 보냈습니다.`,
        creator: '이영희',
        creator_email: 'younghee@example.com'
    },
    {
        title: '지역 사회 청소 활동',
        slug: 'community-clean-up',
        image: '/images/photo3.jpg',
        summary: '지역 사회 청소 활동을 실시했습니다.',
        content: `저희 동아리는 지역 사회 청결을 위해 청소 활동을 진행했습니다.
         많은 사람들이 참여하여 깨끗한 환경을 만들었습니다.`,
        creator: '박민수',
        creator_email: 'minspark@example.com'
    },
    {
        title: '도서관 정리 봉사 활동',
        slug: 'library-organization',
        image: '/images/photo4.jpg',
        summary: '도서관 정리 봉사 활동을 했습니다.',
        content: `저희 동아리는 도서관 정리 봉사 활동을 통해 많은 책을 정리하고 청소했습니다. 
        도서관 이용객들에게 쾌적한 환경을 제공할 수 있게 되었습니다.`,
        creator: '정다은',
        creator_email: 'daeun@example.com'
    },
    {
        title: '헌혈 캠페인 참여',
        slug: 'blood-donation-campaign',
        image: '/images/photo5.jpg',
        summary: '헌혈 캠페인에 참여했습니다.',
        content: `저희 동아리는 헌혈의 중요성을 알리기 위해 헌혈 캠페인에 참여했습니다. 
        많은 회원들이 헌혈을 통해 생명 나눔에 동참했습니다.`,
        creator: '최지훈',
        creator_email: 'jihoon@example.com'
    }
];

async function connectDB(){
    const url = "mongodb+srv://admin:admin@cluster0.1ygidjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const options = {};

    let connectDB;

    if(process.env.NODE_ENV === 'development'){
        if(!global._mongo){
            global._mongo = new MongoClient(url,options).connect();
        }
        connectDB = global._mongo;
    }else{
        connectDB = new MongoClient(url,options).connect();
    }

    return connectDB;
}

async function insertDummyData(){
    const client = await connectDB(); // url로 연결
    const db = client.db('mydb'); // database 이름으로 연결
    const collection = db.collection('group'); //group컬렉션 접근 

    const result = await collection.insertMany(initData); // 객체배열을 전부 입력
    console.log(`${result.insertedCount} 개의 문서가 입력되었습니다.`);
}

// 데이터 삽입 실행
insertDummyData().catch(console.error);
