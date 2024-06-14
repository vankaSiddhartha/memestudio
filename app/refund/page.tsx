// pages/cancellation.js

import Head from 'next/head';

export default function Cancellation() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Head>
        <title>Cancellation and Refund Policy</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Cancellation and Refund Policy</h1>
      <p className="mb-6">
        Our cancellation and refund policy outlines rules about how customers can return and exchange products/services they purchased.
      </p>
      <p className="mb-6">
        <strong>Return/Exchange Period:</strong> Customers can return or exchange products/services within 7 days past the purchase date.
      </p>
      <p className="mb-6">
        <strong>How to Initiate a Return/Exchange:</strong> To initiate a return or exchange, please contact us at siddharthavankaofficial@gmail.com.
      </p>
      <p className="mb-6">
        <strong>Refund Processing Time:</strong> Refunds will be processed within 7 days after the refund/exchange request is approved.
      </p>
    </div>
  );
}
