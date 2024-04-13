//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Transactions')
export class TransactionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  transactionId: string;

  @Column('integer', { nullable: true })
  senderId: number;

  @Column('integer', { nullable: true })
  receiverId: number;

  @Column('real', { nullable: true })
  amount: number;

  @Column('integer', { nullable: true })
  currency: number;

  @Column('date', { nullable: true })
  transactionDate: Date;

  @Column('integer', { nullable: true })
  accountBalance: number;
}
