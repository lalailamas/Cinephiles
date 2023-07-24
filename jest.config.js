export default {
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jsdom', // Cambiamos el testEnvironment a jsdom para que Jest use JSDOM como el entorno de pruebas
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Asegúrate de incluir el archivo setupTests.js
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
  ],
};
