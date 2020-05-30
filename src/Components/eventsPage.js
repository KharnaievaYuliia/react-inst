import React from "react";
import { withRouter } from "react-router-dom";

const EventsPage = (props) => {

    const categoryName = props.match.params.path;
    const { events } = props;


    return (
        <>
            1111
        </>
    )
}
export default withRouter(EventsPage);