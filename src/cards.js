import React from "react";
import {Badge, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./cards.css"
import {ModalComponent} from "./modal";
import {useState} from "react";

const CardListItem = props => {
    const [openForm, setOpenForm] = useState(false);

    const getLanguage = (json) => {
        let arrayVal = Object.entries(json).map(item => item[1]);
        return arrayVal[0].language;
    }

    const getLastForks = (link) => {

        fetch(""+link)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    const handleClick = () =>{

    }

    return (
        <li className={"card-li"}>
            <div
                className="card-container"
                style={{
                    width: "60%",
                    border: "solid 3px #d3d3d3",
                    margin: "10px auto",
                    textAlign: "center"
                }}
                onClick={() => setOpenForm(true)}
            >
                <Badge className="badge">
                    {getLanguage(props.gists.files)}
                </Badge>
                <p>
                    <strong>ID: {props.gists.id}</strong>
                </p>
                <p> Description: {props.gists.description === ""||props.gists.description === null ? "none" : props.gists.description}</p>
                <p>
                    Created: {props.gists.created_at}
                </p>

                {/*<p>*/}
                {/*    {getLastForks(props.gists.forks_url)}*/}
                {/*</p>*/}
            </div>
            <ModalComponent
                open={openForm}
                toogle={setOpenForm}
                content = {props.gists.files}
            />
        </li>
    );
};

export const CardList = props => {
    console.log(props.gists);
    return (

        <ul style={{listStyleType: "none"}}>
            {props.gists.map(gists => {
                return <CardListItem gists={gists} key={gists.id}/>;
            })}
        </ul>
    );
};


