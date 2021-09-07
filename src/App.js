
import { useContext } from 'react';
import './App.css';
import { Content } from './Components/content/Content';
import { Search } from './Components/search/Search';
import { postContext } from './context/postContext';



function App() {
  const {state} =useContext(postContext)
  return (
    
      <div className="App">
        <Search />
        <Content data={state.postData} />
      </div>
  );
}

export default App;
