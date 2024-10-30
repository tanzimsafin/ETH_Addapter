
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
 
// 2. Set up your client with desired chain & transport.

const queryClient = new QueryClient()

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Todos/>
    </QueryClientProvider>
  )
}
function Todos() {
  const {isLoading, error, data} = useQuery({ queryKey: ['todos'], queryFn: getBlock,refetchInterval: 10 * 1000 })
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }
  return (
    <div>
      {data}
    </div>
  )
}
async function getBlock(){
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
    
  })
  const blockNumber = await client.getBlockNumber()
  return blockNumber.toString();
}
export default App
