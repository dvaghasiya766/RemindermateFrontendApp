export default class FollowUp {
  id: number;
  title: string;
  description: string;
  status: 'Completed' | 'Missed' | 'Pending';
  date: Date;
  time?: string;
  creatorId: number;
  assigneeId: number;
  setReminder: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    status: 'Completed' | 'Missed' | 'Pending',
    date: Date,
    creatorId: number,
    assigneeId: number,
    setReminder: boolean,
    time?: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.date = date;
    this.time = time;
    this.creatorId = creatorId;
    this.assigneeId = assigneeId;
    this.setReminder = setReminder;
  }
}
