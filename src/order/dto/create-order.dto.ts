import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
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

    @IsUUID(undefined, { each: true })
    @ApiProperty({
        description: 'Lista com os IDs dos produtos que estão no pedido',
        example: '["63b50182-e1f3-4ae1-83b4-c31fe7cff80d","ca8605fa-3a55-4be8-9e3a-192bfa31bec0"]',
    })
    products: string[];
}
