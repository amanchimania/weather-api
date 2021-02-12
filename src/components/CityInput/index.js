import React from "react";
import { Button, Container, Form } from "react-bootstrap";
const CityInput = ({city,setCity,fetchCityWeather}) => {
    const [error,setError]=React.useState("");
    const handleInputChange=(event)=>{
        // console.log(event.target);
        setCity(event.target.value);
    };
    const handleClick=()=>{
        if(!city){
            setError("City Feild is empty");
        }else{
            setError("");
            fetchCityWeather();
        }

    }
    return (
        <Container >
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter City to search</Form.Label>
                    <Form.Control value={city} type="email" placeholder="Enter City" onChange={handleInputChange}/>
                    <p className="text-danger">{error}</p>
                </Form.Group>
                <Button variant="primary"  onClick={handleClick}>Submit</Button>
            </Form>
        </Container>
    );
}
export default CityInput;