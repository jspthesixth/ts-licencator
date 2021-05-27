import { AppStateProvider } from './context';
import { AppContainer, RegistrationCardsContainer } from './components/styles';
import { ColumnContainer } from './components/layout/ColumnContainer';
import { AddNewItem } from './components/forms/AddNewItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { LicenseItems } from './components/key/LicenseItems';

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Switch>
          <AppContainer>
            <Route
              exact
              path='/'
              render={props => (
                <>
                  <AddNewItem toggleButtonText='+ Dodaj novu firmu' />
                  <RegistrationCardsContainer>
                    <ColumnContainer />
                  </RegistrationCardsContainer>
                </>
              )}
            />
            <Route exact path='/key/:serialNumber' component={LicenseItems} />
          </AppContainer>
        </Switch>
      </AppStateProvider>
    </Router>
  );
};

export default App;
