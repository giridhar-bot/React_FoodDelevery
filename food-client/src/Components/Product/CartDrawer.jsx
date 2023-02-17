import {
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function CartDrawer({
  cartItems,
  cartTotal,
  isOpen,
  handleClose,
  handleRemoveItem,
}) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <List sx={{ p: 2, minWidth: 250 }}>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <img src={item.image} alt={item.title} width="150" height="150" />
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={`$${item.price.toFixed(2)} x ${item.quantity}`}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleRemoveItem(item.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <ListItemText primary="Total:" />
          <Typography variant="h6">${cartTotal.toFixed(2)}</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default CartDrawer;
