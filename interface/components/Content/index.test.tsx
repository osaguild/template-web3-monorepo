import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Content } from '.'

describe('test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<Content />)
  })
  it('text check', () => {
    expect(screen.queryByTestId('text')).toHaveTextContent('welcome to web3 template')
  })
})
