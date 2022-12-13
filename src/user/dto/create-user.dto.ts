import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Length, Matches, MinLength } from 'class-validator';

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

    @IsString()
    @Length(11)
    @ApiProperty({
        description: 'CPF do usuário',
        example: '12345678910',
    })
    cpf: string;

    @IsUrl()
    @ApiProperty({
        description: 'Imagem de usuario',
        example: 'http://www.pizzafresh.com/imagem-usuario',
    })
    image: string;
}
