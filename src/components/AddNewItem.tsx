import { useState } from 'react';
import { AddItemButton } from './styles';
import { NewItemForm } from './NewItemForm';

type AddNewItemProps = {
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = ({ toggleButtonText, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm showForm={() => setShowForm((prevState) => !prevState)} />
    );
  }

  return (
    <AddItemButton
      dark={dark}
      onClick={() => setShowForm((prevState) => !prevState)}
    >
      {toggleButtonText}
    </AddItemButton>
  );
};
