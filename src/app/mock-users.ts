interface IUser {
  id: number;
  email: string;
  password: string;
}

export const users: IUser[] = [
  { id: 1, email: 'admin@mail.ru', password: 'pass' },
  { id: 2, email: 'user@mail.ru', password: 'pass' },
];
