import { ApiProperty } from '@nestjs/swagger';
import { match } from 'assert';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @ApiProperty({
        description: 'Nome de usuario, Login',
        example: 'carlos-xbm',
    })
    nickname: string;

    @IsString()
    @ApiProperty({
        description: 'Nome completo',
        example: 'Carlos Eduardo Carvalho',
    })
    name: string;

    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Senha muito fraca',
    })
    @ApiProperty({
        description: 'Senha de usuario, Login',
        example: 'Abcd@123',
    })
    password: string;

    @ApiProperty({
        description: 'Comfime a senha',
        example: 'Abcd@123',
    })
    confirmPassword: string;

    @IsUrl()
    @ApiProperty({
        description: 'Imagem de usuario',
        example: 'http://www.pizza-de-calabresa-&-mussarela',
    })
    image: string;
}
