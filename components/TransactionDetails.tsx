import { Transaction } from '../domain/Transaction'

type TransactionDetailsProps = {
  transaction: Transaction
}

function TransactionDetails(props: TransactionDetailsProps) {
  return (
    <div className="border-2">
      <div className="w-30 px-5">
        {props.transaction.date.toLocaleDateString()}
      </div>
      <div className="group">
        <div>
          <div className="">{props.transaction.description}</div>
        </div>
        <div className="flex px-5 py-1">
          <div className="px-1 sm:px-2 md:px-5">{props.transaction.amount}</div>
          <div className="px-1 sm:px-2 md:px-5">{props.transaction.category}</div>
          <div className="px-1 sm:px-2 md:px-5 text-gray-500">Edit</div>
          <div className="px-1 sm:px-2 md:px-5 text-red-600">X</div>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetails
