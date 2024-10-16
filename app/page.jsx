import Link from "next/link";

const HomePage = () => {
    return ( <div>
    <h1 className="text-3xl"> welcome </h1>    
    <Link href='/properties'>go to propertirs</Link>
    </div> );
}
 
export default HomePage   ;