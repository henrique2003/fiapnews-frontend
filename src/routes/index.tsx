import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from '../pages'

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/mais/:id" component={Home}/>
    </>
  )
}

export default Routes
