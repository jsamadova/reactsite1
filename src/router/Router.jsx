import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Index from '../pages/Index'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />

                </Route>
            </Routes>

        </>
    )
}

export default Router