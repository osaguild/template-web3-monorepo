import { FunctionComponent, useState, useEffect } from 'react'
import { providers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { Button } from '@chakra-ui/react'
import { Network } from './Network'
import { useEagerConnect } from '../../hooks/useEagerConnect'
import { useInactiveListener } from '../../hooks/useInactiveListener'
import { useAlertContext } from '../../hooks/useAlertContext'
import { injected } from '../../lib/connectors'
import { convertToShortAddress, convertToShortEth } from '../../utils'

const Wallet: FunctionComponent = () => {
  const [balance, setBalance] = useState<string>('? ETH')
  const { active, account, chainId, library, activate } = useWeb3React<providers.Web3Provider>()
  const { setAlert } = useAlertContext()
  // after EagerConnect inactivate Listener
  useInactiveListener(useEagerConnect())

  const connect = () => {
    activate(injected, (e) => {
      // if connect wallet is failed, show alert.
      if (setAlert) setAlert({ message: e.message, status: 'error' })
      else throw e
    })
  }

  useEffect(() => {
    if (account && library)
      library
        .getBalance(account)
        .then((balance) => setBalance(`${convertToShortEth(balance)} ETH`))
        .catch((e) => {
          setBalance('?')
          if (setAlert) setAlert({ message: e.message, status: 'error' })
          else throw e
        })
  }, [account, library, chainId, setAlert])

  return active ? (
    <div>
      <Network />
      <Button w={160} mx={1} my={2}>
        {balance}
      </Button>
      <Button w={160} mx={1} my={2}>
        {convertToShortAddress(account as string)}
      </Button>
    </div>
  ) : (
    <div>
      <Network />
      <Button w={160} onClick={connect} mx={1} my={2}>
        connect
      </Button>
    </div>
  )
}

export { Wallet }
