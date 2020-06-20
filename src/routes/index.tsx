import React from 'react'
import { Route } from 'react-router-dom'
import { Home, NewsPage } from '../pages'

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/mais/:id" component={NewsPage}/>
    </>
  )
}

export default Routes
