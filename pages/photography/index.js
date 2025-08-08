export default function Photography() {
  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold lowercase">photography albums</h1>
      <ul className="mt-4 space-y-2">
        <li><a href="/photography/aerial" className="hover:underline">aerial</a></li>
        <li><a href="/photography/nature" className="hover:underline">nature</a></li>
        <li><a href="/photography/other" className="hover:underline">other</a></li>
      </ul>
    </div>
  )
}