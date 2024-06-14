import React from 'react'


const Team = () => {
    const team = [
        {
            avatar: "https://yt3.ggpht.com/a/AATXAJw1u3WnX_9vbUvdBZXQgylXEINcPGjDGTf7Ulg=s900-c-k-c0xffffffff-no-rj-mo",
            name: "Tyler Durden",
            title: "Soap Devloper",
        },
        {
            avatar: "/profileee.png",
            name: "Sidhartha Vanka",
            title: "solopreneur",
        },
        {
            avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png",
            name: "Walter White",
            title: "The Cook",
        },
        // {
        //     avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        //     name: "Lysa sandiago",
        //     title: "Head of designers",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        //     name: "Daniel martin",
        //     title: "Product designer",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        //     name: "Vicky tanson",
        //     title: "Product manager",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        //     name: "Nilson kalin",
        //     title: "DevOp engineer",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        //     name: "Tina watersone",
        //     title: "Brand designer",
        // },
    ]
 return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        I creted the website solo i dont have any team
                    </p>
                </div>
            <div className='flex justify-center items-center'>
                <div className="mt-12 ">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-white">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Team

   