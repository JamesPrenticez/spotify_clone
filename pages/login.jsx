import { getProviders, signIn } from "next-auth/react"

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center first-letter:bg-black min-h-screen w-full bg-black">
      <img
          src="/img/1.png"
          className="pb-10 w-52" 
          alt=""
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button 
            onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            className="bg-[#18D860] text-red-500 p-5 rounded-lg"
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
  //console.log(providers)
  return {
    props:{
      providers
    }
  }
}