import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      ></NewItemInput>
      <NewItemButton onClick={() => onAdd(text)}>Dodaj</NewItemButton>
    </NewItemFormContainer>
  );
};
