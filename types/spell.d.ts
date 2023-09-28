/**
 * Represents a caffeine spell.
 */
interface CaffeineSpell {
  // TODO: __index, __tostring, __eq

  /**
   * Creates a new spell object.
   *
   * @param id - The numeric ID of the spell.
   *
   * @returns A new spell object.
   */
  New(id: number): CaffeineSpell;

  /**
   * Creates a new spell object.
   *
   * @returns A new spell object.
   */
  Fresh(): CaffeineSpell;

  /**
   * Gets the id of the spell.
   *
   * @param id - The numeric id of the spell.
   *
   * @returns The spell id.
   */
  GetID(): number;

  /**
   * Gets the name of the spell.
   *
   * @returns The spell name.
   */
  GetName(): string;

  /**
   * Gets the icon of the spell.
   *
   * @returns The spell icon.
   */
  GetIcon(): string;

  /**
   * Gets the cooldown of the spell.
   *
   * @returns The spell cooldown.
   */
  GetCooldown(): number;

  /**
   * Get the full cooldown (time until all charges are available)
   *
   * @returns The spell full cooldown.
   */
  GetFullRechargeTime(): number;

  /**
   * Get the remaining cooldown.
   *
   * @returns The spell remaining cooldown.
   */
  GetCooldownRemaining(): number;

  /**
   * Gets the current charges of the spell.
   *
   * @returns The spell charges.
   */
  GetCount(): number;

  /**
   * Check if the spell is known
   *
   * @returns True if the spell is known, false otherwise.
   */
  IsKnown(): boolean;

  /**
   * Check if the spell is on cooldown
   *
   * @returns True if the spell is on cooldown, false otherwise.
   */
  OnCooldown(): boolean;

  /**
   * Check if the spell is on cooldown
   *
   * @returns True if the spell is on cooldown, false otherwise.
   */
  IsOnCooldown(): boolean;

  /**
   * Check if the spell is usable
   *
   * @returns True if the spell is usable, false otherwise.
   */
  IsUsable(): boolean;

  /**
   * Check if the spell is known and usable
   *
   * @remarks Performs `IsKnown`, `IsOnCooldown` and `IsUsable` checks.
   *
   * @returns True if the spell is known and usable, false otherwise.
   */
  IsKnownAndUsable(): boolean;

  /**
   * Check if the spell is castable
   *
   * @remarks Performs custom catable function check if there is one, otherwise performs `IsKnownAndUsable` check.
   *
   * @returns True if the spell is castable, false otherwise.
   */
  Castable(): boolean;

  /**
   * Casts the spell.
   *
   * @param unit - The unit to cast the spell on.
   * @param condition - The condition to check before casting the spell.
   *
   * @returns True if the spell was cast, false otherwise.
   */
  Cast(
    unit: CaffeineUnit,
    condition?: string | ((spell: CaffeineSpell) => boolean),
  ): boolean;

  /**
   * Force casts the spell.
   *
   * @param unit - The unit to cast the spell on.
   *
   * @returns True.
   */
  ForceCast(unit: CaffeineUnit): true;

  /**
   * Sets the castable function of the spell.
   *
   * @remarks This function is called when `Castable` is called and replaces the default `IsKnownAndUsable` check.
   *
   * @param func - The function to call.
   */
  CastableIf(func: (spell: CaffeineSpell) => boolean): void;

  /**
   * Removes the castable function of the spell.
   */
  ClearCastableFunction(): void;

  /**
   * Gets the castable function of the spell.
   *
   * @returns The spell castable function.
   */
  GetCastableFunction(): (spell: CaffeineSpell) => boolean | false;

  /**
   * Sets the precast function of the spell.
   *
   * @remarks This function is called right before the spell is cast.
   */
  PreCast(func: (spell: CaffeineSpell) => void): void;

  /**
   * Gets the precast function of the spell.
   *
   * @remarks This function is called right before the spell is cast.
   *
   * @returns The spell precast function.
   */
  GetPreCastFunction(): (spell: CaffeineSpell) => void | false;

  /**
   * Sets the oncast function of the spell.
   *
   * @remarks This function is called right after the spell is cast.
   */
  OnCast(func: (spell: CaffeineSpell) => void): void;

  /**
   * Gets the oncast function of the spell.
   *
   * @remarks This function is called right after the spell is cast.
   *
   * @returns The spell oncast function.
   */
  GetOnCastFunction(): (spell: CaffeineSpell) => void | false;

  /**
   * Sets the postcast function of the spell.
   *
   * @remarks This function is called when the wow event `UNIT_SPELLCAST_SUCCEEDED` is fired.
   */
  PostCast(func: (spell: CaffeineSpell) => void): void;

  /**
   * Gets the postcast function of the spell.
   *
   * @remarks This function is called when the wow event `UNIT_SPELLCAST_SUCCEEDED` is fired.
   *
   * @returns The spell postcast function.
   */
  GetPostCastFunction(): (spell: CaffeineSpell) => void | false;

  // TODO: documentation
  /**
   *
   */
  GetWasLooking(): boolean;

  /**
   * Clicks the spell.
   *
   * @returns True if the spell was clicked, false otherwise.
   */
  Click(coordinates: CaffeineVector3): boolean;

  /**
   * Clicks the spell.
   *
   * @returns True if the spell was clicked, false otherwise.
   */
  Click(x: number, y: number, z: number): boolean;

  /**
   * Check if the spell is castable and cast it.
   *
   * @returns True if the spell is castable, false otherwise.
   */
  Call(): boolean;

  /**
   * Check if the spell is in range.
   *
   * @returns True if the spell is in range, false otherwise.
   */
  HasRange(): boolean;

  /**
   * Gets the min/max range of the spell.
   *
   * @returns The min/max range of the spell.
   */
  GetRange(): LuaMultiReturn<[number, number]>;

  /**
   * Check if the spell is in range of the unit.
   *
   * @param unit - The unit to check the range of.
   */
  IsInRange(unit: CaffeineUnit): boolean;

  /**
   * Gets the last cast time of the spell.
   *
   * @returns The last cast time of the spell.
   */
  GetLastCastTime(): number;

  /**
   * Gets the time since the last cast of the spell.
   *
   * @returns The time since the last cast of the spell.
   */
  GetTimeSinceLastCast(): number;

  /**
   * Gets the time since the last cast attempt of the spell.
   *
   * @returns The time since the last cast attempt of the spell.
   */
  GetTimeSinceLastCastAttempt(): number;

  // TODO: GetCharges() same as GetSpellCharges()

  /**
   * Gets the max charges of the spell.
   *
   * @returns The max charges of the spell.
   */
  GetMaxCharges(): number;

  /**
   * Gets the spell cast time.
   *
   * @returns The spell cast time in milliseconds.
   */
  GetCastLength(): number;

  /**
   * Gets the spell charges fractional.
   *
   * @returns The spell charges fractional.
   */
  GetChargesFractional(): number;

  /**
   * Gets the charges remaining of the spell.
   *
   * @returns The charges remaining of the spell.
   */
  GetChargesRemaining(): number;

  /**
   * Creates a new spell's condition.
   *
   * @param name - The name of the condition.
   * @param func - The condition function.
   *
   * @returns The spell.
   */
  Condition(name: string, func: () => boolean): CaffeineSpell;

  /**
   * Gets one of the spell's conditions.
   *
   * @param name - The name of the condition.
   *
   * @returns The spell's condition.
   */
  GetCondition(name: string): () => boolean;

  /**
   * Performs a condition check.
   *
   * @param name - The name of the condition.
   *
   * @returns The condition check result.
   */
  EvaluateCondition(name: string): boolean;

  /**
   * Checks if the spell has a condition.
   *
   * @param name - The name of the condition.
   *
   * @returns True if the spell has the condition, false otherwise.
   */
  HasCondition(name: string): boolean;

  /**
   * Sets the spell's target.
   *
   * @param unit - The unit to set as the spell's target.
   *
   * @returns The spell.
   */
  SetTarget(unit: CaffeineUnit | false): CaffeineSpell;

  /**
   * Gets the spell's target.
   *
   * @returns The spell's target.
   */
  GetTarget(): CaffeineUnit | false;

  //TODO: documentation
  /**
   *
   *
   * @remarks This uses a hardcoded list. If needeed, ask for more spells to be added.
   *
   * @returns
   */
  IsMagicDispel(): boolean;

  //TODO: documentation
  /**
   *
   *
   * @remarks This uses a hardcoded list. If needeed, ask for more spells to be added.
   *
   * @returns
   */
  IsCurseDispel(): boolean;

  //TODO: documentation
  /**
   *
   *
   * @remarks This uses a hardcoded list. If needeed, ask for more spells to be added.
   *
   * @returns
   */
  IsPoisonDispel(): boolean;

  /**
   * Checks if the spell is the same as another spell.
   *
   * @param spell - The other spell to check.
   *
   * @returns True if they are the same spell, false otherwise.
   */
  IsSpell(spell: CaffeineSpell): boolean;

  GetCost(): number;

  /**
   * Checks if the spell is free.
   *
   * @returns True if the spell is free, false otherwise.
   */
  IsFree(): boolean;
}
