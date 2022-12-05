import { UnprocessableEntityException } from '@nestjs/common';

export function handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim();

    if (!lastErrorLines) {
        console.error(error);
    }

    throw new UnprocessableEntityException(
        lastErrorLines || 'Algum erro ocorreu ao executar a operação',
    );
}
