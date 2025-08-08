export default function Home() {
  return (
    <div className="text-white">
      <header className="bg-gradient-to-r from-green-900 to-black p-6 text-center sticky top-0 z-50">
        <h1 className="text-5xl font-bold lowercase">bryan zhao</h1>
        <p className="mt-2 text-lg">roboticist | photographer | researcher</p>
      </header>
      <main className="p-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/photography" className="bg-gray-800 p-4 rounded hover:bg-gray-700">photography</a>
            <a href="/robotics" className="bg-gray-800 p-4 rounded hover:bg-gray-700">robotics</a>
            <a href="/about" className="bg-gray-800 p-4 rounded hover:bg-gray-700">about me</a>
          </div>
        </section>
      </main>
    </div>
  )
}