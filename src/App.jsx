import axios from "axios"
import { useEffect, useState } from "react"
import Contries from "./components/Contries"
import Pagination from "./components/Pagination"


function App() {
  const [contries, setContries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrantPage] = useState(1)
  const [contriesPerPage] = useState(10)

  useEffect(()=>{
    const getContries = async ( ) =>{
      setIsLoading(true)
      const resp = await axios.get('https://restcountries.com/v3.1/all',{params:{limit: 50}})
      setContries(resp.data)
      console.log(resp.data)
      setIsLoading(false)
    }
    getContries()
  },[])

  const lastCountryIndex = currentPage * contriesPerPage
  const firstCountryIndex = lastCountryIndex - contriesPerPage
  const currenCountry = contries.slice(firstCountryIndex,lastCountryIndex)

  const paginate = pageNumber => setCurrantPage(pageNumber)
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Contries</h1>
      <Contries loading={isLoading} contries={currenCountry}/> 
      <Pagination paginate={paginate} contriesPerPage={contriesPerPage} totalCountries={contries.length}/>
    </div>
  )
}

export default App
