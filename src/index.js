import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Componet from './Componet';
import ListObj from "./listObj";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Componet text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugiat nam provident optio, quae dignissimos maiores? Aliquam saepe nulla corporis accusantium debitis porro. Accusamus, doloribus dolorum iste laborum ullam officiis possimus labore. Repudiandae ducimus pariatur mollitia iusto expedita blanditiis? Ipsa ad, atque laudantium deserunt iure perspiciatis quaerat, dicta distinctio hic minus ea ut doloremque magnam! Repellendus alias, ab ipsam pariatur delectus assumenda impedit voluptatem temporibus quos molestias itaque at atque, consequatur minima quidem dolor laboriosam cumque sint corrupti recusandae dolorum eum nobis? Minima nulla quasi nostrum exercitationem dolores dolorem accusamus! Deleniti inventore unde ullam officia numquam, obcaecati minus in eos?"
    max={70}
    />
    <i>// 2. List JS "Key"</i>
    <ListObj />
  </React.StrictMode>
);

