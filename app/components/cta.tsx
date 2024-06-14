import React from 'react'

const CTA = () => {
  return (
         <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex justify-center items-center md:flex-1 sm:hidden lg:block">
                        <img src="/memlloAI.png" className="rounded-lg w-3/4  md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                          services
                        </h3>
                        <p className="text-yellow-300 text-3xl font-semibold sm:text-4xl">
                            One-Click Meme Generation
                        </p>
                        <p className="mt-3 text-white">
                          Memllo AI allows users to generate memes instantly with just one click. Users input text or select from a library of meme templates, and the AI swiftly creates polished memes ready for use in marketing campaigns.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CTA
