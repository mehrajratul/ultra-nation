import './App.css';
import Countries from './conponents/Countries/Countries';

function App() {;
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
    </div>
  );
}










// function Countries() {
//   const [countries, setCountries] =  useState([]);

//   useEffect(() => {

//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, []);
//   return(
//     <div className="App">
//       <p>Hello about to make a new react website</p>
//       <h1>countries loaded : {countries.length}</h1>
//       {
//         countries.map(country => <Country name = {country.name} capital = {country.capital}></Country>)
//       }
//     </div>
//   );
// }

// function Country(props) {
//   return(
//     <div>
//       <h2>Name : {props.name}</h2>
//       <h3>Capital : {props.capital}</h3>
//     </div>
//   );
// }

export default App;
