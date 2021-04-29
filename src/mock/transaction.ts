export type TransactionType = {
  id: number
  icon: string
  type: string
  date: string
  value: string
}

const RecentTransactions: TransactionType[] = [
  {
    id: 1,
    icon: '/img/transactions/gift-box.svg',
    type: 'Shopping',
    date: '2020/06/05 10:00:00',
    value: '300'
  },
  {
    id: 2,
    icon: '/img/transactions/grocery.svg',
    type: 'Grocery',
    date: '2020/06/12 10:00:00',
    value: '45'
  },
  {
    id: 3,
    icon: '/img/transactions/gym.svg',
    type: 'Gym',
    date: '2020/06/23 12:00:00',
    value: '125'
  },
  {
    id: 4,
    icon: '/img/transactions/laundry.svg',
    type: 'Laundry',
    date: '2020/06/27 09:45:00',
    value: '90'
  },
  {
    id: 5,
    icon: '/img/transactions/car.svg',
    type: 'Car Repair',
    date: '2020/06/28 10:20:00',
    value: '250'
  }
]

export default RecentTransactions
