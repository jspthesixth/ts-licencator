import { createContext, FC, useReducer } from 'react';
import {
  OrganizationContextModel,
  OrganizationState,
  OrganizationAction,
} from '../types';

const initialState: OrganizationState = {
  organizations: [],
};

const reducer = (
  state: OrganizationState,
  action: OrganizationAction
): OrganizationState => {
  switch (action.type) {
    case 'ADD_ORGANIZATION':
      return {
        ...state,
        organizations: [...state.organizations, action.payload],
      };
    case 'DELETE_ORGANIZATION':
      return {
        ...state,
        organizations: state.organizations.filter(
          item => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const OrganizationContext = createContext(
  {} as OrganizationContextModel
);

export const OrganizationStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrganizationContext.Provider value={{ state, dispatch }}>
      {children}
    </OrganizationContext.Provider>
  );
};
