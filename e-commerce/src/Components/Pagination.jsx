export const PaginationComponent = ({
  currentPage,
  lastPage,
  setPage,
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      {arr.map((item, page) => (
        <div key={item.id}>
          <button
            style={{
              padding: "15px",
              borderRadius: "30%",
              backgroundColor: "lightgrey",
              margin: "4px",
              textAlign: "center",
            }}
            onClick={() => setPage(page + 1)}
            disabled={page + 1 === currentPage}
          >
            {page + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

// import React from "react";
// import Button from "@material-ui/core/Button";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import MobileStepper from "@material-ui/core/MobileStepper";

// export const PaginationComponent = () => {
//   const theme = useTheme();

//   const forwardButton = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const [INDEX, setActiveStep] = React.useState(0);

//   const previousButton = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   return (
//     <div
//       style={{
//         marginLeft: "40%",
//       }}
//     >
//       <MobileStepper
//         steps={5}
//         variant="dots"
//         style={{
//           flexGrow: 1,
//           maxWidth: 400,
//         }}
//         activeStep={INDEX}
//         position="static"
//         nextButton={
//           <Button size="small" onClick={previousButton} disabled={INDEX === 4}>
//             Next
//             {theme.direction !== "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={forwardButton} disabled={INDEX === 0}>
//             {theme.direction !== "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//             Back
//           </Button>
//         }
//       />
//       <h3 style={{ paddingLeft : "20px" }}>Page No: {INDEX + 1}</h3>
//     </div>
//   );
// };
