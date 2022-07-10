import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = userData => {
    return this.setState (prevState => ({
      contacts: [...prevState.contacts, userData],
    }))
  };

  // deleteContact = id => {
  //   // this.setState(prevState => ({
  //   //   contacts: prevState.contacts.filter(item => item.id !== id)
  //   // }));
  // };
  
  render() {
    // const  contacts  = this.state.contacts;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
       
        <h2>Contacts</h2>
       
      </div>
    );
  };
};

