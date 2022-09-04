import { IUser } from './user.interface';

export interface ILoginResponseData {
  result: string;
  successful: boolean;
  user: IUser;
}
