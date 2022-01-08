// import { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { useContext } from "react/cjs/react.development";
// import AppContext from "../context/AppContext";
import ComposeForm from './ComposeForm';
import TimeLine from './TimeLine';
// import { getUserById } from "../lib/firebaseFunctions";



function Home() {
    return (
        <div>"Home Page"
            <ComposeForm  />
            <TimeLine />
        </div>
    )
}
export default Home;