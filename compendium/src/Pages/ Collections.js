import React from 'react';
import CollectionTable from './components/CollectionTable';
import Form from './components/Form';
import Message from './components/Message';
import CollectionAPI from './CollectionAPI';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections : [],
            isEditForm : false,
            collection : {
                category : "",
                name : "",
                quantity : "",
                condition : "",
                description : "",
                image : ""
            },
            
        };

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount(){
        CollectionAPI.getCollections().then(data=>{
            console.log(data);
            this.setState({collections : data.response})});
    }

    resetForm(){
        this.setState({
            collection: {
                firstName : "",
                lastName : "",
                salary : "",
                job : ""
            }
        });
    }

    handleChange(e){
        this.setState({
            collection : {
                ...this.state.collection,
                [e.target.name] : e.target.value
            }
        });
    }

    showEditForm(collection){
        this.setState({isEditForm : true, collection : collection});
    }

    async deleteHandler(id){
        const deleteData = await CollectionAPI.deleteCollection(id);
        const message = deleteData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await CollectionAPI.getCollections();
            this.setState({message,collections : data.response})
        }
    }

    async updateHandler(e){
        e.preventDefault();
        const updateData = await CollectionAPI.updateCollection(this.state.collection);
        const message = updateData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await CollectionAPI.getCollections();
            this.setState({message,collections : data.response})
        }
        this.setState({isEditForm: false});
        this.resetForm();
    }

    async addHandler(e){
        e.preventDefault();
        const postData = await CollectionAPI.createCollection(this.state.collection);
        const message = postData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await CollectionAPI.getCollections();
            this.setState({message,collections : data.response});
        }
        this.resetForm();
    }

    renderCollectionTable(){
        if(this.state.collections.length > 0){
            return(
                <CollectionTable collections={this.state.collections}
                               deleteHandler={this.deleteHandler}
                               showEditForm={this.showEditForm}/>
            );
        }
        return null;
    }

    renderForm(){
       return(
           <Form isEditForm={this.state.isEditForm}
                 collection={this.state.collection}
                 handleChange={this.handleChange}
                 handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}/>
       ); 
    }

    renderMessage(){
        if(this.state.message === "")
            return null;
        return(
            <Message message={this.state.message}/>
        );
    }

    render(){
        return(
            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                    {this.renderEollectionTable()}
                    {this.renderForm()}
                    {this.renderMessage()}
                </div>
                <div className="col"></div>
            </div>
        )
    }
}

export default App;
import React from "react";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"


const collections =() => {
    return (
        <div>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Compendium</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/Collections">Collections<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About">About Us </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Account">Account </a>
          </li>
        </ul>
      </div>
    </nav> 
           
            <h2>these will be our collections</h2>
            <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
      Compendium
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </div>
    );
};

export default collections;
