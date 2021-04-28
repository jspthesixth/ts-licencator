import { useContext, FC } from 'react';
import { Column } from './Column';
import { AppStateContext } from '../../context';

export const ColumnContainer: FC = () => {
  const {
    state: { organizations },
  } = useContext(AppStateContext);

  return organizations.length > 0 ? (
    <>
      {organizations.map(item => (
        <Column
          key={item.id}
          id={item.id}
          name={item.name}
          address={item.address}
          country={item.country}
        />
      ))}
    </>
  ) : (
    <></>
  );
};
