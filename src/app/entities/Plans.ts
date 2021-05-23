import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Plan')
export class Plan {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column()
    origin!: number;

    @Column()
    destiny!: number;

    @Column('decimal')
    price!: number;

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