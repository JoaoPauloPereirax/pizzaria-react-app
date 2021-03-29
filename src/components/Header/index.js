import React from 'react'
import logo from '../../assets/images/logo.png'
import alignJustify from '../../assets/images/align-justify.svg'
import './styles.css'


export default function Header(){
  // const selec = (el) =>{document.querySelector(el)}
  // const [visible,setVisible] = useState(true);
  
  // const hide = () =>{
  //   selec(".menu").style.display = "none";
  // }

  // function show() {
  //   selec(".menu").style.display = "block";
  // }

  // function hideShow() {
  //   if (visible) {
  //     show();
  //   } else {
  //     hide();
  //   }
  // }

  // hideShow()
  return(
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menuimg">
        <img src={alignJustify} alt="Menu"/>
      </div>
      <div className="menu">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">CARDÁPIO</a></li>
          <li><a href="/">CONTATO</a></li>
        </ul>
      </div>
      <div className="car">CM</div>
    </header>
  )
}

 