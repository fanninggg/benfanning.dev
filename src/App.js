import { Landing, About, Projects, Testimonials, Footer } from './components'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Resume } from './components/resume/Resume';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Travel } from './components/travel/Travel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume />,
  },
  {
    path: "/travel",
    element: <Travel />,
  },
]);

export const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <RouterProvider router={router} />
  );
}

// Todos:
// ⬜️ Add images for Checkin

export default App;
