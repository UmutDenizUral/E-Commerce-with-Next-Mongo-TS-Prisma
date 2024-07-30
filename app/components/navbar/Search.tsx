

const Search = () => {
  return (
    <div className=" border hidden md:flex flex-1">
      <input className="py-2 px-3 rounded border-none outline-none flex flex-1 " type="text" placeholder="Arama Yap..." />
      <button className="p-2 px-8 text-sm border border-transparent bg-orange-800">Ara</button>
    </div>
  )
}

export default Search