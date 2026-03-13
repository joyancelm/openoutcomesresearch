export enum PicoType {
  POPULATION = 'Population',
  INTERVENTION = 'Intervention',
  COMPARISON = 'Comparison',
  OUTCOME = 'Outcome'
}

export interface ChartDataPoint {
  name: string;
  value: number;
  category: string;
}