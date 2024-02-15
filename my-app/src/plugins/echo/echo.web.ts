import { WebPlugin } from '@capacitor/core';

export class EchoWeb extends WebPlugin {
  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('Echo', options);
    return options; // Simple echo implementation for web
  }
}