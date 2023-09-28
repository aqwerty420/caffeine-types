interface CaffeineCache {
  /**
   * Creates a new cache object.
   *
   * @returns A new cache object.
   */
  New(): CaffeineCache;

  /**
   * Sets a value in the cache.
   *
   * @param key - The key to cache the value under.
   * @param value - The value to cache.
   * @param duration - The duration in seconds to keep the value in the cache.
   */
  Set(key: unknown, value: unknown, duration: number): void;

  /**
   * Gets a value from the cache.
   *
   * @param key - The key to get the value for.
   *
   * @returns The value from the cache.
   */
  Get(key: unknown): unknown | null;

  /**
   * Gets a value from the cache.
   *
   * @param key - The key to get the value for.
   *
   * @returns The value from the cache.
   */
  Get<T>(key: unknown): T | null;

  /**
   * Checks if a value is cached for a key.
   *
   * @param key - The key to check.
   *
   * @returns True if a value is cached, false otherwise.
   */
  IsCached(key: unknown): boolean;
}
