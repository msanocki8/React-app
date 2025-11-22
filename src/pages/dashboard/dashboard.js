import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Dashboard() {
    const { theme, toogleTheme} = useContext(ThemeContext);

    useEffect(() => {
        console.log(theme)
    }, [theme]);


// const handleClick = () => {
//     toogleTheme
// }

    return (
        <><main className={theme}>
        <h1>Dashboard</h1>
        <span>{theme}</span>
        <button onClick={toogleTheme}>zmien</button>
        <h1>Dashboard</h1>
        </main>
        </>
    );
}


export default Dashboard;