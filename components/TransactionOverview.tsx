import TransactionDetails from './TransactionDetails'
import { Transaction } from '../domain/Transaction'

type TransactionOverviewProps = {
  transactions: Transaction[]
}

function TransactionOverview(props: TransactionOverviewProps) {
  return (
    <div>
      <h2>Transactions</h2>
      <div className="rounded-md border-4">
        {props.transactions.map((transaction) => (
          <TransactionDetails transaction={transaction} />
        ))}
      </div>
    </div>
  )
}

export default TransactionOverview
