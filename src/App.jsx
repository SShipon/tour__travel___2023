import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routers"

const App = () => {
  return (
     <>
       <RouterProvider router={router} />
     </>
  )
}

export default App