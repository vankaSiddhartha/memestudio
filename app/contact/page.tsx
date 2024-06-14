// pages/contact.js

import Head from 'next/head';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        For any inquiries or assistance, please feel free to reach out to us using the contact details below:
      </p>
      <p className="mb-6">
        <strong>Email:</strong> siddharthavankaofficial@gmail.com
      </p>
      <p className="mb-6">
        <strong>Mobile:</strong> +91 6305764101
      </p>
      <p className="mb-6">
        <strong>Operating Address:</strong> Srikaulam, Palasa, Hukumpeta
      </p>
    </div>
  );
}
