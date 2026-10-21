import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetosService } from './projetos.service';

// @Controller('projetos') + prefixo global 'api' => rotas em /api/projetos.
@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Get()
  findAll() {
    return this.projetosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.projetosService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProjetoDto) {
    return this.projetosService.create(dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProjetoDto) {
    return this.projetosService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204) // 204 No Content: sucesso sem corpo na resposta
  // O "return" é necessário: o service é assíncrono (senão o 404 não chega ao cliente).
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.projetosService.remove(id);
  }
}
