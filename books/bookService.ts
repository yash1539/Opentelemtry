import axios from 'axios'
// import { zipkinAxios } from '../feeds/trace'
interface Book {
    id: number,
    book: string,
    aId: number
}

let books: Book[] = [
    { id: 1, book: "introduction to C", aId: 1 },
    { id: 2, book: "introduction to C++", aId: 1 },
    { id: 3, book: "introduction to PYTHON", aId: 2 },
    { id: 4, book: "introduction to JAVASCRIPT", aId: 2 },

];

export const getBooks = async () => {
    const users = await axios.get('http://localhost:3004/user', {
        headers: {
            'token': '123'
        }
    })
    console.log('users at books', users.data);

    return books
}