
import React, { Component } from 'react';
//import { useParams } from 'react-router-dom';
//import { useSession } from '../firebase/UserProvider';
//import { firestore } from '../firebase/config';
//import { ProfileImage } from '../ProfileImage';


export default class Home extends Component {

  //const [users, setUsers] = useState([]);
//
  //useEffect(() => {
  //  const usersRef = firestore.collection('users');
  //  const unsubscribe = usersRef.onSnapshot((querySnapshot) => {
  //    const users = querySnapshot.docs.map((doc) => doc.data());
  //    setUsers(users);
  //  });
  //  return unsubscribe;
  //}, []);

  render() {
    return (
        <div classNameName="App">


      <div>
        {/*  This site was created by BelleIT.net  */}
        {/*  WordPress was greatly considered in the creation of this site  */}
        {/*  Last Published: Thu Oct 22 2020 19:29:17 GMT+0000 (Coordinated Universal Time)  */}
        <meta charSet="utf-8" />
        <title>Real Home</title>
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
          <div className="navigation-items"><a href="/" aria-current="page" className="logo-link w-nav-brand w--current">Perspective BFA 2020</a>
            <div className="navigation-wrap">
              <nav role="navigation" className="navigation-items w-nav-menu"><a href="about.html" className="navigation-item w-nav-link">Acknowledgements</a></nav>
              
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="w-layout-grid about-intro-grid"><img src="images/test_logo_dark-01.png" width={1164} sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, 94vw" srcSet="images/test_logo_dark-01.png 500w, images/test_logo_dark-01.png 800w, images/test_logo_dark-01.png 1080w, images/test_logo_dark-01.png 1600w, images/test_logo_dark-01.png 2000w, images/test_logo_dark-01.png 4500w" alt="" className="image" /></div>
          </div>
          <p align="center" className="paragraph"><strong>14 Designers  14 Perspectives 1 Exhibition</strong> </p>
        </div>

{/* 
        <div className="w-layout-grid image"><div className="w-layout-grid image">

        <a href="graphic-designers/joe-shmoe.html" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a>



        <a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a>


        </div></div>
 */}



        <div className="section">
          <div className="w-layout-grid image"><a href="graphic-designers/joe-shmoe.html" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><a href="#" className="w-inline-block"><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></a><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /><img src="images/r2-01.png" loading="lazy" width={338} sizes="(max-width: 479px) 100vw, 338px" srcSet="images/r2-01-p-500.png 500w, images/r2-01-p-800.png 800w, images/r2-01-p-1080.png 1080w, images/r2-01-p-1600.png 1600w, images/r2-01-p-2000.png 2000w, images/r2-01-p-2600.png 2600w, images/r2-01-p-3200.png 3200w, images/r2-01.png 4500w" alt="" /></div>
        </div>
        <div className="footer-wrap">
          <div>{/*<a href="https://webflow.com/" target="_blank" class="webflow-link w-inline-block">*/}<img src="images/webflow-w-small2x_1webflow-w-small2x.png" width={15} alt="" className="webflow-logo-tiny" /><div className="paragraph-tiny"></div></div>
          <a href="https://www.instagram.com/perspectivebfa2020/" target="_blank" className="footer-item">Instagram</a></div>
        {/* [if lte IE 9]><![endif] */}
      </div>
   
</div>
)
  }
}
