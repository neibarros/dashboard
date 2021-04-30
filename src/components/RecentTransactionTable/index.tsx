import React, { useEffect, useState } from 'react'
import { TextSortAscending } from '@styled-icons/fluentui-system-regular/TextSortAscending'
import { TextSortDescending } from '@styled-icons/fluentui-system-regular/TextSortDescending'
import { DotsVertical } from '@styled-icons/heroicons-outline/DotsVertical'
import { format } from 'date-fns'

import Dropdown from 'components/Dropdown'
import RecentTransactions, { TransactionType } from 'mock/transaction'
import { SorterMode } from 'utils/Sorters/types'
import Sort from 'utils/Sorters'
import Currency from 'utils/Formats/Currency'
import * as S from './styles'

const sortModifiers = {
  type: Sort.Alphabetically,
  date: Sort.Alphabetically,
  value: Sort.Numerically
}

type SortType = 'type' | 'date' | 'value'

const RecentTransactionTable = () => {
  const [order, setOrder] = useState<SorterMode>('ASC')
  const [sort, setSort] = useState<SortType>('type')
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect(() => {
    setTransactions([
      ...RecentTransactions.sort(
        sortModifiers[sort]<TransactionType>(sort, order)
      )
    ])
  }, [sort, order])

  return (
    <S.Wrapper>
      <S.HeaderTable>
        <S.Title>Recent Transaction</S.Title>

        <S.Filter>
          <S.Select
            onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) =>
              setSort(target.value as SortType)
            }
          >
            <option value="type">Name</option>
            <option value="date">Date</option>
            <option value="value">Value</option>
          </S.Select>

          <S.Button
            onClick={() => setOrder((old) => (old === 'ASC' ? 'DESC' : 'ASC'))}
          >
            {order === 'ASC' ? (
              <TextSortAscending size={20} />
            ) : (
              <TextSortDescending size={20} />
            )}
          </S.Button>
        </S.Filter>
      </S.HeaderTable>

      <S.Table>
        {transactions.map((item) => (
          <S.Tr key={item.id}>
            <S.Td width="15%">
              <S.Icon src={item.icon} />
            </S.Td>
            <S.Td width="35%">
              <strong>{item.type}</strong>
            </S.Td>
            <S.Td width="50%">
              {format(new Date(item.date), 'dd MMM yyyy hh:mm')}
            </S.Td>
            <S.Td>
              <strong>{Currency.format(item.value)}</strong>
            </S.Td>
            <S.Td width="20%" justifyContent="flex-end">
              <Dropdown title={<DotsVertical color="#AEAEAE" size={20} />}>
                <S.Nav>
                  <S.Link>Apple pay</S.Link>
                  <S.Link>Tranfer to account</S.Link>
                  <S.Link>Report for transaction</S.Link>
                </S.Nav>
              </Dropdown>
            </S.Td>
          </S.Tr>
        ))}
      </S.Table>
    </S.Wrapper>
  )
}

export default RecentTransactionTable
