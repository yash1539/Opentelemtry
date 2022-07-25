import {getUsers,getHelper} from './userService'
export const getAllUsers = async(ctx: any) => {
	try {	
		const users=await getUsers()
		ctx.status=200
        ctx.body=users
	} catch (error: any) {
		ctx.status=error.statusCode
        console.log("yha hu")
		ctx.body=error
	}
}

export const getHello=async(ctx:any)=>{
    try{
        const res=await getHelper()
        ctx.status=200
        ctx.body=res
    }catch(err:any){
        ctx.status=err.statusCode
        ctx.body=err
    }
}