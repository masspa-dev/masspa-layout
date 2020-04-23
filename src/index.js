import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import {
  colorDisabled,
  colorPrimary,
  colorBackground,
} from "./utils/setting";
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#ff513f"
    },
    text: {
      primary: colorPrimary,
      disabled: colorDisabled
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTab: {
      label: {
        textTransform: "capitalize"
      }
    },
    MuiTypography: {
      body1: {
        color: colorPrimary,
        fontSize: "1rem"
      },
      h4: {
        color: colorPrimary,
        fontSize: "2rem"
      }
    },
    MuiButtonBase: {
      root: {
        fontWeight: "500",
        color: "#546e7a"
      }
    },
    MuiTableRow: {
      head: {
        borderTop: "0.5px solid #80808026",
        backgroundColor: "#fafafa"
      },
      // selected: {
      //     backgroundColor: colorBackground,
      //     '&:hover': {
      //        backgroundColor: colorBackground,
      //    }
      // },
      // hover: {
      //      '&:hover': {
      //         backgroundColor: colorBackground,
      //     }
      // },
      root: {
        "&$selected": {
          backgroundColor: colorBackground,
          "&:hover": {
            backgroundColor: "#F4F6F8"
          }
        }
      }
    },
    MuiTableCell: {
      head: {
        color: colorPrimary,
        fontSize: "0.85rem",
        textTransform: "capitalize"
      },
      root: {
        padding: "0.25rem 1.5rem 0.25rem 1.5rem",
        lineHeight: "21px",
        borderBottom: "1px solid #eeeeee",
        letterSpacing: "-0.05px"
      },
      body: {
        color: "#263238"
      }
    },
    MuiInputBase: {
      input: {
        fontSize: "0.8rem"
      },
      root: {
        minHeight: 56
      }
    },
    MuiOutlinedInput: {
      input: {
        fontSize: "1rem"
      }
    },
    MuiInputLabel: {
      root: {
        color: colorPrimary,
        fontWeight: "500",
        textTransform: "capitalize"
        // "&$focused": {
        //     color: "#ff513f"
        // }
      }
    },
    MuiListItem: {
      // focusVisible: {
      //     color: 'rgba(255, 81, 63, 0.21)',
      // },
      root: {
        "&$selected": {
          backgroundColor: "rgba(41, 47, 72, 0.25)",
          borderLeft: "0.3rem solid #ff513f",
          "&:hover": {
            backgroundColor: "rgba(41, 47, 72, 0.25)"
          }
        }
      }
    },
    MuiTouchRipple: {
      root: {
        width: 0,
        height: 0
      }
    },
    MuiTablePagination: {
      selectIcon: {
        top: "auto"
      }
    },
    MuiSelect: {
      select: {
        fontSize: "1rem",
        "&:focus": {
          backgroundColor: "rgba(255, 255, 255, 0.05)"
        }
      }
    },
    MuiChip: {
      root: {
        color: "#263238",
        backgroundColor: "#eceff1"
      }
    },
    MuiTableSortLabel: {
      root: {
        color: "#263238",
        "&:hover": {
          color: "#263238"
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontWeight: "500",
        fontSize: "1rem",
        fontWeight: "500",
        lineHeight: "20px",
        letterSpacing: "-0.05px",
        marginBottom: "0.5rem"
      }
    }
  }
});
export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <App {...this.props} />
      </MuiThemeProvider>
    )
  }
}
