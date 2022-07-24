import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomers.dto';
import { Customers } from './types/Customers';

@Injectable()
export class CustomersService {
    private customers:Customers[] = [
        {
            id: 1,
            email: 'danny@gmail.com',
            name: 'Danny Danny'
        },
        {
            id: 2,
            email: 'dannAy@gmail.com',
            name: 'Adam Adam'
        },
        {
            id: 3,
            email: 'spencer@gmail.com',
            name: 'Spencer Spencer'
        }
    ]

    // firstCustomers() {
    //     return {
    //         id: 1,
    //         email: 'danny@gmail.com',
    //         CreatedAt: new Date()
    //     }
    // }

    getCustomers(){
        return this.customers;
    }

    findCustomersById(id: number) {
        return this.customers.find(user => user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto){
        this.customers.push(customerDto);
    }
}
