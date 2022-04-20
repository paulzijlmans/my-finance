import { Transaction } from '../domain/Transaction'

export const transactions: Transaction[] = [
  {
    id: 1,
    date: new Date(),
    description: 'Albert Heijn bezorging',
    amount: 95.2,
    category: 'Boodschappen',
  },
  {
    id: 2,
    date: new Date(),
    description: 'Sportschoenen',
    amount: 99.95,
    category: 'Kleding',
  },
  {
    id: 3,
    date: new Date(),
    description: 'Hypotheek',
    amount: 1000.0,
    category: 'Vaste Lasten',
  },
  {
    id: 4,
    date: new Date(),
    description: 'Kinderopvang',
    amount: 900.0,
    category: 'Vaste Lasten',
  },
  {
    id: 5,
    date: new Date(),
    description: 'Luiers',
    amount: 49.95,
    category: 'Kids',
  },
]
