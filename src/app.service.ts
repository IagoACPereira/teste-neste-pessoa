import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  adicionaPessoa(pessoa: {
    nome: string,
    idade: number
  }): object {
    return {
      mensagem: 'Pessoa adicionada com sucesso',
      pessoa: {
        nome: pessoa.nome,
        idade: pessoa.idade,
      },
      statusCode: 201,
    };
  }

  pegaPessoas(): Array<object> {
    return [
      {
        nome: 'Pessoa 1',
        idade: 30,
      },
      {
        nome: 'Pessoa 2',
        idade: 20,
      },
    ];
  }

  pegaPessoaId(id: string): object {
    return {
      nome: 'Pessoa 1',
      idade: 30,
    };
  }

  atualizaPessoa(
    id: string, 
    pessoa: object
  ): object {
    return { 
      mensagem: 'Dados atualizados com sucesso',
      statusCode: 200
    };
  }

  deletaPessoa(id: string): object {
    return { 
      mensagem: 'Dados deletados com sucesso',
      statusCode: 200
    };
  }
}
