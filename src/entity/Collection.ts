import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Soundtrack from "./Soundtrack";

@Entity()
export default class Collection extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    poster: string;

    @Column()
    status: string;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToMany(() => Soundtrack)
    @JoinTable()
    soundtrack: Soundtrack[];
}