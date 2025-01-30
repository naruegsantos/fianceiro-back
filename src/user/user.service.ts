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
    if(!data) {
      throw new Error('not found')
    }
    return data
  }


  deleteUser(id:string, adminId:string): string {
    try {
      const admin = this.users.find((i) => i.id == +adminId && i.isAdmin)
      if(!admin) {
        throw new Error("This user cant't do this")

        } else {
          const user = this.users.find((i) => i.id == +id)
          if(!user) {
            
            throw new Error("This user cant't do this")
            
          } else {
            this.users = [...users.filter((i) => i.id != +user?.id)]
            return `user with id ${user?.id} excluded by ${admin.name}`
          }
      }  

    } catch (error) {
      return `${error}`
    }
  }
}
