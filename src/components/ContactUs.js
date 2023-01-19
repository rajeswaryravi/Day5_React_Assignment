import React from 'react';
import './style.css';

class MyContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', email: '', message: '' }
  }
  setEmpState = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({ [field]: value })
  }
  handleLogin = (e) => {
    e.preventDefault();
    }
  render() {
    return (<React.Fragment>
      <div className="container" style={{backgroundColor:"#3a3636",color:"#fff",height:"375px"}}>
        <h1 style={{textDecoration:"underline",fontSize:"36px"}}>CONTACT ME</h1>
        <form>
          <input style={{ marginBottom: '7px', height: '40px',width:"700px" }} type="text" className="form-control" value={this.state.firstname} id="firstname" placeholder="Name" name="firstname" onChange={this.setEmpState} />
          <input style={{ marginBottom: '7px', height: '40px',width:"700px"  }} type="email" className="form-control" value={this.state.email} id="email" placeholder="Email" name="email" onChange={this.setEmpState} />
          <textarea style={{ marginBottom: '7px', height: '40px',width:"700px"  }} className="form-control" value={this.state.message} id="cpwd" placeholder="Message" name="message" onChange={this.setEmpState} />
          <button type="submit" className="btn btn-primary button" style={{backgroundColor:"#ff005e",color:"#fff",border:"none",width:"700px",height: '40px'}}
          onClick={this.handleLogin}>Submit</button>
        </form>

      </div>

    </React.Fragment>)
  }
}
export default MyContactUs;