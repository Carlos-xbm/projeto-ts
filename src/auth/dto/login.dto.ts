import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nickname do usuário',
        example: 'carloseduardo',
    })
    nickname: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'senha de usuario',
        example: 'Abcd@123',
    })
    password: string;
}
