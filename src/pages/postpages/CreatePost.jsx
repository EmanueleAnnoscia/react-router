//import

import { useState } from "react";
import axios from "axios";
import BackButton from "../../components/BackButton";

function CreatePost() {

  //array per il mapping
  const genericsArray = ["author", "title", "body"]

  //dati necessari in un oggetto anziche ognuno in uno useState
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false
  };


  //sezione useState
  //data
  const [formData, setFormData] = useState(initialFormData);
  //alert di risposta di avvenuta consegna
  const [showAlert, setShowAlert] = useState(false);

  //evento sull onchange  NON MI è CHIARO DOMANDARE BENE
  const handleChange = (event) => {

    const { name, value, checked, type } = event.target; //simao costrtti a utilizzare questi nomi di variabili
    console.log(name, value, checked, type)
    // const newValue = event.target.value

    console.log(value)

    // const keyToChange = event.target.name

    console.log(name)
    //se  è            allora   altrimenti
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value }); //[name] in bracket notation è la chiave dinameica che cambia in base all'oggetto che l'utente utilizza ad esempio 
    //L’utente spunta la casella ⇒ event.target sarà:   
                                              //L’utente scrive "Mario" ⇒ event.  target sarà:

    //name = "public"                      name = "author"

    //type = "checkbox"                     type = "text"

    //checked = true                         value = "Mario"


    //value = "on"(non ci interessa)   checked = undefined (non esiste per input text)
  };

  //funzione di invio dati 
  const sendData = (event) => {
    event.preventDefault(); //prevenzione del refresh
    //invio dati all'API 
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((resp) => {
        if (resp.data.id) {
          setShowAlert(true);
          setFormData(initialFormData);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }
      });
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-3">Post Form</h3>

              {showAlert && (
                <div className="alert alert-success">
                  I dati sono stati inviati con successo
                </div>
              )}

              <form onSubmit={sendData}>
                {/* input generati automaticamente */}
                {genericsArray.map((curGenerics, index) => (
                  <div className="mb-3" key={index}>
                    <label htmlFor={curGenerics} className="form-label">
                      {curGenerics.charAt(0).toUpperCase() + curGenerics.slice(1)}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={curGenerics}
                      name={curGenerics}
                      value={formData[curGenerics]}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                {/* checkbox visibilità pubblica */}
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="public"
                    name="public"
                    checked={formData.public}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="public">
                    Il Post con visibilità pubblica
                  </label>
                </div>

                {/* bottone submit */}
                <button type="submit" className="btn btn-primary">
                  Invia
                </button>
                <BackButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;