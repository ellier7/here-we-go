import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps(state){
  return {
    expediaInfo: state.expediaInfo
  }
}

//dispatch triggers a state change
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const Master = connect(mapStateToProps, mapDispatchToProps)(App);
//takes app component and adds all the data from state to props, and action creators to App
export default Master;