import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar'})
    releaseDate: string;

    @Column({type: 'simple-array'})
    musics: string[];
    
    @Column({type: 'int'})
    artistId: number;
}
