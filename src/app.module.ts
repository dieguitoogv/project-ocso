import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from "@nestjs/config";
import { Product } from './products/entities/product.entity';
import { ProvidersModule } from './providers/providers.module';
import { ManagersModule } from './managers/managers.module';
import { LocationsModule } from './locations/locations.module';
import { RegionsModule } from './regions/regions.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY, EXPIRES_IN } from './auth/constants/jwt.constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.host,
    port: 5432,
    username: 'postgres',
    password: 'TheBestPasword',
    database: process.env.name,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }), EmployeesModule, ProductsModule, ProvidersModule, ManagersModule, LocationsModule, RegionsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
