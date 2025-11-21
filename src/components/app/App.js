import './App.css';

function App() {
  const name = 'Maciej '
  const names = ['maciej', 'tomasz','wiktor','zofia']
  return (
    <>
    <div className="App">
     
       
        <p>
          { name.length > 4 ? name : "hello fiend"}
        </p>
        <p>{ names.map((name) => <li key={name}>{name}</li>)}</p>
        
     
    </div>
    </>
  );
}

export default App;
