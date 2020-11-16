import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { Link } from "react-router-dom";
import { ProfileImage } from "../ProfileImage";

import Tilt from "react-tilt";
//import Home from '../../../pbfa/src/components/home';

//export default class Home extends Component {

const Home = () => {
  // const order = [
  //   //'5E1M4mqormSdhVmzqvPq0PhqTaU2',
  //   //'F1BOsQ40KgQCb7rGNrXWS97ZGZq2',
  //   //'RPMwEkdpYgNyQHGzeIqSLtNVSM42',
  //   "YeVBTkxPIDdzRzGRhOaOv00CV5d2",
  //   "pXZZoRXDA5Zf1qzBnjU5K66LSk03",
  //   "kSWkNFWMPUNZIsrUVX967myz4v52",
  //   "Uxxs1wq5YuPdRyjDeOTUHRO746F2",
  //   //'dC6Z0ktQeXhbgee4q2wK4MKkA2w2',
  //   "RPMwEkdpYgNyQHGzeIqSLtNVSM42",
  //   "X0ykVJURWHeapJYn61AgMO3OI962",
  //   //'rRjG0K7bxnZ4rfmmuEMvnkz6fIb2',
  // ];

   //.where('order','==','1').orderBy("order");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = firestore.collection("users").orderBy("order");
    const unsubscribe = usersRef.onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map((doc) => doc.data());
      setUsers(users);
    });
    return unsubscribe;
  }, []);

  // componentDidMount () {
  //   const script = document.createElement("script");
  //   script.src = "js/webflow.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //

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

  return (
    <div className="App2">
      <meta charSet="utf-8" />
      <title>About</title>
      <meta charSet="utf-8" />
      <title>Project 4</title>
      <meta content="Project 4" property="og:title" />
      <meta content="Project 4" property="twitter:title" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
      <link
        href="/css/perspectivebfa.webflow.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* [if lt IE 9]><![endif] */}
      <link
        href="/images/favicon.ico"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link href="/images/webclip.png" rel="apple-touch-icon" />

      <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        data-w-id="69118560-d0bc-15fc-bbf8-b8fe5f6535b5"
        role="banner"
        className="navigation w-nav"
      >
        <div className="navigation-items">
          <a href="/home" className="logo-link w-nav-brand">
            Perspective BFA 2020
          </a>
          <div className="navigation-wrap">
            <nav role="navigation" className="navigation-items w-nav-menu">
              <a
                href="about.html"
                aria-current="page"
                className="navigation-item w-nav-link w--current"
              >
                Acknowledgements
              </a>
            </nav>
            <div className="menu-button w-nav-button">
              <img
                src="images/menu-icon_1menu-icon.png"
                width={22}
                alt=""
                className="menu-icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="w-layout-grid about-intro-grid">
            <div
              data-poster-url="videos/pErSpEcTiVe-poster-00001.jpg"
              data-video-urls="videos/pErSpEcTiVe-transcode.mp4,videos/pErSpEcTiVe-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="w-background-video w-background-video-atom"
            >
              <video
                autoPlay
                loop
                style={{
                  backgroundImage: 'url("videos/pErSpEcTiVe-poster-00001.jpg")',
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="videos/pErSpEcTiVe-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="videos/pErSpEcTiVe-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <p className="witty-phrase">14 Designers 14 Perspectives 1 Exhibition</p>

      <div data-w-id="76ba38e4-2715-c796-e82b-8239d41d1e9b" className="section">
        <div className="w-layout-grid project-overview-grid">
          {/*
          <img class="image-5" src="../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF.JPG" width="498" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 65vw, 498px" data-w-id="582d09b6-038a-aae3-52e1-b703aaebbc6b" id="w-node-b703aaebbc6b-db957e3d" loading="lazy" srcset="../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF-p-500.jpeg 500w, ../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF-p-800.jpeg 800w, ../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF-p-1080.jpeg 1080w, ../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF-p-1600.jpeg 1600w, ../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF-p-2000.jpeg 2000w, ../images/694F32CB-01F5-4B47-AF7F-F287BA41B992-11272A0E-E7A1-426D-A49C-FAB290A4A8AF.JPG 2139w" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-4.3813deg) rotateY(6.9986deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"> 
          
          
          
           <Transform3d translate={{x:0,y:0,z:0}} scale={{x:1,y:1,z:1}} rotate={{ 


            style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0.0014deg) rotateY(0.0014deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}


          <table className="ui selectable celled table">
        <thead>
          <tr>
          <th></th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Secret Address</th>
            <th>Phone</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>

              <td>
                <Link to={`/profile/${user.uid}`}>{user.name}</Link>
                {<ProfileImage id={user.uid}></ProfileImage>}
              </td>
              <td>{user.specialty}</td>
              <td>
                {user.address} {user.city}, {user.state} {user.zip}
              </td>
              <td>{user.phone}</td>
              <td>{user.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>



            <Tilt className="Tilt" options={{ max : 5, scale:1.0 }}  >
   <a href="work/project-4.html" className="w-inline-block">

            
   {user.name}</a> 
   
</Tilt>





{users.doc(user).name}
   
          */}

          {users.map((user) => (
            <div>
              <p style={{ color: "white" }}>
                {user.name}
              </p>
              <Tilt
                className="Tilt"
                options={{ max: 5, scale: 1.0 }}
                style={{ width: 338 }}
              >
                <a href={`/designers/${user.name.replace(/\s+/, "-")}`}>
                  {<ProfileImage id={user.uid}></ProfileImage>}
                </a>
              </Tilt>
            </div>
          ))}

          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="06f917a4-8156-bf2e-3ea6-b5d5c549320f"
              alt=""
              className="image-4"
            />
          </a>
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="c5befd6f-7388-e02a-ef19-b1dc4e00224c"
            alt=""
          />
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="4b84ae40-4173-0b02-6ffe-b807e8da147e"
            alt=""
          />
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="b28dfc73-7e8b-d0da-3258-1ccffc4cb026"
              alt=""
            />
          </a>
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="b3e53a4b-814a-1848-2db8-64c6f09b9ba4"
              alt=""
            />
          </a>
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="d97cbd7f-66c9-b6cb-ba24-3c1e886c26c2"
              alt=""
            />
          </a>
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="e955c02a-f1a6-a7b8-789c-6262555aa0c8"
              alt=""
            />
          </a>
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="a6bdef33-3f1e-7571-6217-0928ae061f6a"
            alt=""
          />
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="f8034b16-2d7e-099b-02a6-57f80477420a"
              alt=""
            />
          </a>
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="44d0ebdd-c6ee-542c-80d8-47e31d55d5a6"
              alt=""
            />
          </a>
          <a href="#" className="w-inline-block">
            <img
              src="images/download.jpeg"
              loading="lazy"
              width={338}
              data-w-id="1f7359ec-734f-810a-61e6-6f436fc1ecfc"
              alt=""
            />
          </a>
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="30191687-1468-8a36-dc7f-e46b4ab4d5f7"
            alt=""
          />
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="346178dd-bc39-9d42-028a-a92b028a5ee1"
            alt=""
          />
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="2f84b4eb-2bff-18c6-50b2-e0300222492d"
            alt=""
          />
          <img
            src="images/download.jpeg"
            loading="lazy"
            width={338}
            data-w-id="6bbb2452-8b84-0856-4f02-19752daa2ee4"
            alt=""
          />
          <img src="images/download.jpeg" loading="lazy" width={338} alt="" />
        </div>
      </div>

      <div className="footer-wrap">
        <div>
          <a
            href="https://webflow.com/"
            target="_blank"
            className="webflow-link w-inline-block"
          >
            <img
              src="images/webflow-w-small2x_1webflow-w-small2x.png"
              width={15}
              alt=""
              className="webflow-logo-tiny"
            />
            <div className="paragraph-tiny">Powered by Webflow</div>
          </a>
        </div>
        <div className="footer-links">
          <a
            href="https://www.facebook.com/webflow/"
            target="_blank"
            className="footer-item"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/webflow"
            target="_blank"
            className="footer-item"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/webflowapp/"
            target="_blank"
            className="footer-item"
          >
            Instagram
          </a>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
    </div>
  );
};

export default Home;
