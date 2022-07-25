import axios from 'axios'
// import { zipkinAxios } from '../feeds/trace'
interface Review {
    id: number,
    aId: number,
    bId: number,
    bookName: string,
    reviewBy: string,
    review: string
}

let reviews: Review[] = [
    { id: 1, aId: 1, bId: 1, bookName: "introduction to C", reviewBy: "Chris Sam", review: "Since story is king in the world of fiction, it probably won’t come as any surprise to learn that a book review for a novel will concentrate on how well the story was told." },
    { id: 2, aId: 1, bId: 2, bookName: "introduction to C++", reviewBy: "Ajay Jade", review: "That said, book reviews in all genres follow the same basic formula that we discussed earlier. In these examples, you’ll be able to see how book reviewers on different platforms expertly intertwine the plot summary and their personal opinions of the book to produce a clear, informative, and concise review." },
    { id: 3, aId: 2, bId: 3, bookName: "introduction to PYTHON", reviewBy: "Vikas Vikky", review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. If I sound stunningly inarticulate at times in this review, " },
    { id: 4, aId: 2, bId: 4, bookName: "introduction to C++", reviewBy: "Priyank Patel", review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double stunningly inarticulate at times in this review, " },
    { id: 5, aId: 3, bId: 1, bookName: "introduction to PYTHON", reviewBy: "Sam Mani", review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. in this review, " },
    { id: 6, aId: 4, bId: 4, bookName: "introduction to JAVASCRIPT", reviewBy: "Abhi Kumar", review: "YOU. ARE. THE. DEAD. Oh my God. I got the chills so many times toward the end of this book. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected. Or in Newspeak Double Plus Good. Let me preface this with an apology. " }
];

export const getReviews = async () => {
    const res = await axios.get('http://localhost:3004/user/hello', {
        headers: {
            'token': '123'
        }
    })
    console.log('hello at reviews', res.data);

    return reviews
}