// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

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

// Component
class Atm extends Component {
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
      <div className="contacts">
        
        <div className="terminal">
          <h2 className="balance">
            YOUR BALANCE<br/><br/>
            ₹{} {balance.toFixed(2)}
          </h2>
          </div>
          
          
        </div>

       

        <div className="terminal">
          <div className="custom-amount-container">
          <TextField id="outlined-basic" label="Enter Your Amount" variant="outlined"
              className="custom-amount-containee"
              type="text" 
             
              required
              onChange={this.handleChange}
            />
          </div>

          <Button
          style={{color:'black'}}
            type="button"
            variant='outlined'
            disabled={disabledCustomAmount}
            onClick={() =>
              depositCustomAmountAction(sourceCurrency, customAmount)
            }
          >
            Deposit {}
          </Button>

          <Button
          style={{color:'black'}}
            type="button"
            variant='outlined'
            disabled={disabledCustomAmount}
            onClick={() =>
              withdrawCustomAmountAction(sourceCurrency, customAmount)
            }
          >
            Withdraw {}
          </Button> 
        </div>

        {invalidCustomAmount ? (
          <div className="terminal">
            Invalid Custom Amount! Please Try Again.
          </div>
        ) : null}

        <div className="terminal"><hr></hr>
          {transactions && transactions.length ? (
            <table className="table">
              <thead>
                <tr style={{height:"70px"}}>
                  <th><h3><u>DATE</u></h3></th>
                  <th><h3><u>TYPE</u></h3></th>
                  <th><h3><u>AMMOUNT</u></h3></th>
                  <th><h3><u>BALANCE</u></h3></th>
                </tr>
              </thead>

              <tbody >
                {transactions.map(transaction => (
                  <tr key={transaction.date} style={{height:"70px"}}>
                    <td >{moment(transaction.date).format('L')}</td>
                    <td>{transaction.type}</td>
                    <td>
                      {`${
                        transaction.type === 'Deposit'
                          ? `₹${transaction.amount.toFixed(2)}`
                          : transaction.type === 'Withdraw'
                          ? `-₹${transaction.amount.toFixed(2)}`
                          : transaction.amount
                      }`}
                    </td>
                    <td>
                      {`₹${transaction.balance.toFixed(
                        2
                      )}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No transactions were found.</div>
          )}
        </div>
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


Atm.propTypes = {
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
)(Atm);
