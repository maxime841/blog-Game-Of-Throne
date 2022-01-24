// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './creator.scss';

// == Composant
class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      genre: [],
      creator: [],
      productor: [],
      musician: [],
      country: [],
      seasons: [],
      episode: [],
      presentation: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5050/production')
      .then((res) => {
        this.setState({ title: res.data[0].title });
        this.setState({ genre: res.data[0].genre });
        this.setState({ creator: res.data[0].creator });
        this.setState({ productor: res.data[0].productor });
        this.setState({ musician: res.data[0].musician });
        this.setState({ country: res.data[0].country });
        this.setState({ seasons: res.data[0].seasons });
        this.setState({ episode: res.data[0].episode });
        this.setState({ presentation: res.data[0].presentation });
        console.log('state', res.data);
      });
  }

  render() {
    return (
      <div className="creator">
        <div className="creator-container">
          <h1 className="creator-productionName">Production</h1>
          <ul className="creator-caracteristique">
            <li className="creator-name">Créateurs: {this.state.creator}</li>
            <li className="creator-title">Titre: {this.state.title}</li>
            <li className="creator-genre">Genre: {this.state.genre}</li>
            <li className="creator-country">Pays d'origine: {this.state.country}</li>
            <li className="creator-production">Producteurs: {this.state.productor}</li>
            <li className="creator-musician">Musicien: {this.state.musician}</li>
            <li className="creator-seasons">Nombre de saisons: {this.state.seasons}</li>
            <li className="creator-episode">Nombre d'épisodes: {this.state.episode}</li>
          </ul>
          <h2 className="creator-subTitle">Présentation</h2>
          <p className="creator-content">{this.state.presentation}</p>
        </div>
      </div>
    );
  }
}

// == Export
export default Creator;
