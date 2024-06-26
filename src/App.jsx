import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Home from "./pages/Home";
// import Error from "./pages/Error";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      toast.success("Welcome to My Portfolio 🥳");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
  <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <InfinitySpin color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <InfinitySpin color="black" height={4} />
        </div>
      ) : (
        <Home/>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Suspense>
  );
};

export default App;
