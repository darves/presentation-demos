import { OperatingSystem } from "./operating-system.enum";

export interface ExampleFormModel {
  name: string;
  email: string | null;
  age: number;
  operatingSystem: OperatingSystem | null;

  // #region newProperty
  newProperty: string;
  newProperty2: string;
  // #endregion
}