module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/noed_modules/babel-jest",
  },
  testEnvironment: "jsdom",
};
