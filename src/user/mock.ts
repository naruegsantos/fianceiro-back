interface IUser {
  id:number
  name:string
  email:string
  password:string
  isAdmin?:boolean
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
    isAdmin:true
  },  
]

export {users, IUser}