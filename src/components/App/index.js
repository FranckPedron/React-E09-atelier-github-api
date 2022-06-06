// == Import
import React from "react";

// == Composant
import SearchBar from "src/components/SearchBar";
import Message from "src/components/Message";
import ReposResults from "src/components/ReposResults";

function App() {
  return(
    <div className="app">
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  )
}

// == Export
export default App;
