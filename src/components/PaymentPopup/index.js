import React, {useState} from 'react'
import Popup from 'reactjs-popup'

const PaymentPopup = ({totalItems, totalPrice}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const handlePaymentMethodChange = method => {
    setSelectedPaymentMethod(method)
  }

  const handleConfirmOrder = () => {
    if (selectedPaymentMethod === 'Cash on Delivery') {
      alert('Your order has been placed successfully')
    } else {
      // Handle other payment methods
      alert('Your order has been placed successfully')
    }
  }

  return (
    <Popup modal trigger={<button className="checkout-btn">Checkout</button>}>
      {close => (
        <div className="payment-popup">
          <h2>Select Payment Method</h2>
          <div className="payment-methods">
            <label>
              <input type="radio" name="paymentMethod" value="Card" disabled />
              Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Net Banking"
                disabled
              />
              Net Banking
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="UPI" disabled />
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Wallet"
                disabled
              />
              Wallet
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                onChange={() => handlePaymentMethodChange('Cash on Delivery')}
                checked={selectedPaymentMethod === 'Cash on Delivery'}
              />
              Cash on Delivery
            </label>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
          </div>
          <button
            className="confirm-order-btn"
            onClick={handleConfirmOrder}
            disabled={!selectedPaymentMethod}
          >
            Confirm Order
          </button>
          <button className="close-btn" onClick={close}>
            Close
          </button>
        </div>
      )}
    </Popup>
  )
}

export default PaymentPopup
