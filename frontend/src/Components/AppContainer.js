import React from 'react'
import App from './App/App'
import useAxios from 'axios-hooks'
import { api_base } from '../../config'

const AppContainer = () => {
  const [{ data, loading, error }] = useAxios(api_base)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const appProps = {
    message: data.data.message
  }

  return <App {...appProps} />
}

export default AppContainer