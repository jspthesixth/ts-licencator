import { useState } from 'react';
import { AddItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';
import { NewKeyForm } from './NewKeyForm';
import { NewLicenseForm } from './NewLicenseForm';

type AddNewItemProps = {
  toggleButtonText: string;
  dark?: boolean;
  name?: string;
  serial?: string;
};

export const AddNewItem = ({
  toggleButtonText,
  dark,
  name,
  serial,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showKeyForm, setShowKeyForm] = useState(false);
  const [showLicenseForm, setShowLicenseForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm showForm={() => setShowForm(prevState => !prevState)} />
    );
  } else if (showKeyForm) {
    return (
      <NewKeyForm
        name={name}
        showKeyForm={() => setShowKeyForm(prevState => !prevState)}
      />
    );
  } else if (showLicenseForm) {
    return (
      <NewLicenseForm
        serial={serial}
        showLicenseForm={() => setShowLicenseForm(prevState => !prevState)}
      />
    );
  }

  return toggleButtonText === '+ Dodaj novu firmu' ? (
    <AddItemButton
      dark={dark}
      onClick={() => setShowForm(prevState => !prevState)}
    >
      {toggleButtonText}
    </AddItemButton>
  ) : toggleButtonText === '+ Dodaj novu licencu' ? (
    <AddItemButton onClick={() => setShowLicenseForm(prevState => !prevState)}>
      {toggleButtonText}
    </AddItemButton>
  ) : (
    <AddItemButton
      dark={dark}
      onClick={() => setShowKeyForm(prevState => !prevState)}
    >
      {toggleButtonText}
    </AddItemButton>
  );
};
