import React from 'react';
import {Typography, Button, Container, Grid, Card, TextField, Divider, TextareaAutosize} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        flexGrow: 1
    },
    card: {
        margin: 'auto',
        width: '50%',
        marginTop: 24
    },
    row: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        marginLeft: 16
    },
    textArea: {
        width: '100%',
        borderRadius: 5,
        borderColor: 'silver'
    },
    button: {
        borderRadius: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: 16,
    }
  }));

const Form = () => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Card className={classes.card}>
                <Typography component={'h3'} variant={'h3'} style={{textAlign:'center'}}>
                    Registration
                </Typography>
                <Divider />
                <Grid container className={classes.row}>
                    <Grid item xs={3}> 
                        <Typography component={'span'} variant={'span'} className={classes.text} >
                            User Name :
                        </Typography> 
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id={'userName'}
                            variant={'outlined'}
                            size={'small'}
                            fullWidth
                            />
                    </Grid>
                </Grid>
                <Grid container className={classes.row}>
                    <Grid item xs={3}> 
                        <Typography component={'span'} variant={'span'} className={classes.text}>
                            Email :
                        </Typography> 
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id={'email'}
                            variant={'outlined'}
                            size={'small'}
                            fullWidth
                            />
                    </Grid>
                </Grid>
                <Grid container className={classes.row}>
                    <Grid item xs={3}> 
                        <Typography component={'span'} variant={'span'} className={classes.text}>
                            Password :
                        </Typography> 
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            id={'password'}
                            variant={'outlined'}
                            size={'small'}
                            fullWidth
                            />
                    </Grid>
                </Grid>
                <Grid container className={classes.row}>
                    <Grid item xs={3}> 
                        <Typography component={'span'} variant={'span'} className={classes.text}>
                            About Yourself :
                        </Typography> 
                    </Grid>
                    <Grid item xs={5}>
                        <TextareaAutosize
                            id={'about'}
                            rowsMin={5}
                            className={classes.textArea}
                            />
                    </Grid>
                </Grid>
                <Grid container className={classes.row}>
                    <Grid item xs={8}> 
                        <Button className={classes.button} variant="contained" color="primary">
                            REGISTER
                        </Button> 
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
};
export default Form;