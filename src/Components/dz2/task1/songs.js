import React from 'react';

const List = ({list})=> {
    return (
            <tbody>
                {list.map(({id,name}, index)=>{
                    return (
                    <p key={id}>
                    <p>{index+1}&nbsp;{name}</p>
                    </p>);
                })}
            </tbody>
    );
}

export default List;