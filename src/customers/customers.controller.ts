import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/CreateCustomers.dto';

@Controller('customers')
export class CustomersController {
    constructor(
        private customersService: CustomersService
    ) { }
    @Get(':id')
    getCustomers(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response
    ) {

        const customers = this.customersService.findCustomersById(id);
        if (customers) {
            console.log(customers);
            res.status(200).send(customers);

        } else {
            res.status(400).send({ msg: 'Customers not found!' })
        }

        return customers;
    }

    @Get('/search/:id')
    searchCustomersById(@Param('id', ParseIntPipe) id: number) {
        const customers = this.customersService.findCustomersById(id);

        if(customers)
            return customers;
        throw new HttpException('Customers not found!', HttpStatus.BAD_REQUEST);
    }

    @Get('')
    getAllCustomers(){
        return this.customersService.getCustomers();
    }
    @Post('create')
    createCustomer(@Body() createCustomerDto:CreateCustomerDto){
        console.log(createCustomerDto);
        this.customersService.createCustomer(createCustomerDto);
        
    }
}
