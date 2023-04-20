import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Landing } from "../components/landing";
import { OurServices } from "../components/our-services";
import { Portfolio } from "../components/portfolio";
import { Templates } from "../components/templates";
import { Contact } from "../components/contact";
import Marquee from "react-fast-marquee";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  console.log("Home");
  return (
    <Box
      sx={{
        // height: "200vh",
        marginTop: "90px",
        backgroundImage: 'url("/Colored Shapes.svg")',
        backdropFilter: "blur(1px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Navbar /> */}
      <Landing />
      <Box
        id="services"
        sx={{
          minHeight: { xs: "50vh", lg: "50vh" },
          width: "100%",
          // background: "#111",
          backgroundImage: 'url("/Colored Shapes.svg")',
          backdropFilter: "blur(1px)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          margin: "0",
          // padding: "2.5rem ",
        }}
      >
        <OurServices />
        <Box
          sx={{
            height: "350px",
            width: "100%",
            backgroundColor: "rgba(200,200,200,.3)",
            backgroundImage: 'url("/wave.svg")',
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
            // scale: "0.8",
          }}
        />

        <Portfolio />
        <Templates />
        {/* <ContactForm /> */}
        {/* <About /> */}

        <Contact />
      </Box>
    </Box>
  );
}

// const ContactForm = () => {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [booking, setBooking] = useState({
//     name: "",
//     tel: "",
//     email: "",
//     query: "",
//   });

//   const handleFieldChange = (e) => {
//     setBooking({
//       ...booking,
//       [e.target.name]: e.target.value,
//     });

//     console.log(booking);
//   };

//   // const handleSubmit = ()  =>  console.log(booking)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     const bookingValues = Object.values(booking);

//     if (bookingValues.includes("")) {
//       toast.warning("Please fill in all fields.", {
//         theme: "dark",
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//       });
//       setIsProcessing(false);
//     } else {
//       axios
//         .post("/api/contact", {
//           name: "",
//           tel: "",
//           email: "",
//           query: "",
//         })
//         .then((res) => {
//           if (res.data.message == "MAIL_SENT") {
//             toast.success("Email Succesfully sent to Misguided.", {
//               theme: "dark",
//               position: "top-right",
//               icon: "🚀",
//               autoClose: 5000,
//               hideProgressBar: false,
//             });

//             setBooking({
//               name: "",
//               tel: "",
//               requested_artist: "",
//               event_date: "",
//               event_name: "",
//               event_location: "",
//               hospitality: "",
//               email: "",
//               set_time: "",
//               duration: "",
//               budget: "",
//             });

//             setIsProcessing(false);
//           } else {
//             toast.error("Error booking Misguided.", {
//               theme: "dark",
//               position: "top-right",
//               autoClose: 5000,
//               hideProgressBar: false,
//             });

//             setIsProcessing(false);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//           setIsProcessing(false);
//         });
//     }
//   };

//   return (
//     <Box>
//       <TextField
//         variant="standard"
//         label="Name"
//         sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
//       />
//       <TextField
//         variant="standard"
//         label="Surname"
//         sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
//       />
//       <TextField
//         variant="standard"
//         label="Tel"
//         type="tel"
//         sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
//       />
//       <TextField
//         variant="standard"
//         label="Email"
//         type="email"
//         sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
//       />
//       <TextField
//         variant="standard"
//         label="Query"
//         multiline={true}
//         type={"textarea"}
//         placeholder={"Enter your query here..."}
//         rows={2}
//         sx={{
//           width: "75%",
//           margin: "21px 0",
//           background: "transparent",
//           ...inputStyles,
//         }}
//       />
//       <Button
//         className="button-89"
//         sx={{ background: "transparent", width: "75%" }}
//         type="button"
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };
