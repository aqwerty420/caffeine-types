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

  /**
   * Gets the number of enemies within the specified range of the unit.
   *
   * @remarks Result is cached for O.5 seconds.
   *
   * @param range - The range to check.
   *
   * @returns The number of enemies within the specified range of the unit.
   */
  GetEnemies(range: number): number;

  /**
   * Gets the number of melee attackers.
   
   * @returns The number of melee attackers.
   */
  GetMeleeAttackers(): number;

  /**
   * Gets the number of friendly units within the specified range of the unit and with an HP below the specified percent.
   *
   * @param distance - The maximal distance at which the unit can be.
   * @param percent - The maximal HP percent the unit can have.
   *
   * @returns The number of friendly units corresponding to the specified criteria.
   */
  GetPartyHPAround(distance: number, percent: number): number;

  /**
   * Checks if the unit is moving.
   *
   * @remarks This function is using unit speed to determine if the unit is moving.
   *
   * @returns True if the unit is moving, false otherwise.
   */
  IsMoving(): boolean;

  /**
   * Checks if the unit is moving at all.
   *
   * @remarks This function is using object movment flags to determine if the unit is moving.
   *
   * @returns True if the unit is moving at all, false otherwise.
   */
  IsMovingAtAll(): boolean;

  /**
   * Gets the unit's combo points.
   *
   * @returns The unit's combo points.
   */
  GetComboPoints(): number;

  /**
   * Gets the unit's max combo points.
   *
   * @returns The unit's max combo points.
   */
  GetComboPointsMax(): number;

  /**
   * Gets the unit's combo points deficit.
   *
   * @returns The unit's combo points deficit.
   */
  GetComboPointsDeficit(): number;

  /**
   * Checks if the unit is same as another unit.
   *
   * @param unit - The other unit to check.
   *
   * @returns True if the unit is the same as the other unit, false otherwise.
   */
  IsUnit(unit: CaffeineUnit): boolean;

  /**
   * Checks if the given unit is being tanked by the unit.
   *
   * @param unit - The other unit to that need to be tanked by.
   *
   * @returns True if the unit is the main target of the other unit, false otherwise.
   */
  IsTanking(unit: CaffeineUnit): boolean;

  /**
   * Checks if the unit is facing the given unit.
   *
   * @param unit - The other unit that need to be faced.
   *
   * @returns True if the unit is facing the other unit, false otherwise.
   */
  IsFacing(unit: CaffeineUnit): boolean;

  /**
   * Checks if the unit is behind the given unit.
   *
   * @param unit - The other unit to check.
   *
   * @returns True if the unit is behind the given unit, false otherwise.
   */
  IsBehind(unit: CaffeineUnit): boolean;

  /**
   * Checks if the unit is in front of the given unit.
   *
   * @param unit - The other unit to check.
   *
   * @returns True if the unit is in front of the given unit, false otherwise.
   */
  IsInfront(unit: CaffeineUnit): boolean;

  // TODO: documentation
  GetMeleeBoost(): number;

  // TODO: documentation
  InMelee(): boolean;

  /**
   * Gets the unit's id.
   *
   * @returns The unit's id.
   */
  GetID(): number;

  /**
   * Checks if the unit is in the player's party.
   *
   * @returns True if the unit is in the player's party, false otherwise.
   */
  IsInParty(): boolean;

  // TODO: documentation
  LinearRegression(
    time: number,
    percent: number,
  ): LuaMultiReturn<[number, number]>;

  /**
   * Gets the unit's predicted health in the specified time.
   *
   * @param time - The time in seconds.
   *
   * @returns The unit's predicted health in the specified time.
   */
  PredictHealth(time: number): number;

  /**
   * Gets the predicted time (in seconds) at which the unit's health will reach the specified percent.
   *
   * @param percent - The percent the unit's health will reach.
   *
   * @returns The predicted time (in seconds) at which the unit's health will reach the specified percent.
   */
  PredictTime(percent: number): number;

  // TODO: improve documentation, is it global or per unit?
  /**
   * Starts the TTD ticker.
   */
  StartTTDTicker(): void;

  /**
   * Gets the unit's time to die.
   *
   * @returns The unit's time till death.
   */
  TimeToDie(): number;

  // TODO: documentation
  GetCombatTime(): number;

  // TODO: documentation
  SetLastCombatTime(time: number): void;

  // TODO: documentation
  InCombatOdds(): number;

  /**
   * Gets the unit's GCD.
   *
   * @returns The unit's GCD.
   */
  GetGCD(): number;

  /**
   * Gets the unit's max GCD.
   *
   * @returns The unit's max GCD.
   */
  GetMaxGCD(): number;

  /**
   * Checks if the unit is stealthed.
   *
   * @returns True if the unit is stealthed, false otherwise.
   */
  IsStealthed(): boolean;

  /**
   * Gets the unit's swing timer.
   *
   * @returns The unit's swing timer.
   */
  GetSwingTimers(): LuaMultiReturn<[number, number]>;

  /**
   * Starts watching for weapon swings.
   */
  WatchForSwings(): void;

  /**
   * Checks if the unit is mounted.
   *
   * @returns True if the unit is mounted, false otherwise.
   */
  IsMounted(): boolean;

  /**
   * Checks if the unit is outdoors.
   *
   * @returns True if the unit is outdoors, false otherwise.
   */
  IsOutdoors(): boolean;

  /**
   * Checks if the unit is indoors.
   *
   * @returns True if the unit is indoors, false otherwise.
   */
  IsIndoors(): boolean;

  /**
   * Checks if the unit is swimming.
   *
   * @returns True if the unit is swimming, false otherwise.
   */
  IsSubmerged(): boolean;

  /**
   * Checks if the unit is not swimming.
   *
   * @returns True if the unit is not swimming, false otherwise.
   */
  IsDry(): boolean;

  /**
   * Gets the unit's stagger amount.
   *
   * @returns The unit's stagger amount.
   */
  GetStagger(): number;

  /**
   * Gets the unit's max stagger amount.
   *
   * @returns The unit's max stagger amount.
   */
  GetStaggerPercent(): number;

  /**
   * Gets the unit's power regen.
   *
   * @returns The unit's power regen.
   */
  GetPowerRegen(): number;

  /**
   * Gets the unit's staggered health relation.
   *
   * @returns The unit's staggered health relation.
   */
  GetStaggeredHealth(): number;

  /**
   * Gets the unit's combat reach.
   *
   * @returns The unit's combat reach.
   */
  GetCombatReach(): number;

  /**
   * Gets the unit's combat distance.
   *
   * @remarks it's equals to: (distance - combat reach (realized distance))
   *
   * @param target - The unit to get the combat distance to.
   *
   * @returns The unit's combat distance.
   */
  GetCombatDistance(target: CaffeineUnit): number;

  /**
   * Checks if the unit is within the distance to the given unit while considering combat reach.
   *
   * @remarks it's equals to: (combat reach + distance)
   *
   * @param target - The unit to check.
   * @param distance - The distance to check.
   *
   * @returns True if the unit is within the specified combat distance to the given unit, false otherwise.
   */
  IsWithinCombatDistance(target: CaffeineUnit, distance: number): boolean;

  /**
   * Checks if the unit is within the specified distance to the given unit.
   *
   * @param target - The unit to check.
   * @param distance - The distance to check.
   *
   * @returns True if the unit is within the specified distance to the given unit (consider combat reach), false otherwise.
   */
  IsWithinDistance(target: CaffeineUnit, distance: number): boolean;

  /**
   * Gets the unit's angle to the given unit.
   *
   * @param target - The unit to get the angle to.
   *
   * @returns The unit's angle to the given unit.
   */
  GetAngle(target: CaffeineUnit): number;

  /**
   * Gets the unit's rotation.
   *
   * @returns The unit's rotation.
   */
  GetFacing(): number;

  /**
   * Checks if target is within a arc around the unit (angle, distance) accounting for a rotation of self.
   *
   * @param target - The unit to check.
   * @param angle - The angle to check.
   * @param distance - The distance to check.
   * @param rotation - The rotation to check.
   *
   * @returns True if the unit is within the specified arc around the given unit, false otherwise.
   */
  IsWithinCone(
    target: CaffeineUnit,
    angle: number,
    distance: number,
    rotation: number,
  ): boolean;

  // TODO: GetEmpoweredStage
}
