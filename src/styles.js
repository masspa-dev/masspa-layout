import { colorBackground } from './utils/setting'
export const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    backgroundColor: colorBackground,
    padding: theme.spacing(3),
    overflowY: 'auto',
    overflowX: 'auto',
  },
});