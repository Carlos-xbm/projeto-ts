import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
    @IsUUID()
    @ApiProperty({
        description: 'ID do produto',
        example: 'dfgfdgdg-dgfdggfdg-sdfgdg-sdfgdfg-dfgg34',
    })
    productId: string;

    @IsInt()
    @IsPositive()
    @ApiProperty({
        description: 'Quantidade de items no pedido',
        example: 1,
    })
    quantity: number;

    @IsString()
    @ApiProperty({
        description: 'Observações do produto',
        example: 'Sem cebola',
    })
    description: string;
}
