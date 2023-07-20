const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace these with your actual payment gateway credentials
const paymentGatewaySecretKey = 'YOUR_PAYMENT_GATEWAY_SECRET_KEY';

// Payment route to handle payment processing
app.post('/payment', (req, res) => {
  const { amount, cardNumber, expirationDate, cvv } = req.body;

  // Here you can use the payment gateway API (e.g., Stripe, PayPal) to process the payment
  // You'll need to handle API calls, authentication, and error handling for the real gateway.

  // For this example, we'll assume a successful payment
  const paymentResult = {
    success: true,
    message: 'Payment successful!',
    transactionId: 'RANDOM_TRANSACTION_ID',
  };

  res.json(paymentResult);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
