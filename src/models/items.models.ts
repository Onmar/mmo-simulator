export interface Item {
    id: string;
    level: number;
    rarity: Rarity;
    type: EquipmentType;
    mainStat: MainStat;
    secondaryStats: Map<SecondaryStat, number>; // numbers between 0 and 1
}

export interface Weapon extends Item {
    weaponType: WeaponType;
}

type EnumLiteralsOf<T extends Object> = T[keyof T];

export type Rarity = EnumLiteralsOf<typeof Rarity>
export const Rarity: {[key: string]: string} = Object.freeze({
    COMMON: "Common" as "Common",
    UNCOMMON: "Uncommon" as "Uncommon",
    RARE: "Rare" as "Rare",
    EPIC: "Epic" as "Epic",
    LEGENDARY: "Legendary" as "Legendary",
});

export type MainStat = EnumLiteralsOf<typeof MainStat>;
export const MainStat: {[key: string]: string} = Object.freeze({
    STRENGTH: "Strength" as "Strength",
    AGILITY: "Agility" as "Agility",
    INTELLECT: "Intellect" as "Intellect",
    WISDOM: "Wisdom" as "Wisdom",
});

export type SecondaryStat = EnumLiteralsOf<typeof SecondaryStat>;
export const SecondaryStat: {[key:string]: string} = Object.freeze({
    CRIT_CHANCE: "Critical Change",
    CRIT_POWER: "Critical Damage",
    ATTACK_SPEED: "Attack Speed",
    ATTACK_DAMAGE: "Attack Damage",
    GOLD_FIND: "Gold Find",
});

export type EquipmentType = EnumLiteralsOf<typeof EquipmentType>;
export const EquipmentType: {[key: string]: string} = Object.freeze({
    HELMET: "Helmet",
    CHEST: "Chest",
    LEGS: "Pants",
    BOOTS: "Boots",
    GLOVES: "Gloves",
    NECK: "Necklace",
    RING: "Ring",
    WEAPON: "Weapon",
});

export type WeaponType = EnumLiteralsOf<typeof WeaponType>;
export const WeaponType: {[key: string]: string} = Object.freeze({
    ONE_HANDED: "One Handed",
    TWO_HANDED: "Two Handed",
    SHIELD: "Shield",
});