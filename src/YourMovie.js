import React, { Component } from "react";
import "./YourMovie.css";

class YourMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(
            `Film ${res.title} ajouté avec Brio c'est incroyable woooooooohaaaoooouuw et ta vie est ${res.comment}!`
          );
        }
      })
      .catch(e => {
        console.error(e);
        alert("Tu vas t'auto-détruire dans 7 jours");
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="yourMovie">
          <h1>TON SUPER FILM</h1>
          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Viens par là</legend>
              <div className="form-data">
                <label htmlFor="title">TITRE</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>
              <div className="form-data">
                <label htmlFor="poster">POSTER</label>
                <input
                  type="text"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>
              <div className="form-data">
                <label htmlFor="comment">RACONTES TA LIFE</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                />
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
export default YourMovie;
