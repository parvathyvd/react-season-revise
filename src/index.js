import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

  class App extends React.Component {
    // constructor(props){
    //   super(props);
    //   this.state = {lat: null,  errorMessage: ''}
    // }
    state = {lat: null,  errorMessage: ''}

    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        (position)=> {
          this.setState({lat: position.coords.latitude})
        }, 
        (error) => {
          console.log(error);
          this.setState({errorMessage: error.message});
        }
        );
    }

    //helper function
    
    renderContent(){
      if(this.state.lat && !this.state.errorMessage){
        return(
          <div><SeasonDisplay lat = {this.state.lat}/></div>
        )
      }
      if(this.state.errorMessage && !this.state.lat){
       return(
         <div>Error: {this.state.errorMessage}</div>
       )
      }
      return (
       <div><Loading message={'Please select your location!'}/></div>
     )
     }
    

    render (){
      return(
     <div className="border red">
       {this.renderContent()}
     </div>
      )
  }
  }
ReactDOM.render(<App/>, document.querySelector('#root'));