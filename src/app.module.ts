import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.host,
    port: 5432,
    username: 'postgres',
    password: 'TheBestPasword',
    database: process.env.name,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }), EmployeesModule, ProductsModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
