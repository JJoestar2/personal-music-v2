import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import MusicCategories from "./MusicCategories";

@Entity()
export default class Soundtrack extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    linkToMP3: string;

    @Column()
    previewPath: string;

    @ManyToOne(() => MusicCategories, (category) => category.id)
    category: MusicCategories
}