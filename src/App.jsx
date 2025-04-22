
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
      <div>
        <h1>Jamming</h1>
      </div>
      <div> 
        <h2>Your favorite songs, right here!</h2>
        <SearchBar />
      </div>
      <div>
        <SearchResults />
        <PlayList />
      </div>
      

    </>
  )
}

export default App
