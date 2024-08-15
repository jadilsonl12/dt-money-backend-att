import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateTransactionDTO } from './dto/createTransaction.dto';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTransaction(data: CreateTransactionDTO) {
    try {
      const createdTransaction = await this.prismaService.transaction.create({
        data
      });
      return createdTransaction;
    } catch (error) {
      throw new BadRequestException('Erro ao criar a transação');
    }
  }
  
  async listAll() {
    try {
      const transactions = await this.prismaService.transaction.findMany({
        orderBy: {
          createdAt: 'asc',
        }
      });
      return transactions;
    } catch (error) {
      throw new BadRequestException('Erro ao listar transações');
    }
  }

  async updateTransaction(id: string, data: Partial<CreateTransactionDTO>) {
    try {
      const updatedTransaction = await this.prismaService.transaction.update({
        where: { id },
        data,
      });
      return updatedTransaction;
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar a transação');
    }
  }

  async deleteTransaction(id: string) {
    try {
      const isTransaction = await this.prismaService.transaction.findUnique({
        where: { id },
      });

      if (!isTransaction) {
        throw new BadRequestException('Transação não encontrada');
      }

      const deletedTransaction = await this.prismaService.transaction.delete({
        where: { id },
      });
      return deletedTransaction;
    } catch (error) {
      throw new BadRequestException('Erro ao excluir a transação');
    }
  }
}
