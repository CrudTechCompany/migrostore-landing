import style from "./Contact.module.css";
import contact_image from "./../../assets/contact_image.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = (props) => {
    const [inputNameState, setInputNameState] = useState("");
    const onChangeInputNameHandler = (event) => {
        setInputNameState(event.target.value);
    };

    const [inputEmailState, setInputEmailState] = useState("");
    const onChangeInputEmailHandler = (event) => {
        setInputEmailState(event.target.value);
    };

    const [inputMessageState, setInputMessageState] = useState("");
    const onChangeInputMessageHandler = (event) => {
        setInputMessageState(event.target.value);
    };

    const [errorInputNameText, setErrorInputNameText] = useState("");
    const [errorInputEmailText, setErrorInputEmailText] = useState("");
    const [errorInputMessageText, setErrorInputMessageText] = useState("");

    const [errorInputNameState, setErrorInputNameState] = useState(false);
    const [errorInputEmailState, setErrorInputEmailState] = useState(false);
    const [errorInputMessageState, setErrorInputMessageState] = useState(false);

    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const onClickSendButtonHandler = (event) => {
        console.log(regExp.test(inputEmailState));
        event.preventDefault();
        if (
            inputNameState.length > 0 &&
            regExp.test(inputEmailState) &&
            inputMessageState.length > 0
        ) {
            setErrorInputNameState(false);
            setErrorInputEmailState(false);
            setErrorInputMessageText(false);
            axios
                .post("https://migrostore.pl/api/questions/store", {
                    name: inputNameState,
                    email: inputEmailState,
                    message: inputMessageState,
                })
                .then((response) => {
                    response.status === 201 &&
                        props.setSuccessWindowState((prev) => !prev);
                });
        } else {
            if (inputNameState.length === 0) {
                setErrorInputNameText("Required field");
                setErrorInputNameState(true);
            } else {
                setErrorInputNameState(false);
            }
            if (inputEmailState.length === 0) {
                setErrorInputEmailText("Required field");
                setErrorInputEmailState(true);
            } else {
                if (!regExp.test(inputEmailState)) {
                    setErrorInputEmailText("Invalid email format");
                    setErrorInputEmailState(true);
                } else {
                    setErrorInputEmailState(false);
                }
            }
            if (inputMessageState.length === 0) {
                setErrorInputMessageText("Required field");
                setErrorInputMessageState(true);
            } else {
                setErrorInputMessageState(false);
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style["contact-block"]} id="contact-us">
            <div className={style["content-block"]}>
                <img
                    className={style["contact-image"]}
                    src={contact_image}
                    alt=""
                />
                <form className={style["form-block"]}>
                    <span className={style["form-title"]}>
                        Feel free to contact us any time. We wiil get back
                        contact to you as soon as we can!
                    </span>
                    <div className={style["input-block"]}>
                        <input
                            className={style["input"]}
                            type="text"
                            placeholder=" "
                            style={{
                                borderBottomColor:
                                    errorInputNameState && "rgba(252, 2, 2, 1)",
                            }}
                            value={inputNameState}
                            onChange={onChangeInputNameHandler}
                        />
                        <label className={style["label"]}>Name</label>
                        <div className={style["error-block"]}>
                            <span
                                className={style["error-text"]}
                                style={{
                                    display: errorInputNameState
                                        ? "block"
                                        : "none",
                                }}
                            >
                                {errorInputNameText}
                            </span>
                        </div>
                    </div>
                    <div className={style["input-block"]}>
                        <input
                            className={style["input"]}
                            type="email"
                            placeholder=" "
                            style={{
                                borderBottomColor:
                                    errorInputEmailState &&
                                    "rgba(252, 2, 2, 1)",
                            }}
                            value={inputEmailState}
                            onChange={onChangeInputEmailHandler}
                        />
                        <label className={style["label"]}>Email</label>
                        <div className={style["error-block"]}>
                            <span
                                className={style["error-text"]}
                                style={{
                                    display: errorInputEmailState
                                        ? "block"
                                        : "none",
                                }}
                            >
                                {errorInputEmailText}
                            </span>
                        </div>
                    </div>
                    <div className={style["input-block"]}>
                        <input
                            className={style["input"]}
                            type="text"
                            placeholder=" "
                            style={{
                                borderBottomColor:
                                    errorInputMessageState &&
                                    "rgba(252, 2, 2, 1)",
                            }}
                            value={inputMessageState}
                            onChange={onChangeInputMessageHandler}
                        />
                        <label className={style["label"]}>Message</label>
                        <div className={style["error-block"]}>
                            <span
                                className={style["error-text"]}
                                style={{
                                    display: errorInputMessageState
                                        ? "block"
                                        : "none",
                                }}
                            >
                                {errorInputMessageText}
                            </span>
                        </div>
                    </div>
                    <button
                        className={style["form-button"]}
                        type="submit"
                        onClick={onClickSendButtonHandler}
                    >
                        Send massage
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
