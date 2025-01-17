import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemService {
  constructor(private readonly prisma: PrismaService) { }

  create(data: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data });
  }

  findAll() {
    return this.prisma.orderItem.findMany();
  }

  findOne(id: number) {
    return this.prisma.orderItem.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateOrderItemDto) {
    return this.prisma.orderItem.update({
      where: { id },
      data
    });
  }

  remove(id: number) {
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
