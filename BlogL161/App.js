// import logo from './logo.svg';
// import './App.css';
// import FavFruits from './components/FavFruit';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>User Info</p>
//         <FavFruit/>
  
//       </header>
//     </div>
//   );
// }


// export default App;
// import React from 'react';
// import Movie from './Movie'; // Import the Movie component

// function App() {
//   return (
//     <div>
//       <h1>Movie Information</h1>
//       {/* Use the Movie component and pass props */}
//       <Movie title="Inception" year="2010" rating="8.8" />
//       <Movie title="The Shawshank Redemption" year="1994" rating="9.3" />
//       <Movie title="Pulp Fiction" year="1994" rating="8.9" />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Movie from './Movie'; 

// function App() {
//   return (
//     <div>
//       <h1>Movie Information</h1>
//       {/* Use the Movie component and pass props */}
//       <Movie title="Inception" year="2010" rating="8.8" />
//       <Movie title="The Shawshank Redemption" year="1994" rating="9.3"/>
//       <Movie title="Pulp Fiction" year="1994" rating="8.9" />
//     </div>
//   );
// }
import logo from './logo.svg';
import './App.css';
import BlogList from './components/BlogList';
function App() {
  return (
    <div className="App">
      <BlogList/>
    </div>
  );
}

export default App;