import { OrganizationItem, OrganizationAction } from '../types';

export const addOrganization = (
  organization: OrganizationItem
): OrganizationAction => ({
  type: 'ADD_ORGANIZATION',
  payload: organization,
});

export const deleteOrganization = (id: string): OrganizationAction => ({
  type: 'DELETE_ORGANIZATION',
  payload: id,
});
