import logo from './logo.svg';
import './App.css';
import natureimg from './nature-.jpg';

function App() {
  return (
    <div>

<div style={{border:"solid 1px black" , maxWidth :"200vw"}}>

 <h1 className="title red">Sarra Ben Belgacem</h1>

 <br/>

 <div className="image">

 <img src={natureimg} style={{width: "350px"}}/>

 <br/>

 <img src="/nature.jpg" style={{width: "350px"}} />

</div>

</div>

<br/>


<iframe width="727" height="409" src="https://www.youtube.com/embed/6lt2JfJdGSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
    
  );
}

export default App;
