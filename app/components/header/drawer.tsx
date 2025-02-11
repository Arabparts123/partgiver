import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@mui/material/styles"

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme() // Access the theme

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.primary.dark, // Dark background for contrast
        color: theme.palette.primary.contrastText, // Light text for readability
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.light, // Light green on hover
                },
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: theme.palette.divider }} />{" "}
      {/* Light gray divider */}
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.light, // Light green on hover
                },
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        className='lg:hidden xl:hidden xxl:hidden'
      >
        <MenuIcon sx={{ fontSize: 24, color: theme.palette.secondary.main }} />{" "}
        {/* Red icon */}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
