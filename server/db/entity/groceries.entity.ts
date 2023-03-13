import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Groceries {
    @PrimaryGeneratedColumn()
    grocery_id: number

    @Column()
    total_amount: number

    @Column()
    details: string

    @Column()
    created_at: Date
}