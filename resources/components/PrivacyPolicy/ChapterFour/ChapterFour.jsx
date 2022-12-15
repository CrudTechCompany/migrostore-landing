import style from "./ChapterFour.module.css";

const ChapterFour = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 4</span>
            <span className={style["title"]}>
                Cele w jakich wykorzystywane są Cookies
            </span>
            <p>
                Administrator wykorzystuje Cookies własne w celu poprawnej
                konfiguracji serwisu, a w szczególności:
            </p>
            <ul>
                <li>
                    dostosowania zawartości stron internetowych Serwisu do
                    preferencji Użytkownika oraz optymalizacji korzystania ze
                    stron internetowych Serwisu
                </li>
                <li>
                    rozpoznania urządzenia Użytkownika Serwisu oraz jego
                    lokalizację i odpowiednio wyświetlenia strony internetowej,
                    dostosowanej do jego indywidualnych potrzeb
                </li>
                <li>
                    zapamiętania ustawień wybranych przez Użytkownika i
                    personalizacji interfejsu Użytkownika, np. w zakresie
                    wybranego języka lub regionu, z którego pochodzi Użytkownik
                </li>
                <li>
                    zapamiętania historii odwiedzonych stron w serwisie w celu
                    rekomendacji treści
                </li>
                <li>rozmiaru czcionki, wyglądu strony internetowej itp.</li>
            </ul>
            <p>
                Administrator wykorzystuje Cookies własne w celu
                uwierzytelniania użytkownika w serwisie i zapewnienia sesji
                użytkownika w serwisie, a w szczególności do: utrzymania sesji
                Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik
                nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i
                hasła; poprawnej konfiguracji wybranych funkcji Serwisu,
                umożliwiając w szczególności weryfikację autentyczności sesji
                przeglądarki; optymalizacji i zwiększenia wydajności usług
                świadczonych przez Administratora.
            </p>
            <p>
                Administrator wykorzystuje Cookies własne w celu realizacji
                procesów niezbędnych dla pełnej funkcjonalności stron
                internetowych, a w szczególności do: dostosowania zawartości
                stron internetowych Serwisu do preferencji Użytkownika oraz
                optymalizacji korzystania ze stron internetowych Serwisu. W
                szczególności pliki te pozwalają̨ rozpoznać podstawowe parametry
                Urządzenia Użytkownika i odpowiednio wyświetlić stronę̨
                internetową, dostosowaną do jego indywidualnych potrzeb;
                poprawnej obsługi programu partnerskiego, umożliwiając w
                szczególności weryfikację źródeł przekierowań Użytkowników na
                strony internetowe Serwisu. Administrator wykorzystuje Cookies
                własne w celu zapamiętania lokalizacji użytkownika, a w
                szczególności do poprawnej konfiguracji wybranych funkcji
                Serwisu, umożliwiając w dostosowanie dostarczanych informacji do
                Użytkownika z uwzględnieniem jego lokalizacji.
            </p>
            <p>
                Administrator wykorzystuje Cookies własne w celu analiz i badań
                oraz audytu oglądalności, a w szczególności do tworzenia
                anonimowych statystyk, które pomagają̨ zrozumieć, w jaki sposób
                Użytkownicy Serwisu korzystają̨ ze stron internetowych Serwisu,
                co umożliwia ulepszanie ich struktury i zawartości.
                Administrator usługi wykorzystuje Cookies zewnętrzne w celu
                zalogowania do serwisu za pomocą̨ serwisu społecznościowego
                Google (administrator cookies zewnętrznego: Google Inc. z
                siedzibą w USA).
            </p>
            <p>
                Administrator usługi wykorzystuje Cookies zewnętrzne w celu
                popularyzacji serwisu za pomocą̨ serwisów społecznościowych
                plus.google.com (administrator cookies zewnętrznego: Google Inc.
                z siedzibą w USA).
            </p>
        </div>
    );
};

export default ChapterFour;
