import React, { Component } from 'react'
import './App.css';
import LifeCycle from './LifeCycle1';



 class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       DaftarKata: [
//         "lihat",
//         "kebunku",
//          "penuh",
//          "dengan",
//          "bunga",
//          "mawar",
//          "melati",
//          "semuanya",
//          "indah",
//       ],
//     };
//   }
  
  

//   changeWord = () => {
//     this.setState({});
//   };
// s
//   delWord = (key) => {
//     if (this.randomWord === this.state.DaftarKata[key]) {
//       this.state.DaftarKata.splice(key, 1);
//     } else {
//       alert("Kata yang Anda pilih, tidak sama dengan Kata yang dicari");
//     }
//   };

//   userCongrats = () => {
//     this.setState({
//       randomWord: "Selamat! Anda telah menyelesaikan mini game ini.",
//     });
//   };
 
   render() {
    return (
      <div>
        <div>
           {/* <h2>Cari Kata</h2> */}
           {/* <p></p> */}
           <LifeCycle />
        </div>
        {/* <br />
        <main>
         <div className="box">
       { */}
{/* //            (this.randomWord = this.state.DaftarKata[
//            Math.floor(Math.random() * this.state.DaftarKata.length)
//         ])
//       }
//          </div> */}
{/* //</div>        </main>  */}
{/* //       <footer>
//           <div className="wrapper">
//             {this.state.DaftarKata.map((word, key) => ( */}
{/* //               <button */}
{/* //                 onClick={() => { */}

      
    </div>
     )
   }
 }

export default App
