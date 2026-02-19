import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ROLES } from "../roles";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ nullable: false, unique: true })
    username: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column()
    password_hash: string;

    @Column()
    current_organisation: string;

    @Column()
    bio: string;

    @Column({ default: false })
    email_verified: boolean;

    @Column({ default: Date.now() })
    created_at: Date;

    @Column({ default: ROLES, array: true })
    role: ROLES

    @Column({ default: true })
    is_active: boolean
}
