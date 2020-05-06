import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Ao utilizar o '@Entity' indicamos a tabela que iremos
 * trabalhar no banco de dados
 */
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
