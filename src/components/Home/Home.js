import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Web3 from 'web3';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styless from './Home.module.css'

import Button from '../Button/Button';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: false,
    },
  });
}

class Home extends Component  {

  

  
  constructor(props) {
    super(props);
    this.state = {senderAddress: '',recieverAddress:'', amount:'', balanceShow: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleChange(event) {
this.setState({[event.target.name]: event.target.value});
}

componentDidMount = () => {
  const balanceBase = '0x06e3095fee6a56F1dc38Db6ec6dDcf7CFd0409f1';//address from https://etherscan.io/
    window.web3.fromWei(window.web3.eth.getBala)
 
}



handleSubmit(event) {
    event.preventDefault();
    const func =  async () => {
        // Modern dapp browsers...
        try{
            if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
                window.web3.eth.sendTransaction({
                    from: this.state.senderAddress,
                    to:  this.state.recieverAddress,
                    value:  this.state.amount
                }).then(function(receipt){
                    console.log(receipt)
                }).catch(e => console.log(e));
                console.log(1)
            } catch (error) {
                // User denied account access...
                console.log(2)
            }
        }
      
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            // Acccounts always exposed
            window.web3.eth.sendTransaction({
                from: this.state.senderAddress,
                to:  this.state.recieverAddress,
                value:  this.state.amount
            }).then(function(receipt){
              console.log(receipt)
            }).catch(e => console.log(e));;
            console.log(1)
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            // Put Link to Download Methamask
        }
        }catch(e){
            console.log('error')
        }

    }
        console.log(5656);
        window.addEventListener('load',func().then(console.log('good')),false);
}

render() {
  const { classes } = this.props;
  // do some checking for the address before adding it etherscan
  let d = `https://etherscan.io/address/${this.state.senderAddress}`
  let link;
  if(this.state.senderAddress){
    link =(
        <a className={styless.a} style={{ display: 'flex' }} href={d} target="_blank" rel="noopener noreferrer">View Account On EtherScan</a>
      )
  } else{
      link = null;
  }
return (
  <div style={{ display: 'table-caption' }}>
        <form onSubmit={this.handleSubmit}>
           <TextField 
            type="text" id="outlined-name" className={classes.textField}  margin="normal" label="User Address" name="senderAddress" value={this.state.value} onChange={this.handleChange}
           />
              <TextField 
            type="text"  id="outlined-name" className={classes.textField}  margin="normal" label="Account Balance" name="amount" value={this.state.value} onChange={this.handleChange}
           />
             <TextField 
            type="text" id="outlined-name" className={classes.textField}  margin="normal" label="Receiver Address" name="recieverAddress" value={this.state.value} onChange={this.handleChange}
           />
         
           {link}
       
        <hr />
        <div>
        <MuiThemeProvider theme={typographyV1Theme}>
      <div className={classes.root}>
        <Typography variant="button" gutterBottom>
          Send To friend
        </Typography>
        <Typography className={classes.SendFriendText} variant="button" gutterBottom>
           {this.state.balanceShow}
        </Typography>
      </div>
    </MuiThemeProvider>
    <Button style={{ width: '100%' }} className={styless.Button} text="send" variant="contained" type="submit" color="primary" value="Send" >
      </Button>
           
        </div>
        </form>
  </div>
);
}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);