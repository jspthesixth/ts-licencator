import { useState, useContext } from 'react';
import { SerialNumberItem } from '../../types';
import { useFocus } from '../../hooks/useFocus';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { AppStateContext } from '../../context';
import { addSerialNumber } from '../../actions/SerialNumberActions';

type NewKeyFormProps = {
  showKeyForm(): void;
  name?: string;
};

export const NewKeyForm = ({ showKeyForm, name }: NewKeyFormProps) => {
  const [
    serialNumberObject,
    setSerialNumberObject,
  ] = useState<SerialNumberItem>({
    id: new Date().getTime().toString(),
    organizationName: name,
    date: '',
    serialNumber: '',
    representative: '',
    user: '',
  });

  const { dispatch } = useContext(AppStateContext);

  const inputRef = useFocus();

  const {
    id,
    organizationName,
    serialNumber,
    date,
    representative,
    user,
  } = serialNumberObject;

  const addSerialNumberHandler = (sn: SerialNumberItem): void => {
    if (
      id.trim() === '' ||
      serialNumber.trim() === '' ||
      (organizationName && organizationName.trim() === '')
    ) {
      showKeyForm();
      return;
    }

    dispatch(addSerialNumber(sn));
    showKeyForm();
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        name='serialNumber'
        value={serialNumber}
        placeholder='Serijski broj ključa'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSerialNumberObject({
            ...serialNumberObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemInput
        name='date'
        value={date}
        placeholder='Datum izdavanja ključa'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSerialNumberObject({
            ...serialNumberObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemInput
        name='representative'
        value={representative}
        placeholder='Zastupnik ključa'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSerialNumberObject({
            ...serialNumberObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemInput
        name='user'
        value={user}
        placeholder='Korisnik ključa'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSerialNumberObject({
            ...serialNumberObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemButton onClick={() => addSerialNumberHandler(serialNumberObject)}>
        Dodaj
      </NewItemButton>
    </NewItemFormContainer>
  );
};
