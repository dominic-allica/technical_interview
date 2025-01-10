import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run technical_interview:serve',
        production: 'nx run technical_interview:serve:production',
      },
      ciWebServerCommand: 'nx run technical_interview:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
