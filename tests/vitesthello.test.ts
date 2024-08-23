import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";

describe("hello world test", () => {
  beforeEach(() => {
    // Set up any necessary environment or mocks before each test
  });

  afterEach(() => {
    // Clean up any resources or mocks after each test
  });

  test("should print hello world", () => {
    // Arrange: Set up any necessary variables or objects
    const consoleSpy = vi.spyOn( console, 'log' );

    // Act: Call the function or perform the action you want to test
    console.log('hello world');

    // Assert: Verify that the expected outcome occurred
    expect(consoleSpy).toHaveBeenCalledWith('hello world');
  });
});
