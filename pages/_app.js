import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header className="flex p-4 border-b">
        <img className="w-4 h-4" src="https://pbs.twimg.com/profile_images/1297446806482112512/4nRYRRB0_400x400.jpg" alt=""/>
        <p className="text-lg ml-6">Lastest Tweets</p>
      </header>
      <Component {...pageProps} />
    </div>
  
  
  )
}

export default MyApp
