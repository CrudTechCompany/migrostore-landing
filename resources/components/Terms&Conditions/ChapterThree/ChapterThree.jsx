import style from "./ChapterThree.module.css";

const ChapterThree = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 3</span>
            <span className={style["title"]}>Zawarcie umowy</span>
            <p>
                Umowa o świadczenie Usług zostaje zawarta z Użytkownikiem
                niezalogowanym z chwilą skorzystania przez niego z dowolnych
                Usług oferowanych w ramach Serwisów, które nie wymagają
                założenia Konta.
            </p>
            <p>
                Umowa o świadczenie Usług zostaje zawarta z Użytkownikiem z
                chwilą prawidłowego wypełnienia przez niego Formularza
                rejestracyjnego albo dokonania Uwierzytelnienia oraz
                zaakceptowania Regulaminu poprzez odznaczenie odpowiedniego
                przycisku wyboru.
            </p>
            <p>
                Prawidłowe wypełnienie Formularza rejestracyjnego polega na
                podaniu loginu (nr telefonu) i hasła (otrzymanego przy pomocy
                darmowego sms’a).
            </p>
            <p>
                Użytkownik wypełniając i wysyłając Formularz rejestracyjny albo
                dokonując Uwierzytelnienia oświadcza, że:
            </p>
            <p>
                podane w nim dane są kompletne, zgodne ze stanem faktycznym oraz
                nie naruszają jakichkolwiek praw osób trzecich;
            </p>
            <p>
                jest pełnoletni oraz uprawniony do zawarcia umowy o świadczenie
                Usług;
            </p>
            <p>
                Użytkownik/Pracodawca akceptuje konieczność posiadania
                aktualnego, czynnego adresu poczty elektronicznej. Adres ten
                jest podawany bezpośrednio w Formularzu rejestracyjnym lub
                uzyskiwany przez Usługodawcę w przypadku dokonania przez
                Użytkownika Uwierzytelnienia. Użytkownik zobowiązany jest do
                bieżącego monitorowania podanego adresu poczty elektronicznej, a
                w przypadku jego zmiany do niezwłocznego zaktualizowania tej
                informacji w swoim Koncie;
            </p>
            <p>
                Po otrzymaniu prawidłowo wypełnionego Formularza rejestracyjnego
                lub dokonanym Uwierzytelnieniu, Usługodawca tworzy Konto o
                nazwie odpowiadającej podanemu przez Użytkownika numerze
                telefonu. Na wskazany przez Użytkownika nr telefonu wysyłany
                jest kod aktywacyjny w celu potwierdzenia założenia Konta.
            </p>
            <p>
                Użytkownik ma 60 sekund od momentu otrzymania sms’a
                aktywacyjnego na dokonanie potwierdzenia założenia Konta.
                Potwierdzenie założenia Konta zapewnia Użytkownikowi dostęp do
                Konta i możliwość korzystania z Usług, które wymagają założenia
                Konta. Jeżeli w terminie 60 sekund od momentu otrzymania sms’a
                aktywacyjnego Użytkownik nie dokona potwierdzenia założenia
                Konta, nie będzie miał do niego dostępu i nie będzie mógł
                korzystać z Usług, które wymagają założenia Konta;
            </p>
            <p>
                Użytkownik uzyskuje dostęp do utworzonego Konta za pomocą
                swojego loginu (nr telefonu).
            </p>
            <p>
                Usługodawca może odmówić utworzenia Konta, zablokować lub usunąć
                istniejące Konto, jeżeli jego nazwa jest już używana w ramach
                Serwisów lub jeżeli Usługodawca poweźmie uzasadnioną, wiarygodną
                informację, że jest ona sprzeczna z prawem, dobrymi obyczajami,
                narusza dobra osobiste osób trzecich lub uzasadnione interesy
                Usługodawcy
            </p>
            <p>Umowa zawierana jest na czas nieokreślony</p>
            <p>
                Umowa o świadczenie Usług zostaje rozwiązana z Użytkownikiem z
                chwilą usunięcia Konta z aplikacji mobilnej.
            </p>
        </div>
    );
};

export default ChapterThree;
