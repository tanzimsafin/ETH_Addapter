import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './walletOptions'
import { Account } from './showBalanace'
import { SendTransaction } from './sendTransaction'
const queryClient = new QueryClient()
function App() {
  // 3. Wrap app with Wagmi and React Query context.
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <WalletOptions />
        <Account/>
        <SendTransaction/>
      </QueryClientProvider> 
    </WagmiProvider>
  )
}
export default App;