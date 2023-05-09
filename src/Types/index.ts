export type Position = [number, number];
export type MapPositions = {
  myPosition: Position,
  userPosition: Position
}
export type TimezoneResponse = {
  status: string,
  message: string,
  countryCode: string,
  countryName: string,
  regionName: string,
  cityName: string,
  zoneName: string,
  abbreviation: string,
  gmtOffset: number,
  dst: string,
  zoneStart: number,
  zoneEnd: number,
  nextAbbreviation: string,
  timestamp: number,
  formatted: string
}
export type TimeData = {
  gmtOffset: number,
  zoneName: string
}
export type ConvertResponse = {
  status:string,
  message:string,
  fromZoneName:string,
  fromAbbreviation:string,
  fromTimestamp:number,
  toZoneName:string,
  toAbbreviation:string,
  toTimestamp:number,
  offset:number
}