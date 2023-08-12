import {useRouteError} from "react-router-dom";
import React from "react";

export default function ErrorPage() {
    const error: any = useRouteError();
    return <>shit</>
    if (error instanceof Error) {
        return <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.message || error.name}</i>
            </p>
        </div>
    }

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}
