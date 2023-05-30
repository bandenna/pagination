import '../App.css'
import { useState, useEffect } from 'react'
import Detailcard from './detailcard'
import Numbers from './numbers'
const Pagination = () => {
    const [data, setData] = useState('')
    const [partialData, setPartial] = useState('')

    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const rData = await response.json()
        setData(rData)
        setPartial(rData.slice(0, 10))
    }
    const getPages = (pageNum) => {
        setPartial(data.slice((pageNum * 10) - 10, pageNum * 10))
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className='conta'>
                <h1 className='head'> Pagination Task </h1>
            </div>

            <div className='data-container'>
                <Numbers data={data} pageHandler={getPages} />

                {partialData && partialData.map((each) => {
                    return <Detailcard details={each} key={each.id} />
                })}

            </div>
        </div>
    )
}
export default Pagination