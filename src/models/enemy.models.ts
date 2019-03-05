import cuid from 'cuid';

export const EnemyConstants = Object.freeze({
    HEALTH_BASE: 10,
    HEALTH_MULTIPLIER: 1.1,
    DAMAGE_BASE: 1,
    DAMAGE_MULTIPLIER: 1.1,
});


export interface Enemy {

    id: string;
    name: string;
    level: number;
    currentHealth: number;

}