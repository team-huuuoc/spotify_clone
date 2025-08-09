import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { URLSearchParams } from 'url';
@Injectable()
export class SpotifyService {
  private accessToken: string;
  public async getAccessToken() {
    const clientId = process.env.SPOTIFY_CLIENT_ID ?? '';
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? '';

    const { data } = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: { username: clientId, password: clientSecret },
      },
    );

    this.accessToken = data.access_token;
    return this.accessToken;
  }
  public async fetchFromSpotify(endpoint: string) {
    if (!this.accessToken) await this.getAccessToken();
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/${endpoint}`,
        { headers: { Authorization: `Bearer ${this.accessToken}` } },
      );
      return data;
    } catch (error) {
      if (error.response?.status === 401) {
        await this.getAccessToken();
        const { data } = await axios.get(
          `https://api.spotify.com/v1/${endpoint}`,
          { headers: { Authorization: `Bearer ${this.accessToken}` } },
        );
        return data;
      }
      throw error;
    }
  }
}
