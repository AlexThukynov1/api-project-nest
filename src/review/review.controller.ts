import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {

    @Post('create')
    async create (@Body() dto: Omit<ReviewModel, '_id'>) {

    }

    @Delete(':id')
    async delete(@Param('id') id:string) {

    }

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId:string) {
        
    }

}
