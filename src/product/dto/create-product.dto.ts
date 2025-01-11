import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @MaxLength(55)
    name: string;

    @IsNotEmpty()
    @MaxLength(55)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    category_id: number;

}
