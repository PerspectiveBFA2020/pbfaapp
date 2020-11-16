import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSession } from "../firebase/UserProvider";
import { firestore } from "../firebase/config";
//import { ProfileImage } from '../ProfileImage';
import { Player, ControlBar } from 'video-react';
import Tilt from 'react-tilt'

import { ProfileImage } from "../ProfileImage";

//function Designer(props){

const Designer = () => {
  //const Designer = (props) => {

  const params = useParams();

  const name2id = {
    "Andrea-Martinez": "kSWkNFWMPUNZIsrUVX967myz4v52",
    "Joshua-Nolan": "pXZZoRXDA5Zf1qzBnjU5K66LSk03",
    "Regina-Dante": "YeVBTkxPIDdzRzGRhOaOv00CV5d2",
    "Jeremy-Delia": "Uxxs1wq5YuPdRyjDeOTUHRO746F2",
    "Dominique-Northecide": "RPMwEkdpYgNyQHGzeIqSLtNVSM42",
    "Diana-Zuniga": "X0ykVJURWHeapJYn61AgMO3OI962",
  };
  //const P1 = "null";

  //export default class Designer extends Component {
  //const { user } = useSession();
  //const [userDocument, setUserDocument] = useState(null);

  //const { register, setValue, handleSubmit } = useForm();
  //const [users, setUsers] = useState([]);

  const [formData, setValue] = useState([]);

  useEffect(() => {
    const docRef = firestore.collection("users").doc(name2id[params.name]);
    const unsubscribe = docRef.onSnapshot((doc) => {
      //console.log("Doc: ",doc.data().projects[0].title)
      if (doc.exists) {
        const formData = doc.data(); //doc.map( (d)=> d.data() );
        //const formDataProjects0 = formData.projects[0].title //doc.map( (d)=> d.data() );

        setValue(formData);
      }
    });
    return unsubscribe;
  }, []);

  //const P1 = users[0].eB3N1foSAZXqXbVdrHyxKNynOou1[0].projects[0].title
  //const P1 = users[0].projects[0].title
  //console.log("Users ",users.map((u)=>(u)))
  //console.log("Users: ",users[0]);
  //const P2=users[0];
  //render() {

  //const { register, setValue, handleSubmit } = useForm();
  //const [userDocument, setUserDocument] = useState(null);
  //const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   const docRef = firestore.collection('users').doc(params.id);
  //   const unsubscribe = docRef.onSnapshot((doc) => {
  //     if (doc.exists) {
  //       const documentData = doc.data();
  //       setUserDocument(documentData);
  //       const formData = Object.entries(documentData).map((entry) => ({
  //         [entry[0]]: entry[1],
  //       }));

  //       //setValue(formData);
  //     }
  //   });
  //   return unsubscribe;
  // }, [ params.id]);

  //console.log("NAME: ",parms);
  //const { user } = useSession();
  return (
    <div classNameName="App3">
      <meta charSet="utf-8" />
      <title>Designer</title>
      <meta content="Project 4" property="og:title" />
      <meta content="Project 4" property="twitter:title" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link href="../css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="../css/webflow.css" rel="stylesheet" type="text/css" />
      <link
        href="../css/perspectivebfa.webflow.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* [if lt IE 9]><![endif] */}
      <link
        href="../images/favicon.ico"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link href="../images/webclip.png" rel="apple-touch-icon" />
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        role="banner"
        className="navigation w-nav"
      >
        <div className="navigation-items">
          <a href="../home" className="logo-link w-nav-brand">
            Perspective BFA 2020
          </a>
          <div className="navigation-wrap">
            <nav role="navigation" className="navigation-items w-nav-menu">
              <a href="../about.html" className="navigation-item w-nav-link">
                Acknowledgements
              </a>
            </nav>
            <div className="menu-button w-nav-button">
              <img
                src="../images/menu-icon_1menu-icon.png"
                alt=""
                className="menu-icon"
                width={22}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="w-layout-grid project-overview-grid">
            <div id="w-node-f2c6de040bbf-db957e3d">
              <h1 align="left" className="heading-jumbo">
                {params.name.replace("-", " ")}
              </h1>
              <a href="https://www.instagram.com/reginadmedia/">
                <div className="paragraph-light">
                  {" "}
                  {`${formData.social}`}{" "}
                  {/*`${JSON.stringify(formData.projects)}` */}{" "}
                  <div>
                    {/*Object.entries(formData.projects).map((p) => ( <p>{p[0]}</p> )) */}{" "}
                  </div>{" "}
                </div>
              </a>
            
              
            </div>


            <div id="w-node-f2c6de040bc4-db957e3d">
              {/*projects[0].title*/}
              <br></br>
              <br></br>
              {/*formDataProjects0.title*/}
              
              <div align="left" className="position-name-text">
              <a href={`${formData.resume}`} align="left" className="position-name-text" target="_blank">Resume</a>
              </div>
              
              <br></br>
              <div className="paragraph-light cc-position-name">
              {`${formData.bio}`}
              </div>
            </div>
            
            
             
              
          </div>
          <Tilt
                className="detail-header-image" 

                options={{ max: 5, scale: 1.0 }}
                style={{ width: 498 }}
              >
                  {<ProfileImage id={formData.uid}></ProfileImage>}
                  
               
              </Tilt>
        </div>
      </div>
      
        
        
              
              
      <div className="section">
        <img
          src={`${formData.p0i}`}
          alt=""
          className="detail-header-image"
        />
      </div>

      <div className="section">
        <div className="container">
          <div className="w-layout-grid project-description-grid">
            <div id="w-node-ee63d52fd22b-db957e3d" className="paragraph-light">
            {`${formData.p0ld}`}
            </div>
            <div
              id="w-node-c086a8d10760-db957e3d"
              className="work-position-wrap"
            >
              {/*<div className="position-name-text">CV</div>*/}
              <div className="paragraph-light cc-position-name">
                <strong>{`${formData.p0t}`}</strong>
              </div>
              <div className="paragraph-tiny cc-paragraph-tiny-light">
                {`${formData.p0dim}`}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <img
          src={`${formData.p1i}`}
          alt=""
          className="detail-header-image"
        />
      </div>

      <div className="section">
        <div className="container">
          <div className="w-layout-grid project-description-grid">
            <div id="w-node-ee63d52fd22b-db957e3d" className="paragraph-light">
            {`${formData.p1ld}`}
            </div>
            <div
              id="w-node-c086a8d10760-db957e3d"
              className="work-position-wrap"
            >
              {/*<div className="position-name-text">CV</div>*/}
              
              
              
              
              <div className="paragraph-light cc-position-name">
                <strong>{`${formData.p1t}`}</strong>
              </div>
              <div className="paragraph-tiny cc-paragraph-tiny-light">
                {`${formData.p1dim}`}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
       



      <div className="section">
        <img
          src={`${formData.p2i}`}
          alt=""
          className="detail-header-image"
        />
      </div>

      </div>

      <div className="section">
        <div className="container">
          <div className="w-layout-grid project-description-grid">
            <div id="w-node-ee63d52fd22b-db957e3d" className="paragraph-light">
            {`${formData.p2ld}`}
            </div>
            <div
              id="w-node-c086a8d10760-db957e3d"
              className="work-position-wrap"
            >
              {/*<div className="position-name-text">CV</div>*/}
              <div className="paragraph-light cc-position-name">
                <strong>{`${formData.p2t}`}</strong>
              </div>
              <div className="paragraph-tiny cc-paragraph-tiny-light">
              {`${formData.p2dim}`}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="email-section">
          <div className="paragraph-light cc-position-name">

          <div className="section">
        <div className="container">


                <strong>Lets get in touch!</strong>

                <a
              href={`${formData.website}`}
              className="email-link" target="_blank"
            ><div className="container">
              <strong>Website</strong>
              </div>
            </a>

                </div>
        </div>
              </div>
           
          </div>
        </div>
      </div>
      <div className="footer-wrap">
          <div>
            <a href="https://webflow.com/" target="_blank" className="webflow-link w-inline-block"><img src="../images/webflow-w-small2x_1webflow-w-small2x.png" width={15} alt="" className="webflow-logo-tiny" />
              
            </a>
          </div>
          <div className="footer-links">
            
            <a href="https://www.instagram.com/perspectivebfa2020/" target="_blank" className="footer-item">Instagram</a>
          </div>
        </div>
      {/* [if lte IE 9]><![endif] */}
    </div>
  );
};

export default Designer;
