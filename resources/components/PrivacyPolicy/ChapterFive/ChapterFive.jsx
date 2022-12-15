import style from "./ChapterFive.module.css";

const ChapterFive = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 5</span>
            <span className={style["title"]}>
                Możliwości określenia warunków przechowywania lub uzyskiwania
                dostępu przez Cookies
            </span>
            <p>
                Użytkownik może samodzielnie i w każdym czasie zmienić
                ustawienia dotyczące plików Cookies, określając warunki ich
                przechowywania i uzyskiwania dostępu przez pliki Cookies do
                Urządzenia Użytkownika. Zmiany ustawień, o których mowa w zdaniu
                poprzednim, Użytkownik może dokonać za pomocą̨ ustawień
                przeglądarki internetowej lub za pomocą̨ konfiguracji usługi.
            </p>
            <p>
                Ustawienia te mogą̨ zostać zmienione w szczególności w taki
                sposób, aby blokować automatyczną obsługę̨ plików cookies w
                ustawieniach przeglądarki internetowej bądź informować o ich
                każdorazowym zamieszczeniu Cookies na urządzeniu Użytkownika.
            </p>
            <p>
                Szczegółowe informacje o możliwości i sposobach obsługi plików
                cookies dostępne są̨ w ustawieniach oprogramowania (przeglądarki
                internetowej).
            </p>
            <p>
                Użytkownik może w każdej chwili usunąć pliki Cookies korzystając
                z dostępnych funkcji w przeglądarce internetowej, której używa.
            </p>
            <p>
                Ograniczenie stosowania plików Cookies, może wpłynąć na niektóre
                funkcjonalności dostępne na stronie internetowej Serwisu.
            </p>
        </div>
    );
};

export default ChapterFive;
