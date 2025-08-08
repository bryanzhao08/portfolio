export default function Nature() {
  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold lowercase">nature</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div><img src="/images/photography/photo_2.jpg" alt="nature" /><p>hongkong, china</p></div>
        <div><img src="/images/photography/photo_3.jpg" alt="sea lions" /><p>monterey, california</p></div>
        <div><img src="/images/photography/photo_4.jpg" alt="fern leaves" /><p>santa cruz, california</p></div>
        <div><img src="/images/photography/photo_5.jpg" alt="turtle in water" /><p>maui, hawaii</p></div>
      </div>
    </div>
  )
}