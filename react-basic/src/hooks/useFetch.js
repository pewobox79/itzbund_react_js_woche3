import { useEffect, useState } from "react"

export const useFetch = (url) => {

    //diverse States der fetch aktivität
    const [data, setData] =useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(url)
                if(!response.ok){
                    setError("Network response was not ok!")
                    throw Error("Network response was not ok!")
                }
                const data = await response.json()
                setData(data)

            }catch(err){
                console.info("catched", err)
                setError({msg: "catched request", err})
            }finally{
                setIsLoading(false)
            }


        }

        fetchData()

    }, [url])



    return {data, isLoading, error}
}