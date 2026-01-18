import React, { useEffect, useState } from 'react';
import TanStackTable from '../../basic/TanStackTable/TanStackTable';

const ExchangeTable: React.FC = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		 let url = "https://raw.githubusercontent.com/GoFungible/exchange-list/refs/heads/main/static/data/exchanges.json";
		 fetch(url)
				 .then(res => res.json())
				 .then(data => setData(data))
		 }, []);

  const columns = [
    {
      accessorKey: 'chainId',
      header: 'Exchange ID',
    },
    {
      accessorKey: 'name',
      header: 'Name (URL)',
			cell: (info: any) => {
				const name = info.getValue();
				const url = info.row.original.infoURL;
				return (
					<a href={url} target='_blank'><strong>{name}</strong></a>
				);
			},
    },


  ];

  return (
    <div>
      <TanStackTable
        data={data}
        columns={columns}
        showPagination={true}
        showGlobalFilter={true}
        defaultPageSize={50}
				searchText='Search for Exchange...'
      />
    </div>
  );
};

export default ExchangeTable;