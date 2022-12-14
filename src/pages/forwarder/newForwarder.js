import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
  makeStyles,
  TextField,
  FormControl,
  Container,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 250,
    margin: theme.spacing(3),
  },
  field: {
    marginTop: 20,
    display: "block",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "70%",
  },
  formControll: {
    margin: theme.spacing(1),
    minWidth: "50%",
  },
  addForwarderBtn: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  },
}));

const NewForwarder = () => {
  const classes = useStyles();

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Add/Modify Forwarder
      </Typography>

      <form noValidate autoComplete="off" style={{ position: "relative" }}>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.field}
            label="Company"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
            autoFocus={true}
            required
          />
          <TextField
            className={classes.field}
            label="website"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
            required
          />
          <TextField
            className={classes.field}
            label="Street Address"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Street Address"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Street Address"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Street Address"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Street Address"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Street Address"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="City"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="State / Province"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Postal / Zip code"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Country"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Contact Name"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Office"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Mobile"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Fax"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Email"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={1}
          />
        </FormControl>

        <Button
          className={classes.addForwarderBtn}
          type="Create"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default NewForwarder;
