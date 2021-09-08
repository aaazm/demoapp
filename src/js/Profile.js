import React,{useState, useEffect } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Rytsec from './component/Rytsec';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactPlayer from 'react-player';
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

function Livvdinn() {
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
             <figure style={{margin: "0"}} data-toggle="modal" data-target="#hlbModal">
                <img src="src/js/img/img-6.jpg" alt="image"/>
              </figure>
            </div>
            <h2>Time Management Lecture-1</h2>
          </Col>

          <Col md={3}>
            <div className="corner_crd">
             <figure style={{margin: "0"}} data-toggle="modal" data-target="#mpforModal">
                <img src="src/js/img/img-6.jpg" alt="image"/>
              </figure>
            </div>
            <h2>Time Management Lecture-2</h2>
          </Col>

          <Col md={3}>
            <div className="corner_crd">
             <figure style={{margin: "0"}} data-toggle="modal" data-target="#yutbleModal">
                <img src="src/js/img/img-6.jpg" alt="image"/>
              </figure>
            </div>
            <h2>Time Management Lecture-3</h2>
          </Col>
         
        </Row>
      </Container>
    </div>
    
    <div className="modal fade mod_cls" id="hlbModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="modal-close-movie">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Row>
          <Col md={9}>
          <ReactHlsPlayer
               src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
               
                    autoPlay={false}
                    controls={true}
                    width="100%"
                    id="modal-video"
                    height="100%"
                    hlsConfig={{
                      maxLoadingDelay: 4,
                      minAutoBitrate: 0,
                      lowLatencyMode: true,
                      maxBufferLength: 30,
                      maxMaxBufferLength: 600,
                      startPosition: -1,
                      debug: false,
                      liveSyncDurationCount: 3,
                      liveMaxLatencyDurationCount: Infinity,
                      liveDurationInfinity: false,
                    }}
                  />,
          </Col>

          <Col md={3} style={{background: "#fff",}}>
        <div className="main_chat">
        <Chat />
        </div>
        </Col>    
        </Row>
     
      </div>
    
    </div>
  </div>
</div>
<div className="modal fade mod_cls" id="mpforModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">  

      <Row>
      <Col md={9}>
        { <ReactPlayer url='http://media.w3.org/2010/05/bunny/movie.mp4' 
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                /> }    
        </Col>

        <Col md={3} style={{background: "#fff",}}>
        <div className="main_chat">
        <Chat />
        </div>
        </Col>   
      </Row>
     
      </div>
     
    </div>
  </div>
</div>



<div className="modal fade mod_cls" id="yutbleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content fram">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body "> 
      <Row>
      <Col md={9}>
          { <ReactPlayer url='https://www.youtube.com/watch?v=932fiU2mENM' 
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="70vh"
                /> }
          </Col>

          <Col md={3} style={{background: "#fff",}}>
        <div className="main_chat">
        <Chat />
        </div>
        </Col>         
      </Row> 
      
      </div>
     
    </div>
  </div>
</div>
    
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

  const history = useHistory();
  return (
    <div>
             <button className="btn btn-primary gobk" onClick={() => history.goBack()} style={{width:"100px"}}>&#8592;</button>
        <div className="mycorner">
        <h3>List PDF</h3>
      <Container>
        <Row style={{paddingTop: "15px",}}>
          <Col md={3}>
            <div className="corner_crd">
             <a href="child.html" target="_blank"><figure style={{margin: "0"}}>
                <img src="src/js/img/pdf.jpg" alt="image"/>
              </figure></a>
            </div>
            <h2>1_Architecture</h2>
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



