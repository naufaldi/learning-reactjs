import React, {Component} from 'react'

class Home extends Component {
    state={}
    render() {
        return(
            <Paper elevation={4}>
                <Typography type='headline' component='h3'>
                This is a sheet of paper
                <Typography>
                <Typography type='body1' component='p'>
                Paper can be  used to build surface or other elements application
                </Typography>
            </Paper>
        )
    }
}

export default Home