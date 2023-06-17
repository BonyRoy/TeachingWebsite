import React from "react";
import Hobbiesdata from "./Hobbiesdata";
import Card from "./Card";

const List1 =()=>{
    return(
        <>
        <div className="my-5">
            <h2 className="text-center"
            style={ {
                color:'#a7bfe0',
            }}
            >Hobbies</h2>
        </div>
        <div className="container-fluid mb-5"
               style={ {
                backgroundColor: '#a7bfe0',
            }}
        >
        <div className="my-5">
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                Hobbiesdata.map((val, ind)=>{
                    return <Card key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     Link={val.Link}
                    />
                })
            }
        </div>
        </div>
        </div>  
        </div>
        </div>
        </>
        );
};

export default List1;