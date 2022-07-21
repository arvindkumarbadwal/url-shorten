import { Expose } from 'class-transformer';
import {
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
} from 'typeorm';
import configuration from '../config/configuration';

@Entity()
export class UrlEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  urlCode: string;

  @Column()
  longUrl: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;

  @Expose()
  public get shortUrl() {
    const config = configuration();
    return `${config.tiny_base_url}r/${this.urlCode}`;
  }
}
