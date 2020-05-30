import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Paper } from "@material-ui/core/";


const EventsPage = (props) => {

    const categoryName = props.match.params.path;
    const { events } = props;
    const currentCategory = events.find(event => event.name === categoryName);
    const currentEvents = currentCategory.events;
const handleClick = (id)=>{
props.history.push(`/${currentCategory.name}/${id}`);
};
    return (
<>
        {
            currentEvents.map((event) => {
                return (
                  
                    <Box component={Paper} key={event.id}>
                        <p onClick={()=>handleClick(event.id)}>{event.name}</p>
                        
                    </Box>
                   
                )
            })
        }
        </>
    )
    }
export default withRouter(EventsPage);