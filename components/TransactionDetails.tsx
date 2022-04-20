import { Transaction } from '../domain/Transaction'

type TransactionDetailsProps = {
  transaction: Transaction
}

function TransactionDetails(props: TransactionDetailsProps) {
  return (
    <div className="flex px-10 py-1">
      <div className="w-30 px-5">{props.transaction.date.toDateString()}</div>
      <div className="w-60 px-5">{props.transaction.description}</div>
      <div className="w-20 px-5">{props.transaction.amount}</div>
      <div className="w-40 px-5">{props.transaction.category}</div>
      <div className="w-15 px-5 text-gray-500">Edit</div>
      <div className="w-5 px-5 text-red-600">X</div>
    </div>
  )
}

export default TransactionDetails
