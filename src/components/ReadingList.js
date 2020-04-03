import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const ReadingList = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
        Cell: ({ row }) => (
          <a href={row.original.path} target="_blank" rel="noopener noreferrer">
            {row.original.title}
          </a>
        )
      },
      {
        Header: 'Type',
        accessor: 'type'
      }
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        title:
          "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
        path:
          'https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897',
        type: 'Book'
      },
      {
        title: 'The Making of a Manager: What to Do When Everyone Looks to You',
        path:
          'https://www.amazon.com/Making-Manager-What-Everyone-Looks/dp/0735219567',
        type: 'Book'
      },
      {
        title: 'How to Offer Challenges to your Teammates',
        path: 'https://larahogan.me/blog/benefits-offering-challenges/',
        type: 'Article'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReadingList;
