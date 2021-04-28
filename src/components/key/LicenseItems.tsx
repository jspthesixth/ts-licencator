import { License } from './License';
import { useParams } from 'react-router-dom';
import { TableContainer } from '../styles';
import './index.css';
import { useContext } from 'react';
import { AppStateContext } from '../../context';
import { AddNewItem } from '../forms/AddNewItem';

type SerialNumberType = {
  serialNumber: string;
};

export const LicenseItems = () => {
  const { serialNumber }: SerialNumberType = useParams();

  const {
    state: { licenses },
  } = useContext(AppStateContext);

  return (
    <>
      <TableContainer>
        {licenses.length > 0 && (
          <table id='customers'>
            <tr>
              <th>Ističe</th>
              <th>Verzija programa</th>
              <th>Licenca</th>
              <th>Izradio</th>
            </tr>
            {licenses.map(
              item =>
                item.serialNumber === serialNumber && (
                  <License key={item.id} licenseObject={item} />
                )
            )}
          </table>
        )}
      </TableContainer>
      <AddNewItem
        serial={serialNumber}
        toggleButtonText='+ Dodaj novu licencu'
        dark
      />
    </>
  );
};
