import { useState } from 'react'
import Navbar from './components/Navbar'
import CurrentWeather from './components/CurrentWeather'
import WeatherStats from './components/WeatherStats'
import HourlyForecast from './components/HourlyForecast'
import mockWeather, { getWeatherByCity } from './data/mockWeather'
import DailyForecast from './components/DailyForecast'
import WeatherAlerts from './components/WeatherAlerts'
import HistoricalWeather from './components/HistoricalWeather'

function App() {
  const [city, setCity] = useState('Singapore')
  const [weather, setWeather] = useState(mockWeather)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = (searchedCity) => {
    setLoading(true)
    setError('')

    const result = getWeatherByCity(searchedCity)

    if (result) {
      setCity(result.location.city)
      setWeather(result)
    } else {
      setError('City not found. Try Singapore, Tokyo or London.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar city={city} onSearch={handleSearch} />

        <main className="max-w-5xl mx-auto px-8 py-10">
          {error && (
            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}
          {loading && (
            <div className="mb-6 rounded-lg bg-sky-500/10 p-4 text-sky-400">
              Loading weather data...
            </div>
          )}
          <CurrentWeather
            city={city}
            temperature={weather.current.temperature}
            condition={weather.current.condition}
            high={weather.daily?.[0]?.high ?? 31}
            low={weather.daily?.[0]?.low ?? 25}
            feelsLike={weather.current.feelsLike}
          />

          <WeatherStats current={weather.current} />
          <HourlyForecast hourly={weather.hourly} />
          <DailyForecast daily={weather.daily} />
          <WeatherAlerts alerts={weather.alerts} />
          <HistoricalWeather historical={weather.historical} />
        </main>

    </div>
  )
}

export default App