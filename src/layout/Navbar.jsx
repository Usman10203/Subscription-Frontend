import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center w-full px-6 h-20 bg-[#00000012]">
                <div className="text-4xl font-bold text-white">Services</div>
                <div className="flex justify-center items-center gap-2">
                    {!userId ? (
                        <a
                            href="/login"
                            className="bg-white px-4 py-2 uppercase w-auto rounded-lg text-xl text-[#4f7cff] font-semibold"
                        >
                            Login
                        </a>
                    ) : (
                        <div className="flex justify-center items-center space-x-4">
                            <span className="text-white text-xl">{userName}</span>
                            <button
                                onClick={() => firebase.auth().signOut()}
                                className="bg-white px-4 py-2 w-auto rounded-lg text-base uppercase font-semibold text-[#4f7cff]"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
