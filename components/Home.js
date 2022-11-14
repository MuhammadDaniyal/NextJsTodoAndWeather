import React from 'react'
import todoStyle from '../styles/Todo.module.css'

const Home = () => {
    return (
        <>
            <div className={todoStyle.container}>
                <div className={todoStyle.main}>
                    <h1 className={todoStyle.title}>
                        Muhammad<span> Daniyal</span> Saleem
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Home