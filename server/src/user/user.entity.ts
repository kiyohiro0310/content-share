import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column('varchar', {
    nullable: false,
    length: 512,
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    length: 512,
  })
  email: string;
}
