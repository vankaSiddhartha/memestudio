// pages/features.js

import Head from 'next/head';

export default function Features() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <Head>
        <title>Memllo Features</title>
        <meta
          name="description"
          content="Explore the powerful features of Memllo, the ultimate meme generator for startups."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Memllo Features</h1>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                User-Friendly Meme Creation Interface
              </h2>
              <p className="mb-4">
                Memllo's intuitive interface makes it easy for anyone to create
                professional-looking memes with just a few clicks. Simply choose
                a template, add your text, and customize the design to your
                liking.
              </p>
              
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Extensive Template Library</h2>
              <p className="mb-4">
                With Memllo, you have access to a vast library of pre-designed
                templates covering a wide range of topics and styles. From
                classic meme formats to trendy templates, you'll find something
                that suits your needs.
              </p>
         
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Custom Image and Logo Upload</h2>
              <p className="mb-4">
                In addition to using our templates, you can also upload your own
                images and logos to create truly unique memes that reflect your
                brand's personality and style.
              </p>
      
            </div>

            {/* Add more feature sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}