export default async function aiueo({params}){
    
    const {message} = params;

    return (
            <div>hello, {decodeURI(message)}! </div>

    )
}