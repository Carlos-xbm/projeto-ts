import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @ApiProperty({
        description: 'Nome do Produto',
        example: 'Pizza de mussarela',
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'Descrição do Produto',
        example: 'Calabresa & mussarela com borda recheada',
    })
    description: string;

    @IsNumber({
        maxDecimalPlaces: 2,
    })
    @ApiProperty({
        description: 'Preço do produto',
        example: '45.00',
    })
    price: number;

    @IsUrl()
    @ApiProperty({
        description: 'Imagem do produto',
        example: 'http://www.pizzafresh.com/imagem-usuario',
    })
    image: string;
}
