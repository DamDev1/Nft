import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HandleLayout from "./layout/HandleLayout"
import Home from "./pages/Home"

const route = createBrowserRouter([
  {
    path: '/',
    element: <HandleLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  }
])

function App() {

  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
