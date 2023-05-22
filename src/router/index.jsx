import Home from 'components/screens/home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
])
