/**
 * Represents a caffeine spell book.
 */
interface CaffeineSpellBook {
  /**
   * Creates a new spell book object.
   *
   * @returns A new spell book object.
   */
  New(): CaffeineSpellBook;

  /**
   * Gets a spell by its id.
   *
   * @param spellId - The numeric id of the spell.
   *
   * @returns The spell object.
   */
  GetSpell(spellId: number): CaffeineSpell;

  /**
   * Gets spells by their ids.
   *
   * @param spellIds - The numeric ids of the spells.
   *
   * @returns The spell objects.
   */
  GetSpells(spellIds: number[]): CaffeineSpell[];

  // TODO: GetList

  // TODO: GetSpellByName

  // TODO: GetIfRegistered
}
