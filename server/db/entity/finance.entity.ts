import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Finances {
    @PrimaryGeneratedColumn()
    finance_id: number

    @Column()
    type: string

    @Column()
    details: string
}