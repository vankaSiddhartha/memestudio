// pages/about-memllo.js

import Head from 'next/head';

export default function AboutMemllo() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <Head>
        <title>About Memllo</title>
        <meta
          name="description"
          content="Learn about Memllo, the ultimate meme generator for Startups."
        />
      </Head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold mb-4">About Memllo</h1>
            <p className="mb-6">
              Memllo is a cutting-edge web application designed to help startups
              create unique and engaging memes for their marketing campaigns.
              With Memllo, you can easily generate custom memes that resonate
              with your target audience and help you stand out in a crowded
              market.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>User-friendly interface for creating and customizing memes</li>
              <li>Extensive library of templates and stock images</li>
              <li>Support for uploading your own images and logos</li>
              <li>Text editing tools with various font styles and colors</li>
              <li>Ability to download memes in high-quality formats</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Why Choose Memllo?</h2>
            <p className="mb-6">
              In today's fast-paced digital world, memes have become a powerful
              marketing tool for startups to connect with their audience and
              promote their brand in a fun and engaging way. Memllo provides an
              easy-to-use platform that empowers startups to create
              attention-grabbing memes without any design or technical
              expertise.
            </p>

            <p className="mb-6">
              With Memllo, you can quickly generate memes that resonate with
              your target audience, driving engagement, increasing brand
              awareness, and ultimately boosting your startup's success.
            </p>

            <div className="text-center">
              
                <a href="/"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
              
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}