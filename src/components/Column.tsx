import { FC } from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';

type ColumnProps = React.PropsWithChildren<{
  id: string;
  name: string;
  address: string;
  country: string;
}>;

export const Column: FC<ColumnProps> = ({ name }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{name}</ColumnTitle>

      <AddNewItem toggleButtonText='+ Dodaj novi ključ' dark />
    </ColumnContainer>
  );
};
