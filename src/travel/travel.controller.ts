import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { TravelService } from './travel.service';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  create() {
    return this.travelService.create();
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelService.findOne(id);
  }
}