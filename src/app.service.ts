import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getAppStatus(): string {
        return 'Olá! meu nome é Carlos Eduardo Carvalho \n Projeto de Back-End com TypeScript, modulo 05 Full-Stack. \n https://projeto-ts-production.up.railway.app/api';
    }
}
