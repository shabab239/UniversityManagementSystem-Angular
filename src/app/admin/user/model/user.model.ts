import {University} from "../../institute/model/university.model";

export class User {
  id!: number;
  name!: string;
  cell!: string;
  status!: string;
  role!: UserRole;

  // Optional fields
  email?: string;
  gender?: string;
  address?: string;
  avatar?: string;
  dateOfBirth?: Date;
  bloodGroup?: string;
  joiningDate?: Date;
  username?: string;
  password?: string;
  university?: University;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

}

export enum UserRole {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_TEACHER = 'ROLE_TEACHER',
  ROLE_STAFF = 'ROLE_STAFF',
}

export const UserRoleMap: { [key in UserRole]: string } = {
  [UserRole.ROLE_ADMIN]: 'Admin',
  [UserRole.ROLE_TEACHER]: 'Teacher',
  [UserRole.ROLE_STAFF]: 'Staff',
};
