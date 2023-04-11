import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CategoriesModule } from './categories/categories.module';
import { LocalStrategy } from './auth/auth.local.strategy';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dbUserAdmin:kcyQbWmkQI0dnU1b@apicluster.jvgqq.mongodb.net/?retryWrites=true&w=majority',
    ),
    PassportModule,
    JwtModule.register({
      secret: 'secretkey',
      signOptions: { expiresIn: '30d' },
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy],
})
export class AppModule {}
