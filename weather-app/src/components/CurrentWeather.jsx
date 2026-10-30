function CurrentWeather({ city, temperature, condition, high, low, feelsLike }) {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

      <p className="text-lg text-blue-100">
        {city}
      </p>

      <div className="flex items-center justify-between mt-6">
        <div>
          <h1 className="text-7xl font-bold">
            {temperature}°
          </h1>

          <p className="text-xl mt-2">
            {condition}
          </p>
        </div>

        <div className="text-8xl">
          🌤️
        </div>
      </div>

      <div className="flex gap-6 mt-8 text-blue-100">
        <p>H: {high}°</p>
        <p>L: {low}°</p>
        <p>Feels like: {feelsLike}°</p>
      </div>

    </div>
  )
}

export default CurrentWeather