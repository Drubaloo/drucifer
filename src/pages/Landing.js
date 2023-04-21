import { useNavigate } from "react-router-dom"
export default function Landing(props){
    const navigateHome =  useNavigate()
    return (
        <button onClick={() => {
            props.toggle();
            navigateHome("/")
        }}>Begin the spin cycle</button>
    )
}