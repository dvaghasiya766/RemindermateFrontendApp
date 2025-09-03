export default class Reciver {
  id: number;
  name: string;
  email: string;
  color: string;
  creatorId: number;

  constructor(
    id: number,
    name: string,
    email: string,
    color: string,
    creatorId: number,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.color = color;
    this.creatorId = creatorId;
  }
}
