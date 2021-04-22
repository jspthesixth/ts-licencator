import React from 'react';

export type OrganizationItem = {
  id: string;
  name: string;
  address: string;
  country: string;
};

export type OrganizationState = {
  organizations: OrganizationItem[];
};

export interface OrganizationContextModel {
  state: OrganizationState;
  dispatch: React.Dispatch<OrganizationAction>;
}

export type OrganizationAction =
  | { type: 'ADD_ORGANIZATION'; payload: OrganizationItem }
  | { type: 'DELETE_ORGANIZATION'; payload: string };
