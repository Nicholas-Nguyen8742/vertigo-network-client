import './DeletePortfolioCard.scss'
import React, { Component } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Trash from '../../assets/icons/delete_icon.png';
import { API_URL } from '../../utils/API';

export default class DeletePortfolioCard extends Component {
    refreshPage = () => {
        window.location.reload();
    }

    deletePortfolioCard = () => {
        axios
          .delete(`${API_URL}/pilots/${this.props.match.params.id}/portfolio/${this.props.portfolioID}` )
          .then((response)=>{
            this.refreshPage();
          })
    }

    render() {
        return (
            <Popup trigger={<input type="image" name="trashBin" src={Trash} alt="Delete portfolio icon" className='portfolioCard__icon'></input>} modal nested>
            {close => (
                <div className="popup">
                    <button className="popup__close" onClick={close}>&times;</button>
                    <div className="popup__text">
                        <h1 className="popup__title">Delete {this.props.name} Portfolio Card? </h1>
                        <p className="popup__content">Please confirm that you’d like to delete the {this.props.name} Card from your list of exquisite portfolio pieces. You won’t be able to undo this action.</p>
                    </div>
                    <div className="popup__actions">
                    <button className="popup__button-cancel" onClick={() => {close()}}>Cancel</button>
                    <button className="popup__button-delete" onClick={this.deleteWarehouse}>Delete</button>
                    </div>
                </div>
                )}
            </Popup>
        );
    }
};

