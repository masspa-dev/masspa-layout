import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardHeader,
    ClickAwayListener,
    Grow,
    IconButton,
    Paper,
    Popper,
    Toolbar,
    Typography,
    ListItem, ListItemText,
    MenuList, MenuItem, ListItemIcon,
    CardContent,
    List,
    ListItemAvatar,
    ListItemSecondaryAction,
    Badge,
    Divider
} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BookingIcon from '@material-ui/icons/Layers';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import React from 'react';
import Logo from '../logo';
import VnFlag from '../../images/vn_flag.png'
import { styles } from './styles';
import { version } from "../../utils/setting";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenuLanguage: false,
        }
    }
    render() {
        const { classes } = this.props;
        const { openMenuLanguage } = this.state;
        return (
            <AppBar
                color="secondary"
                position="absolute"
                className={classNames(classes.appBar)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => {
                            this.props.handleDrawer();
                        }}
                        className={classNames(classes.menuButton)}>
                        <MenuIcon />
                    </IconButton>
                    <a onClick={() => this.handleSelect()}>
                        <div className={classes.spaName}>
                            <div className={classes.logo}>
                                <Logo />
                            </div>
                            <div>
                                <Typography variant="body1" color="inherit" noWrap>
                                    MASSPA
                                </Typography>
                                <div style={{ fontSize: '0.7rem' }}>
                                    v{version}
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className={classes.right}>
                        <Button
                            buttonRef={node => {
                                this.anchorElLanguage = node;
                            }}
                            aria-controls="menu-list-grow"
                            aria-haspopup="true"
                            onClick={this.handleToggleLanguage}
                            className={classes.buttonLanguages}
                        >
                            <MenuItem className={classes.buttonItem}>
                                <ListItemIcon className={classes.rootListItemIcon}>
                                    <img src={VnFlag} className={classes.flag} />
                                </ListItemIcon>
                                <Typography variant="inherit">Vietnamese</Typography>
                            </MenuItem>
                            {/* {i18n.language === 'vn' ?
                                <MenuItem className={classes.buttonItem}>
                                    <ListItemIcon className={classes.rootListItemIcon}>
                                        <img src={'/images/vn_flag.png'} className={classes.flag} />
                                    </ListItemIcon>
                                    <Typography variant="inherit">Vietnamese</Typography>
                                </MenuItem>
                                :
                                <MenuItem className={classes.buttonItem}>
                                    <ListItemIcon className={classes.rootListItemIcon}>
                                        <img src={'/images/uk_flag.png'} className={classes.flag} />
                                    </ListItemIcon>
                                    <Typography variant="inherit">English</Typography>
                                </MenuItem>
                            } */}
                        </Button>
                        {/* <Popper open={openMenuLanguage} anchorEl={this.anchorElLanguage} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper id="menu-list-grow">
                                        <ClickAwayListener onClickAway={this.handleCloseLanguage}>
                                            <MenuList>
                                                <MenuItem className={classes.menuItem} onClick={() => this.changeLanguage('vn')}>
                                                    <ListItemIcon className={classes.rootListItemIcon}>
                                                        <img src={'/images/vn_flag.png'} className={classes.flag} />
                                                    </ListItemIcon>
                                                    <Typography variant="inherit">Vietnamese</Typography>
                                                </MenuItem>
                                                <MenuItem className={classes.menuItem} onClick={() => this.changeLanguage('en')} >
                                                    <ListItemIcon className={classes.rootListItemIcon}>
                                                        <img src={'/images/uk_flag.png'} className={classes.flag} />
                                                    </ListItemIcon>
                                                    <Typography variant="inherit">English</Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper> */}
                        <IconButton
                            buttonRef={node => {
                                this.anchorElNotification = node;
                            }}
                            // aria-owns={openMenu ? 'menu-appbar' : null}
                            aria-owns={'menu-appbar'}
                            aria-haspopup="true"
                            onClick={this.handleToggleNotification}
                            color="inherit">
                            <Badge badgeContent={10} max={99} color="primary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* <Popper open={openMenuNotification} anchorEl={this.anchorElNotification} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-appbar"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseNotification}>
                                            <Card className={classes.card}>
                                                <CardContent className={classes.customCardContend}>
                                                    <div className={classes.titleNoti}><Typography gutterBottom variant="subtitle1" component="subtitle1" >
                                                        {t('sidebar_notification')}
                                                    </Typography>
                                                    </div>
                                                    <Divider />
                                                    <List>
                                                        {notificationList.map((ele, index) => {
                                                            // if(index <= 2)
                                                            return (
                                                                <ListItem key={index} button divider={true} onClick={this.handlePage}>
                                                                    <ListItemAvatar>
                                                                        <Avatar>
                                                                            <BookingIcon />
                                                                        </Avatar>
                                                                    </ListItemAvatar>
                                                                    <ListItemText
                                                                        classes={{
                                                                            primary: classes.customListItemTextPrimary,
                                                                            secondary: classes.customListItemTextSecondary,
                                                                        }}
                                                                        primary={ele.description}
                                                                        secondary={this.timeAgo(ele.createdAt)}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <IconButton edge="end" aria-label="delete">
                                                                            <ArrowForwardIosIcon />
                                                                        </IconButton>
                                                                    </ListItemSecondaryAction>
                                                                </ListItem>
                                                            )
                                                        })
                                                        }

                                                    </List>
                                                </CardContent>
                                                <CardActions className={classes.customCardActions}>
                                                    <Button size="small" onClick={this.seeAll}>{t('read_all')}</Button>
                                                </CardActions>
                                            </Card>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper> */}
                        {/* {(!locationPermission || !notificationPermission) &&
                            <IconButton
                                buttonRef={node => {
                                    this.anchorElReportProplem = node;
                                }}
                                aria-owns={openMenu ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleToggleReportProplem}
                                color="inherit"
                            >
                                <ReportProblemIcon />
                            </IconButton>
                        } */}
                        {/* <Popper open={openMenuReportProplem} anchorEl={this.anchorElReportProplem} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-appbar"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseReportProplem}>
                                            <Card className={classes.card}>
                                                <CardContent className={classes.customCardContend}>
                                                    <div className={classes.titleNoti}>
                                                        <Typography gutterBottom variant="subtitle1" component="subtitle1" >
                                                            {t('header_permission')}
                                                        </Typography>
                                                    </div>
                                                    <Divider />
                                                    <List subheader={<ListSubheader>{t('header_your_browser_blocked_permission')}</ListSubheader>} className={classes.root}>
                                                        {!notificationPermission &&
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <NotificationsIcon />
                                                                </ListItemIcon>
                                                                <ListItemText id="switch-list-label-wifi" primary={t('header_notification')} />
                                                                <ListItemSecondaryAction>
                                                                    <Button variant="contained" size="small" color="secondary" className={classes.margin}>
                                                                        {t('header_block')}
                                                                    </Button>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                        }
                                                        {!locationPermission &&
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <LocationOnIcon />
                                                                </ListItemIcon>
                                                                <ListItemText id="switch-list-label-wifi" primary={t('header_location')} />
                                                                <ListItemSecondaryAction>
                                                                    <Button variant="contained" size="small" color="secondary" className={classes.margin}>
                                                                        {t('header_block')}
                                                                    </Button>
                                                                </ListItemSecondaryAction>
                                                            </ListItem>
                                                        }
                                                    </List>
                                                </CardContent>
                                            </Card>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper> */}
                        <div className={classes.fullName}>
                            <Typography variant="body1" color="inherit" noWrap >
                                {/* {fullName} */}
                                Masspa
                            </Typography>
                        </div>
                        <IconButton
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            // aria-owns={openMenu ? 'menu-appbar' : null}
                            aria-owns={'menu-appbar'}
                            aria-haspopup="true"
                            onClick={this.handleToggle}
                            color="inherit">
                            {/* {this.props.userState.user.avatarImage ?
                                <Avatar alt="Avatar" src={this.props.userState.user.avatarImage} className={classes.avatar} />
                                : <Avatar className={classNames(classes.avatar, classes.smallAvatar)}>{(fullName).charAt(0).toLocaleUpperCase() || 'M'}</Avatar>
                            } */}
                            <Avatar className={classNames(classes.avatar, classes.smallAvatar)}>{'M'}</Avatar>
                        </IconButton>

                        {/* <Popper open={openMenu} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-appbar"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                            <Card className={classes.card}>
                                                <CardHeader className={classes.cardHeader}
                                                    avatar={this.props.userState.user.avatarImage ?
                                                        <Avatar alt="Avatar" src={this.props.userState.user.avatarImage}
                                                            className={classNames(classes.avatar, classes.bigAvatar)} /> :
                                                        <Avatar className={classNames(classes.avatar, classes.bigAvatar)}>{(fullName).charAt(0)}</Avatar>
                                                    }
                                                    title={fullName}
                                                    subheader={this.props.userState.user.email}
                                                />
                                                <CardActions>
                                                    <Link to='/profile' >
                                                        <Button size="small" color="primary">{t('header_profile')}</Button>
                                                    </Link>
                                                    <Button size="small" color="primary" onClick={this.handleLogout}>
                                                        {t('header_logout')}
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper> */}

                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styles)(Header);