import { FC } from "react"

type BestBuyCardProps = {
  title: string
}

export const BestBuyCard: FC<BestBuyCardProps> = ({ title }) => {
  return (
    <div>
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  )
}
