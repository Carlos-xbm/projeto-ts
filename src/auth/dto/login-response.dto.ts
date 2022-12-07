import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';

export class LoginResponseDto {
    @ApiProperty({
        description: 'jwt gerado pelologin',
        example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImNhcmxvcy14Ym0iLCJpYXQiOjE2NzAzODIzMzcsImV4cCI6MTY3MDQ2ODczN30.M56L0hzO4qkcJ2F3wrlM0ncF1XFJclWDpHAQmswja18',
    })
    token: string;

    @ApiProperty({
        description: 'Dados do usuario autenticado',
    })
    user: User;
}
