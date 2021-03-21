import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { context } from '../context.js'
import Button from '@material-ui/core/Button'; 



/* Authors: Jordan Kind, Anthony Martinez, Taylor Davis
 * @param {*} 
 * 
 * TODO: Incorporate POST request to DB upon new IP Address
 * 
 */

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const { ipArray, setipArray } = useContext(context);
  const [newIp, setNewIp] = useState('');

  const onClickHandler = () => {
    if (ipArray.includes(`${newIp}`)) return;
    ipArray.push(`${newIp}`);
    console.log('ipArrayPushed:', ipArray)
    setipArray(ipArray);
    //potential post fetch request here
    const endpoint = '/profile/ip'; 
    fetch(endpoint, {
      method: "POST", 
      body: JSON.stringify({ip: `${newIp}`}),
      headers: { 
        'content-type' : 'application/json'
      }
  })
  .then(ip => ip.json())
  .then(ip => {
      console.log(ip);
  })
  .catch(err => console.log(err));
}


  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="IP Input"
          label="Label"
          style={{ margin: 8 }}
          placeholder="IP Address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={event => setNewIp(event.target.value)}
          // onSubmit={onClickHandler}
        />
        <Button onClick={() => {onClickHandler()}}>
                            Submit IP</Button>
      </div>
    </div>
  );
}