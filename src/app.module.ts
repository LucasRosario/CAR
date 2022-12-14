import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lucasrosario:Luc45@atlascluster.y5bt7wn.mongodb.net/test'), 
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
