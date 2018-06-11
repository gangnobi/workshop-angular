export class HeroModel {
    id: Number;
    name: String;
    email: String;

    constructor(newHero) {
        this.id = newHero.id;
        this.name = newHero.name;
        this.email = newHero.email;
    }
}
