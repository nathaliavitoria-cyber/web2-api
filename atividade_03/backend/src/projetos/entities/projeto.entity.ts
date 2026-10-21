import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Representa a tabela "projetos" no PostgreSQL.
@Entity('projetos')
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao?: string;

  @Column()
  cor: string;
}
