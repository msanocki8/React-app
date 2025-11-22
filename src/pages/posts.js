import LikeCounter from "../components/app/LikeCounter/LikeCounter";

function Posts() {
    return (
        <>
        <h1>leatest post</h1>
        <article>
        <h1>LATES POST</h1>
    <div className='posts'>
    <LikeCounter title="pierwszy post" description=" opis artykułu" count="5" color="red" author></LikeCounter>
    <LikeCounter title="2" description=" opis artykułu" count="10" color="yellow"></LikeCounter>
    <LikeCounter title="3" description=" opis artykułu" count="5" color="green"></LikeCounter> 
        <LikeCounter></LikeCounter>
    </div>
        </article>
        </>
    )
}
export default Posts;