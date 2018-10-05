import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Labs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labs: [],
        }
    }

    componentDidMount(){
        axios.get('https://perchresearch.com:3000/api/challenge_project_data')
        .then(response => response.data.result.map(lab => ({
                id: `${lab.id}`,
                title: `${lab.title}`,
                description: `${lab.description}`,
                duties: `${lab.duties}`,
                time_commitment: `${lab.time_commitment}`,
                classification: `${lab.classification}`,
            })))
        .then(newLab => this.setState({labs: newLab}))
        .catch(error => alert(error))
    }
    
    render() {
        return (
            <div>
                { this.state.labs.map(lab =>
                    <div className="card card-width">
                        <div className="card-body">
                            <h5 className="card-title center">{lab.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted center">{lab.classification}</h6>
                            <p className="card-text">{lab.description}</p>
                            <p className="card-text">{lab.duties}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Time commitment: {lab.time_commitment} hours</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


ReactDOM.render(
    <Labs />,
    document.getElementById('root')
);