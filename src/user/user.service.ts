import { Injectable } from '@nestjs/common';
import { IUser, users } from 'src/user/mock';

@Injectable()
export class UserService {
  private users: IUser[] = users;
  getAll(): IUser[] {
    return this.users
  }

  getOne(id:string): IUser {
    const data = this.users.find((i) => i.id == +id)
    if(!data) throw new Error('not found')

    return data
  }

  createUser(data:IUser):string {
    try {
      if(this.users.find((i) => i.id == data.id )) throw new Error(`user already exists ${JSON.stringify(data)}`)
      if(this.users.find((i) =>i.email == data.email )) throw new Error(`a user with this email already exists ${JSON.stringify(data)}`)
      
      this.users = [...this.users, data]
      console.log(this.users);

      return'user created'
      
    } catch (error) {
      console.log(error);
      return `${error}`
    }
  }

  updateUser(data:IUser):string{
    let user = this.users.find((i) => i.id == data.id)
    if(!user) throw new Error('not found')
    this.users[this.users.indexOf(user)] = data
    
    console.log(this.users);
    
    return'updated'
  }


}
