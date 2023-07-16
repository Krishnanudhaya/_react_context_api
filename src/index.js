import ReactDOM from "react-dom";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import AuthContext from "./AuthContext";
import Login from "./Login";
import Fun from "./Fun";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: []
    },
    {
      path: "/Fun",
      element: <Fun />
    }
  ]);

  return (
    // <AuthProvider>
    //   <AuthContext.Consumer>
    //     {({ authenticated }) => (
    //       <>
    //         <p>user is {authenticated ? "" : "not"} authenticated</p>
    //         <RouterProvider router={router} />

    //       </>
    //     )}
    //   </AuthContext.Consumer>
    // </AuthProvider>

    <AuthProvider>
      <AuthContext.Consumer>
        {({ authenticated, dataArray }) => (
          <>
            user is {authenticated ? "" : "not"} authenticated
            <RouterProvider router={router} />
            <div>dataArray: {JSON.stringify(dataArray)}</div>
          </>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
