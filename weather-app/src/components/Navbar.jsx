function Navbar({ city, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchedCity = formData.get('city').trim()

    if (searchedCity) {
      onSearch(searchedCity)
    }
  }

  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <h1 className="text-2xl font-bold text-white">
        Weatherly
      </h1>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          name="city"
          placeholder="Search city..."
          defaultValue={city}
          className="rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600"
        >
          Search
        </button>
      </form>
    </nav>
  )
}

export default Navbar