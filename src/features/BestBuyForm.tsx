import { FC } from "react"

type BestBuyFormProps = Record<string, never>

export const BestBuyForm: FC<BestBuyFormProps> = () => {
  return (
    <form>
      <div
        style={{ width: "300px", height: "200px", backgroundColor: "#fff" }}
      />
      <div>
        <label>なまえ</label>
        <input />
      </div>
      <div>
        <label>1位</label>
        <input />
      </div>
      <div>
        <label>2位</label>
        <input />
      </div>
      <div>
        <label>3位</label>
        <input />
      </div>
    </form>
  )
}
