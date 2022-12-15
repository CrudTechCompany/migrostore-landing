import "./bootstrap";
import style from "./App.module.css";
import ReactDOM from "react-dom/client";
import React, { StrictMode, useState } from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import PageNotFound from "../components/404/404";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Contact from "../components/Contact/Contact";
import TermsAndConditions from "../components/Terms&Conditions/Terms&Conditions";
import SuccessWindow from "../components/Contact/SuccessWindow/SuccessWindow";
import ChapterEight from "../components/Terms&Conditions/ChapterEight/ChapterEight";

const MainPage = (props) => {
    return (
        <React.Fragment>
            <Header onClickMenuHandler={props.onClickMenuHandler} />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

const App = () => {
    const [menuState, setMenuState] = useState(false);
    const onClickMenuHandler = () => {
        setMenuState((prev) => !prev);
    };

    const [successWindowState, setSuccessWindowState] = useState(false);

    return (
        <div
            className={style["app"]}
            style={{ position: (menuState || successWindowState) ? "fixed" : "relative" }}
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage onClickMenuHandler={onClickMenuHandler} />
                    }
                >
                    <Route index element={<Body />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route
                        path="contact-us"
                        element={
                            <Contact
                                setSuccessWindowState={setSuccessWindowState}
                            />
                        }
                    />
                    <Route
                        path="terms-and-conditions"
                        element={<TermsAndConditions />}
                    />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {menuState && (
                <MobileMenu onClickMenuHandler={onClickMenuHandler} />
            )}
            {successWindowState && (
                <SuccessWindow setSuccessWindowState={setSuccessWindowState} />
            )}
        </div>
    );
};

if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
}
