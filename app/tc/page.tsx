// pages/terms.js

import Head from 'next/head';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-6">
        If you have any questions or concerns regarding these terms and
        conditions, please feel free to contact us at:
      </p>
      <p className="mb-6">
        Phone: 630-576-4101 <br />
        Email: siddharthavankaofficial@gmail.com
      </p>
      <p className="mb-6">
        <strong>Effective Date:</strong> These terms and conditions are
        effective as of [Effective Date].
      </p>
      <p className="mb-6">
        <strong>Limitation of Liability and Disclaimer of Warranties:</strong>
        <br />
        - Our website, IntrvuAI, and the services provided herein are offered
        on an "as-is" basis. We make no warranties, either express or implied,
        regarding the accuracy, reliability, or completeness of any information
        or content provided. <br /> - In no event shall we be liable for any
        direct, indirect, incidental, special, or consequential damages arising
        out of or in any way connected with the use of our website or services.
      </p>
      <p className="mb-6">
        <strong>Rules of Conduct:</strong>
        <br />
        - Users must comply with all applicable laws and regulations. <br /> -
        Users are prohibited from engaging in any unlawful or harmful
        activities, including but not limited to hacking, spamming, or
        distributing malicious software. <br /> - Users must respect the
        intellectual property rights of others.
      </p>
      <p className="mb-6">
        <strong>User Restrictions:</strong>
        <br />
        - Users are prohibited from sharing their login credentials with others.{' '}
        <br /> - Users must not engage in any activities that may disrupt the
        normal operation of our website or services.
      </p>
      <p>
        By accessing or using our website and services, you agree to be bound
        by these terms and conditions. If you do not agree with any part of
        these terms and conditions, you may not use our website or services.
      </p>
    </div>
  );
}
