export const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    buttonItem: {
        backgroundColor: '#0000000a',
        color: '#fff',
        fontSize: '0.8rem',
        textTransform: 'capitalize',
         width: "143px"
    },
    buttonLanguages: {
         width: "143px",
        padding: '6px 0px'
    },
    menuItem: {
        fontSize: '0.8rem',
    },
    spaName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    toolbar: {
      padding: 0, // keep right padding when drawer closed
    },
    right: {
        position: 'absolute',
        right: 24,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    avatar: {
      margin: 0,
    },
    logo: {
        display: 'flex',
        width: 60,
        marginRight: 5,
    },
    fullName: {
        display: 'block',
        marginLeft: 12
        // marginRight: 5,
    },
    
    card: {
        maxWidth: 345,
        minWidth: 230,
    },
    media: {
        objectFit: 'cover',
    },
    smallAvatar: {
      backgroundColor: '#fff',
      color: '#1a1a1a'
    },
    bigAvatar: {
      width: 60,
      height: 60,
    },
    cardHeader: {
        borderBottom: '1px solid #ccc'
    },
    text:{
        '&:hover':{
            backgroundColor: 'transparent'
        }
    },
    activeLanguage: {
        color: '#fff',  
        fontWeight : 'bold',
        paddingLeft: '0.1rem',
        paddingRight: '0.1rem'
    },
    nonactiveLanguage: {
        color: '#fff',   
        paddingLeft: '0.1rem',
        paddingRight: '0.1rem',
        cursor: 'pointer'
    },
    language: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        margin: '0.8rem'
    },
    textLanguage: {
        color: '#fff', 
    },
    banner_list_item_button: {
        outline: 'none',
        
        '&:hover': {
            backgroundColor: 'rgba(226,0,0,0.4)'
        },
        [theme.breakpoints.down('xs')]: {
            '&:hover': {
                backgroundColor: 'rgba(226,0,0,0.4)'
            }
        }
    },
    flag: {
        border: 'solid #fff 2px',
        borderRadius: '50%',
        // width: '1.5rem'
        height: 'auto',
        width: '100%'
    },
    // customListItemTextPrimary: {
    //     fontSize: '0.9rem'
    // },
    customListItemTextPrimary: {
        fontSize: '0.8rem'
    },
    customCardContend: {
        padding: 0
    },
    titleNoti: {
        padding: '1rem 0 1rem 1rem'
    },
    customCardActions: {
        justifyContent: 'center'
    },
    rootListItemIcon: {
        width: 28,
        height: 28,
        minWidth: 0,
        marginRight: 12
    }
});