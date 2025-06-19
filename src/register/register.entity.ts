import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Register {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  password: string;

  @Column()
  confimar_password: string;

  @Column()
  registrarse: boolean;
}