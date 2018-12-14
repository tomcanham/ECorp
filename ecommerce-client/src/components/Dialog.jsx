import React from 'react';
import { connect } from 'react-redux';

import Logo from './DialogLogo.png';
import './Dialog.css';
import { TOGGLE_DIALOG_SHOWN } from '../redux/dialog'; // numerous ways of passing Redux constants around

// Note that this component only exists to show that you *can* integrate Redux with GraphQL/Apollo
// It is NOT saying that you *should* do this. And it is CERTAINLY not an "attractive" dialog :)

const Dialog = ({ closeHandler, isOpen }) => <div className={`dialog-overlay${!isOpen ? " hidden" : ""}`}>
  <div className="dialog">
    <div className="close"><span onClick={() => closeHandler()} className="close-button">X</span></div>
    <div className="logo">
      <a href="https://www.usanetwork.com/mrrobot"><img src={Logo} alt="Evil Corp Logo" title="I'm *very* different, too..." /></a>
    </div>
    <div className="content">
      Welcome to the ECorp Store! Feel free to browse!
    </div>
  </div>
</div>;

const mapStateToProps = state => ({
  isOpen: state.dialogOpen
});

const mapDispatchToProps = (dispatch) => ({
  closeHandler: () => dispatch({ type: TOGGLE_DIALOG_SHOWN })
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);