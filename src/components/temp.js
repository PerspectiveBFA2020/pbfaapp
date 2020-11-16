import React, { useEffect, useState } from "react";

const numImages = [
  'images/numbers/1.jpg',
  'images/numbers/2.jpg',
  'images/numbers/3.jpg',
  'images/numbers/4.jpg',
  'images/numbers/5.jpg',
  'images/numbers/6.jpg',
  'images/numbers/7.jpg',
  'images/numbers/8.jpg',
  'images/numbers/9.jpg',
]


function Temp(){
  
  
    const calculateTimeLeft = () => {
      let year = '2020';
      const difference = +new Date(`${year}-11-24`) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };

  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
    var firstDigit = String(timeLeft.days).charAt(0);
    var secondDigit = String(timeLeft.days).charAt(1);

    var FIRST = Number(firstDigit);

    var firstDigitx = "images/numbers/" + firstDigit + ".jpg";
    var secondDigitx = "images/numbers/" + secondDigit + ".jpg";

  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    
  return (
    <div classNameName="App">


      <div>
        {/*  This site was created by BelleIT.net  */}
        {/*  WordPress was greatly considered in the creation of this site  */}
        {/*  Last Published: Thu Oct 22 2020 19:29:17 GMT+0000 (Coordinated Universal Time)  */}
        <meta charSet="utf-8" />
        <title>Perspective</title>
        <meta content="Real Home" property="og:title" />
        <meta content="Real Home" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="css/perspectivebfa.webflow.css" rel="stylesheet" type="text/css" />
        {/* [if lt IE 9]><![endif] */}
        <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="images/webclip.png" rel="apple-touch-icon" />
        <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="navigation w-nav">
          <div className="navigation-items"><a href="/temp" aria-current="page" className="logo-link w-nav-brand w--current">Perspective BFA 2020</a>
            <div className="navigation-wrap">
              <nav role="navigation" className="navigation-items w-nav-menu"><a href="/temp" className="navigation-item w-nav-link">Acknowledgements</a></nav>
              <div className="menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width={22} alt="" className="menu-icon" /></div>
            </div>
          </div>
          
        </div>
        <div className="section">
        
          <div className="container">
            <div className="w-layout-grid about-intro-grid"></div>
            <div id="w-node-7dee623c62c1-5d957e38" class="about-head-text-wrap">
          <div class="label cc-about-light">Countdown until launch:

          
          </div>

          <div className="section">
        
          <div className="container">
            <div id="w-node-7dee623c62c1-5d957e38" class="about-head-text-wrap">
          <div class='webflow-link w-inline-block' style={{justifyContent: 'center'}}  >
  
   <img height="400px" src={firstDigitx}/>
  
    
  
  
</div>
</div>
</div>
</div>

         

        

          
                
                
                
                
 
              </div>
            
            <a href="" className="navigation-item w-nav-link">
      {timerComponents.length ? timerComponents : <p>Live!</p>}</a>
            
          </div>
          
        </div>
        <div className="section">
          <div className="container">
            <div className="w-layout-grid about-intro-grid"></div>
            
            
          </div>
          
        </div>

        
        <div className="footer-wrap">
          <div>{/*<a href="https://webflow.com/" target="_blank" class="webflow-link w-inline-block">*/}<img src="images/webflow-w-small2x_1webflow-w-small2x.png" width={15} alt="" className="webflow-logo-tiny" /><div className="paragraph-tiny"></div></div>
          <a href="https://www.instagram.com/perspectivebfa2020/" target="_blank" className="footer-item">Instagram</a></div>
        {/* [if lte IE 9]><![endif] */}
      </div>
   
</div>
  );

}

export default Temp;
