import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from './pages/Login';

// Root style
import './index.scss';



render(
	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
		<Route path="/app" element={<App></App>} />
      </Routes>
	</BrowserRouter>
	, document.getElementById('root'));