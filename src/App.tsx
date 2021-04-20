import { useState } from 'react';
import { AppContainer } from './components/styles';
import { Column } from './components/Column';
import { Card } from './components/Card';
import { AddNewItem } from './components/AddNewItem';
import { Modal } from './components/Modal';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContainer>
      <Column text='Firma'>
        <Card text='SN kljuca' />
        <Card text='SN kljuca' />
        <Card text='SN kljuca' />
      </Column>
      <Column text='Firma'>
        <Card text='SN kljuca' />
      </Column>
      <Column text='Firma'>
        <Card text='SN kljuca' />
      </Column>
      <Column text='Firma'>
        <Card text='SN kljuca' />
      </Column>
      <Column text='Firma'>
        <Card text='SN kljuca' />
      </Column>
      <Column text='Firma'>
        <Card text='SN kljuca' />
      </Column>
      <Column text='Firma'>
        <Card text='SN kljuca' />
      </Column>
      <AddNewItem toggleButtonText='+ Dodaj novu firmu' onAdd={console.log} />

      {showModal && (
        <Modal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: 'absolute',
              height: '300px',
              width: '300px',
              margin: 'auto',
              background: 'rgba(0,0,0,0.1)',
              zIndex: 99,
            }}
          >
            I'm a modal!{' '}
            <button
              style={{ background: 'papyawhip' }}
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </AppContainer>
  );
};

export default App;
