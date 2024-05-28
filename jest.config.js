module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  modulePathIgnorePatterns: ['\\.(stories)\\.tsx$',"node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  setupFilesAfterEnv: ['./jestConfigSetupAfterEnv.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  clearMocks: false,
  coverageDirectory: './coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/**/*.ts',
    'src/**/**/*.tsx',
    '<rootDir>/src/*.tsx',
    '!src/**/**/*.spec.js',
    '!src/**/**/*.test.js',
    '!src/**/**/*.e2e.js',
    '!src/**/**/*.stories.js',
    '!src/lib/*.js',
    '!src/services/firebase.js',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
    },
  },
  moduleDirectories: ['node_modules', 'app', '__tests__'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: false,
  automock: false,
};
