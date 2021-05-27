import { createContext, FC, useReducer } from 'react';
import { ContextModel, AppState, StateAction } from '../types';

const initialState: AppState = {
  organizations: [],
  serialNumbers: [],
  licenses: [],
};

const reducer = (state: AppState, action: StateAction): AppState => {
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
    case 'ADD_SERIAL_NUMBER':
      return {
        ...state,
        serialNumbers: [...state.serialNumbers, action.payload],
      };
    case 'DELETE_SERIAL_NUMBER':
      return {
        ...state,
        serialNumbers: state.serialNumbers.filter(
          item => item.id !== action.payload
        ),
      };
    case 'ADD_LICENSE':
      return {
        ...state,
        licenses: [...state.licenses, action.payload],
      };
    case 'DELETE_LICENSE':
      return {
        ...state,
        licenses: state.licenses.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppStateContext = createContext({} as ContextModel);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
