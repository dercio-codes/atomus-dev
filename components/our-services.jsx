import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { toast } from "react-toastify";

export const OurServices = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    tel: "",
  });
  console.log("services");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const queryValues = Object.values(form);

    if (queryValues.includes("")) {
      toast.warning("Please fill in all fields.", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
      setIsProcessing(false);
    } else {
      axios
        .post("/api/package", { ...form, packageName: selectedPackage })
        .then((res) => {
          if (res.data.message == "MAIL_SENT") {
            toast.success("Email Succesfully sent to Atomus.", {
              // theme: "dark",
              position: "bottom-right",
              icon: "🚀",
              autoClose: 5000,
              hideProgressBar: false,
            });

            setSelectedPackage({
              company: "",
              name: "",
              email: "",
              tel: "",
            });

            setIsProcessing(false);
          } else {
            toast.error("Error query to Atomus.", {
              theme: "dark",
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
            });

            setIsProcessing(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsProcessing(false);
        });
    }
  };

  const packages = [
    {
      backgroundImage:
        "https://img.freepik.com/free-vector/creative-web-homepage-illustration_52683-79847.jpg?w=1380&t=st=1678819805~exp=1678820405~hmac=5fd58710434e93c0e4611c9590869169ea3f64ca09d70dd917363c119f7d9851",
      icon: "https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/1x/external-web-development-web-design-and-development-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto-2.png",
      packageName: "Static Website",
      services: [
        "1 - 3 Pages Website",
        "TLS Domain",
        "Website Hosting",
        "Database Storage",
      ],
    },
    {
      backgroundImage:
        "https://img.freepik.com/free-vector/mobile-app-development-isometric-background-with-composition-smartphone-screens-with-3d-app-icons-connections-vector-illustration_1284-77301.jpg?w=1380&t=st=1678819501~exp=1678820101~hmac=c6d1eeae3b5ec30f27a3f79485da456ebca944f0e8a7c668c33d5cdf2b0990a0",
      icon: "https://img.icons8.com/external-basicons-line-edtgraphics/1x/external-Mobile-development-device-activities-basicons-line-edtgraphics.png",
      packageName: "Mobile Development",
      services: [
        "1 - 3 Pages Website",
        "TLS Domain",
        "Website Hosting",
        "Database Storage",
      ],
    },
    {
      backgroundImage:
        "https://img.freepik.com/free-vector/ui-ux-designers-isometric-background_1284-71566.jpg?w=826&t=st=1678819633~exp=1678820233~hmac=a715d90417cfe0882e8d3be0db10ae46c3082160fccefea26c15a62e8221a678 ",
      icon: " https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/1x/external-app-development-seo-and-web-smashingstocks-detailed-outline-smashing-stocks.png",
      packageName: "Progressive Web App",
      services: [
        "5+ Pages.",
        "TLS Domain.",
        "Website Hosting + Database Storage.",
        "Extra Features : Example Member Login or Live Chat",
      ],
    },
    {
      icon: "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/1x/external-seo-web-development-company-inipagistudio-mixed-inipagistudio.png",
      backgroundImage:
        "https://img.freepik.com/free-vector/seo-analysis-isometric-composition-with-web-optimization-symbols_1284-32010.jpg?w=996&t=st=1678819213~exp=1678819813~hmac=209b54cf3d9ea26f1d1282041955dd1c85fdeb15c7e466828b76c62162fc1d95",
      packageName: "SEO",
      services: [
        "Google Ads.",
        "Youtube Ads",
        "Facebook Ads",
        "Instagram Ads.",
      ],
    },
    {
      icon: "https://img.icons8.com/external-3d-design-circle/1x/external-UxUi-Design-design-and-development-3d-design-circle.png",
      backgroundImage:
        "https://img.freepik.com/free-vector/gradient-colored-ui-ux-background_79603-1924.jpg?w=1380&t=st=1678817506~exp=1678818106~hmac=11062cc82da8315583f2bd5daa46162ce52646b0b402f15cd0d4bd2a6909de16",
      packageName: "UX/UI Design",
      services: [
        "Website Desing.",
        "Brochures",
        "Logo Design",
        "Business Cards.",
      ],
    },
    {
      backgroundImage:
        "https://img.freepik.com/free-photo/laptops-transfer-downloading-data-cloud-computing-network-technology-infrastructure-data-diagram-icon-symbol-3d-rendering_56104-1279.jpg?w=1060&t=st=1678819297~exp=1678819897~hmac=d03035505834c00ed1aa4448bfd76bb6b29fbf7fa616dc225173794a799036af",
      icon: "https://img.icons8.com/dotty/1x/servers-group.png",
      packageName: "Hosting",
      services: [
        "Website Hosting.",
        "Database Storage",
        "Emails",
        "Backup Data.",
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "50vh", lg: "50vh" },
        width: "100%",
        background: "rgba(222,222,222,.75)",
        margin: "0",
        padding: "1rem 2.5rem ",
      }}
    >
      <Typography
        component="h1"
        className="carter-one"
        sx={{
          fontSize: "42px",
          fontWeight: "600",
          textAlign: "center",
          width: "100%",
          margin: "32px 0 8px 0",
          // background: "white",
          // color: "#eee",
        }}
      >
        {" "}
        Our Services.{" "}
      </Typography>
      <Typography
        component="h1"
        className="recursive"
        sx={{
          fontSize: "21px",
          fontWeight: "300",
          textAlign: "center",
          width: "80%",
          margin: "0 auto 21px auto ",
        }}
      >
        {" "}
        Services we offer at our company.{" "}
      </Typography>

      <Grid container>
        {packages.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={5.5}
              md={5.5}
              lg={3.5}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                borderRadius: "28px",
                position: "relative",
                backgroundImage: `url(${item.backgroundImage})`,
                // 'url("https://img.freepik.com/free-vector/creative-web-homepage-illustration_52683-79847.jpg?w=1380&t=st=1678819805~exp=1678820405~hmac=5fd58710434e93c0e4611c9590869169ea3f64ca09d70dd917363c119f7d9851")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              {selectedPackage === item.packageName ? (
                <Box
                  sx={{
                    background: "rgba(255,255,255,.85)",
                    width: "100%",
                    padding: "42px 0",
                    borderRadius: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setSelectedPackage("");
                    }}
                    sx={{ position: "absolute", top: "12px", right: "12px" }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Box
                    sx={{
                      height: "80px",
                      width: "80px",
                      backgroundImage: `url(${item.icon})`,
                      // 'url("https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/1x/external-web-development-web-design-and-development-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto-2.png")',
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                      scale: "0.8",
                    }}
                  />
                  <Typography
                    component="h1"
                    className="carter-one"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textAlign: "center",
                      margin: "16px 0",
                    }}
                  >
                    {item.packageName}
                  </Typography>
                  <TextField
                    placeholder="Company Name"
                    variant="standard"
                    value={form.company}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="company"
                    type="text"
                    sx={{ ...inputStyles, margin: "13px 0" }}
                  />

                  <TextField
                    placeholder=" Name"
                    variant="standard"
                    value={form.name}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="name"
                    sx={{ ...inputStyles, margin: "13px auto" }}
                  />

                  <TextField
                    placeholder="Email"
                    variant="standard"
                    value={form.email}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="email"
                    sx={{ ...inputStyles, margin: "13px auto" }}
                  />
                  <TextField
                    placeholder="Tel"
                    variant="standard"
                    type="tel"
                    value={form.tel}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    name="tel"
                    sx={{ ...inputStyles, margin: "13px auto" }}
                  />
                  <Button
                    onClick={handleSubmit}
                    className="button-89"
                    sx={{
                      background: "transparent",
                      color: "#142531ff",
                      width: "70%",
                    }}
                    type="button"
                  >
                    {isProcessing ? "Sending..." : "Submit"}
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    background: "rgba(255,255,255,.85)",
                    width: "100%",
                    padding: "42px 0",
                    borderRadius: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      height: "80px",
                      width: "80px",
                      backgroundImage: `url(${item.icon})`,
                      // 'url("https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/1x/external-web-development-web-design-and-development-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto-2.png")',
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                      scale: "0.8",
                    }}
                  />
                  <Typography
                    component="h1"
                    className="carter-one"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textAlign: "center",
                      margin: "16px 0",
                    }}
                  >
                    {item.packageName}
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      textAlign: "center",
                      // margin: "12px 0",
                    }}
                  >
                    {" "}
                    Includes{" "}
                  </Typography>
                  <Box
                    sx={{
                      lineHeight: "1.7rem",
                      margin: "0",
                      width:
                        item.packageName === "Progressive Web App"
                          ? "55%"
                          : "fit-content",
                      background: "",
                    }}
                  >
                    {item.services.map((item, index) => {
                      return (
                        <li key={index} style={{ margin: "12px 0" }}>
                          {item}
                        </li>
                      );
                    })}
                  </Box>
                  <Button
                    onClick={() => {
                      setSelectedPackage(item.packageName);
                    }}
                    className="button-89"
                    sx={{ background: "transparent", color: "#142531ff" }}
                    type="button"
                  >
                    {"Select Package"}
                  </Button>
                </Box>
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const inputStyles = {
  "& .MuiInputBase-root": {
    borderBottom: "2px solid #142531ff",
    color: "#142531ff",
    // margin: "0px 0 5px",
  },
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      borderBottom: "3px solid #142531ff",
      color: "#40e0d0",
    },
  },
};
