import { IsDateString, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTransactionDTO {
  @IsString({ message: 'Campo Title deve ser preenchido' })
  @MinLength(3, { message: 'Campo Title deve ter no mínimo 3 caracteres' })
  title: string;

  @IsNumber({}, { message: 'Campo Price deve ser preenchido correetamente' })
  price: number;

  @IsString({ message: 'Campo Category deve ser preenchido' })
  @MinLength(3, { message: 'Campo Category deve ter no mínimo 3 caracteres' })
  category: string;

  @IsString({ message: 'Campo Type deve ser preenchido' })
  @MinLength(3, { message: 'Campo type deve ter no mínimo 3 caracteres' })
  type: string;

  @IsDateString({}, {message: 'Campo data deve ser preenchido'})
  data: Date
}