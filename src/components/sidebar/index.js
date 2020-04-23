import '../../css/sidebar.css';
import classNames from 'classnames';
import React from 'react';
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import ProfileIcon from "@material-ui/icons/InfoRounded";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { classes, role, open, permission, ...props } = this.props;
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                className={'sidebar'}
                open={open}>
                <div className={classes.toolbarIcon}></div>
                <Divider />
                <List disablePadding>
                    <a to="/profile">
                        <ListItem
                            selected={false}
                            button
                        >
                            <ListItemIcon className={classes.icon}>
                                <ProfileIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="body1" className={classes.item}>
                                    Profile
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </a>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar);