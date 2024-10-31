
export default function Home() {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images/cafe.jpg")' }}>
      <div className="flex flex-col justify-center items-center h-full italic text-center text-white text-opacity-90 bg-black bg-opacity-50">
    <h1 className="text-xl font-bold sm:text-5xl">Welcome to Quaint Cafe</h1>
    <p className="mt-4 text-sm sm:text-2xl">The coziest corner in town for coffee lovers.</p>
    <a href="#menu" className="mt-6 bg-orange-600 bg-opacity-90 hover:bg-red-700 text-white py-3 px-6 rounded-lg">
      Explore Our Menu
    </a>
  </div>
    </section>
  )}