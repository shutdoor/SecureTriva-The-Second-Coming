import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from '../context/AuthContext';

function EditInformation() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip_code, setZipCode] = useState(0);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const { loggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function submitUpdate(evt) {
        evt.preventDefault();
        const url = "http://localhost:3000/api/user/update";

        let requestBody = {
            firstName,
            lastName,
            street,
            city,
            state,
            zip_code,
            phone,
            email
        }
        
        await axios.post(url, requestBody);

        history.push("/");
    }

    async function getUserInfo() {
        const url = "http://localhost:3000/api/user/update";
        const res = await axios.get(url);
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setStreet(res.data.street);
        setCity(res.data.city);
        setState(res.data.state);
        setZipCode(res.data.zip_code);
        setPhone(res.data.phone);
        setEmail(res.data.email);
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <>
            {loggedIn === true &&
                <form className="form" method="POST" onSubmit={submitUpdate}>
                    <h3>Edit Account Information</h3>
                    <div className="combiner">
                        <div className="inputLabelContainer">
                            <label htmlFor="firstName" className="editInformationLabel">First Name</label>
                            <input required name="firstName" className="input" value={firstName} onChange={(event) => { setFirstName(event.target.value) }}></input>
                        </div>
                        <p className="spacer"></p>
                        <div className="inputLabelContainer">
                            <label htmlFor="lastName" className="editInformationLabel">Last Name</label>
                            <input required name="lastName" className="input" value={lastName} onChange={(event) => { setLastName(event.target.value) }}></input>
                        </div>
                    </div>
                    <div className="combiner">
                        <div className="inputLabelContainer">
                            <label htmlFor="street" className="editInformationLabel">Street</label>
                            <input required name="street" className="input" value={street} onChange={(event) => { setStreet(event.target.value) }}></input>
                        </div>
                        <p className="spacer"></p>
                        <div className="inputLabelContainer">
                            <label htmlFor="city" className="editInformationLabel">City</label>
                            <input required name="city" className="input" value={city} onChange={(event) => { setCity(event.target.value) }}></input>
                        </div>
                        <p className="spacer"></p>
                        <div className="inputLabelContainer">
                            <label htmlFor="state" className="editInformationLabel">State</label>
                            <input required name="state" pattern="[A-Z]{2}" className="inputsm" value={state} onChange={(event) => { setState(event.target.value) }}></input>
                        </div>
                        <p className="spacer"></p>
                        <div className="inputLabelContainer">
                            <label htmlFor="zip_code" className="editInformationLabel">Zip Code</label>
                            <input required type="number" pattern="[0-9]{6}" name="zip_code" className="inputm" value={zip_code} onChange={(event) => { setZipCode(event.target.value) }}></input>
                        </div>
                    </div>
                    <div className="inputLabelContainer">
                        <label htmlFor="phone" className="editInformationLabel">Phone</label>
                        <input required name="phone" type="tel" className="input" value={phone} onChange={(event) => { setPhone(event.target.value) }}></input>
                    </div>
                    <div className="inputLabelContainer">
                        <label htmlFor="email" className="editInformationLabel">Email</label>
                        <input required name="email" type="email" className="input" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                    </div>
                    <button type="submit" className="buttonForm">Save Information</button>
                </form>
            }
        </>
    )
}

export default EditInformation;