import cuid from 'cuid';

export interface Equipment {
    helmet: string;
    ring1: string;
    ring2: string;
    // ToDo: Add more slots
}

export class Character {

    public static readonly HEALTH_BASE = 100;
    public static readonly HEALTH_MULTIPLIER = 1.1;
    public static readonly DAMAGE_BASE = 1;
    public static readonly DAMAGE_MULTIPLIER = 1.1;
    public static readonly EXP_BASE = 100;
    public static readonly EXP_MULTIPLIER = 1.15;

    public static readonly LEVEL_MAX = 50;

    private readonly _id: string = cuid();

    private _name: string = "Test";
    private _level: number = 0;
    private _experience: number = 0;
    private _equipped: Equipment = {
        helmet: "",
        ring1: "",
        ring2: "",
    };
    private _currentHealth: number = this.maxHealth;


    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get level(): number {
        return this._level;
    }

    public get experience(): number {
        return this._experience;
    }

    public get maxExperience(): number {
        return Math.floor(Character.EXP_BASE * Math.pow(Character.EXP_MULTIPLIER, this.level));
    }

    public get equipped(): Equipment {
        return this._equipped;
    }

    public get maxHealth(): number {
        return Math.floor(Character.HEALTH_BASE * Math.pow(Character.HEALTH_MULTIPLIER, this.level));
    }

    public get currentHealth(): number {
        return this._currentHealth;
    }

    public get damage(): number {
        return Math.floor(Character.DAMAGE_BASE * Math.pow(Character.DAMAGE_MULTIPLIER, this.level));
    }

    public addExperience(exp: number): void {
        if(this.level >= Character.LEVEL_MAX) return;
        this._experience += exp;
    }

    public hit(amount: number): void {
        this._currentHealth = Math.max(this.currentHealth - amount, 0);
    }

    public heal(amount: number): void {
        this._currentHealth = Math.min(this.currentHealth + amount, this.maxHealth);
    }

    public isDead(): boolean {
        return this.currentHealth == 0;
    }

}
