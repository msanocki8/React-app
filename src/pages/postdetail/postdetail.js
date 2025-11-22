import { useEffect } from "react";
import { useParams } from "react-router"

function PostDetail() {
    const { id } = useParams();
    useEffect(() => {
        console.log(typeof id);
    }, []);
    return(
        <>
        <h1>POst detail</h1>
            { id && <h1>Post nr: {id}</h1>}
            { id ? <h1>Post nr: {id}</h1> : <h1>brak postu</h1>}
            
        </>
    );
}

export default PostDetail