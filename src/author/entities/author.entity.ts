import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: "simple-array"})
    musics: string[];

    @Column()
    biography: string;
}
