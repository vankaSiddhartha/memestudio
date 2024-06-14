import React from 'react'

const FAQ = () => {
const faqsList = [
    {
        q: "What is Memllo AI?",
        a: "Memllo AI is an AI-powered web application designed to create memes instantly with just one click. It helps users generate engaging meme content quickly and easily, ideal for meme marketing and social media campaigns."
    },
    {
        q: "How does Memllo AI work?",
        a: "Memllo AI uses advanced AI algorithms to generate memes based on user inputs or predefined templates. Users can customize memes with text, images, and other elements, making it simple to create unique and viral content."
    },
    {
        q: "What are the benefits of using Memllo AI?",
        a: "Using Memllo AI saves time by automating meme creation processes. It also offers customization options, trend tracking features, and integrates with social media platforms for seamless sharing and engagement."
    },
    {
        q: "Can I customize the memes created by Memllo AI?",
        a: "Yes, Memllo AI provides extensive customization options. Users can adjust text, colors, fonts, and add additional elements such as logos or stickers to personalize memes according to their branding or campaign needs."
    },
    {
        q: "Is Memllo AI suitable for businesses?",
        a: "Yes, Memllo AI is ideal for businesses looking to enhance their digital marketing strategies with engaging meme content. It offers plans tailored for different user needs, from individual creators to large enterprises."
    },
    {
        q: "How can I get started with Memllo AI?",
        a: "Getting started with Memllo AI is easy. Simply sign up for an account, choose a plan that suits your needs, and start creating memes instantly. Visit our website to explore our plans and start your meme marketing journey!"
    }
];

  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div 
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQ
