import style from "./Header.module.css";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = (props) => {
    return (
        <header className={style["header"]}>
            <HeaderContent onClickMenuHandler={props.onClickMenuHandler}/>
        </header>
    );
}

export default Header;