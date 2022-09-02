import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Root from './root/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);


// Boshlangich configlar: 
// 1.Git bash ornatib olib
// 2.git config --global user.name "BFozilkhon"
// 3.git config --global user.email "muhammadrasul12@gmail.com"
// 4.Githubni logindan otib olish

// Github ulash
// 1.Git repozitory
// 2.git init 
// 3.git remote add origin https://github.com/BFozilkhon/ScriptOneBekend.git
// 4.git remote -v
// 5.git add .
// 6.git commit -m 'nimadur text'
// 7.git push origin master