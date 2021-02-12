import React from 'react';
import Konversi from './components/Konversi';
import kimia from'./img/kimia.png';

class App extends React.Component {

  render() {
    return (
        <main className="mb-5">
          <div className="container mb-5"> 
            <h1 className="pt-5 mb-4 text-center" >Konversi Suhu</h1>
            <div className="row">
              <div className="col-md-6 cols-sm-12">
                <img src={kimia} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12">
                <Konversi/>
              </div>
            </div>
          </div>
        </main>
    )
  }
}

export default App;
