import {Enemy, EnemyConstants} from "../../../models/enemy.models";

const getId = (enemy: Enemy): string => enemy.id;
const getName = (enemy: Enemy): string => enemy.name;
const getLevel = (enemy: Enemy): number => enemy.level;
const getCurrentHealth = (enemy: Enemy): number => enemy.currentHealth;

const getMaxHealth = (enemy: Enemy): number => {
    return Math.floor(EnemyConstants.HEALTH_BASE * Math.pow(EnemyConstants.HEALTH_MULTIPLIER, enemy.level));
};

const getDamage = (enemy: Enemy): number => {
    return Math.floor(EnemyConstants.DAMAGE_BASE * Math.pow(EnemyConstants.DAMAGE_MULTIPLIER, enemy.level));
};

const isDead = (enemy: Enemy): boolean => {
    return enemy.currentHealth == 0;
};