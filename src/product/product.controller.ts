import {Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Request, Response } from "express";

@Controller("/product")
export class ProductController {
    constructor(private productService: ProductService) {}

    @UsePipes(ValidationPipe)
    @Post("/addNewProduct")

    async addNewProduct(@Body() dto: CreateProductDto , @Res() res: Response) {
        // const dto: CreateProductDto = req.body;
        try {
            const product = await this.productService.addNewProduct(dto);
            return res.status(200).json(product);
        } catch (e) {
            console.log(e);
            return res.status(404).send("Error adding cart!!");
        }
    }

    @Get("/getProducts")
    async getProducts(@Res() res: Response){
        try {
            const products = await this.productService.getProducts()
            return res.status(200).json(products)
        } catch (e){
            console.log(e)
            return res.status(500).send("Error getting products")
        }
    }

}
