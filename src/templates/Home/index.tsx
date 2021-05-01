import { WorkOutline } from '@styled-icons/material-outlined/WorkOutline'
import { Paypal } from '@styled-icons/remix-line/Paypal'

import ColChart from 'components/ColChart'
import CreditCard from 'components/CreditCard'
import Header from 'components/Header'
import RecentTransactionTable from 'components/RecentTransactionTable'
import Menu from 'components/Menu'
import PaymentCard from 'components/PaymentCard'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Home = () => (
  <S.Container>
    <S.HeaderContent>
      <Header />
    </S.HeaderContent>

    <MediaMatch greaterThan="medium">
      <S.Aside>
        <Menu />
      </S.Aside>
    </MediaMatch>

    <S.Content>
      <div>
        <S.CardsHeader>
          <S.DashboardArea>
            <S.HeadingWrapper>
              <Heading>Dashboard</Heading>
            </S.HeadingWrapper>

            <CreditCard />
          </S.DashboardArea>

          <S.UpcomingArea>
            <S.HeadingWrapper isLast>
              <Heading>Upcoming payments</Heading>
            </S.HeadingWrapper>

            <S.PaymentCardWrapper>
              <S.SalaryWrapper>
                <PaymentCard
                  icon={<WorkOutline size={32} />}
                  title="Salary"
                  description="Belong Interactive"
                  value={{
                    isPositive: true,
                    text: 2000
                  }}
                />
              </S.SalaryWrapper>

              <PaymentCard
                icon={<Paypal size={32} />}
                title="Paypal"
                description="Freelance payment"
                value={{
                  isPositive: false,
                  text: 45
                }}
              />
            </S.PaymentCardWrapper>
          </S.UpcomingArea>
        </S.CardsHeader>

        <S.TransactionTableWrapper>
          <RecentTransactionTable />
        </S.TransactionTableWrapper>
      </div>

      <S.ColChartWrapper>
        <ColChart />
      </S.ColChartWrapper>
    </S.Content>
  </S.Container>
)

export default Home
