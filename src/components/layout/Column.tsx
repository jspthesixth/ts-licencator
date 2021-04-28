import { FC, useContext } from 'react';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnHeader,
  CloseButton,
  ButtonImage,
} from '../styles';
import { AddNewItem } from '../forms/AddNewItem';
import { Card } from './Card';
import { AppStateContext } from '../../context';
import close from '../../assets/icons/close.svg';

type ColumnProps = React.PropsWithChildren<{
  id: string;
  name: string;
  address: string;
  country: string;
}>;

export const Column: FC<ColumnProps> = ({
  id,
  name,
  address,
  country,
}: ColumnProps) => {
  const {
    state: { serialNumbers },
  } = useContext(AppStateContext);

  return (
    <ColumnContainer>
      <ColumnHeader>
        <ColumnTitle>{name}</ColumnTitle>
        <ColumnTitle>
          <CloseButton>
            <ButtonImage
              alt='Close'
              src={close}
              onClick={() => console.log(id)}
            />
          </CloseButton>
        </ColumnTitle>
      </ColumnHeader>
      {serialNumbers.map(
        item =>
          item.organizationName === name && (
            <Card key={item.id} text={item.serialNumber} />
          )
      )}
      <AddNewItem name={name} toggleButtonText='+ Dodaj novi ključ' dark />
    </ColumnContainer>
  );
};
