// pages/access.js

import Head from 'next/head';

export default function Access() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Head>
        <title>Access and Delivery Policy</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Access and Delivery Policy</h1>
      <p className="mb-6">
        Our access and delivery policy outlines the process for granting access to our software as a service (SaaS) platform after payment.
      </p>
      <p className="mb-6">
        <strong>Order Processing Time:</strong> Access to our platform is typically granted instantly upon completion of the purchase.
      </p>
      <p className="mb-6">
        <strong>Delivery Method:</strong> Access to our SaaS platform is provided hrough a user account setup process after payment is confirmed.
      </p>
      <p className="mb-6">
        <strong>Access Costs:</strong> Customers are charged according to the pricing plan they select for access to our SaaS platform.
      </p>
      <p className="mb-6">
        <strong>International Customers:</strong> Our SaaS platform is accessible to customers worldwide without any additional international access charges.
      </p>
    </div>
  );
}
