import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Soundtrack from "./Soundtrack";

@Entity()
export default class MusicCategories extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @OneToMany(() => Soundtrack, (soundtrack) => soundtrack.id)
    soundtrack: Soundtrack[];
}