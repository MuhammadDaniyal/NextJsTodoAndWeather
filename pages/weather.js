import React, { useState } from 'react'
import Head from 'next/head'
import Weather from '../components/Weather'
import Nav from '../components/Nav'


const weather = () => {
    
    return (
        <>
            <Head>
                <title>Weather</title>
            </Head>
            <Nav />
        

             <Weather   />
            
        </>
    )
}

//  const getServerSideProps = async () => {
//     try {
//         let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=5065884fbf7ce189606eda903c001225`)
//         const data = await res.json()
//         // console.log(data);
//         return {
//             props: {
//                 data
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

export default weather