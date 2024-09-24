const ProductList = ({ products, onProductSelect }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
          <div className="card" onClick={() => onProductSelect(product)}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
