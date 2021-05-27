import { SerialNumberItem, StateAction } from '../types';

export const addSerialNumber = (
  serialNumber: SerialNumberItem
): StateAction => ({
  type: 'ADD_SERIAL_NUMBER',
  payload: serialNumber,
});

export const deleteSerialNumber = (id: string): StateAction => ({
  type: 'DELETE_SERIAL_NUMBER',
  payload: id,
});
