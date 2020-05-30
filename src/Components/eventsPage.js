import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Paper } from "@material-ui/core/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const EventsPage = (props) => {

    const categoryName = props.match.params.path;
    const { events } = props;
    const currentCategory = events.find(event => event.name === categoryName);
    const currentEvents = currentCategory.events;
    const handleClick = (id) => {
        props.history.push(`/${currentCategory.name}/${id}`);
    };
    return (
        <>
            {
                currentEvents.map((event) => {
                    return (
                        <Link to={`/${currentCategory.name}/${event.id}`}>
                            <Box component={Paper} key={event.id}>
                                <p>{event.name}</p>

                            </Box>
                        </Link>
                    )
                })
            }
        </>
    )
}
export default withRouter(EventsPage);