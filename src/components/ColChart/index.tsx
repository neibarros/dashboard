import { useState } from 'react'
import { DotsVertical } from '@styled-icons/heroicons-outline/DotsVertical'

import Chart from 'components/Chart'
import Dropdown from 'components/Dropdown'
import PlanChart from 'components/PlanChart'
import Currency from 'utils/Formats/Currency'
import * as S from './styles'

export type FilterType = 'day' | 'week' | 'month' | 'year'

const ColChart = () => {
  const [filter, setFilter] = useState<FilterType>('month')

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Dropdown title={<DotsVertical size={24} />}>
          <S.Nav>
            <S.Link>Apple pay</S.Link>
            <S.Link>Tranfer to account</S.Link>
            <S.Link>Report for transaction</S.Link>
          </S.Nav>
        </Dropdown>
      </S.MenuWrapper>

      <S.SaveWrapper>
        <S.Title>Saved This Month</S.Title>
        <S.Value>{Currency.format(25999.0)}</S.Value>
      </S.SaveWrapper>

      <S.ChartWrapper>
        <S.FilterChart>
          <S.ButtonFilter
            onClick={() => setFilter('day')}
            active={filter === 'day'}
          >
            Day
          </S.ButtonFilter>
          <S.ButtonFilter
            onClick={() => setFilter('week')}
            active={filter === 'week'}
          >
            Week
          </S.ButtonFilter>
          <S.ButtonFilter
            onClick={() => setFilter('month')}
            active={filter === 'month'}
          >
            Month
          </S.ButtonFilter>
          <S.ButtonFilter
            onClick={() => setFilter('year')}
            active={filter === 'year'}
          >
            Year
          </S.ButtonFilter>
        </S.FilterChart>

        <Chart filterData={filter} />
      </S.ChartWrapper>

      <PlanChart />
    </S.Wrapper>
  )
}

export default ColChart
