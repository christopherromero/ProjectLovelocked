import React, { Component } from 'react';


/* Import Components */
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

export class RSVP extends Component {
    display = RSVP.name

    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: "",
                email: "",
                partySize: "",
                attendance: "",
                notes: ""
            },

            attendanceOptions: ["Yes", "No"]
        };
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handlePartySize = this.handlePartySize.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePartySize(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    partySize: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    notes: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        fetch("http://example.com", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                name: "",
                email: "",
                partySize: "",
                attendance: "",
                notes: ""
            }
        });
    }

    render() {
        return (
            <div>
                <h1>RSVP</h1>
                <form title="RSVP" className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                    inputType={"text"}
                    title={"Full Name"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Enter your name"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Name of the user */}
                <Input
                    inputType={"text"}
                    title={"Email"}
                    name={"email"}
                    value={this.state.newUser.email}
                    placeholder={"Enter your email"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Email of User */}
                <Select
                    title={"Attending"}
                    name={"attendance"}
                    options={this.state.attendanceOptions}
                    value={this.state.newUser.attendance}
                    placeholder={"Will you be attending?"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Attendance Selection */}
                <Input
                    inputType={"number"}
                    name={"partySize"}
                    title={"Party Size"}
                    value={this.state.newUser.partySize}
                    placeholder={"How many people are in your party?"}
                    handleChange={this.handlePartySize}
                />{" "}
                {/* Party size */}
                <TextArea
                    title={"Notes"}
                    rows={10}
                    value={this.state.newUser.notes}
                    name={"notes"}
                    handleChange={this.handleTextArea}
                    placeholder={"Leave any notes about you and your party."}
                />
                {/* Notes */}
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                />{" "}
                {/*Submit */}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                />{" "}
                {/* Clear the form */}
                </form>
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};