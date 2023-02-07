import {
    Injectable
  } from '@nestjs/common';
  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
  import {
    CreateEmployeeDto
  } from '../dto/create-employee.dto';
  import {
    Employee,
    EmployeeDocument
  } from '../schema/employee.schema';
  
  @Injectable()
  export class EmployeeService {
  
    constructor(@InjectModel(Employee.name) private readonly employeeModel: Model < EmployeeDocument > ) {}
  
    async create(createEmployeeDto: CreateEmployeeDto): Promise < EmployeeDocument > {
      const employee = new this.employeeModel(createEmployeeDto);
      return employee.save();
    }
  
    async findAll(): Promise < EmployeeDocument[] > {
      return this.employeeModel.find()
        .exec();
    }
  
    async findByID(id: string) {
      return this.employeeModel.findById(id);
    }
    async find1(Email: string) {
      return this.employeeModel.findOne({Email});
    }
    async remove(id: string) {
      return this.employeeModel.findByIdAndRemove(id);
    }
  }