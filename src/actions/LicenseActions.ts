import { LicenseItem, StateAction } from '../types';

export const addLicense = (license: LicenseItem): StateAction => ({
  type: 'ADD_LICENSE',
  payload: license,
});

export const deleteLicense = (id: string): StateAction => ({
  type: 'DELETE_LICENSE',
  payload: id,
});
