import { useState, useEffect } from "react"
import axiosInstance from "../../axiosInstance"


function Dashboard() {

    // Retrieve the access token from localStorage.
    const accessToken = localStorage.getItem("access-token")

    // Fetch data from the backed when the component renders
    useEffect(() => {
            async function fetchData() {
                try{
                    const response = await axiosInstance.get('protected-view/')
                    console.log(response.data);
                }catch(error) {
                    console.log(error.response.data);
                }

            }
            fetchData()
    }, [])

    return (
        <>
            <h1 className="text-light">dashboard</h1>
        </>
    )
}


export default Dashboard