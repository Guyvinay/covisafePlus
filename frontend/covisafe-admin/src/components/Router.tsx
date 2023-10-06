import React from 'react';
import { Route, Routes } from 'react-router';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={null}/>
        <Route path='dashboard' />
    </Routes>
  )
}
