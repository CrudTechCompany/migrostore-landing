import style from "./ChapterSix.module.css";

const ChapterSix = () => {
    return (
        <div className={style["chapter-block"]}>
            <span className={style["title"]}>§ 6</span>
            <span className={style["title"]}>
                Prawa i obowiązki uźytkownika
            </span>
            <p>
                Użytkownik ma możliwość zarządzania Usługami za pośrednictwem
                Konta, w tym Ustawień (Prywatność) i zmiany podanych przez
                siebie danych w dowolnym momencie
            </p>
            <p>
                W przypadku skorzystania przez Użytkownika z Usług związanych z
                publicznym udostępnieniem w Serwisie swojego Wizerunku, na
                podstawie art. 81 Ustawy o prawie autorskim i prawach
                pokrewnych, Użytkownik wyraża zgodę na jego nieodpłatne
                utrwalanie, zwielokrotnienie i rozpowszechnienie przez
                Usługodawcę. Usługodawca oświadcza, że Wizerunek będzie
                wykorzystywany w celu poprawnej realizacji Usług, identyfikacji
                Użytkownika lub w celach promocyjnych, reklamowych i
                marketingowych Usługodawcy
            </p>
            <p>
                Użytkownik oświadcza, że przysługują mu autorskie prawa
                majątkowe do Utworów. Użytkownik udziela Usługodawcy
                nieodpłatnej, niewyłącznej oraz nieograniczonej terytorialnie
                licencji na czas realizacji Usług, zezwalającej na korzystanie z
                Utworów na następujących polach eksploatacji, obejmujących w
                szczególności: wytwarzanie, zwielokrotnianie, publiczne
                odtworzenie i wyświetlanie, wprowadzenie do pamięci komputera i
                serwerów sieci komputerowych, umieszczanie w sieci Internet
            </p>
            <p>
                Użytkownik oraz Użytkownik niezalogowany korzystając z Usług
                zobowiązani są do:
            </p>
            <ul>
                <li>
                    podawania nieprawdziwych lub nieaktualnych informacji oraz
                    danych osobowych
                </li>
                <li>
                    publikacji lub przesyłania treści obraźliwych, sprzecznych z
                    prawem lub naruszających chronione prawem dobra osobiste
                    osób trzecich
                </li>
                <li>
                    wykorzystywania Usług do publikacji reklam towarów i usług
                    oraz wszelkich informacji o charakterze komercyjnym
                </li>
                <li>
                    kopiowania, modyfikowania, rozpowszechniania, transmitowania
                    lub wykorzystywania w inny sposób jakichkolwiek utworów i
                    baz danych udostępnianych w Serwisach, za wyjątkiem
                    korzystania z nich w ramach dozwolonego użytku
                </li>
                <li>
                    podejmowania jakichkolwiek działań, które mogą utrudnić lub
                    zakłócić funkcjonowanie Serwisów oraz korzystania z Serwisów
                    w sposób uciążliwy dla Usługodawcy lub innych Użytkowników
                    lub Użytkowników niezalogowanych
                </li>
                <li>
                    wykorzystywania Usług w sposób sprzeczny z prawem, dobrymi
                    obyczajami, naruszający dobra osobiste osób trzecich lub
                    uzasadnione interesy Usługodawcy
                </li>
            </ul>
            <p>
                Użytkownik oraz Użytkownik niezalogowany zobowiązani są do
                niezwłocznego zawiadamiania Usługodawcy o znanych im przypadkach
                naruszania Regulaminu oraz o bezprawnym charakterze danych,
                informacji lub działań podejmowanych za pośrednictwem Serwisów.
                Usługodawca po otrzymaniu takiego zawiadomienia podejmie
                przewidziane prawem działania, w tym niezwłocznie uniemożliwi
                dostęp do określonych danych, informacji lub działań
            </p>
        </div>
    );
};

export default ChapterSix;
