import { useState, useContext } from 'react';
import { LicenseItem } from '../../types';
import { useFocus } from '../../hooks/useFocus';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { AppStateContext } from '../../context';
import { addLicense } from '../../actions/LicenseActions';
import { serialize } from 'node:v8';

type NewLicenseFormProps = {
  showLicenseForm(): void;
  serial?: string;
};

export const NewLicenseForm = ({
  showLicenseForm,
  serial,
}: NewLicenseFormProps) => {
  const [licenseObject, setLicenseObject] = useState<LicenseItem>({
    id: new Date().getTime().toString(),
    serialNumber: serial,
    expires: '',
    version: '',
    license: '',
    madeBy: '',
  });

  const { dispatch } = useContext(AppStateContext);

  const inputRef = useFocus();

  const { id, expires, version, license, madeBy } = licenseObject;

  const addLicenseHandler = (lic: LicenseItem): void => {
    if (id.trim() === '' || license.trim() === '') {
      showLicenseForm();
      return;
    }

    dispatch(addLicense(lic));
    showLicenseForm();
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        name='expires'
        value={expires}
        placeholder='Ističe'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLicenseObject({
            ...licenseObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemInput
        name='version'
        value={version}
        placeholder='Verzija programa'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLicenseObject({
            ...licenseObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemInput
        name='license'
        value={license}
        placeholder='Licenca'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLicenseObject({
            ...licenseObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemInput
        name='madeBy'
        value={madeBy}
        placeholder='Izradio'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLicenseObject({
            ...licenseObject,
            [e.target.name]: e.target.value,
          })
        }
      />
      <NewItemButton onClick={() => addLicenseHandler(licenseObject)}>
        Dodaj
      </NewItemButton>
    </NewItemFormContainer>
  );
};
