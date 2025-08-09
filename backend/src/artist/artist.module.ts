import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { SpotifyModule } from 'src/spotify/spotify.module';

@Module({
  imports: [SpotifyModule],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
