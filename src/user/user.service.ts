import {
    BadRequestException,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from '../utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    findAll() {
        return this.prisma.user.findMany();
    }
    // Method
    async findById(id: string): Promise<User> {
        const record = await this.prisma.user.findUnique({ where: { id } });

        if (!record) {
            throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }

        return record;
    }

    async findOne(id: string): Promise<User> {
        return this.findById(id);
    }

    async create(dto: CreateUserDto): Promise<User> {
        if (dto.password != dto.confirmPassword) {
            throw new BadRequestException('As senha informadas nao sao iguais');
        }

        delete dto.confirmPassword;

        const data: User = {
            ...dto,
            password: await bcrypt.hash(dto.password, 10),
        };

        return this.prisma.user.create({ data }).catch(handleError);
    }

    async update(id: string, dto: UpdateUserDto): Promise<User> {
        await this.findById(id);

        if (dto.password) {
            if (dto.password != dto.confirmPassword) {
                throw new BadRequestException('As senhas informadas nao sao iguais.');
            }
        }

        delete dto.confirmPassword;

        const data: Partial<User> = { ...dto };

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        return this.prisma.user
            .update({
                where: { id },
                data,
            })
            .catch(handleError);
    }

    async delete(id: string) {
        await this.findById(id);

        await this.prisma.user.delete({ where: { id } });
    }
}
