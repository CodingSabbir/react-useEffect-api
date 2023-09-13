import { useParams } from "react-router-dom";


const Contact = () => {
    const {facebook,youTube}=useParams()
    return (
        <>
            <p>Facebook:{facebook}</p>
            <p>YouTube:{youTube}</p>
            <h1>Contact Page</h1>
        </>
    );
};

export default Contact;