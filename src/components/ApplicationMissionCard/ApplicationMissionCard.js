import './ApplicationMissionCard.scss'
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Edit from '../../assets/icons/edit_icon.png';
import { API_URL } from '../../utils/API';

export default class postApplication extends Component {
    state={
        redirect: false
    }
    refreshPage = () => {
        window.location.reload();
    }

    postApplication = () => {
        axios
          .post(`${API_URL}/pilots/${this.props.pilotID}/applications`, {
            pilotID: this.props.pilotID,
            missionID: this.props.missionID
        })
          .then((response)=>{
              this.setState({
                  redirect: true
              })
        })
    }

    render() {
        const pilotID = this.props.pilotID;
        if (this.state.redirect === true) {
            return (
                <>
                    <Redirect to={`/dashboard/${pilotID}`} />
                </>
            )
        }
        return (
            <Popup trigger={<input type="image" name="trashBin" src={Edit} alt="Delete portfolio icon" className='p__icon'></input>} modal nested>
            {close => (
                <div className="popup">
                    <button className="popup__close" onClick={close}>&times;</button>
                    <div className="popup__text">
                        <h1 className="popup__title">Apply for Mission Listing? </h1>
                        <p className="popup__content">Please confirm that you’d like to apply to this mission</p>
                    </div>
                    <div className="popup__actions">
                    <button className="popup__button-cancel" onClick={() => {close()}}>Cancel</button>
                    <button className="p__button-apply" onClick={this.postApplication}>Apply</button>
                    </div>
                </div>
                )}
            </Popup>
        );
    }
};