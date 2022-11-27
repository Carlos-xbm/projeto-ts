import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
    constructor(private readonly prisma: PrismaService) {}

    findAll() {
        return this.prisma.table.findMany();
    }
    // Method
    async findById(id: string): Promise<Table> {
        const record = await this.prisma.table.findUnique({ where: { id } });

        if (!record) {
            throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }

        return record;
    }

    async findOne(id: string): Promise<Table> {
        return this.findById(id);
    }

    create(dto: CreateTableDto): Promise<Table> {
        const data: Table = { ...dto };

        return this.prisma.table.create({ data }).catch(this.handleError);
    }

    async update(id: string, dto: UpdateTableDto): Promise<Table> {
        await this.findById(id);

        const data: Partial<Table> = { ...dto };

        return this.prisma.table
            .update({
                where: { id },
                data,
            })
            .catch(this.handleError);
    }

    async delete(id: string) {
        await this.findById(id);

        await this.prisma.table.delete({ where: { id } });
    }

    handleError(error: Error): undefined {
        const errorLines = error.message?.split('\n');
        const lastErrorLines = errorLines[errorLines.length - 1]?.trim();
        throw new UnprocessableEntityException(
            lastErrorLines || 'Algum erro ocorreu ao executar a operação',
        );
    }
}
