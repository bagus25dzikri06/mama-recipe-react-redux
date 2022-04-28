import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';
import Profile from '../views/Profile';
import Add from '../views/AddRecipe';
import Page from '../views/RecipePage';
import Step from '../views/RecipeStep';

const router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/:id" element={<Profile />} />
          <Route path="add" element={<Add />} />
          <Route path="/recipe/:id" element={<Page />} />
          <Route path="/step" element={<Step />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default router;