module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@react-native-community|@react-native-firebase|@react-navigation/.*)',
  ],
  setupFilesAfterEnv: ['@testing-library/react-native','@testing-library/jest-native'],
  testEnvironment: 'jsdom',
};