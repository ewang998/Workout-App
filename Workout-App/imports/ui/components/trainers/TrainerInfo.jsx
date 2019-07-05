import React, { Component } from 'react';
import {connect} from 'react-redux'
import { trainersFetchData } from '../../actions/trainers'
import {} from '../../reducers/trainers'
import Spinner from '../Spinner'



// export default class TrainerInfo extends Component {

  // need a ID.
  // now by default we take the first Trainer in the array.
class TrainerInfo extends React.Component {
    constructor(){
      super();
      // this.state = this.props.trainersList[0]
      // this.state = ({filter})
    }
  

  componentDidMount() {
    console.log("mouting");
    this.props.fetchData("http://localhost:9000/trainers")
    console.log("mounted");
    console.log(this.props)
  }

  render() {
    if (this.props.hasErrored) {
        return <div>
            <p>Sorry! Error rendering</p>
        </div>
    }
  
    if (this.props.isLoading) {
        return <div align="center">
            <p>Loading...</p>
            <Spinner/>
        </div>
    }
  
    return (
        <div>
        { this.renderTrainer() }
        </div>
    )
  };


  renderTrainer(){
    // todo: show specific trainer, not 0
    // this.props.trainersList

    // todo: Oliver investigate why this part has been called three times

    console.log("all three trainers : ")
    console.log(this.props.trainersList)

    if (this.props.trainersList.length == 0){
      return (
        <div>
          rendering
        </div>
      )
    }
    else {
      var targetTrainer =  this.props.trainersList[0]

      const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

      return(
        <div>
          <div className="ui items">
          <div className="item">
            <div className="image">
              {/* todo: oliver Dynamic show this from Mongo data! */}
              <img src="/image/trainer1.jpg"/>
            </div>
            <div className="content">
              <a className="header">{targetTrainer.firstName + " " + targetTrainer.lastName}</a>
              <div className="meta">
                <span>verified personal trainer</span>
              </div>
              <div className="description">
                <p>
                  {targetTrainer.description}
                  </p>
              </div>
              {/* <div className="extra">
                recommended by 36 other users 
              </div> */}
            </div>
          </div>
        </div>

          <div className="ui label">
            <i className="mail icon"></i> {targetTrainer.email}
          </div>

          <div className="ui label">
            <i className="globe icon"></i> {targetTrainer.phone}
          </div>
  
          <br/>
          <br/>
          <div className="ui labels">
            {
              targetTrainer.tags.map((tag, index)=>{
                return (  
                <div className="ui label" key={index}>
                {tag}
                </div>
                )
              })

            }
          </div>
  
          <br></br>
          <div className="ui tag labels">
            <a className="ui label">
            ${targetTrainer.cost}
            </a>
          </div>
  
  
          <div className="ui comments">
            <div className="comment">
              <div className="content" >
                <div >
                {
                 targetTrainer.comments.map((comment, index) => {
                   return(
                    <div  key={index}>
                    <a className="author">{comment.fullname}</a>
                    <div className="metadata">
                      <div className="date">
                      {/* todo: oliver: get the subtraction of date */}
                      {                       
                        new Date(comment.date).getDate() + "-" + months[ new Date(comment.date).getMonth()] + "-" + new Date(comment.date).getFullYear()
                        }
                      
                      </div>
                      
                      <div className="rating">
                        <i className="like icon"></i> {comment.rate}/10
                      </div>

                    </div>
                    <div className="text">
                      {comment.context}
                    </div>
    
                   </div>
                   )


                 })
               }
                </div>

              
  
              </div>
            </div>
          </div>
        </div>
  
  
    );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    trainersList: state.trainersReducer,
    hasErrored: state.trainersErrored,
    isLoading: state.trainersLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(trainersFetchData(url))
  }
}


 export default connect(mapStateToProps, mapDispatchToProps)(TrainerInfo);

 