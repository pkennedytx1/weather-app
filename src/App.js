import React, { Component } from 'react'; 
import MainPage from './containers/MainPage';

class App extends Component {

  constructor() {
    super()
    this.state = {
      defaultCoordinates: {
        lat: 0,
        long: 0,
      },
      isLoading: true,
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.setState({
          defaultCoordinates: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
          isLoading: false,
        })
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.isLoading && <MainPage coordinates={this.state.defaultCoordinates} />}
      </>
    );
  }

}

export default App;
