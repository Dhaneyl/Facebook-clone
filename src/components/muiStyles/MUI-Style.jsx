import { Box, Modal, styled, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  })

export const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

export const Icons = styled(Box)(({theme}) =>({
    display:"none",
    gap: "20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }, 
    //up means bigger than small, theme breakpoints is a property
}));
export const UserBox = styled(Box)(({theme}) =>({
    display:"flex",
    gap: "10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    // This is a conditional breakpoint
}));

export const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  export const UserBoxes = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  


