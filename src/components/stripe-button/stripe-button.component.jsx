import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const pirceForStripe = price * 100;
    const publishableKey = 'pk_test_51IGUlsA4S7zC3Xc0033nVyYCpIokDZrbE8oAXUYQfrsYfrnVQgGfQwDMOok0a01N7YXa9abyPZuT9QZrSK1c9CpJ00UHrLLa2J'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.' bitcoin={true} billingAddress shippingAddress image='https://sendeyo.com/up/d/f3eb2117da' description={`Your total is $${price}`} amount={pirceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;