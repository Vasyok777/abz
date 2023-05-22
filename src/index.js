import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/style/index.scss'
import { router } from './router'

const queryCline = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<QueryClientProvider client={queryCline}>
		<RouterProvider router={router} />
	</QueryClientProvider>
)
