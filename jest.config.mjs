import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|pdf|ico|mp4|obj)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest'
  }
}

export default createJestConfig(config)
