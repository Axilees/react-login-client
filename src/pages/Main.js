import React, {Component} from 'react';
import {AppBar, Tabs, Tab, Typography, withStyles} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0}
    }

    tabContainer = (text) => {
        return (
            <Typography component="div" style={{padding: 8 * 3}}>
                {text}
            </Typography>
        );
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Item One"/>
                        <Tab label="Item Two"/>
                        <Tab label="Item Three"/>
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && this.tabContainer("Item One")}
                {this.state.value === 1 && this.tabContainer("Item Two")}
                {this.state.value === 2 && this.tabContainer("Item Three")}
            </div>
        )
    }
}

export default withStyles(styles)(Main);
