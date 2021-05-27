import { OrganizationItem, StateAction } from '../types';

export const addOrganization = (
  organization: OrganizationItem
): StateAction => ({
  type: 'ADD_ORGANIZATION',
  payload: organization,
});

export const deleteOrganization = (id: string): StateAction => ({
  type: 'DELETE_ORGANIZATION',
  payload: id,
});
