'use client'

import SignUp from '@/components/SignUp'

export default function Home() {
    return (
        <main className="">
            <h1 className="text-lg font-bold text-AD">Hello World!</h1>
            <SignUp />
            <br />
            <button
                onClick={() => {
                    console.log('Hello World')
                }}
            >
                test up
            </button>
        </main>
    )
}
