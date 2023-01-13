module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src/tests/'],
  // moduleNameMapper: {
  //   '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  //   '^@components/(.*)$': '<rootDir>/src/components/simple/$1',
  //   '^@routes/(.*)$': '<rootDir>/src/routes/$1',
  //   '^@screens/(.*)$': '<rootDir>/src/screens/$1',
  //   '^@tests/(.*)$': '<rootDir>/src/tests/$1',
  // },

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
