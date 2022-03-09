import  React,{ useState } from 'react';
import { Form} from 'reactstrap';
import './../css/home.css';
import { BsFillMouse2Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = ({ addPlayer, handleClick }) => {

    const [inValid, setInValid]= useState(true);

    function validate (name) {
        if(/^\b[a-zA-Z]{1,15}$/.test(name)){
            addPlayer(name)
            setInValid(false)
        }else{
            setInValid(true)
        }
    }
    
    return (
        <div className="container">
            <div className="containerIcon">
                <div className="circulo"> <BsFillMouse2Fill size="48px" color="black" /> </div>
            </div>
                <div className="title">Create new player</div>    
                <Form >
                <div className="form">
                    <input 
                        type="textarea" 
                        id="nameId" 
                        name="name" 
                        onChange={(e) => {
                            validate(e.target.value);
                          }}
                        placeholder="Name*"
                        autoComplete="off"
                    />      
                </div>

                <div className="form">
                    <Link to={`/game`}>
                        <button className="btn-submit textJoin" value="JOIN" id="join-button" disabled={inValid} onClick={handleClick}>JOIN
                        </button>
                    </Link>
                </div>
            </Form> 
        </div>

    );
}

export default Home;