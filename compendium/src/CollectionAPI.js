
// import axios from "axios";

export default {
  getCollections : ()=>{
      return fetch('/collection')
              .then(res => res.json())
              .then(data => data);
  },
  deleteCollection : (_id)=>{
      return fetch(`/collection/${_id}`,
                  {method : 'delete'})
                  .then(res => res.json())
                  .then(data => data);
  },
  updateCollection : (collection)=>{
      return fetch(`/collection/${collection._id}`,
                  {method : "put",
                   body: JSON.stringify(collection),
                   headers : {
                       "Content-Type" : "application/json"
                   }}).then(res => res.json())
                      .then(data => data);
  },
  createCollection : (collection)=>{
      return fetch(`/collection`,
          {method : 'post',
          body: JSON.stringify(collection),
          headers : {
              "Content-Type" : "application/json"
          }}).then(res => res.json())
              .then(data => data);
  }
}
export default Collection;