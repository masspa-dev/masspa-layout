import { colorPrimary } from '../../utils/setting'
const drawerWidth = 240;

export const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    listItem: {
        paddingLeft: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(6),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
        position: 'relative',
        ...theme.mixins.toolbar,
    },
    chevron: {
        position: 'absolute',
        right: 0,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    item: {
        float: 'left',
        // color: colorPrimary,
        fontWeight: 500,
        textOverflow: 'ellipsis',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textTransform: 'capitalize'
    },
    icon: {
        color: colorPrimary,
        minWidth: '32px'
    },
    iconPlugin: {
        width: '1.5rem',
        height: '1.5rem',
        objectFit: 'cover',
        marginRight: '6px',
    },
    version: {
        color: '#ff513f',
        justifyContent: 'center',
        fontSize: '1rem',
        bottom: '0',
        display: 'flex',
        height: '2rem',
        width: '100%',
        position: 'absolute',
        fontWeight: 'bold',
        alignItems: 'center',
    },
    listItemText: {
        textTransform: 'capitalize',
    },
    listItemTextSidebarClose: {
        marginLeft: theme.spacing(2)
    },
    totalBookingChecking: {
        float: 'right',
        fontWeight: 'bolder',
        width: '1.8rem',
        borderRadius: '50%',
        backgroundColor: '#e4d01c',
        color: '#fff',
        height: '1.8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 0.5px #fff',
    },
    totalBooking: {
        fontSize: '0.9rem'
    },
    rootSidebar: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    section: {
        padding: theme.spacing(2)
    },
    hideSection: {
        display: 'none'
    },
});