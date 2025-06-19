import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class IniciarSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}