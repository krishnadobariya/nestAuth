import {
    Controller,
    Get,
    Post,
    Body,
    Param
  } from '@nestjs/common';
  import {
    EmployeeService
  } from './employee.service';
  import {
    CreateEmployeeDto,
    LoginEmployeeDto
  } from '../dto/create-employee.dto';
  
  @Controller('employee')
  export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}
  
    @Post()
    create(@Body() createEmployeeDto: CreateEmployeeDto) {
      return this.employeeService.create(createEmployeeDto);
    }
  
    @Get()
    findAll() {
      return this.employeeService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.employeeService.findByID(id);
    }
    
    @Post("/login")
    async login(@Body()LoginEmployeeDto:LoginEmployeeDto ){
    console.log("dbfhsd",LoginEmployeeDto);
      const email:string = LoginEmployeeDto.Email
      const data:object = await this.employeeService.find1(email);
      if(data){
        console.log("data: " + JSON.stringify(data));
        const pw:string = data["Password"];
        if(pw==LoginEmployeeDto.Password){
          return "Login successfully"
        }
        else{
          return "Password does not match"
        }
      }

    }
  }