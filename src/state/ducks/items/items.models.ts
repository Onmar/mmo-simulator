export interface Item {
    id: string;
    level: number;
    rartiy: typeof Rarity;
    slot: EquipmentSlot;
    mainStat: PrimaryStat;
    secondaryLevel: number; // (0-1)
    secondaryDist: Map<SecondaryStat, number>
}

export interface Weapon extends Item {
    weaponType: WeaponType;
}

export const Rarity = {
    COMMON: "Common",
    UNCOMMON: "Uncommon",
    RARE: "Rare",
    EPIC: "Epic",
    LEGENDARY: "Legendary",
};

export enum PrimaryStat {
    STRENGTH = "Strength",
    AGILITY = "Agility",
    INTELLECT = "Intellect",
    WISDOM = "Wisdom",
}

export enum SecondaryStat {
    CRIT_CHANCE = "Critical Change",
    CRIT_POWER = "Critical Damage",
    ATTACK_SPEED = "Attack Speed",
    ATTACK_DAMAGE = "Attack Damage",
}

export enum EquipmentSlot {
    HELMET = "Helmet",
    CHEST = "Chest",
    LEGS = "Pants",
    BOOTS = "Boots",
    GLOVES = "Gloves",
    NECK = "Necklace",
    RING = "Ring",
    WEAPON = "Weapon",
}

export enum WeaponType {
    ONE_HANDED = "One Handed",
    TWO_HANDED = "Two Handed",
    SHIELD = "Shield",
}