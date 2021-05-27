import { useEffect } from 'react';

type LicenseType = {
  id: string;
  expires: string;
  version: string;
  license: string;
  madeBy: string;
};

type LicenseProps = { licenseObject: LicenseType };

export const License = ({ licenseObject }: LicenseProps) => {
  useEffect(() => {
    console.log(JSON.stringify(licenseObject));
  }, []);

  const { id, expires, version, license, madeBy } = licenseObject;

  return (
    <tr>
      <td>{expires}</td>
      <td>{version}</td>
      <td>{license}</td>
      <td>{madeBy}</td>
    </tr>
  );
};
