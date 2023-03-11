import { FC } from "react"

import { BestBuyCard } from "./BestBuyCard"

type BestBuyCardListProps = {
  cards: {
    id: string
    title: string
  }[]
}

export const BestBuyCardList: FC<BestBuyCardListProps> = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <BestBuyCard title={card.title} />
        </li>
      ))}
    </ul>
  )
}
