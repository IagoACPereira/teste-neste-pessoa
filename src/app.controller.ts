import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body,
  Param
 } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cliente')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  adicionaPessoa(
    @Body()
    pessoa: {
      nome: string,
      idade: number,
    }
  ): object {
    return this.appService.adicionaPessoa(pessoa);
  }

  @Get()
  pegaPessoas(): Array<object> {
    return this.appService.pegaPessoas();
  }

  @Get(':id')
  pegaPessoaId(
    @Param('id')
    id: string
  ): object {
    console.log(id)
    return this.appService.pegaPessoaId(id);
  }

  @Put(':id')
  atualizaPessoa(
    @Param('id')
    id: string,
    @Body()
    pessoa: {
      nome: string,
      idade: number,
    }
  ): object {
    return this.appService.atualizaPessoa(id, pessoa);
  }

  @Delete(':id')
  deletaPessoa(
    @Param('id')
    id: string
  ): object {
    return this.appService.deletaPessoa(id);
  }
}
