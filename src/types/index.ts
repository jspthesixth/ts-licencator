import React from 'react';

export type OrganizationItem = {
  id: string;
  name: string;
  address: string;
  country: string;
};

export type SerialNumberItem = {
  id: string;
  organizationName?: string;
  date: string;
  serialNumber: string;
  representative: string;
  user: string;
};

export type LicenseItem = {
  id: string;
  serialNumber?: string;
  expires: string;
  version: string;
  license: string;
  madeBy: string;
};

export type AppState = {
  organizations: OrganizationItem[];
  serialNumbers: SerialNumberItem[];
  licenses: LicenseItem[];
};

export interface ContextModel {
  state: AppState;
  dispatch: React.Dispatch<StateAction>;
}

export type StateAction =
  | { type: 'ADD_ORGANIZATION'; payload: OrganizationItem }
  | { type: 'DELETE_ORGANIZATION'; payload: string }
  | { type: 'ADD_SERIAL_NUMBER'; payload: SerialNumberItem }
  | { type: 'DELETE_SERIAL_NUMBER'; payload: string }
  | { type: 'ADD_LICENSE'; payload: LicenseItem }
  | { type: 'DELETE_LICENSE'; payload: string };
