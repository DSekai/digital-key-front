import "./product.css"

export const ProductCard = () => {
  return (
    <div className="card">
      <a href="https://sekaidev.netlify.app" className="recommended-product">
        <header>
          <img src="https://images.gog-statics.com/8b074a51347f0377d0a60ac241e8c5535d829540fe9c2e7ddf9277e4cc6d53d1_product_tile_extended_432x243.webp" alt="product-image" />
        </header>
        <div className="body">
          <span className="title" title="">Soy el titulo dsada sda dasd a dasdasd sdada dasdasd dasda dasda  dad dasda dasd dasd adas dsds ddadad adasd asdasd adasd dada dasd dsad</span>

          <div className="values">
            <div className="discount">
              %60
            </div>
            <div className="prices">
              <div className="initial-price">
                $123
              </div>
              <div className="final-price">
                $50
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
