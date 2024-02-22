import React from 'react';
import './AddParty.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { axiosConfigPartyDetailsStore } from '../api/axiosConfig';
import { Alert } from 'bootstrap';
function AddParty({ onPartyCreated }) {


    const [Partydetails, SetPartydetails] = useState({
        id:0,
        name: '', title: '', forename: '', lastname: '',
        phonenumber: 0, mobilenumber: 0, officephone:0, faxnumber: 0, homeemail: '', officemail:''
    });

    const PartyDataStoring = (event) => {

        SetPartydetails({ ...Partydetails, [event.target.name]: event.target.value });
    }

    const PartyDataPassing = async () => {
        try {
            const { id, name, title, forename, lastname,
                phonenumber, mobilenumber, officephone, faxnumber, homeemail, officemail } = Partydetails;

            await axiosConfigPartyDetailsStore(id,name, title, forename, lastname, phonenumber, mobilenumber, officephone,
                faxnumber, homeemail, officemail);
          
            onPartyCreated();
            
        }
        catch {
            Alert("Please fillup")
        }
        alert('UserCreated');
    }

    return (
        <div className='Navigation'>
            <div className='Partysidebar'>
                <div className='col-sm-12'>
                    <div className="card">
                        <div className="card-header">
                            Add Party
                        </div>

                    </div>
                </div>
                <form className="form-container" onSubmit={PartyDataPassing}>
                    <div className="FirstInputColumn">
                        <label>
                            ID:
                            <input type="text" className="form-control" name="id" onChange={PartyDataStoring} />
                        </label>
                        <label>
                            Name:
                            <input type="text" className="form-control" name="name" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Title:
                            <input type="text" className="form-control" name="title" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Forename:
                            <input type="text" className="form-control" name="forename" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Lastname:
                            <input type="text" name="lastname" class="form-control" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Phonenumber:
                            <input type="text" className="form-control" name="phonenumber" onChange={PartyDataStoring} required={true} />
                        </label>
                    </div>
                    <div className="SecoundInputColumn">
                        <label>
                            Mobilenumber:
                            <input type="text" className="form-control" name="mobilenumber" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Officephone:
                            <input type="text" className="form-control" name="officephone" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Faxnumber:
                            <input type="text" className="form-control" name="faxnumber" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Homeemail:
                            <input type="text" class="form-control" name="homeemail" onChange={PartyDataStoring} required={true} />
                        </label>
                        <br />
                        <label>
                            Officemail:
                            <input type="text" class="form-control" name="officemail" onChange={PartyDataStoring} required={true} />
                        </label>
                    </div>
                    <div className="CreateParty">
                        <button className="CreatePartyButton" required={true} >CreateParty</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default AddParty;
