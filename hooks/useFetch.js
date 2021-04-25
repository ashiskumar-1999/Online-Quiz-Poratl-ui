import { useState, useEffect } from "react"
import axios from "axios"

// Create a new function useFetch and pass the url prop
const useFetch = (query) => {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3000/api${query}`
      const result = await axios(url)
      setData(result.data)
    }
    fetchData()
  }, [query])
  return { result: data }
}

export default useFetch
