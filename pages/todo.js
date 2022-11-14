import React from 'react'
import Head from 'next/head'
import Todo from '../components/Todo'
import Nav from '../components/Nav'

const todo = () => {
    return (
        <>
            <Head>
                <title>Todo</title>
            </Head>
            <Nav />
            <Todo />
        </>
    )
}

export default todo