// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Nav from '../../Navlink';
import {
  getBalanceAndTransactionsActionCreator,
  depositCustomAmountActionCreator,
  depositFiftyActionCreator,
  depositHundredActionCreator,
  withdrawCustomAmountActionCreator,
  withdrawFiftyActionCreator,
  withdrawHundredActionCreator,
  convertCurrencyThunkCreator,
} from '../../store/reducers/bankReducer';
import { Link } from 'react-router-dom';

// Component
class Atm1 extends Component {
  constructor() {
    super();
    this.state = {
      sourceCurrency: '$',
      targetCurrency: '€',
      customAmount: 0,
      invalidCustomAmount: false,
      disabledCustomAmount: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }

  componentDidMount() {
    if (localStorage.reactReduxBank) {
      try {
        const cache = localStorage.getItem('reactReduxBank');
        const {
          balance,
          transactions,
          sourceCurrency,
          targetCurrency,
        } = JSON.parse(cache);

        this.props.getBalanceAndTransactionsAction(balance, transactions);

        this.setState({
          sourceCurrency,
          targetCurrency,
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'reactReduxBank',
      JSON.stringify({
        balance: this.props.balance,
        transactions: this.props.transactions,
        sourceCurrency: this.state.sourceCurrency,
        targetCurrency: this.state.targetCurrency,
      })
    );
  }

  handleChange(event) {
    const curCustomAmountStr = event.target.value;
    const curCustomAmountNum = Number(curCustomAmountStr);

    if (!curCustomAmountStr.length) {
      this.setState({
        invalidCustomAmount: false,
        disabledCustomAmount: true,
      });
    } else if (isNaN(curCustomAmountNum) || curCustomAmountNum <= 0) {
      this.setState({
        invalidCustomAmount: true,
        disabledCustomAmount: true,
      });
    } else {
      this.setState({
        customAmount: curCustomAmountNum,
        invalidCustomAmount: false,
        disabledCustomAmount: false,
      });
    }
  }

  handleConvert() {
    if (this.state.sourceCurrency === '$') {
      this.props.convertCurrencyThunk('USD', 'EUR');
    } else {
      this.props.convertCurrencyThunk('EUR', 'USD');
    }

    this.setState(prevState => ({
      ...prevState,
      sourceCurrency: prevState.targetCurrency,
      targetCurrency: prevState.sourceCurrency,
    }));
  }

  render() {
    const {
      sourceCurrency,
     
      customAmount,
      invalidCustomAmount,
      disabledCustomAmount,
    } = this.state;
    const {
      balance,
      transactions,
      
    
      depositCustomAmountAction,
     
      withdrawCustomAmountAction,
    } = this.props;

    return (
     <div>
        
      <div className="contact">
      <Nav/>
        <div className="terminal">
          <h2 className="balance">
            YOUR BALANCE<br/><br/>
            ₹{} {balance.toFixed(2)}
          </h2>
          </div>
          
          
        </div>

       

        <div style={{marginTop:"350px"}}>
          <div className="custom-amount-container">
         <br/><br/>
          </div>

          <Button
          style={{color:'green',fontSize:"30px"}}
            type="button"
            variant='outlined'
            disabled={disabledCustomAmount}
            onClick={() =>
              depositCustomAmountAction(sourceCurrency, customAmount)
            }
          >
            Deposit {}
          </Button> <TextField id="outlined-basic" label="Enter Your Amount" variant="outlined"
              className="custom-amount-containee"
              type="text" 
             style={{marginTop:"-70px"}}
              required
              onChange={this.handleChange}
            />

          <Button
          style={{color:'red',fontSize:"30px"}}
            type="button"
            
            variant='outlined'
            disabled={disabledCustomAmount}
            onClick={() =>
              withdrawCustomAmountAction(sourceCurrency, customAmount)
            }
          >
            Withdraw {}
          </Button> 
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><Button  variant='outlined'   style={{fontSize:"20px"}}>Mini statement</Button>

        {invalidCustomAmount ? (
          <div className="terminal">
            Invalid Custom Amount! Please Try Again.
          </div>
        ) : null}

      
      </div>
    );
  }
}

// Container
const mapStateToProps = state => ({
  balance: state.bank.balance,
  transactions: state.bank.transactions,
});

const mapDispatchToProps = dispatch => ({
  getBalanceAndTransactionsAction(balance, transactions) {
    dispatch(getBalanceAndTransactionsActionCreator(balance, transactions));
  },
  depositFiftyAction(sourceCurrency) {
    dispatch(depositFiftyActionCreator(sourceCurrency));
  },
  depositHundredAction(sourceCurrency) {
    dispatch(depositHundredActionCreator(sourceCurrency));
  },
  depositCustomAmountAction(sourceCurrency, customAmount) {
    dispatch(depositCustomAmountActionCreator(sourceCurrency, customAmount));
  },
  withdrawFiftyAction(sourceCurrency) {
    dispatch(withdrawFiftyActionCreator(sourceCurrency));
  },
  withdrawHundredAction(sourceCurrency) {
    dispatch(withdrawHundredActionCreator(sourceCurrency));
  },
  withdrawCustomAmountAction(sourceCurrency, customAmount) {
    dispatch(withdrawCustomAmountActionCreator(sourceCurrency, customAmount));
  },
  convertCurrencyThunk(sourceCurrency, targetCurrency) {
    dispatch(convertCurrencyThunkCreator(sourceCurrency, targetCurrency));
  },
});


Atm1.propTypes = {
  balance: PropTypes.number,
  transactions: PropTypes.array,
  getBalanceAndTransactionsAction: PropTypes.func,
  depositFiftyAction: PropTypes.func,
  depositHundredAction: PropTypes.func,
  depositCustomAmountAction: PropTypes.func,
  withdrawFiftyAction: PropTypes.func,
  withdrawHundredAction: PropTypes.func,
  withdrawCustomAmountAction: PropTypes.func,
  convertCurrencyThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Atm1);
