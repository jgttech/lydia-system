import { createUseStyles } from "react-jss";

export default createUseStyles({
    searchBarContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    searchResultsContainer: {
        flexGrow: "1",
        overflow: "auto",

        /* for Firefox */
        minHeight: "0",
    },
});