import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lastName: string;
  @Column()
  firstName: string;
  @Column()
  photoUrl: string;
  @Column()
  age: number;
}
