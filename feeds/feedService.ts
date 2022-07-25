import axios from 'axios'
// import { zipkinAxios } from './trace';
export const getFeeds = async(ctx:any) => {
	const books=await axios.get('http://localhost:3001/book',{
        headers:{
            'token':'123'
        }
    });
    const reviews=await axios.get('http://localhost:3002/review',{
        headers:{
            'token':'123'
        }
    });
    // const users=await axios.get('http://localhost:3004/user',{
    //     headers:{
    //         'token':'123'
    //     }
    // })
    return books.data
}