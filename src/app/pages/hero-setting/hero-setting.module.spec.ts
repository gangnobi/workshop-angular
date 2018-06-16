import { HeroSettingModule } from './hero-setting.module';

describe('HeroSettingModule', () => {
  let heroSettingModule: HeroSettingModule;

  beforeEach(() => {
    heroSettingModule = new HeroSettingModule();
  });

  it('should create an instance', () => {
    expect(heroSettingModule).toBeTruthy();
  });
});
