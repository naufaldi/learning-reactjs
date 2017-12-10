import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styleSheet = createStyleSheet('ButtonAppBar', {
    root: {
        marginTop: 30,
        width: '100 %',
    },
    flex: {
        flex: 1,
    },
});

function ButtonAppBar(props){
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <AppBar postiion="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        Title
                    </Typography>
                    <Button color="contrast"> Login</Button> 
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propsTypes ={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);