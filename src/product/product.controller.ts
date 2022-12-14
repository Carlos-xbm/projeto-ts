import {
    Body, Controller, Delete, Get, HttpCode,
    HttpStatus, Param, Patch, Post, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('product')
@UseGuards(AuthGuard())
@ApiBearerAuth()

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @ApiOperation({
        summary: 'Criar um produto',
    })
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get()
    @ApiOperation({
        summary: 'Lista de todos os produtos',
    })
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Listar um produto por ID',
    })
    findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar um produto por ID',
    })
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({
        summary: 'Deletar um produto por ID',
    })
    remove(@Param('id') id: string) {
        this.productService.delete(id);
    }
}
