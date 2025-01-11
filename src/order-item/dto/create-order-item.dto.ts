import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateOrderItemDto {

    @IsOptional()
    order_id: number;
    
    @IsNotEmpty()
    @IsNumber()
    product_id: number;
    
    @IsNotEmpty()
    @IsNumber()
    amount: number;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;

}
