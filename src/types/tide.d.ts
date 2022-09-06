export interface Metadata {
  latitude: number;
  longitude: number;
  datum: string;
  start: Date;
  days: number;
  interval: number;
  height: string;
}

export interface Value {
  time: Date;
  value: number;
}

export interface TideData {
  metadata: Metadata;
  values: Value[];
}
