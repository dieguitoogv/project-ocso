import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    userId: string;
    @Column('text')
    userEmail: string;
    @Column('text')
    userPassword: string;
    @Column('simple-array',{
    default: "Employee"
    })
    userRoles: string[];

}