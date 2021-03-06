import styled from 'styled-components';
import { Link } from 'react-router-dom';

type AddItemButtonProps = {
  dark?: boolean;
};

type CloseButtonProps = {
  img?: string;
};

export const AppContainer = styled.div`
  background-color: #3179ba;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const RegistrationCardsContainer = styled.div`
  align-items: flex-start;
  align-content: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin: 0 20px 20px;
  border-radius: 3px;
  padding: 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0 px 1px 0px 0px;
  &:hover {
    background-color: #c0c0c0;
  }
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? '#000' : '#fff')};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button<CloseButtonProps>`
  cursor: pointer;
  border: none;
  outline: none;
`;

export const ButtonImage = styled.img`
  width: ${props => (props.width ? props.width : '12px')};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;
