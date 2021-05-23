import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Plan')
export default class Plan {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column()
    name!: string;

    @Column()
    minutes!: number;

    // constructor(
    //     params: { name: string;password: string },
    //     id?: string,
    // ) {
    //     Object.assign(this, params);
    // }

    // @BeforeInsert()
    // async hashPassword() {
    //     this.password = await bcrypt.hashSync(this.password, 5);
    // }
}