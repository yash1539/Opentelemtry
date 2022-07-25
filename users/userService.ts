interface User {
    id: number,
    name: string,
    createAt: Date,
    updateAt: Date
}


let users: User[] = [
    { id: 1, name: "mike", createAt: new Date(2022, 5, 1, 9), updateAt: new Date(2022, 5, 1, 1) },
    { id: 2, name: "Raju", createAt: new Date(2022, 5, 16, 6), updateAt: new Date(2022, 5, 3, 17) },
    { id: 3, name: "sanjay", createAt: new Date(2022, 5, 4, 10), updateAt: new Date(2022, 5, 4, 21) },
    { id: 4, name: "jordan", createAt: new Date(2022, 5, 4, 10), updateAt: new Date(2022, 5, 14, 11) }
];

export const getUsers = () => {
    console.log('as');
    
	return users
}

export const getHelper=()=>{
    return "hello"
}