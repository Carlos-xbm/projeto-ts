import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getAppStatus(baseUrl: string) {
        return {
            status: 'Servidor rodando!',
            docs: baseUrl + '/api',
        };
    }
}
