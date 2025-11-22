import './login.css';
function Login(){
    return (
        <>
        <article>
        <h1>Logowanie</h1>
        <label>podaj nick: <input className="nick" placeholder="nick"></input></label>
        <label>podaj haslo: <input className="haslo" placeholder="haslo"></input></label>
        <button>zaloguj</button>
        <a href=''></a>
       </article> </>
    )
}
export default Login;