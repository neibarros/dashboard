import { WorkOutline } from '@styled-icons/material-outlined/WorkOutline'
import { Paypal } from '@styled-icons/remix-line/Paypal'

import ColChart from 'components/ColChart'
import CreditCard from 'components/CreditCard'
import Header from 'components/Header'
import RecentTransactionTable from 'components/RecentTransactionTable'
import Menu from 'components/Menu'
import PaymentCard from 'components/PaymentCard'
import Heading from 'components/Heading'
import { Row } from 'components/Row'
import * as S from 'styles/home'

export default function Home() {
  return (
    <S.Container>
      <S.HeaderContent>
        <Header />
      </S.HeaderContent>

      <S.Aside>
        <Menu />
      </S.Aside>

      <S.Content>
        <S.FirstColumn>
          <Row>
            <S.DashboardArea>
              <S.HeadingWrapper>
                <Heading>Dashboard</Heading>
              </S.HeadingWrapper>

              <CreditCard />
            </S.DashboardArea>

            <S.UpcomingArea>
              <S.HeadingWrapper>
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

                <S.PaypalWrapper>
                  <PaymentCard
                    icon={<Paypal size={32} />}
                    title="Paypal"
                    description="Freelance payment"
                    value={{
                      isPositive: false,
                      text: 45
                    }}
                  />
                </S.PaypalWrapper>
              </S.PaymentCardWrapper>
            </S.UpcomingArea>
          </Row>

          <RecentTransactionTable />
        </S.FirstColumn>

        <S.SecondColumn>
          <ColChart />
        </S.SecondColumn>
      </S.Content>
    </S.Container>
  )
}
