import { User } from 'app/model/user';

export class Task {
  taskid: number;
  name: string;
  startDate: string;
  endDate: string;
  creator: User;
  statusid: number;
}
