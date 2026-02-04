import { ContentType } from 'src/enums/content-type.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'enum',
    enum: ContentType,
  })
  type: ContentType;

  @Column({
    type: 'varchar',
    length: 512,
  })
  url: string;

  @Column({
    type: 'varchar',
    length: 512,
  })
  image: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn()
  deleteAt: string;
}
