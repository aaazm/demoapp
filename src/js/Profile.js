import React,{useState, useEffect } from "react";
import {Container,Row,Col,Button,Modal} from 'react-bootstrap';
import Rytsec from './component/Rytsec';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactPlayer from 'react-player';
import { LionPlayer } from 'lion-player';
import {NavLink,HashRouter,Link,Route,Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";
//import { jsPDF } from "jspdf";
import {auth} from './component/Fire';
import Chat from './component/Chat'


export default function Profile() {
  const logout=()=>{
      auth.signOut();
  }
  return (
    <HashRouter>
      <div className="main-div">
      {/* onClick={() => setClass('active')} className={activeClass} */}
        <Row>
          <Col className="main_col_dv-l pr-0" md={2 }>
      <div className="left_dv lft-log">
        <img className="lft_tb_log" src="src/js/img/logo.png" />
        <ul>
        <NavLink to="/" className="nv_lik"  style={{color: "#000", textDecoration: "none",}}><li className=" bt"><img src='src/js/img/icon-1.png' alt="icon" /><span className="nv_dtl">Profile</span></li></NavLink>
        <NavLink to="/Mycorner" className="nv_lik" activeClassName="main_active" style={{color: "#000", textDecoration: "none",}}> <li className=" bt"><img src='src/js/img/icon-2.png' alt="icon" /><span className="nv_dtl">My Corner</span></li></NavLink>
        <NavLink to="/Pdf" className="nv_lik" activeClassName="main_active" style={{color: "#000", textDecoration: "none",}}><li className=" bt"><img src='src/js/img/icon-4.png' alt="icon" /><span className="nv_dtl">Pdf Corner</span></li></NavLink>
        <NavLink to="/Onlinetst" className="nv_lik" activeClassName="main_active" style={{color: "#000", textDecoration: "none",}}><li className=" bt"><img src='src/js/img/icon-5.png' alt="icon" /><span className="nv_dtl">Online Test</span></li></NavLink>
        <li><button className="btn btn-primary log_out_txt nv_lik" onClick={logout}>Logout</button></li>
        </ul>
        </div>
        </Col>

       <Col className="main_col_dv-r pl-0" md={10}>

         <Rytsec />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Mycorner" component={Mycorner}/>
          <Route exact path="/Video" component={Video}/>
          <Route exact path="/Livvideo" component={Livvideo}/>
          <Route exact path="/Livvdinn" component={Livvdinn}/>
          <Route exact path="/Pdf" component={Pdf}/>
          <Route exact path="/Pdfsubject" component={Pdfsubject}/>
          <Route exact path="/Pdftopic" component={Pdftopic}/>
          <Route exact path="/Pdflist" component={Pdflist}/>
          
          <Route path="/Onlinetst">
            <Onlinetst />
          </Route>
        </Switch>
        </Col>
        </Row>
      </div>
    </HashRouter>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
      const userid = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      })
      return userid
  }, []);
  return (
    <div className="fed_contnt">
      <Row>
        <Col md={4}>
          <div className="f_l">
        <div className="frd_top_cont">
        <img src='src/js/img/doremon.png' alt="icon" />
      
      <div className="prof_dtail">
        <ul>
          <li>Name</li>
          <li>Email<span className="prof_in_dtil">{currentUser && currentUser.email}</span></li>
          <li>Phone<span className="prof_in_dtil">1234567890</span></li>
          <li>Adderss<span className="prof_in_dtil"></span></li>
        </ul>
      </div>
      </div>
      </div>
        </Col>

        <Col md={8}>
        <div className="f_l">
        <div className="fd_ryt_dv fed_contnt">
      <h3>Lorem Lorem</h3>

      <div className="content">
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        </ul>
      </div>
      </div>
    </div>
        </Col>
      </Row>
    </div>
  );
}

function Mycorner() {
  return (
    <HashRouter>
    <div className="mycorner">
      <h3>Courses</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Video"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-3.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>Testing Batch 2021</h2>
          </Col>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Video"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-3.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>GS Foundation Batch</h2>
          </Col>
         
        </Row>
      </Container>
    </div>
    </HashRouter>
  );
}


function Video() {
  const history = useHistory();
  return (
    <div>
             <button className="btn btn-primary gobk" onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
        <div className="mycorner">
        <h3>Subject</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Livvideo"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-4.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>Time Management</h2>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}


function Livvideo() {
  const history = useHistory();
  return (
    <div>
       <button className="btn btn-primary gobk" onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
        <div className="mycorner">
        <h3>Topic</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Livvdinn"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-5.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>Video Lecture 2021</h2>
          </Col>
          
        </Row>
      </Container>
    </div>
    </div>
  );
}
// const SOURCES = [
//   {
//     src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
//     type: 'application/x-mpegURL',
//   },
//   {
//     src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
//     type: 'application/dash+xml',
//   }
// ];
function Livvdinn() {
  const [Tml1, setTml1] = useState(false);
  const [Tml2, setTml2] = useState(false);
  const [Tml3, setTml3] = useState(false);

  const history = useHistory();
  return (
    <div>
      <button className="btn btn-primary gobk" onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
      <div className="mycorner">
        <h3>List</h3>
        <Container>
          <Row style={{paddingTop: "15px",}}>
            <Col md={3}>
              <div className="corner_crd">
                <Button onClick={() => setTml1(true)}>
                  <img src="src/js/img/img-6.jpg" alt="image"/>
                </Button>
              </div>
              <h2>Time Management Lecture-1</h2>
            </Col>
            <Col md={3}>
              <div className="corner_crd">
                <Button onClick={() => setTml2(true)}>
                  <img src="src/js/img/img-6.jpg" alt="image"/>
                </Button>
              </div>
              <h2>Time Management Lecture-2</h2>
            </Col>
            <Col md={3}>
              <div className="corner_crd">
                <Button onClick={() => setTml3(true)}>
                  <img src="src/js/img/img-6.jpg" alt="image"/>
                </Button>
              </div>
              <h2>Time Management Lecture-3</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={Tml1} onHide={() => setTml1(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="Tml1">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="md_bd">
          <Row>
            <Col md={9}>
            <LionPlayer  
              sources='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
              autoplay={false}
              muted={false}
              width="100%"
              height="80vh"
              className="ffdf" />
              {/* { <ReactPlayer url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' 
                autoPlay={true}
                controls={true}
                width="100%"
                id="myPlayerID"
                height="80vh"
                className="ffdf"
              /> } */}
            </Col>

            <Col md={3} style={{background: "#fff",}}>
              <div className="main_chat">
                <Chat />
              </div>
            </Col>         
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={Tml2} onHide={() => setTml2(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="Tml2">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="md_bd">
          <Row>
            <Col md={9}>
            {/* <LionPlayer  
              sources='http://media.w3.org/2010/05/bunny/movie.mp4'
              autoplay={false}
              muted={false}
              sourceOrder={true}
              width="100%"
              height="80vh"
              className="ffdf" /> */}
              { <ReactPlayer url='http://media.w3.org/2010/05/bunny/movie.mp4' 
                autoPlay={true}
                // controls={true}
                width="100%"
                height="80vh"
                className="ffdf"
                controls={true}
                config={{ file: { 
                  attributes: {
                    controlsList: 'nodownload'  //<- this is the important bit
                  }
              }}}
              onEnded={()=>this.onEnded()}
              /> }
            </Col>

            <Col md={3} style={{background: "#fff",}}>
              <div className="main_chat">
                <Chat />
              </div>
            </Col>         
          </Row>
        </Modal.Body>
      </Modal>
      <Modal show={Tml3} onHide={() => setTml3(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="Tml3">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="md_bd">
          <Row>
            <Col md={9}>
              { <ReactPlayer url='https://www.youtube.com/watch?v=932fiU2mENM' 
                autoPlay={true}
                controls={true}
                width="100%"
                height="80vh"
                className="ffdf"
              /> }
            </Col>

            <Col md={3} style={{background: "#fff",}}>
              <div className="main_chat">
                <Chat />
              </div>
            </Col>         
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function Pdf() {
  return (
    <div>
       <div className="mycorner">
      <h3>Courses PDF</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Pdfsubject"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-3.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>Testing Batch 2021</h2>
          </Col>
        </Row>
      </Container>
    </div>
</div>
  );
}

function Pdfsubject() {
  const history = useHistory();
  return (
    <div>
        <button className="btn btn-primary gobk" onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
        <div className="mycorner">
        <h3>Subject PDF</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Pdftopic"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-4.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>Time Management</h2>
          </Col>
         
        </Row>
      </Container>
    </div>
    </div>
  );
}

function Pdftopic() {
  const history = useHistory();
  return (
    <div>
             <button className="btn btn-primary gobk" onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
        <div className="mycorner">
        <h3>Topic PDF</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <Link to="/Pdflist"><figure style={{margin: "0"}}>
                <img src="src/js/img/img-5.jpg" alt="image"/>
              </figure></Link>
            </div>
            <h2>Time Management</h2>
          </Col>
         
        </Row>
      </Container>
    </div>
    </div>
  );
}

export function Pdview() {
  return(
    <div>
        <embed src="src/js/pdf/1_Architecture.pdf" style="width: 100%; height: 90vh;"></embed>
    </div>
  )
}

function Pdflist() {

  return (
    <div>
             <button className="btn btn-primary gobk"  onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
        <div className="mycorner">
        <h3>List PDF</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <a className="hrefid active" href="child.html"  data-id="tab-1" target="_blank"><figure style={{margin: "0"}}>
                <img src="src/js/img/pdf.jpg" alt="image"/>
              </figure></a>
            </div>
            <h2>1_Architecture</h2>
          </Col>
          <Col md={3}>
            <div className="corner_crd">
             <a className="hrefid" href="child.html" data-id="tab-2" target="_blank"><figure style={{margin: "0"}}>
                <img src="src/js/img/pdf.jpg" alt="image"/>
              </figure></a>
            </div>
            <h2>2_Architecture</h2>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}


function Onlinetst() {
  return (
    <div className="liv_tst">
      <h2>Online Test available in IOS APP</h2>
    </div>
  );
}



