import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

    async login(loginDto: LoginDto): Promise<LoginResponseDto> {
        const { nickname, password } = loginDto;

        //Prouca e checa se usuario existe, usando nickname
        const user = await this.prisma.user.findUnique({ where: { nickname } });

        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }

        //Valida se a senha esta correta
        const isHashValid = await bcrypt.compare(password, user.password);

        if (!isHashValid) {
            throw new UnauthorizedException('Usuário e/ou senha invalido');
        }

        delete user.password;
        return {
            token: this.jwtService.sign({ nickname }),
            user,
        };
    }
}
