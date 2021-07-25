import { Component } from 'react';
import './LifeCycle1.css';

class LifeCycle extends Component{

    constructor(props) {
        super(props);
        this.state={
            pilihkata : [
                "lihat ",
                "kebunku ",
                "Penuh ",
                "dengan ",
                "bunga ",
                "mawar",
                "melati",
                "juga",
                "merah",
                "semuanya indah",
            ],
            time: 0,
            showKataIndex: 0,
        }
    }

    startTime() {
      const interval = setInterval(() => {
        this.setState({
          time: this.state.time + 0.01
        });
        if(this.state.pilihkata.length === 0) {
          clearInterval(interval)
        }
      }, 10)
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  
    convertToTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = (time % 60).toFixed(2) ;
      return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }
  
    deleteKata(index) {
      if(this.state.time === 0) {
        this.startTime();
      }
      if(index === this.state.showKataIndex) {
        let deletedKatas = this.state.pilihkata;
        deletedKatas.splice(index, 1);
        this.setState({
          pilihkata: deletedKatas,
          showKataIndex: this.getRandomInt(deletedKatas.length - 1)
        })
      }
    }

    componentDidMount() {
      this.setState({
        showKataIndex: this.getRandomInt(this.state.pilihkata.length - 1)
      })
    }

    render(){
        return(
            <div> 
            <header  className="judulKata"> 
              <h2>Cari Kata</h2>
              <h4>{this.convertToTime(this.state.time)}</h4>
            </header>
          <div>
            <div className="kotak">{
              this.state.pilihkata.length
                ? this.state.pilihkata[this.state.showKataIndex]
                : "Selamat Anda Menang!"
            }</div>
          </div>
            <footer>
              <div className="hapusKata">
                {this.state.pilihkata.map( (kata, index) => (
                  <button key={index} onClick={() => this.deleteKata(index)}>{kata}</button>
                ) )}
              </div>
            </footer>
          </div>     
        )
    }
}

export default LifeCycle;