import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const ButtonAll = (props) => {
    const { classes } = props;
    return (
        <Button 
        color={props.color} 
        className={classes.button}
        variant={props.variant}
        value="Send"
        type="submit"
        >
        {props.text}
      </Button>
    );
};

export default withStyles(styles)(ButtonAll);