import { getProviders, signIn } from "next-auth/react"

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center first-letter:bg-black min-h-screen w-full ">
      <img className="w-52 mb-5" src="/spotify_logo.png" alt="" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button 
            onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            className="bg-[#18D860] text-white p-5 rounded-lg"
          >
            Login In With {provider.name}
          </button>
        </div>
      ))}

    </div>
  )
}

export default Login

export async function getServerSideProps(){
  const providers = await getProviders()
  console.log(providers)
  return {
    props:{
      providers
    }
  }
}