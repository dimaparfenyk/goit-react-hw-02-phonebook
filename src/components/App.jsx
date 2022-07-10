import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

 class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (userData) => {
     this.setState ((prevState) => ({
      contacts: [...prevState.contacts, userData],
    }))
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id)
    }));
  };
  
  render() {
    const  contacts  = this.state.contacts;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
       
        <h2>Contacts</h2>
        <ContactList
          contacts={contacts} 
          onDeleteContact={this.deleteContact} />
      </div>
    );
  };
};

export default App;
