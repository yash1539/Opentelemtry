import {getBooks} from './bookService'
export const getAllBooks =async (ctx: any) => {
	try {	
		const books=await getBooks()
		console.log('b',books);
		
		ctx.body=books
		ctx.status=200
	} catch (error: any) {
		ctx.status=error.statusCode
		ctx.body=error
	}
}
