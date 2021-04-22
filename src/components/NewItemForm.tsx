import { useState, useContext } from 'react';
import { OrganizationItem } from '../types';
import { useFocus } from '../hooks/useFocus';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';
import { OrganizationContext } from '../context/OrganizationContext';
import { addOrganization } from '../actions/OrganizationActions';

type NewItemFormProps = {
  showForm(): void;
};

export const NewItemForm = ({ showForm }: NewItemFormProps) => {
  const [
    organizationObject,
    setOrganizationObject,
  ] = useState<OrganizationItem>({
    id: new Date().getTime().toString(),
    name: '',
    address: '',
    country: '',
  });

  const { dispatch } = useContext(OrganizationContext);

  const inputRef = useFocus();

  const { id, name, address, country } = organizationObject;

  const addOrganizationHandler = (organization: OrganizationItem): void => {
    if (
      id.trim() === '' ||
      name.trim() === '' ||
      address.trim() === '' ||
      country.trim() === ''
    )
      showForm();

    return;

    dispatch(addOrganization(organization));
    showForm();
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={id}
        placeholder='ID'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOrganizationObject({ ...organizationObject, id: e.target.value })
        }
      />
      <NewItemInput
        value={name}
        placeholder='Ime firme'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOrganizationObject({ ...organizationObject, name: e.target.value })
        }
      />
      <NewItemInput
        value={address}
        placeholder='Adresa'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOrganizationObject({
            ...organizationObject,
            address: e.target.value,
          })
        }
      />
      <NewItemInput
        value={country}
        placeholder='Zemlja'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOrganizationObject({
            ...organizationObject,
            country: e.target.value,
          })
        }
      />
      <NewItemButton onClick={() => addOrganizationHandler(organizationObject)}>
        Dodaj
      </NewItemButton>
    </NewItemFormContainer>
  );
};
