import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    @IsUUID()
    @ApiProperty({
        description: 'ID do usúario que está criando o pedido',
        example: '1c8c90d8-f8ec-4404-96df-c88bca403347',
    })
    userId: string;

    @IsInt()
    @IsPositive()
    @ApiProperty({
        description: 'Numero da mesa que esta realizando o pedido',
        example: 1,
    })
    tableNumber: number;

    @ValidateNested({
        each: true,
    })
    @Type(() => CreateOrderProductDto)
    @ApiProperty({
        description: 'Lista com os IDs dos produtos que estão no pedido',
        type: [CreateOrderProductDto],
    })
    products: CreateOrderProductDto[];
}
