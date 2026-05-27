module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/__mocks__/fileMock.cjs",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["**/*.test.(ts|tsx)", "**/*.spec.(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
