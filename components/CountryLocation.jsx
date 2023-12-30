import { useEffect, useState } from "react"

const CountryLocation = () => {
  const [country, setCountry] = useState("Mauritania")
  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_EXTREME_KEY}`
        )
        const data = await response.json()
        setCountry(data.country)
      } catch (error) {
        console.log(error)
      }
    }
    getCountry()
  }, [])
  return <div>{country && country}</div>
}

export default CountryLocation
