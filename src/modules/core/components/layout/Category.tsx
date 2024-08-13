import { Card } from "./Card"

interface Category {
  title?: string
}

export const Category = ({ title }: Category) => {
  return (
    <div className="menu-category">
      <h3>{title}</h3>
      <div className="products">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="button">
        <p>View All</p>
      </div>
    </div>
  )
}
