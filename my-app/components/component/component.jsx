/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Gqq0P3wI6HC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Logo Here</h1>
        </div>
        <nav className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-500">Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <HomeIcon className="w-5 h-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <CalendarIcon className="w-5 h-5" />
                  <span>Schedule</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <ClipboardIcon className="w-5 h-5" />
                  <span>Recommendation</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <BarChartIcon className="w-5 h-5" />
                  <span>Analytics</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <UserIcon className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <MailIcon className="w-5 h-5" />
                  <span>Inbox</span>
                  <Badge variant="secondary" className="ml-auto">
                    8
                  </Badge>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <PaletteIcon className="w-5 h-5" />
                  <span>Themes</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-500">Account</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center space-x-2 text-gray-700" prefetch={false}>
                  <SettingsIcon className="w-5 h-5" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Themes</h1>
          <div className="flex items-center space-x-4">
            <span>Jugal Borse</span>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>KS</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className="space-y-8">
          <div className="p-4 border rounded-md">
            <h2 className="text-lg font-semibold">Apply a skin to your profile</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Solids</h3>
            <div className="grid grid-cols-8 gap-2 mt-2">
              <div className="w-10 h-10 bg-black" />
              <div className="w-10 h-10 bg-gray-500" />
              <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-green-500" />
              <div className="w-10 h-10 bg-blue-500" />
              <div className="w-10 h-10 bg-pink-500" />
              <div className="w-10 h-10 bg-purple-500" />
              <div className="w-10 h-10 bg-yellow-300" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Linear Gradients</h3>
            <div className="grid grid-cols-8 gap-2 mt-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-yellow-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-purple-500" />
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-500" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Radial Gradients</h3>
            <div className="grid grid-cols-8 gap-2 mt-2">
              <div className="w-10 h-10 bg-gradient-radial from-blue-500 to-green-500" />
              <div className="w-10 h-10 bg-gradient-radial from-purple-500 to-pink-500" />
              <div className="w-10 h-10 bg-gradient-radial from-green-500 to-yellow-500" />
              <div className="w-10 h-10 bg-gradient-radial from-blue-500 to-purple-500" />
              <div className="w-10 h-10 bg-gradient-radial from-pink-500 to-yellow-500" />
              <div className="w-10 h-10 bg-gradient-radial from-green-500 to-blue-500" />
              <div className="w-10 h-10 bg-gradient-radial from-yellow-500 to-purple-500" />
              <div className="w-10 h-10 bg-gradient-radial from-blue-500 to-pink-500" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Foreground Color</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-white border" />
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">+ Custom</Button>
            <Button>Save</Button>
          </div>
        </section>
        <section className="mt-8 p-4 border rounded-md">
          <div className="flex items-center space-x-4">
            <div
              className="w-24 h-24 bg-cover bg-center rounded-full"
              style={{ backgroundImage: "url(/placeholder.svg?height=96&width=96)" }}
            />
            <div>
              <h2 className="text-2xl font-bold">Mason Parker</h2>
              <p className="text-gray-600">Graphics & UI/UX Designer</p>
              <p className="text-gray-600">Denver, United States</p>
            </div>
          </div>
          <div className="mt-4 p-4 border rounded-md">
            <p className="text-gray-600">
              I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise.
              With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions,
              leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting
              pixel-perfect UIs and captivating graphics that elevate user experiences.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Biography</h3>
          </div>
        </section>
      </main>
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}