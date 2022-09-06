export interface Temperature {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface RealFeelTemperature {
  Value: number;
  Unit: string;
  UnitType: number;
  Phrase: string;
}

export interface RealFeelTemperatureShade {
  Value: number;
  Unit: string;
  UnitType: number;
  Phrase: string;
}

export interface WetBulbTemperature {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface DewPoint {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Speed {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Direction {
  Degrees: number;
  Localized: string;
  English: string;
}

export interface Wind {
  Speed: Speed;
  Direction: Direction;
}

export interface Speed2 {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface WindGust {
  Speed: Speed2;
}

export interface Visibility {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Ceiling {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface TotalLiquid {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Rain {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Snow {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Ice {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Evapotranspiration {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface SolarIrradiance {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface HourlyForecast {
  DateTime: Date;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
  IsDaylight: boolean;
  Temperature: Temperature;
  RealFeelTemperature: RealFeelTemperature;
  RealFeelTemperatureShade: RealFeelTemperatureShade;
  WetBulbTemperature: WetBulbTemperature;
  DewPoint: DewPoint;
  Wind: Wind;
  WindGust: WindGust;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  Visibility: Visibility;
  Ceiling: Ceiling;
  UVIndex: number;
  UVIndexText: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  TotalLiquid: TotalLiquid;
  Rain: Rain;
  Snow: Snow;
  Ice: Ice;
  CloudCover: number;
  Evapotranspiration: Evapotranspiration;
  SolarIrradiance: SolarIrradiance;
  MobileLink: string;
  Link: string;
}
