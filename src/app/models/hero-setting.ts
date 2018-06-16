export class HeroSetting {
    id: Number;
    heroId: String;
    fly: Boolean;
    run: Boolean;
    swim: Boolean;

    constructor(newHeroSetting) {
        this.id = newHeroSetting.id;
        this.heroId = newHeroSetting.heroId;
        this.fly = newHeroSetting.fly;
        this.run = newHeroSetting.run;
        this.swim = newHeroSetting.swim;
    }
}
