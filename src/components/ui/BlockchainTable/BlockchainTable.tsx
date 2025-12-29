import React, { useEffect, useState } from 'react';
import TanStackTable from '../../basic/TanStackTable/TanStackTable';

const BlockchainTable: React.FC = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		 let url = "https://chainlist.org/rpcs.json";
		 fetch(url)
				 .then(res => res.json())
				 .then(data => setData(data))
		 }, []);

  const columns = [
    {
      accessorKey: 'chainId',
      header: 'Chain ID',
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
		{
      accessorKey: 'nativeCurrency',
      header: 'Coin',
			cell: (info: any) => {
				const coin = info.getValue() as any || {};
				return (
					<div className="tags-container">
						<span>{coin.symbol ? coin.symbol : ''}</span>
					</div>
				);
			},
    },
		{
      accessorKey: 'explorers',
      header: 'Explorers (URL)',
			cell: (info: any) => {
				const explorers = info.getValue() as any[] || [];
				return (
					<div className="tags-container">
						{explorers.map((explorer, index) => (
							<span><a href={explorer.url} target='_blank'>{explorer.name}</a>, </span>
						))}
					</div>
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
      />
    </div>
  );
};

export default BlockchainTable;