import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Components/Home/Home";
import Statictics from "./Components/Statictics/Statictics";
import Block from "./Components/Block/Block";
import QuizQussion from "./Components/QuizQussion/QuizQussion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>
        },

        {
          path: "/home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>
        },

        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizQussion></QuizQussion>
        },

        {
          path: "/statictics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statictics></Statictics>
        },

        {
          path: "/block",
          element: <Block></Block>
        }
      ]
    },
    {
      path: "*",
      element: <h3>This route not found</h3>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
