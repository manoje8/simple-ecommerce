const ProductModal = ({product, onClose}) =>  (
  <div className="modal fade show" style={{ display: 'block', backgroundColor: '#f8f9fa' }} tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{product.title}</h5>
          <button type="button" className="close" onClick={onClose} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={product.image} className="img-fluid" alt={product.title} style={{ height: '200px' }}/>
          <p className="mt-3">{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Available Quantity:</strong> {product.quantity}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  
)


export default ProductModal