import { FC } from 'react';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnHeader,
  CloseButton,
  ButtonImage,
} from './styles';
import { AddNewItem } from './AddNewItem';
import close from '../assets/icons/close.svg';

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

      <AddNewItem toggleButtonText='+ Dodaj novi ključ' dark />
    </ColumnContainer>
  );
};
