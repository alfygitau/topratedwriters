import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateOrderRevision } from 'src/order-revision/dtos/CreateOrderRevision.dto';
import { OrderRevisionService } from 'src/order-revision/services/order-revision/order-revision.service';

@Controller('order-revision')
export class OrderRevisionController {
  constructor(private readonly orderRevisionService: OrderRevisionService) {}

  @Post(':userId/:orderId/create')
  createOrderRevision(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('orderId', ParseIntPipe) orderId: number,
    @Body() revisionPayload: CreateOrderRevision,
  ) {
    return this.orderRevisionService.createOrderRevision(
      orderId,
      userId,
      revisionPayload,
    );
  }
}
