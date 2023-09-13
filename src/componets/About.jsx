import { useParams } from "react-router-dom";


const About = () => {
    const {id,name}=useParams()
    return (
        <>
            <p>ID:{id}</p>
            <p>Name:{name}</p>
           <h1>About Page</h1> 
        </>
    );
};

export default About;