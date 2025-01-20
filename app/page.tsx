import { Suspense } from "react"
import dynamic from "next/dynamic"
import Profile from "./components/Profile"

const DynamicAbout = dynamic(() => import("./components/About"), { ssr: false })
const DynamicHobbies = dynamic(() => import("./components/Hobbies"), { ssr: false })
const DynamicSocialAccounts = dynamic(() => import("./components/SocialAccounts"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-24">
        <section id="home">
          <Profile />
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="about">
            <DynamicAbout />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="hobbies">
            <DynamicHobbies />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="social">
            <DynamicSocialAccounts />
          </section>
        </Suspense>
      </div>
    </main>
  )
}

