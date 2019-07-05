import React from 'react';
import update from 'react-addons-update'
import { connect } from 'react-redux'
import { addGym } from '../../actions/page'

class GymForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            _id: this.generateKey(),
            name: "",
            description: "",
            spiel: "",
            tag: "",
            tags: [],
            address: "",
            hours: ["","","","","","",""],
            picture: "",
            rating: 0
        });

        this.handleSubmit = this.handleSubmit.bind(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ _id: this.generateKey(), tag: "" });
        this.props.addGym(this.state);
        this.setState({
            _id: this.generateKey(),
            name: "",
            description: "",
            spiel: "",
            tag: "",
            tags: [],
            address: "",
            hours: ["","","","","","",""],
            picture: ""
        });
    };

    generateKey() {
        return new Date().getTime();
    }

    addTag = (e) => {
        e.preventDefault();
        this.setState({tags: [...this.state.tags, this.state.tag]} );
        console.log("added tag:");
        console.log(this.state.tag);
        console.log(this.state);
        this.setState( { tag: "" });
        this.renderTags();
    };

    removeTag = (tagToRemove) => {
        this.setState({
            tags: this.state.tags.filter((tag) => tag !== tagToRemove)
        })
    };

    renderTags = () => {
        return this.state.tags.map((tag) => {
            return (
                <li
                    className="ui button primary"
                    onClick={() => this.removeTag(tag) }
                >
                    { tag }
                </li>
            )
        })
    };

    render() {
        return (
            <div>
                <form
                    className="ui form"
                >
                    <h4 className="ui dividing header">Gym Information</h4>
                    <div className="field">
                        <label>Gym Name</label>
                        <div className="one field">
                            <div className="eight wide field">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Gym Name"
                                    required="required"
                                    value={ this.state.name }
                                    onChange={ (e) => { this.setState( { name: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Address</label>
                        <div className="fields">
                            <div className="eight wide field">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Street Address"
                                    required="required"
                                    value={ this.state.address }
                                    onChange={ (e) => { this.setState( { address: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Description</label>
                        <div className="fields">
                            <div className="sixteen wide field">
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Short description of gym"
                                    required="required"
                                    value={ this.state.description }
                                    onChange={ (e) => { this.setState( { description: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Spiel</label>
                        <div className="fields">
                            <div className="sixteen wide field">
                                <input
                                    type="text"
                                    name="spiel"
                                    id="spiel"
                                    placeholder="Long description of gym"
                                    required="required"
                                    value={ this.state.spiel }
                                    onChange={ (e) => { this.setState( { spiel: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Picture URL</label>
                        <div className="fields">
                            <div className="sixteen wide field">
                                <input
                                    type="text"
                                    name="picture"
                                    id="picture"
                                    placeholder="URL for picture of gym"
                                    required="required"
                                    value={ this.state.picture }
                                    onChange={ (e) => { this.setState( { picture: e.target.value } ) }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label>Hours of Operation</label>
                        <div className="fields">
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Sunday"
                                    id="sunday"
                                    required="required"
                                    value={ this.state.hours[0] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 0: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Monday"
                                    id="monday"
                                    required="required"
                                    value={ this.state.hours[1] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 1: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Tuesday"
                                    id="tuesday"
                                    required="required"
                                    value={ this.state.hours[2] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 2: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Wednesday"
                                    id="wednesday"
                                    required="required"
                                    value={ this.state.hours[3] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 3: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Thursday"
                                    id="thursday"
                                    required="required"
                                    value={ this.state.hours[4] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 4: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Friday"
                                    id="friday"
                                    required="required"
                                    value={ this.state.hours[5] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 5: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                            <div className="two wide field">
                                <input
                                    type="text"
                                    placeholder="Saturday"
                                    id="saturday"
                                    required="required"
                                    value={ this.state.hours[6] }
                                    onChange={ (e) => { this.setState( {
                                        hours: update(this.state.hours, { 6: { $set: e.target.value } })
                                    })}}
                                />
                            </div>
                        </div>
                    </div>


                    <form
                        className="ui form"
                        onSubmit={ this.addTag }
                    >
                        <h4 className="ui dividing header">Tags</h4>
                        <div className="field">
                            <div className="ui right labeled left icon input">
                                <i className="tags icon"></i>
                                <input
                                    type="text"
                                    placeholder="Enter tags"
                                    id="tagInput"
                                    value={ this.state.tag }
                                    required="required"
                                    onChange={ (e) => {
                                        this.setState( {tag: e.target.value} );
                                    } }
                                />
                                <button
                                    className="ui tag label"
                                    id="tagButton"
                                >
                                    Add Tag
                                </button>
                            </div>
                        </div>
                        <div className="field">
                            <ul>
                                { this.renderTags() }
                            </ul>
                        </div>
                    </form>

                    <div className="field">
                        <button
                            className="ui button primary"
                            id="addGym"
                            onClick={ this.handleSubmit }
                        >
                            Submit Gym
                        </button>
                    </div>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addGym:(gym) => dispatch(addGym(gym))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GymForm);