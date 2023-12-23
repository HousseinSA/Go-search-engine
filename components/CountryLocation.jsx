import { useEffect, useState } from "react"

const CountryLocation = () => {
  const [country, setCountry] = useState("Mauritania")
  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.EXTREME_KEY}`)
      .then((res) => res.json())
      .then((res) => setCountry(res.country))
  }, [])
  return <div>{country && country}</div>
}

export default CountryLocation
