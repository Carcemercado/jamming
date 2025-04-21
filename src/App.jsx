
import reactLogo from './assets/react.svg';
// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...
import './App.css'
import SearchBar from './component/SearchBar'
import SearchResults from './component/SearchResults'
import PlayList from './component/PlayList'

function App() {
  

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Spotify Playlist Creator</h1>
      <div className="card">
        <SearchBar />
        <SearchResults />
        <PlayList />
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>

    </>
  )
}

export default App
