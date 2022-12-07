import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';

export class LoginResponseDto {
    @ApiProperty({
        description: 'jwt gerado pelologin',
        example: 'TOKEN_GERADO_AUTOMATICAMENTE',
    })
    token: string;

    @ApiProperty({
        description: 'Dados do usuario autenticado',
    })
    user: User;
}
