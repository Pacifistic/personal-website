import React, {Component} from 'react';
import axios from "axios";

const endpoint = 'https://50xbti2yti.execute-api.us-east-2.amazonaws.com/beta/';

export default class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmitMessage = this.onSubmitMessage.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
            submitted: false
        }
    }

    onChangeFirstName(e){
        this.setState({firstName: e.target.value});
    }

    onChangeLastName(e){
        this.setState({lastName: e.target.value});
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangeSubject(e){
        this.setState({subject: e.target.value});
    }

    onChangeMessage(e){
        this.setState({message: e.target.value});
    }

    onSubmitMessage(e){
        e.preventDefault();
        const request = {
            name: this.state.firstName + ' ' + this.state.lastName,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };
        axios.post(endpoint, request)
            .then(res => {
                this.setState({submitted: true});
            })
            .catch(err => {
                console.log("unable to submit request");
                this.setState({submitted: true});
            });
    }

    render() {
        let submit;
        if(this.state.submitted)
            submit = <p className="text-center">Thank you, I will return back to you as soon as I can.</p>
        else
            submit = <div className="flex justify-end py-4">
                <button type="submit"
                        className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
                    Submit
                </button>
            </div>

        return(
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={this.onSubmitMessage}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="first-name">First name</label>
                        <input type="text" id="first-name" name="first-name" className="form-input px-3 py-2 rounded-md"
                               onChange={this.onChangeFirstName}
                               required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" id="last-name" name="last-name" className="form-input px-3 py-2 rounded-md"
                               onChange={this.onChangeLastName}
                               required/>
                    </div>
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md"
                               onChange={this.onChangeEmail}
                               required/>
                    </div>
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md"
                               onChange={this.onChangeSubject}
                               required/>
                    </div>
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="subject">
                            <div className="flex align-items">
                                Message
                                <span className="ml-auto opacity-75">Max. 500 characters</span>
                            </div>
                        </label>
                        <textarea maxLength="500" rows="4" type="text" id="subject" name="subject"
                                  className="form-input px-3 py-2 rounded-md"
                                  onChange={this.onChangeMessage} required/>
                    </div>
                </div>
                {submit}
            </form>
        </div>
        )
    }
}