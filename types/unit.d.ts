/**
 * Represents a caffeine unit.
 */
interface CaffeineUnit {
  // TODO: __index, __tostring, __eq

  /**
   * Creates a new unit object.
   *
   * @param unit - The unit to clone
   *
   * @returns A new unit object.
   */
  New(unit: CaffeineUnit): CaffeineUnit;

  /**
   * Checks if the unit exists.
   *
   * @returns True if the unit exists, false otherwise.
   */
  Exists(): boolean;

  /**
   * Checks if the unit is valid.
   *
   * @returns True if the unit is valid, false otherwise.
   */
  IsValid(): boolean;

  /**
   * Gets the unit token.
   *
   * @returns The unit token.
   */
  Token(): string;

  /**
   * Gets the unit name.
   *
   * @returns The unit name.
   */
  GetName(): string;

  /**
   * Gets the unit GUID.
   *
   * @returns The unit GUID.
   */
  GetGUID(): string;

  /**
   * Gets the unit health.
   *
   * @returns The unit health.
   */
  GetHealth(): number;

  /**
   * Gets the unit max health.
   *
   * @returns The unit max health.
   */
  GetMaxHealth(): number;

  /**
   * Gets the unit health percentage.
   *
   * @returns The unit health percentage.
   */
  GetHP(): number;

  /**
   * Gets the unit health percentage.
   *
   * @returns The unit health percentage.
   */
  GetHealthPercent(): number;

  // TODO: enum as return type
  /**
   * Gets the unit power type.
   *
   * @returns The unit power type.
   */
  GetPowerType(): number;

  // TODO: power type as enum
  /**
   * Gets the unit power.
   *
   * @param powerType - The power type to get.
   *
   * @returns The unit power.
   */
  GetPower(powerType?: number): number;

  // TODO: power type as enum
  /**
   * Gets the unit max power.
   *
   * @param powerType - The power type to get.
   *
   * @returns The unit max power.
   */
  GetMaxPower(powerType?: number): number;

  // TODO: power type as enum
  /**
   * Gets the unit power percentage.
   *
   * @param powerType - The power type to get.
   *
   * @returns The unit power percentage.
   */
  GetPP(powerType?: number): number;

  // TODO: power type as enum
  /**
   * Gets the unit power deficit.
   *
   * @param powerType - The power type to get.
   *
   * @returns The unit power deficit.
   */
  GetPowerDeficit(powerType?: number): number;

  /**
   * Gets the unit position.
   *
   * @returns The unit position.
   */
  GetPosition(): CaffeineVector3;

  /**
   * Gets the unit distance.
   *
   * @param unit - The unit to get the distance to.
   *
   * @returns The unit distance.
   */
  GetDistance(unit: CaffeineUnit): number;

  /**
   * Checks if the unit is dead.
   *
   * @returns True if the unit is dead, false otherwise.
   */
  IsDead(): boolean;

  /**
   * Checks if the unit is alive.
   *
   * @returns True if the unit is alive, false otherwise.
   */
  IsAlive(): boolean;

  /**
   * Checks if the unit is a pet.
   *
   * @returns True if the unit is a pet, false otherwise.
   */
  IsPet(): boolean;

  /**
   * Checks if the unit is friendly.
   *
   * @returns True if the unit is friendly, false otherwise.
   */
  IsFriendly(): boolean;

  /**
   * Checks if the unit is an enemy.
   *
   * @remarks If player can attack the unit, it is considered an enemy.
   *
   * @returns True if the unit is hostile, false otherwise.
   */
  IsEnemy(): boolean;

  /**
   * Checks if the unit is hostile.
   *
   * @remarks If unit can attack the player, it is considered hostile.
   *
   * @returns True if the unit is hostile, false otherwise.
   */
  IsHostile(): boolean;

  /**
   * Checks if the unit is a boss.
   *
   * @returns True if the unit is a boss, false otherwise.
   */
  IsBoss(): boolean;

  // TODO: GetOMToken ?

  /**
   * Checks if the unit is player's target.
   *
   * @returns True if the unit is player's target, false otherwise.
   */
  IsTarget(): boolean;

  /**
   * Checks if the unit is player's focus.
   *
   * @returns True if the unit is player's focus, false otherwise.
   */
  IsFocus(): boolean;

  /**
   * Checks if the unit is player's mouseover.
   *
   * @returns True if the unit is player's mouseover, false otherwise.
   */
  IsMouseover(): boolean;

  /**
   * Checks if the unit is a tank.
   *
   * @returns True if the unit is a tank, false otherwise.
   */
  IsTank(): boolean;

  /**
   * Checks if the unit is a healer.
   *
   * @returns True if the unit is a healer, false otherwise.
   */
  IsHealer(): boolean;

  /**
   * Checks if the unit is a damage dealer.
   *
   * @returns True if the unit is a damage dealer, false otherwise.
   */
  IsDamage(): boolean;

  /**
   * Checks if the unit is a player.
   *
   * @returns True if the unit is a player, false otherwise.
   */
  IsPlayer(): boolean;

  /**
   * Checks if the unit is a player controlled unit.
   *
   * @returns True if the unit is a player controlled unit, false otherwise.
   */
  IsPCU(): boolean;

  /**
   * Checks if the unit is affecting combat.
   *
   * @returns True if the unit is affecting combat, false otherwise.
   */
  IsAffectingCombat(): boolean;

  // TODO: GetClass

  // TODO: GetAuras

  // TODO: GetRawUnit

  /**
   * Checks player can see the unit.
   *
   * @param unit - The unit to check.
   *
   * @returns True if player can see the unit, false otherwise.
   */
  CanSee(unit: CaffeineUnit): boolean;

  /**
   * Checks if the unit is casting a spell.
   *
   * @returns True if the unit is casting a spell, false otherwise.
   */
  IsCasting(): boolean;

  /**
   * Gets the time (in seconds) at which the unit's cast reaches the specified percent.
   *
   * @param percent - The cast percent to check.
   *
   * @returns The time at which the unit's cast reaches the specified percent.
   */
  GetTimeCastIsAt(percent: number): number;

  /**
   * Gets the unit casting or channeling spell.
   *
   * @returns The unit casting/channeling spell or null.
   */
  GetCastingOrChannelingSpell(): CaffeineSpell | null;

  /**
   * Gets the end time (in seconds) of the unit's casting or channeling.
   *
   * @returns The end time of the unit's casting or channeling.
   */
  GetCastingOrChannelingEndTime(): number;

  /**
   * Checks if the unit is channeling a spell.
   *
   * @returns True if the unit is channeling a spell, false otherwise.
   */
  IsChanneling(): boolean;

  /**
   * Checks if the unit is casting or channeling a spell.
   *
   * @returns True if the unit is casting or channeling a spell, false otherwise.
   */
  IsCastingOrChanneling(): boolean;

  /**
   * Checks if the unit can attack another unit.
   *
   * @param unit - The unit to check.
   *
   * @returns True if the unit can attack another unit, false otherwise.
   */
  CanAttack(unit: CaffeineUnit): boolean;

  /**
   * Gets the time (in seconds) at which the unit's cast or channel will complete.
   *
   * @returns The time at which the unit's cast or channel will complete.
   */
  GetChannelOrCastPercentComplete(): number;

  /**
   * Checks if the unit is interruptible.
   *
   * @returns True if the unit is interruptible, false otherwise.
   */
  IsInterruptible(): boolean;

  /**
   * Checks if the unit is interruptible and cast/channel has reached the specified percent.
   *
   * @param percent - The percent the cast/channel must reach.
   * @param ignoreInterruptible - If true, ignores the unit's interruptible state.
   *
   * @returns True if the unit is interruptible and cast/channel has reached the specified percent, false otherwise.
   */
  IsInterruptibleAt(percent: number, ignoreInterruptible?: boolean): boolean;
}
