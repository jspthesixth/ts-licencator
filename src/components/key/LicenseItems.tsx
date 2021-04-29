import { License } from './License';
import { useParams } from 'react-router-dom';
import { TableContainer } from '../styles';
import './index.css';
import { useContext } from 'react';
import { AppStateContext } from '../../context';
import { AddNewItem } from '../forms/AddNewItem';
import { useState, useEffect } from 'react';
import { LicenseItem } from '../../types';

type SerialNumberType = {
  serialNumber: string;
};

export const LicenseItems = () => {
  const { serialNumber }: SerialNumberType = useParams();
  const [licensesArr, setLicensesArr] = useState<LicenseItem[]>([]);

  const {
    state: { licenses },
  } = useContext(AppStateContext);

  useEffect(() => {
    const newLicenses = licenses.filter(
      item => item.serialNumber === serialNumber && item
    );
    setLicensesArr(newLicenses);
  }, [licenses]);

  return (
    <>
      <TableContainer>
        {licensesArr.length > 0 && (
          <table id='customers'>
            <thead>
              <tr>
                <th>Ističe</th>
                <th>Verzija programa</th>
                <th>Licenca</th>
                <th>Izradio</th>
              </tr>
            </thead>
            <tbody>
              {licensesArr.map(item => (
                <License
                  key={item.id as keyof LicenseItem}
                  licenseObject={item as LicenseItem}
                />
              ))}
            </tbody>
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
