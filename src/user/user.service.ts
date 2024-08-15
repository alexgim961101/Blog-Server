import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    createUser(user: Partial<User>): Promise<User> {
        return this.userRepository.save(user)
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } })
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    async updateUser(id: number, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user)
        return this.findOne(id)
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}