/**
 * Caffeine framework 😈
 */
interface Caffeine {
  /**
   * Load a file and automatically passes the `Caffeine` argument.
   *
   * @remarks
   * Using "@" at path start tells the bundler this file or directory is located at `/scripts/caffeine/scripts/`
   * (It is preferable to use @ rather than writing the full path).
   *
   * @param filePath - The path to the file to load
   */
  Require(filePath: string): void;

  /**
   * Caffeine spell book.
   */
  SpellBook(): CaffeineSpellBook;

  /**
   * Caffeine cache.
   */
  Cache(): CaffeineCache;
}
