/*    
@licstart  The following is the entire license notice for the 
JavaScript code in this page.

Copyright © 2023 Mateus Felipe da Silveira Vieira, Thiago Baptista da Silva Soares, Heloísa Real.

The JavaScript code in this page is free software: you can
redistribute it and/or modify it under the terms of the GNU
General Public License (GNU GPL) as published by the Free Software
Foundation, either version 3 of the License, or (at your option)
any later version.  The code is distributed WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

@licend  The above is the entire license notice
for the JavaScript code in this page.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/CSS/reset.scss";
import "./assets/CSS/style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
