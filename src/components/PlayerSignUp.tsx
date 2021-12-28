import { Box, Typography, Button, TextField } from "@mui/material"
import * as yup from "yup"
import { useFormik } from "formik"
import supabase from "../utils/supabaseClient"
import { useState, useEffect } from "react"

const PlayerSignUp = () => {
  const [emailInUse, setEmailInUse] = useState(false);
  const [sports, setSports] = useState([]);

  const validationSchema = yup.object({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    desc: yup.string().required("Description is required"),
    sid: yup.string().required("Sport ID is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/,
        "Must Contain atleast 8 Characters and two numbers"
      ),
    passwordConfirmation: yup
      .string()
      .required("Confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      desc: "",
      sid: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => {
      console.log("Submitted");
      console.log(JSON.stringify(values));
      // createUserWithEmailAndPassword(authHandle, values.email, values.password)
      //   .then((userCredential) => {
      //     const user = userCredential.user;
      //     (async () => {
      //       await setDoc(doc(storeHandle, "users", user.uid), {
      //         uid: user.uid,
      //         name: values.name,
      //         desc: values.desc,
      //         org: values.org,
      //         email: values.email,
      //         joinedOn: moment().unix(),
      //         saved: [],
      //         answers: [],
      //         likes: [],
      //         groups: [],
      //         followers: [],
      //         following: []
      //       });
      //     })();

      //     window.location.replace("/");
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },
    validationSchema: validationSchema,
  });

  useEffect(() => {
    (async () => {
      const {data, error } = await supabase.from('sports').select('name');
    if (data) { 
      setSports(data);
    }
    console.log("Sports: ", data);
    })()
    
  }, [])

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('users').select('email').eq('email', formik.values.email);
      console.log(data);
      if (data?.length > 0) {
        setEmailInUse(true);
      }
    })()
  }, [formik.values.email]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Typography variant="h3">Sign Up</Typography> */}
      <Box sx={{ width: "90vw", maxWidth: { sm: "auto", md: "40rem" } }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitting");
            formik.handleSubmit();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
            padding: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="fname"
            name="fname"
            label="First name"
            variant="outlined"
            value={formik.values.fname}
            onChange={formik.handleChange}
            error={formik.touched.fname && Boolean(formik.errors.fname)}
            helperText={formik.touched.fname && formik.errors.fname}
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
          />
          <TextField
            id="lname"
            name="lname"
            label="Last name"
            variant="outlined"
            value={formik.values.lname}
            onChange={formik.handleChange}
            error={formik.touched.lname && Boolean(formik.errors.lname)}
            helperText={formik.touched.lname && formik.errors.lname}
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
          />
          
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
          />
          {emailInUse ? (
            <Typography variant="caption">Email already in use</Typography>
          ) : null}
          <TextField
            id="desc"
            name="desc"
            label="Description"
            variant="outlined"
            value={formik.values.desc}
            onChange={formik.handleChange}
            error={formik.touched.desc && Boolean(formik.errors.desc)}
            helperText={formik.touched.desc && formik.errors.desc}
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
            multiline
          />
          <TextField
            id="sid"
            name="sid"
            label="Sport ID"
            variant="outlined"
            value={formik.values.sid}
            onChange={formik.handleChange}
            error={formik.touched.sid && Boolean(formik.errors.sid)}
            helperText={formik.touched.sid && formik.errors.sid}
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
          />
          <TextField
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="Password Confirmation"
            variant="outlined"
            type="password"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
            onBlur={formik.handleBlur}
            sx={{ m: "1rem", maxWidth: "29rem" }}
            fullWidth
          />
          {(emailInUse) ? (
            <Button
              variant="contained"
              sx={{ width: "12rem" }}
              type="submit"
              onClick={() => formik.handleSubmit()}
              disabled
            >
              Sign up
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ width: "12rem" }}
              type="submit"
              onClick={() => formik.handleSubmit()}
            >
              Sign up
            </Button>
          )}
        </form>
      </Box>
    </Box>
  );
}

export default PlayerSignUp
