import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/header'
import Sidebar from './components/sidebar'
import { styles } from './styles'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }
    handleDrawer = () => {
        this.setState(
            { ...this.state, ...{ open: !this.state.open } },
            function () {
                // console.log(this.state)
            }
        );
    };
    render() {
        const { classes, ...props } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <Header
                    open={open}
                    handleDrawer={this.handleDrawer}
                    {...props}
                />
                <Sidebar
                    open={open}
                    handleDrawer={this.handleDrawer}
                    {...props}
                />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default withStyles(styles)(App);