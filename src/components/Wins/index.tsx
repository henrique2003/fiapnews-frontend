import React, { useState, useEffect } from 'react'
import { StyledWins, WinerItem } from './style'

const Wins: React.FC = ({ children }) => {
  const [Winers, setWiners] = useState<string[]>([])

  useEffect(() => {
    const winers = children as string
    setWiners((): string[] => {
      let winerArray: string[] = []
      winerArray = winers.split(',')
      return winerArray.map(winer => winer.trim())
    })
  }, [children])

  return (
    <StyledWins>
      {Winers.map((winer, index) => <WinerItem key={index}>{winer}</WinerItem>)}
    </StyledWins>
  )
}

export default Wins
