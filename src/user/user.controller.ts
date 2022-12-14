import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
    UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({
        summary: 'Criar um usuario',
    })
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    @ApiOperation({
        summary: 'Lista com todos os usuarios',
    })
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Mostar usuario por ID',
    })
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Editar um usuario pelo ID',
    })
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({
        summary: 'Deletar um usuario pelo ID',
    })
    @UseGuards(AuthGuard())
    @ApiBearerAuth()
    remove(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
