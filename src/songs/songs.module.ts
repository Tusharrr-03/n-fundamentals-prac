import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';

@Module({
  controllers: [SongsController],
  providers: [
    {
      provide: SongsService,
      useClass: SongsService,
    }
  ],

  // providers: [SongsService, {
  //   provide: 'CONNECTION',
  //   useValue: 'This is a connection string',
  // }],
})
export class SongsModule { }
