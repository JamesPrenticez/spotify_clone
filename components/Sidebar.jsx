import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

function Sidebar() {
  const {data: session, status} = useSession()
  console.log(session)
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 space-y-4">
      {/* Row 0 */}
      <button 
        onClick={() => signOut()}
        className="flex items-center space-x-2 hover:text-white"
      >
        <p>Log Out</p>
      </button>
      {/* Row 1 */}
      <button className="flex items-center space-x-2 hover:text-white">
        <HomeIcon className="h-6 w-6"/>
        <p>Home</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <SearchIcon className="h-6 w-6"/>
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <LibraryIcon className="h-6 w-6"/>
        <p>Libaray</p>
      </button>
      <hr 
        className="border-t-[0.1px] border-gray-900"
      />
      {/* Row 2 */}
      <button className="flex items-center space-x-2 hover:text-white">
        <PlusCircleIcon className="h-6 w-6"/>
        <p>Create Playlist</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <HeartIcon className="h-6 w-6"/>
        <p>Liked Songs</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <RssIcon className="h-6 w-6"/>
        <p>Your episodes</p>
      </button>
      <hr 
        className="border-t-[0.1px] border-gray-900"
      />

      {/* Render Custom Playlists */}
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
    </div>
  )
}

export default Sidebar
