import { InjectionToken } from "@angular/core";

export const getLocationObject = () => location;
export enum CodeStatus {
  OK = 'OK',
  FAILED = 'FAILED'
}
export const LOCATION = new InjectionToken<Location>('LOCATION', {
  providedIn: 'root',
  factory: getLocationObject
});