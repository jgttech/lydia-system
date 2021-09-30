import { createUseStyles } from "react-jss";

// [NOTE]
// I had to apply the "left" property in the JS because,
// for whatever reason that is unknown to me, the "left"
// property does not override in the Media Query, once applied.

export default createUseStyles({
    "@media (min-width: 1000px)": {
        container: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)"
        },
    },
    "@media (max-width: 999px)": {
        container: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
        },
    },
    container: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        overflow: "hidden",
        marginBottom: "12px"
    },
    section: {
        margin: "10px",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",

        /* for Firefox */
        minHeight: 0,
    }
});