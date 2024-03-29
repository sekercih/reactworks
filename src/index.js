// React'ın temel kutuphaneleri
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// App modulunun eklenmesi
import App from "./App";
import Merhaba from "./app1";

// Web sayfasina basilacak olan herseyi olusturan veya guncelleyen metot.

// ! Web sayfasina basilacak olan herseyi olusturan veya guncelleyen method
// ? render method’u 2 parametre alir
// ** 1. parametre hangi modulu render edecegidir.
// ** 2. parametre nerede render edilecegidir.

ReactDOM.render(
  <React.StrictMode>
    <Merhaba/> {/* App modulunun cagrilmasi */}
    <App /> {/* App modulunun cagrilmasi */}
    <App /> {/* App modulunun cagrilmasi */}
    <Merhaba /> {/* App modulunun cagrilmasi */}
    <Merhaba /> {/* App modulunun cagrilmasi */}
  </React.StrictMode>,
  document.getElementById("root")
);
