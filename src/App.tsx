import { useState } from 'react';
import { OrganizationStateProvider } from './context/OrganizationContext';
import { AppContainer, RegistrationCardsContainer } from './components/styles';
import { Column } from './components/Column';
import { ColumnContainer } from './components/ColumnContainer';
import { Card } from './components/Card';
import { AddNewItem } from './components/AddNewItem';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import './App.css';

const App = () => {
  return (
    <OrganizationStateProvider>
      <AppContainer>
        <AddNewItem toggleButtonText='+ Dodaj novu firmu' />
        <RegistrationCardsContainer>
          <ColumnContainer />
        </RegistrationCardsContainer>
      </AppContainer>
    </OrganizationStateProvider>
  );
};

export default App;
