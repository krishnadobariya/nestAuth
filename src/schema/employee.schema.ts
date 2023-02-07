import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
  
  export type EmployeeDocument = Employee & Document;
  
  @Schema()
  export class Employee {
    @Prop()
    FirstName: string;
  
    @Prop()
    LastName: string;
  
    @Prop()
    Email: string;
  
    @Prop()
    Password: string;
}
  
  export const EmployeeSchema = SchemaFactory.createForClass(Employee);