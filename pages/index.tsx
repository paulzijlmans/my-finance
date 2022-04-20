import type { NextPage } from 'next'
import Head from 'next/head'

import TransactionOverview from '../components/TransactionOverview'
import { transactions } from '../data/transactions'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-5 text-center">
        <h1 className="text-6xl font-bold">My Finance</h1>
        <TransactionOverview transactions={transactions} />
      </main>
    </div>
  )
}

export default Home
