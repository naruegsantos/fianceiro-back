interface IUser {
  id?:number
  name:string
  email:string
  password:string
  isAdmin?:string
}

const users:IUser[] = [
  {
    id:1, 
    name:"Braian",
    email:"braian@gmail.com",
    password:"1234",
  },  
  {
    id:2, 
    name:"nasa",
    email:"email@gmail.com",
    password:"3321",
    isAdmin:"44197eb2-1ab6-4f98-a949-e5dacf85ddcd"
  },  
]

export {users, IUser}