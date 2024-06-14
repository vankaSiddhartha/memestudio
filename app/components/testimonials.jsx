import React from 'react'

export const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Clara Davidson",
            title: "CEO",
            quote: "MemlloAI has become our go-to tool for turning content ideas into meme masterpieces that our audience loves."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/78.jpg",
            name: "William Harris",
            title: "CMO",
            quote: "With MemlloAI, we consistently produce memes that not only entertain but also drive engagement and growth"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Andrew Clark",
            title: "Digital Marketer",
            quote: "MemlloAI is a game-changer for us, helping to create engaging and impactful memes that drive our marketing success"
        },
        
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h3>
                   
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

