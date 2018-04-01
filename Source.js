// ==UserScript==
// @name        Pokaż elementy
// @namespace   elements
// @version     1
// @grant       none

// ==/UserScript==
//Pobierz


        //# Obsługa okienek //#
var okienko = '';
var okienko_container = '';

function wywolaj_okienko_z_ustawieniami(id) {
    var element_do_ktorego_dopisuje = document.getElementsByTagName('BODY')[0];

    //--Przygotowywanie elementów--//
    //@@Okienko
    var okienko_ = document.createElement("DIV");
    okienko_.className = "single_window";
    okienko_.id = "single_window_" + id;

    var okienko_container = document.createElement("Div");
    okienko_container.id = "okienko_container";

    okienko_.appendChild(okienko_container);

    element_do_ktorego_dopisuje.appendChild(okienko_);

    return;
}


//---------------------------------------- OBSŁUGA KLAWISZY ----------------------------------------//

//---- Włączanie skryptu ----//
window.addEventListener("keydown", wduszono_button, false);
window.addEventListener("keyup", puszczono_button, false);

var tablica_buttons = [];
var guard_press = 1;
var tool_destruction_status = 1;

function wduszono_button(klawisz) {
    tablica_buttons[klawisz.keyCode] = true;
}

function puszczono_button(klawisz) {
    if (tablica_buttons[16] && tablica_buttons[88] && guard_press == 0) {
        guard_press = 1;
        aktywacja_skryptu(guard_press);

    }
    else if (tablica_buttons[16] && tablica_buttons[88] && guard_press == 1) {
        guard_press = 0;
        aktywacja_skryptu(guard_press);

    }
    tablica_buttons[klawisz.keyCode] = false;

}

//---------------------------------------- CIAŁO SKRYPTU ----------------------------------------//

//---- Wywołanie skryptu ----//

function aktywacja_skryptu(status_aktywacji) {
    if (status_aktywacji == 1 && tool_destruction_status == 1) {

        //-#Podpięcie skryptów-#//
        //#Jquerry
        //  var jquerry_script = document.createElement('SCRIPT');
        // jquerry_script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
        // document.head.appendChild(jquerry_script);

        //#Jquerry interface scripts
        /*var jquerry_interface_script = document.createElement('SCRIPT');
        jquerry_interface_script.src = "http://code.jquery.com/ui/1.11.4/jquery-ui.js";
        document.head.appendChild(jquerry_interface_script);*/

        //--#Podpięcie styli#--//

        var lista_styli = '';

        lista_styli = '.button_informacyjny{\
    font-size:13px !important;\
    font-weight:bold !important;\
    color:white !important;\
    width:auto !important;\
    border-radius:15px !important;\
    text-align:center !important;\
    float:right !important;\
    border:1px yellow groove !important;\
    padding:3px !important;\
    }\
    .tooltip_left{\
            background-color:gray;\
            border:2px black solid;\
            position:fixed;\
            z-index:999;\
            left:1px;\
            top:200px;}\
    .left_tooltip_button{\
    background-color: white;\
    border: 2px solid black;\
    border-radius: 5px;\
    box-shadow: 5px 8px 15px gray inset, -5px -8px 5px gray inset;\
    color: black;\
    float: left;\
    font-size: 13px;\
    font-weight: 900;\
    height: 40px;\
    margin: 3px;\
    padding: 3px;\
    text-align: center;\
    width: 40px;    \
    cursor:pointer;\
    }\
    .single_window{\
         width:60%;\
         z-index:999;\
         background-color:rgba(35,35,35,0.98);\
         min-width:100px;\
         position:fixed;top:200px;\
         left:240px;\
         min-height:500px;\
        }\
    .leftSectionMdJsonInput{\
           display:block;\
           margin:3px;\
           font-size: 17px;\
           }\
        #right_secion_md_json>span{\
              color:yellow; }\
    #draggable_inputs_interface{\
        padding:20px;\
    }\
    #draggable_inputs_interface>li{\
        float:left;\
    }\
    #draggable_inputs_interface>li>input{\
        display:inline;\
    }\
    #draggable_inputs_interface>li>span{\
        margin-left:40px;\
        color:yellow;\
    }\
    #draggable_inputs_interface>li:before{\
        content:"?" ;    \
        color:white;\
        display:inline;\
        float:left;\
        margin: 0;\
        padding: 0;\
        margin-top:0px;\
        margin-right:25px;\
        cursor:pointer;\
        font-weight:bold;\
}\
    .w_panelu{\
        color:white;\
        margin-top:12px;\
        text-shadow:1px 1px 1px black, -1px -1px 1px black;\
    }\
    .w_panelu, .w_panelu>div{\
        font-size:13px !important;\
    }\
    .znaki_tekstu::after{\
       content: attr(data-vol_znaki); \
        color:black;\
        background-color:orange;\
    }\
        ';

        var style_podpinane = document.createElement("STYLE");
        var style_text_node = document.createTextNode(lista_styli);
        style_podpinane.appendChild(style_text_node);

        document.getElementsByTagName('BODY')[0].appendChild(style_podpinane);


        //--#Budowa elementów składowych#--//

        //# Pokaż nagłówki
        var div_append_h1 = document.createElement("div");
        var text_node_h1 = document.createTextNode("<h1>");
        div_append_h1.appendChild(text_node_h1);

        div_append_h1.className = 'button_informacyjny';
        div_append_h1.style.backgroundColor = "red";
        div_append_h1.id = 'oznaczony_element_h1';


        var div_append_h2 = document.createElement("div");
        var text_node_h2 = document.createTextNode("<h2>");
        div_append_h2.appendChild(text_node_h2);

        div_append_h2.className = 'button_informacyjny';
        div_append_h2.style.backgroundColor = "blue";
        div_append_h2.id = 'oznaczony_element_h2';

        var div_append_h3 = document.createElement("div");
        var text_node_h3 = document.createTextNode("<h3>");
        div_append_h3.appendChild(text_node_h3);

        div_append_h3.className = 'button_informacyjny';
        div_append_h3.style.backgroundColor = "violet";
        div_append_h3.id = 'oznaczony_element_h3';

        var div_append_h4 = document.createElement("div");
        var text_node_h4 = document.createTextNode("<h4>");
        div_append_h4.appendChild(text_node_h4);

        div_append_h4.className = 'button_informacyjny';
        div_append_h4.style.backgroundColor = "goldenrod";
        div_append_h4.id = 'oznaczony_element_h4';

        var div_append_h5 = document.createElement("div");
        var text_node_h5 = document.createTextNode("<h5>");
        div_append_h5.appendChild(text_node_h5);

        div_append_h5.className = 'button_informacyjny';
        div_append_h5.style.backgroundColor = "olive";
        div_append_h5.id = 'oznaczony_element_h5';

        var div_append_h6 = document.createElement("div");
        var text_node_h6 = document.createTextNode("<h6>");
        div_append_h6.appendChild(text_node_h6);

        div_append_h6.className = 'button_informacyjny';
        div_append_h6.style.backgroundColor = "mediumslateblue";
        div_append_h6.id = 'oznaczony_element_h6';

        //#h1
        var h1_w_kodzie = document.getElementsByTagName("h1");
        var ile_h1_w_kodzie = h1_w_kodzie.length;


        for (var x = 0; x <= ile_h1_w_kodzie - 1; x++) {
            h1_w_kodzie[x].style.border = "2px red dashed";
            h1_w_kodzie[x].setAttribute('data-vol-tool','true');
            h1_w_kodzie[x].appendChild(div_append_h1.cloneNode(true));
        }

        //#h2
        var h2_w_kodzie = document.getElementsByTagName("h2");
        var ile_h2_w_kodzie = h2_w_kodzie.length;


        for (var x = 0; x <= ile_h2_w_kodzie - 1; x++) {
            h2_w_kodzie[x].style.border = "2px blue dotted";
            h2_w_kodzie[x].setAttribute('data-vol-tool', 'true');
            h2_w_kodzie[x].appendChild(div_append_h2.cloneNode(true));

        }

        //#h3
        var h3_w_kodzie = document.getElementsByTagName("h3");
        var ile_h3_w_kodzie = h3_w_kodzie.length;


        for (var x = 0; x <= ile_h3_w_kodzie - 1; x++) {
            h3_w_kodzie[x].style.border = "2px rgb(238,130,238) dotted";
            h3_w_kodzie[x].setAttribute('data-vol-tool', 'true');
            h3_w_kodzie[x].appendChild(div_append_h3.cloneNode(true));

        }
        //#h4
        var h4_w_kodzie = document.getElementsByTagName("h4");
        var ile_h4_w_kodzie = h4_w_kodzie.length;


        for (var x = 0; x <= ile_h4_w_kodzie - 1; x++) {
            h4_w_kodzie[x].style.border = "2px goldenrod dotted";
            h4_w_kodzie[x].setAttribute('data-vol-tool', 'true');
            h4_w_kodzie[x].appendChild(div_append_h4.cloneNode(true));

        }

        //#h5
        var h5_w_kodzie = document.getElementsByTagName("h5");
        var ile_h5_w_kodzie = h5_w_kodzie.length;


        for (var x = 0; x <= ile_h5_w_kodzie - 1; x++) {
            h5_w_kodzie[x].style.border = "2px olive dotted";
            h5_w_kodzie[x].setAttribute('data-vol-tool', 'true');
            h5_w_kodzie[x].appendChild(div_append_h5.cloneNode(true));

        }

        //#h6
        var h6_w_kodzie = document.getElementsByTagName("h6");
        var ile_h6_w_kodzie = h6_w_kodzie.length;


        for (var x = 0; x <= ile_h6_w_kodzie - 1; x++) {
            h6_w_kodzie[x].style.border = "2px mediumslateblue dotted";
            h6_w_kodzie[x].setAttribute('data-vol-tool', 'true');
            h6_w_kodzie[x].appendChild(div_append_h6.cloneNode(true));

        }

        //alty na grafice

        var wszystkie_img = document.getElementsByTagName('img');
        var ile_img = wszystkie_img.length;
        var alt_na_grafice, alt_append, alt_append_text;


        alt_append = document.createElement('div');
        alt_append.className = 'button_informacyjny';
        alt_append.style.backgroundColor = "black";
        alt_append.id = 'oznaczony_element_alt';

        for (var z = 0; z <= ile_img - 1; z++) {
            if (wszystkie_img[z].alt != false && wszystkie_img[z].alt != null && wszystkie_img[z].alt != '') {
                alt_append_text = document.createTextNode('>ALT< -' + wszystkie_img[z].alt);
                alt_append.appendChild(alt_append_text);

                wszystkie_img[z].parentElement.appendChild(alt_append.cloneNode(true));
                wszystkie_img[z].style.outline = "2px green solid";
                wszystkie_img[z].setAttribute('data-vol-tool', 'true');
                alt_append_text.parentNode.removeChild(alt_append_text);
            }
            else {
                wszystkie_img[z].style.outline = "2px green solid";
                wszystkie_img[z].setAttribute('data-vol-tool', 'true');
            }

        }

        //ramki

        var wszystkie_ramki = document.getElementsByTagName('iframe');
        var ile_ramek = wszystkie_ramki.length;
        var div_append_iframe, iframe_append_text;
        div_append_iframe = document.createElement('DIV');
        iframe_append_text = document.createTextNode("<iframe>");
        div_append_iframe.appendChild(iframe_append_text);

        var ramki_na_stronie = 0;


        div_append_iframe.className = 'button_informacyjny';
        div_append_iframe.style.backgroundColor = "rgba(120,20,200,0.9";
        div_append_iframe.id = 'oznaczony_element_ramka';

        for (var z = 0; z <= ile_ramek - 1; z++) {

            wszystkie_ramki[z].parentElement.appendChild(div_append_iframe.cloneNode(true));
            wszystkie_ramki[z].style.border = "3px dashed rgb(121,31,193)";
            wszystkie_ramki[z].setAttribute('data-vol-tool', 'true');
            ramki_na_stronie++;

        }
        //title na <a>

        var wszystkie_a = document.getElementsByTagName('a');
        var ile_a = wszystkie_a.length;
        var alt_na_urlu, title_append, title_append_text;

        title_append = document.createElement('div');
        title_append.className = 'button_informacyjny';
        title_append.style.backgroundColor = "black";
        title_append.id = 'oznaczony_element_title';

        for (var z = 0; z <= ile_a - 1; z++) {
            if (wszystkie_a[z].title != false && wszystkie_a[z].title != null && wszystkie_a[z].title != '') {

                title_append_text = document.createTextNode('>title< -' + wszystkie_a[z].title.substring(0, 100));
                title_append.appendChild(title_append_text);

                wszystkie_a[z].appendChild(title_append.cloneNode(true));
                wszystkie_a[z].style.outline = "2px orange solid";
                wszystkie_a[z].setAttribute('data-vol-tool', 'true');

                title_append_text.parentNode.removeChild(title_append_text);

            } else {
                wszystkie_a[z].style.outline = "2px orange solid";
                wszystkie_a[z].setAttribute('data-vol-tool', 'true');
            }
        }


        //Potencjalnie ukryty TAG
        var wszystkie_elementy = document.getElementsByTagName('*');
        var ile_elementow = wszystkie_elementy.length;
        var _ile_ukrytych_elementow = 0;
        var _ile_ukrytych_tresci = 0;
        var _ile_ukrytych_naglowkow = 0;

        //Dla tagów
        var div_append_ukryte = document.createElement("div");
        var text_node_ukryte = document.createTextNode("<Hidden Tags>");
        div_append_ukryte.appendChild(text_node_ukryte);

        div_append_ukryte.className = 'button_informacyjny';
        div_append_ukryte.style.backgroundColor = "darkred";
        div_append_ukryte.id = 'oznaczony_element_ukryte_ogolnie';

        //Dla tresci
        var div_append_ukryte_tresci = document.createElement("div");
        var text_node_ukryte_tresci = document.createTextNode("<Hidden text>");
        div_append_ukryte_tresci.appendChild(text_node_ukryte_tresci);

        div_append_ukryte_tresci.className = 'button_informacyjny';
        div_append_ukryte_tresci.style.backgroundColor = "darkgreen";
        div_append_ukryte_tresci.id = 'oznaczony_element_ukryte_tresci';

        //Dla ukrytych <h>
        var div_append_ukryte_naglowki = document.createElement("div");
        var text_node_ukryte_naglowki = document.createTextNode("<Hidden H-x>");
        div_append_ukryte_naglowki.appendChild(text_node_ukryte_naglowki);

        div_append_ukryte_naglowki.className = 'button_informacyjny';
        div_append_ukryte_naglowki.style.backgroundColor = "darkorange";
        div_append_ukryte_naglowki.id = 'oznaczony_element_ukryte_naglowki';

        var ukryte_h1_title = 0;
        var ukryte_h2_title = 0;
        var ukryte_h3_title = 0;
        var ukryte_h4_title = 0;
        var ukryte_h5_title = 0;
        var ukryte_h6_title = 0;

        for (var z = 0; z <= ile_elementow - 1; z++) {

            //# Weź style danego elementu
            var style_elementu = window.getComputedStyle(wszystkie_elementy[z]);

            //# Sprawdź czy ukryty i oznacz

            if (style_elementu.getPropertyValue('display') == 'none' && wszystkie_elementy[z].tagName != 'LI' && wszystkie_elementy[z].tagName != 'UL' && wszystkie_elementy[z].tagName != 'A') {
                if (wszystkie_elementy[z].id.match(/navi/gi) == null && wszystkie_elementy[z].id.match(/menu/gi) == null &&
                   wszystkie_elementy[z].className.match(/navi/gi) == null && wszystkie_elementy[z].className.match(/menu/gi) == null &&
                    // Dla przypadków gdy brane są elementy zagłębione w menu
                   wszystkie_elementy[z].parentElement.className.match(/navi/gi) == null && wszystkie_elementy[z].parentElement.className.match(/menu/gi) == null &&
                   wszystkie_elementy[z].parentElement.id.match(/navi/gi) == null && wszystkie_elementy[z].parentElement.id.match(/menu/gi) == null
                  ) {
                    var ukryty_element = document.createElement('div');
                    var ukryty_element_text = document.createTextNode('Tu ukryty element');
                    ukryty_element.appendChild(ukryty_element_text);

                    ukryty_element.style.display = "block";

                    var parent_node_elementu = wszystkie_elementy[z].parentNode;
                    _ile_ukrytych_elementow++;

                    if (wszystkie_elementy[z].innerHTML.replace(/<[^>]+>/g, '').length > 300
                    && wszystkie_elementy[z].tagName != "SCRIPT" && wszystkie_elementy[z].tagName != "STYLE"
                    && wszystkie_elementy[z].parentElement.tagName != "BODY" && wszystkie_elementy[z].tagName != "HEAD" && wszystkie_elementy[z].tagName != "IFRAME") {
                        wszystkie_elementy[z].style.border = "2px green dotted";
                        wszystkie_elementy[z].parentElement.appendChild(div_append_ukryte_tresci.cloneNode(true));

                        _ile_ukrytych_tresci++;
                    }


                    //Dla ukrytych Hx
                    var dzieci_elementu = wszystkie_elementy[z].getElementsByTagName('*');
                    var ile_dzieci = dzieci_elementu.length;

                    for (var q = 0; q <= ile_dzieci - 1; q++) {
                        var matched_hx = dzieci_elementu[q].tagName.match(/(H[0-6]+)/);
                        if (dzieci_elementu[q].tagName.match(/(H[0-6]+)/g)) {
                            _ile_ukrytych_naglowkow++;

                           if(matched_hx[0].match(/H1/g))
                            {
                                ukryte_h1_title++;
                            }
                            else if(matched_hx[0].match(/H2/g))
                            {
                                ukryte_h2_title++;
                            }
                            else if(matched_hx[0].match(/H3/g))
                            {
                                ukryte_h3_title++;
                            }
                            else if(matched_hx[0].match(/H4/g))
                            {
                                ukryte_h4_title++;
                            }
                            else if(matched_hx[0].match(/H5/g))
                            {
                                ukryte_h5_title++;
                            }
                            else if (matched_hx[0].match(/H6/g)) {
                                ukryte_h6_title++;
                            }

                        }

                    }

                }
            }
        }

        //Doklejanie wykazu ukrytych HX
        div_append_ukryte_naglowki.title += 'H6: ' + ukryte_h6_title + '\nH5: ' + ukryte_h5_title + '\nH4: ' + ukryte_h4_title + '\nH3: ' + ukryte_h3_title + '\nH2: ' + ukryte_h2_title + '\nH1: ' + ukryte_h1_title;

        //--#Mikrodane--#\\

        var div_append_mikrodane_NAP_HTML = document.createElement("div");
        var text_node_mikrodane_NAP_HTML = document.createTextNode("NAP-MD-HTML");
        div_append_mikrodane_NAP_HTML.appendChild(text_node_mikrodane_NAP_HTML);

        div_append_mikrodane_NAP_HTML.style.fontSize = "13px";
        div_append_mikrodane_NAP_HTML.style.fontWeight = "bold";
        div_append_mikrodane_NAP_HTML.style.backgroundColor = "darkcyan";
        div_append_mikrodane_NAP_HTML.style.color = "white";
        div_append_mikrodane_NAP_HTML.style.width = "auto";
        div_append_mikrodane_NAP_HTML.style.borderRadius = "15px";
        div_append_mikrodane_NAP_HTML.style.textAlign = "center";
        div_append_mikrodane_NAP_HTML.style.float = "right";
        div_append_mikrodane_NAP_HTML.style.border = "1px yellow groove";
        div_append_mikrodane_NAP_HTML.style.padding = "3px";
        div_append_mikrodane_NAP_HTML.id = 'oznaczony_element_MD_NAP_HTML';

        var div_append_mikrodane_NAP_JSON = document.createElement("div");
        var text_node_mikrodane_NAP_JSON = document.createTextNode("NAP-MD-JSON");
        div_append_mikrodane_NAP_JSON.appendChild(text_node_mikrodane_NAP_JSON);

        div_append_mikrodane_NAP_JSON.style.fontSize = "13px";
        div_append_mikrodane_NAP_JSON.style.fontWeight = "bold";
        div_append_mikrodane_NAP_JSON.style.backgroundColor = "darkcyan";
        div_append_mikrodane_NAP_JSON.style.color = "white";
        div_append_mikrodane_NAP_JSON.style.width = "auto";
        div_append_mikrodane_NAP_JSON.style.borderRadius = "15px";
        div_append_mikrodane_NAP_JSON.style.textAlign = "center";
        div_append_mikrodane_NAP_JSON.style.float = "right";
        div_append_mikrodane_NAP_JSON.style.border = "1px yellow groove";
        div_append_mikrodane_NAP_JSON.style.padding = "3px";
        div_append_mikrodane_NAP_JSON.id = 'oznaczony_element_MD_NAP_JSON';

        var mikrodane_nap_ilosc = 0, mikrodane_html_nap_ilosc = 0, mikrodane_Json_nap_ilosc = 0, itemp_type;

        var tablica_typow = ['LocalBusiness',
       'Airline',
       'Corporation',
       'EducationalOrganization',
       'GovernmentOrganization',
       'NGO',
       'PerformingGroup',
       'SportsOrganization',
       'CollegeOrUniversity',
       'ElementarySchool',
       'HighSchool',
       'MiddleSchool',
       'Preschool',
       'School',
       'AnimalShelter',
       'AutomotiveBusiness',
       'ChildCare',
       'DryCleaningOrLaundry',
       'EmergencyService',
       'EmploymentAgency',
       'EntertainmentBusiness',
       'FinancialService',
       'FoodEstablishment',
       'GovernmentOffice',
       'HealthAndBeautyBusiness',
       'HomeAndConstructionBusiness',
       'InternetCafe',
       'Library',
       'LodgingBusiness',
       'MedicalOrganization',
       'ProfessionalService',
       'RadioStation',
       'RealEstateAgent',
       'RecyclingCenter',
       'SelfStorage',
       'ShoppingCenter',
       'SportsActivityLocation',
       'Store',
       'TelevisionStation',
       'TouristInformationCenter',
       'TravelAgency',
       'DanceGroup',
       'MusicGroup',
       'TheaterGroup',
       'SportsTeam'];

        // mikrodane_html_nap_ilosc=0,mikrodane_Json_nap_ilosc=0;
        //--#Sprawdź czy na stronie jest odwołanie do schema Org
        for (x = 0; x < wszystkie_elementy.length - 1; x++) {
            //--#DLA wersji HTML
            itemp_type = wszystkie_elementy[x].getAttribute('itemtype');
            //--#Czy atrybut istnieje
            if (itemp_type != undefined) {   //--#Czy jest schema org i czy doyczy NAP
                if (itemp_type.match(/schema\.org/i) && itemp_type.match(/PostalAddress/i)) {
                    mikrodane_nap_ilosc++;
                    mikrodane_html_nap_ilosc++
                }
            }

            //--#DLA wersji JSONEM
            if (wszystkie_elementy[x].tagName == "SCRIPT") {
                var zawartosc_skryptu = wszystkie_elementy[x].innerHTML;
                //--#Czy jest schema org i czy doyczy NAP
                if (zawartosc_skryptu.match(/schema\.org/i) && zawartosc_skryptu.match(/"@type": "PostalAddress"/i)) {
                    mikrodane_nap_ilosc++;
                    mikrodane_Json_nap_ilosc++;
                }

            }
        }

        //--#LINKI-liczenie i nofollow.txt--#\\
        //#Generowanie do panelu
        var div_append_linki_w_kodzie_wszystkie = document.createElement("div");
        var text_node_linki_w_kodzie_wszystkie = document.createTextNode("<a> w sumie");
        div_append_linki_w_kodzie_wszystkie.appendChild(text_node_linki_w_kodzie_wszystkie);

        div_append_linki_w_kodzie_wszystkie.className = 'button_informacyjny';
        div_append_linki_w_kodzie_wszystkie.style.backgroundColor = "rgb(116,77,104)";


        var div_append_linki_w_kodzie_wychodzi = document.createElement("div");
        var text_node_linki_w_kodzie_wychodzi = document.createTextNode("<a> wychodzi");
        div_append_linki_w_kodzie_wychodzi.appendChild(text_node_linki_w_kodzie_wychodzi);

        div_append_linki_w_kodzie_wychodzi.className = 'button_informacyjny';
        div_append_linki_w_kodzie_wychodzi.style.backgroundColor = "rgb(116,77,104)";
        div_append_linki_w_kodzie_wychodzi.style.border = "22px rgb(238,14,137) solid !important";

        //#Wykonanie
        var linki_w_kodzie_wszystkie = document.getElementsByTagName("A");
        var ile_linki_w_kodzie = linki_w_kodzie_wszystkie.length;
        var ile_linki_wychodzace = 0;
        var domena = document.domain;
        domena = domena.replace('www.', '');

        var domena_match = new RegExp(domena);
        //#Nofollow

        for (var x = 0; x <= ile_linki_w_kodzie - 1; x++) {

            if (!linki_w_kodzie_wszystkie[x].href.match(domena_match) && linki_w_kodzie_wszystkie[x].href!=false)
            {
              ile_linki_wychodzace++;

              //#oznaczenie nofoolow
              linki_w_kodzie_wszystkie[x].style.backgroundColor="rgb(116,77,104)";
              linki_w_kodzie_wszystkie[x].style.color="white";
              linki_w_kodzie_wszystkie[x].style.border="3px yellow solid"  ;
              linki_w_kodzie_wszystkie[x].style.boxShadow="1px 1px 1px pink"  ;
              linki_w_kodzie_wszystkie[x].style.borderRadius="12px"  ;
              linki_w_kodzie_wszystkie[x].style.padding = "3px";
              linki_w_kodzie_wszystkie[x].setAttribute('vol-tool-external-links','true');
            }

        }

        //--#Robots.txt--#\\

        //# Dodatkowe funkcje
        var temp_test_var = ''
        //#funkcja sprawdzajaca czy cos jest zablokowane
        function sprawdz_zablokowane_zasoby(sciezka, typ) {

            // Pętla ubija skrypt...
            for (z = 0; z <= tablica_disallow_rozmiar; z++) {
                var dopasowanie_regex = new RegExp(tablica_disallow[z]);
                if (sciezka.match(dopasowanie_regex) != null && tablica_disallow[z] != undefined) {
                    zablokowane_media_ilosc++;

                    //#dla grafik
                    if (typ == "IMG") {
                        zablokowane_media_img++;
                        blokowane_foldery_grafika += tablica_disallow[z] + '\n';
                    }
                    else if (typ == "CSS") {
                        zablokowane_media_css_ilosc++;
                        blokowane_foldery_css += tablica_disallow[z] + '\n';
                    }
                    else if (typ == "JS") {
                        zablokowane_media_js_ilosc++;
                        blokowane_foldery_js += tablica_disallow[z] + '\n';
                    }
                    else {
                        blokowane_foldery_inne += tablica_disallow[z] + '\n';
                    }

                    break;
                }

            }

        }

        //#Pobierz zawartość pliku
        var ajax_pobieranie_pliku = new XMLHttpRequest();
        var zawartosc_pliku_robots = '', tablica_disallow, tablica_disallow_rozmiar, robots_odfiltrowany;
        var zablokowane_media_ilosc = 0, zablokowane_media_css_ilosc = 0, zablokowane_media_js_ilosc = 0, zablokowane_media_img = 0, zablokowane_media_css = 0, zablokowane_media_inne = 0;

        var blokowane_foldery_grafika = '', blokowane_foldery_css = '', blokowane_foldery_js = '', blokowane_foldery_inne = '', czy_robots_istnieje = 'File Exists';

        var plik_do_pobrania = window.location.protocol+"//" + document.domain + "/robots.txt";
        ajax_pobieranie_pliku.open("GET",plik_do_pobrania, false);
        ajax_pobieranie_pliku.send();

        zawartosc_pliku_robots = ajax_pobieranie_pliku.responseText;


        tablica_disallow = zawartosc_pliku_robots.match(/Disallow(.*)/g);
        //document.getElementById('pagecontent').innerHTML=tablica_disallow;

        //Dodatkowe zabezpieczenie jeśli plik nie istnieje - z tego zrobić zmienną
        if (tablica_disallow != undefined && tablica_disallow != null && tablica_disallow != false && tablica_disallow != '') {

            tablica_disallow_rozmiar = tablica_disallow.length;

            //Czyszczenie tablicy, zostawiam tylko foldery itp.
            for (x = 0; x <= tablica_disallow_rozmiar - 1; x++) {
                tablica_disallow[x] = tablica_disallow[x].replace('Disallow:', '');
                //Filtrowanie znaków, które sypią regexa
                tablica_disallow[x] = tablica_disallow[x].replace(/\//g, '');
                tablica_disallow[x] = tablica_disallow[x].replace(/[^a-zA-Z0-9.]/g, '');
            }

            //Sprawdzam czy jakieś zasoby są zablokowane
            for (x = 0; x < wszystkie_elementy.length - 1; x++) {
                //Czy w ogóle coś jest zablokowane w SRC
                if (wszystkie_elementy[x].src != undefined) {
                    if (wszystkie_elementy[x].tagName == "IMG") {
                        sprawdz_zablokowane_zasoby(wszystkie_elementy[x].src, "IMG");
                    }
                    else if (wszystkie_elementy[x].src.match(/(.*)\.js/)) {
                        sprawdz_zablokowane_zasoby(wszystkie_elementy[x].src, "JS");
                    }
                    else {
                        sprawdz_zablokowane_zasoby(wszystkie_elementy[x].src, "wszystkie");
                    }

                }
                    //Czy w ogóle coś jest zablokowane w Href
                else if (wszystkie_elementy[x].href != undefined) {
                    if (wszystkie_elementy[x].href.match(/(.*)\.css/)) {
                        sprawdz_zablokowane_zasoby(wszystkie_elementy[x].href, "CSS");
                    }
                    else {
                        sprawdz_zablokowane_zasoby(wszystkie_elementy[x].href, "wszystkie");
                    }
                }
            }
            zablokowane_media_inne = zablokowane_media_ilosc - zablokowane_media_img - zablokowane_media_css_ilosc - zablokowane_media_js_ilosc;
        }//Koniec zabezpieczenia - jeśli robots nie istnieje
        else {
            czy_robots_istnieje = 'Brak/0 Disal.';
        }

        //----# Zliczanie znaków #----/
        for (m = 0; m <= ile_elementow - 1; m++)
        {
            var obliczone_style = window.getComputedStyle(wszystkie_elementy[m]);
            var display_style_status = obliczone_style.getPropertyValue('display');

            if (wszystkie_elementy[m].innerHTML.replace(/<[^>]+>/g, '').length > 300
                && wszystkie_elementy[m].tagName != "SCRIPT" && wszystkie_elementy[m].tagName != "STYLE"
                && wszystkie_elementy[m].tagName != "BODY" && wszystkie_elementy[m].tagName != "HEAD"
                && wszystkie_elementy[m].tagName != "IFRAME" && wszystkie_elementy[m].tagName =='P'
                )
            {
                var znaki = wszystkie_elementy[m].innerHTML.replace(/<[^>]+>/g, '');

                wszystkie_elementy[m].setAttribute('data-vol_znaki', znaki.length);
                wszystkie_elementy[m].setAttribute('vol_tool_text_number', 'true');
                var oryginalna_klasa = wszystkie_elementy[m].getAttribute('class');
                if (oryginalna_klasa == null) {
                    oryginalna_klasa = '';
                }

                var nowa_klasa = oryginalna_klasa + ' znaki_tekstu';
                wszystkie_elementy[m].setAttribute('class', nowa_klasa);

                //.znaki_tekstu
            };

        }

        //--#APPENDY ROBOTS#--//
        //#Ogólnie wszystkie zasoby appendy
        var div_append_robots_zasoby_zablokowane = document.createElement("div");
        var text_node_robots_zasoby_zablokowane = document.createTextNode("robo.txt - zasoby");
        div_append_robots_zasoby_zablokowane.appendChild(text_node_robots_zasoby_zablokowane);

        div_append_robots_zasoby_zablokowane.className = 'button_informacyjny';
        div_append_robots_zasoby_zablokowane.style.backgroundColor = "midnightblue";
        div_append_robots_zasoby_zablokowane.id = 'oznaczony_element_robots_zasoby_zablokowane_ogolnie';

        //#Zablokowane grafiki appendy
        var div_append_robots_zasoby_zablokowane_grafiki = document.createElement("div");
        var text_node_robots_zasoby_zablokowane_grafiki = document.createTextNode("robo.txt - IMG");
        div_append_robots_zasoby_zablokowane_grafiki.appendChild(text_node_robots_zasoby_zablokowane_grafiki);

        div_append_robots_zasoby_zablokowane_grafiki.className = 'button_informacyjny';
        div_append_robots_zasoby_zablokowane_grafiki.style.backgroundColor = "midnightblue";
        div_append_robots_zasoby_zablokowane_grafiki.id = 'oznaczony_element_robots_zasoby_zablokowane_grafiki_ogolnie';
        div_append_robots_zasoby_zablokowane_grafiki.title = blokowane_foldery_grafika;

        //#Zablokowane CSSy appendy
        var div_append_robots_zasoby_zablokowane_css = document.createElement("div");
        var text_node_robots_zasoby_zablokowane_css = document.createTextNode("robo.txt - CSS");
        div_append_robots_zasoby_zablokowane_css.appendChild(text_node_robots_zasoby_zablokowane_css);

        div_append_robots_zasoby_zablokowane_css.className = 'button_informacyjny';
        div_append_robots_zasoby_zablokowane_css.style.backgroundColor = "midnightblue";
        div_append_robots_zasoby_zablokowane_css.id = 'oznaczony_element_robots_zasoby_zablokowane_css';
        div_append_robots_zasoby_zablokowane_css.title = blokowane_foldery_css;

        //#Zablokowane JSy appendy
        var div_append_robots_zasoby_zablokowane_js = document.createElement("div");
        var text_node_robots_zasoby_zablokowane_js = document.createTextNode("robo.txt - JS");
        div_append_robots_zasoby_zablokowane_js.appendChild(text_node_robots_zasoby_zablokowane_js);

        div_append_robots_zasoby_zablokowane_js.className = 'button_informacyjny';
        div_append_robots_zasoby_zablokowane_js.style.backgroundColor = "midnightblue";
        div_append_robots_zasoby_zablokowane_js.id = 'oznaczony_element_robots_zasoby_zablokowane_js';
        div_append_robots_zasoby_zablokowane_js.title = blokowane_foldery_js;


        //#Zablokowane INNE appendy
        var div_append_robots_zasoby_zablokowane_inne = document.createElement("div");
        var text_node_robots_zasoby_zablokowane_inne = document.createTextNode("robo.txt - Others");
        div_append_robots_zasoby_zablokowane_inne.appendChild(text_node_robots_zasoby_zablokowane_inne);

        div_append_robots_zasoby_zablokowane_inne.className = 'button_informacyjny';
        div_append_robots_zasoby_zablokowane_inne.style.backgroundColor = "midnightblue";
        div_append_robots_zasoby_zablokowane_inne.id = 'oznaczony_element_robots_zasoby_zablokowane_inne';
        div_append_robots_zasoby_zablokowane_inne.title = blokowane_foldery_inne;

        //#Czy robots.txt istnieje
        var div_append_robots_istnienie_pliku = document.createElement("div");
        var text_node_robots_istnienie_pliku = document.createTextNode("robo.txt - STATUS");
        div_append_robots_istnienie_pliku.appendChild(text_node_robots_istnienie_pliku);

        div_append_robots_istnienie_pliku.className = 'button_informacyjny';
        div_append_robots_istnienie_pliku.style.backgroundColor = "midnightblue";
        div_append_robots_istnienie_pliku.id = 'oznaczony_element_robots_istnienie_pliku';
        div_append_robots_istnienie_pliku.title = blokowane_foldery_inne;


        //#Nofollow i liczenie linków#//

        //#W sumie linków
        var div_append_linki_w_kodzie_wszystkie_panel = document.createElement("div");
        var text_node_linki_w_kodzie_wszystkie_panel = document.createTextNode("<a> on page");
        div_append_linki_w_kodzie_wszystkie_panel.appendChild(text_node_linki_w_kodzie_wszystkie_panel);

        div_append_linki_w_kodzie_wszystkie_panel.className = 'button_informacyjny';
        div_append_linki_w_kodzie_wszystkie_panel.style.backgroundColor = "midnightblue";

        //#W sumie wychodzi
        var div_append_linki_w_kodzie_wychodzi_panel = document.createElement("div");
        var text_node_linki_w_kodzie_wychodzi_panel = document.createTextNode("<a> External");
        div_append_linki_w_kodzie_wychodzi_panel.appendChild(text_node_linki_w_kodzie_wychodzi_panel);

        div_append_linki_w_kodzie_wychodzi_panel.className = 'button_informacyjny';
        div_append_linki_w_kodzie_wychodzi_panel.style.backgroundColor = "midnightblue";

        // document.getElementsByTagName('container').innerHTML=zablokowane_media_ilosc+'<br\><br\><br\>'+temp_test_var;

        //-----------------------Statystyki-----------------------------------------\\

        //# Główne ustawienia panelu
        var stats_panel = document.createElement('div');

        stats_panel.style.backgroundColor = "gray";
        stats_panel.style.border = "2px black solid";
        stats_panel.style.position = "fixed";
        stats_panel.style.zIndex = "999";
        stats_panel.style.right = "1px";
        stats_panel.style.top = "200px";


        //--------# Tworzenie elementów #--------//

        var stats_panel_h1 = document.createElement('div');
        var stats_panel_h1_text = document.createTextNode(' { ' + ile_h1_w_kodzie + ' }');
        stats_panel_h1.appendChild(div_append_h1);
        stats_panel_h1.appendChild(stats_panel_h1_text);

        var stats_panel_h2 = document.createElement('div');
        var stats_panel_h2_text = document.createTextNode(' { ' + ile_h2_w_kodzie + ' }');
        stats_panel_h2.appendChild(div_append_h2);
        stats_panel_h2.appendChild(stats_panel_h2_text);

        var stats_panel_h3 = document.createElement('div');
        var stats_panel_h3_text = document.createTextNode(' { ' + ile_h3_w_kodzie + ' }');
        stats_panel_h3.appendChild(div_append_h3);
        stats_panel_h3.appendChild(stats_panel_h3_text);

        var stats_panel_h4 = document.createElement('div');
        var stats_panel_h4_text = document.createTextNode(' { ' + ile_h4_w_kodzie + ' }');
        stats_panel_h4.appendChild(div_append_h4);
        stats_panel_h4.appendChild(stats_panel_h4_text);

        var stats_panel_h5 = document.createElement('div');
        var stats_panel_h5_text = document.createTextNode(' { ' + ile_h5_w_kodzie + ' }');
        stats_panel_h5.appendChild(div_append_h5);
        stats_panel_h5.appendChild(stats_panel_h5_text);

        var stats_panel_h6 = document.createElement('div');
        var stats_panel_h6_text = document.createTextNode(' { ' + ile_h6_w_kodzie + ' }');
        stats_panel_h6.appendChild(div_append_h6);
        stats_panel_h6.appendChild(stats_panel_h6_text);

        var stats_panel_ukryte = document.createElement('div');
        var stats_panel_ukryte_text = document.createTextNode('{ ' + _ile_ukrytych_elementow + ' }');
        stats_panel_ukryte.appendChild(div_append_ukryte);
        stats_panel_ukryte.appendChild(stats_panel_ukryte_text);

        var stats_panel_ukryte_tresci = document.createElement('div');
        var stats_panel_ukryte_tresci_text = document.createTextNode('{ ' + _ile_ukrytych_tresci + ' }');
        stats_panel_ukryte_tresci.appendChild(div_append_ukryte_tresci);
        stats_panel_ukryte_tresci.appendChild(stats_panel_ukryte_tresci_text);

        var stats_panel_ukryte_naglowki = document.createElement('div');
        var stats_panel_ukryte_naglowki_text = document.createTextNode('{ ' + _ile_ukrytych_naglowkow + ' }');
        stats_panel_ukryte_naglowki.appendChild(div_append_ukryte_naglowki);
        stats_panel_ukryte_naglowki.appendChild(stats_panel_ukryte_naglowki_text);

        var stats_panel_mikrodane_nap_html = document.createElement('div');
        var stats_panel_mikrodane_nap_html_text = document.createTextNode('{ ' + mikrodane_html_nap_ilosc + ' }');
        stats_panel_mikrodane_nap_html.appendChild(div_append_mikrodane_NAP_HTML);
        stats_panel_mikrodane_nap_html.appendChild(stats_panel_mikrodane_nap_html_text);

        var stats_panel_mikrodane_nap_json = document.createElement('div');
        var stats_panel_mikrodane_nap_json_text = document.createTextNode('{ ' + mikrodane_Json_nap_ilosc + ' }');
        stats_panel_mikrodane_nap_json.appendChild(div_append_mikrodane_NAP_JSON);
        stats_panel_mikrodane_nap_json.appendChild(stats_panel_mikrodane_nap_json_text);

        var stats_panel_robots_zasoby_zablokowane = document.createElement('div');
        var stats_panel_robots_zasoby_zablokowane_text = document.createTextNode('{ ' + zablokowane_media_ilosc + ' }');
        stats_panel_robots_zasoby_zablokowane.appendChild(div_append_robots_zasoby_zablokowane);
        stats_panel_robots_zasoby_zablokowane.appendChild(stats_panel_robots_zasoby_zablokowane_text);

        var stats_panel_robots_zasoby_zablokowane_grafiki = document.createElement('div');
        var stats_panel_robots_zasoby_zablokowane_grafiki_text = document.createTextNode('{ ' + zablokowane_media_img + ' }');
        stats_panel_robots_zasoby_zablokowane_grafiki.appendChild(div_append_robots_zasoby_zablokowane_grafiki);
        stats_panel_robots_zasoby_zablokowane_grafiki.appendChild(stats_panel_robots_zasoby_zablokowane_grafiki_text);

        var stats_panel_robots_zasoby_zablokowane_css = document.createElement('div');
        var stats_panel_robots_zasoby_zablokowane_css_text = document.createTextNode('{ ' + zablokowane_media_css_ilosc + ' }');
        stats_panel_robots_zasoby_zablokowane_css.appendChild(div_append_robots_zasoby_zablokowane_css);
        stats_panel_robots_zasoby_zablokowane_css.appendChild(stats_panel_robots_zasoby_zablokowane_css_text);

        var stats_panel_robots_zasoby_zablokowane_js = document.createElement('div');
        var stats_panel_robots_zasoby_zablokowane_js_text = document.createTextNode('{ ' + zablokowane_media_js_ilosc + ' }');
        stats_panel_robots_zasoby_zablokowane_js.appendChild(div_append_robots_zasoby_zablokowane_js);
        stats_panel_robots_zasoby_zablokowane_js.appendChild(stats_panel_robots_zasoby_zablokowane_js_text);

        var stats_panel_robots_zasoby_zablokowane_inne = document.createElement('div');
        var stats_panel_robots_zasoby_zablokowane_inne_text = document.createTextNode('{ ' + zablokowane_media_inne + ' }');
        stats_panel_robots_zasoby_zablokowane_inne.appendChild(div_append_robots_zasoby_zablokowane_inne);
        stats_panel_robots_zasoby_zablokowane_inne.appendChild(stats_panel_robots_zasoby_zablokowane_inne_text);

        var stats_panel_robots_istnienie_pliku = document.createElement('div');
        var stats_panel_robots_istnienie_pliku_text = document.createTextNode('{ ' + czy_robots_istnieje + ' }');
        stats_panel_robots_istnienie_pliku.appendChild(div_append_robots_istnienie_pliku);
        stats_panel_robots_istnienie_pliku.appendChild(stats_panel_robots_istnienie_pliku_text);

        var stats_panel_ramki = document.createElement('div');
        var stats_panel_ramki_text = document.createTextNode('{ ' + ramki_na_stronie + ' }');
        stats_panel_ramki.appendChild(div_append_iframe);
        stats_panel_ramki.appendChild(stats_panel_ramki_text);

        var stats_panel_ile_linkow = document.createElement('div');
        var stats_panel_ile_linkow_text = document.createTextNode('{ ' + ile_linki_w_kodzie + ' }');
        stats_panel_ile_linkow.appendChild(div_append_linki_w_kodzie_wszystkie);
        stats_panel_ile_linkow.appendChild(stats_panel_ile_linkow_text);

        var stats_panel_ile_linkow_wychodzi = document.createElement('div');
        var stats_panel_ile_linkow_wychodzi_text = document.createTextNode('{ ' + ile_linki_wychodzace + ' }');
        stats_panel_ile_linkow_wychodzi.appendChild(div_append_linki_w_kodzie_wychodzi);
        stats_panel_ile_linkow_wychodzi.appendChild(stats_panel_ile_linkow_wychodzi_text);

        //# Style tworzonych elementów do statystyk
        div_append_h1.setAttribute('style', div_append_h1.getAttribute('style') + 'float:left !important;');
        div_append_h2.setAttribute('style', div_append_h2.getAttribute('style') + 'float:left !important;');
        div_append_h3.setAttribute('style', div_append_h3.getAttribute('style') + 'float:left !important;');
        div_append_h4.setAttribute('style', div_append_h4.getAttribute('style') + 'float:left !important;');
        div_append_h5.setAttribute('style', div_append_h5.getAttribute('style') + 'float:left !important;');
        div_append_h6.setAttribute('style', div_append_h6.getAttribute('style') + 'float:left !important;');
        div_append_ukryte.setAttribute('style', div_append_ukryte.getAttribute('style') + 'float:left !important;');
        div_append_ukryte_tresci.setAttribute('style', div_append_ukryte_tresci.getAttribute('style') + 'float:left !important;');
        div_append_ukryte_naglowki.setAttribute('style', div_append_ukryte_naglowki.getAttribute('style') + 'float:left !important;');
        div_append_iframe.setAttribute('style', div_append_iframe.getAttribute('style') + 'float:left !important;');
        div_append_linki_w_kodzie_wszystkie.setAttribute('style', div_append_linki_w_kodzie_wszystkie.getAttribute('style') + 'float:left !important;');
        div_append_linki_w_kodzie_wychodzi.setAttribute('style', div_append_linki_w_kodzie_wychodzi.getAttribute('style') + 'float:left !important;');

        div_append_mikrodane_NAP_HTML.style.float = 'left';
        div_append_mikrodane_NAP_JSON.style.float = 'left';

        div_append_robots_zasoby_zablokowane.setAttribute('style', div_append_robots_zasoby_zablokowane.getAttribute('style') + 'float:left !important;');
        div_append_robots_zasoby_zablokowane_grafiki.setAttribute('style', div_append_robots_zasoby_zablokowane_grafiki.getAttribute('style') + 'float:left !important;');
        div_append_robots_zasoby_zablokowane_css.setAttribute('style', div_append_robots_zasoby_zablokowane_css.getAttribute('style') + 'float:left !important;');
        div_append_robots_zasoby_zablokowane_js.setAttribute('style', div_append_robots_zasoby_zablokowane_js.getAttribute('style') + 'float:left !important;');
        div_append_robots_zasoby_zablokowane_inne.setAttribute('style', div_append_robots_zasoby_zablokowane_js.getAttribute('style') + 'float:left !important;');
        div_append_robots_istnienie_pliku.setAttribute('style', div_append_robots_zasoby_zablokowane_js.getAttribute('style') + 'float:left !important;');

        stats_panel.style.padding = "5px";
        stats_panel.style.minWidth = "200px";
        stats_panel.style.borderRadius = "5px";
        stats_panel.id = 'sidebar_panel';

        //--------# Appendy do paska #--------//

        stats_panel.appendChild(stats_panel_h1);
        stats_panel.appendChild(stats_panel_h2);
        stats_panel.appendChild(stats_panel_h3);
        stats_panel.appendChild(stats_panel_h4);
        stats_panel.appendChild(stats_panel_h5);
        stats_panel.appendChild(stats_panel_h6);
        stats_panel.appendChild(stats_panel_ukryte_naglowki);
        stats_panel.appendChild(stats_panel_ukryte);
        stats_panel.appendChild(stats_panel_ukryte_tresci);
        stats_panel.appendChild(stats_panel_ramki);
        stats_panel.appendChild(stats_panel_mikrodane_nap_html);
        stats_panel.appendChild(stats_panel_mikrodane_nap_json);
        stats_panel.appendChild(stats_panel_mikrodane_nap_json);
        stats_panel.appendChild(stats_panel_robots_istnienie_pliku);
        stats_panel.appendChild(stats_panel_robots_zasoby_zablokowane_grafiki);
        stats_panel.appendChild(stats_panel_robots_zasoby_zablokowane_css);
        stats_panel.appendChild(stats_panel_robots_zasoby_zablokowane_js);
        stats_panel.appendChild(stats_panel_robots_zasoby_zablokowane_inne);
        stats_panel.appendChild(stats_panel_ile_linkow);
        stats_panel.appendChild(stats_panel_ile_linkow_wychodzi);

        //--------# Wyświetl panele #--------//

        //# Pierwsza opcja wpięcia #//
       /*var pierwsz_element_body=document.body.childNodes[0];
        document.body.insertBefore(stats_panel,pierwsz_element_body);*/

        //# Druga opcja wpięcia #//
        document.body.appendChild(stats_panel);

        // Dopisywanie klas//
        var wszystkie_sekcje = document.getElementById('sidebar_panel').childNodes;
        var ile_jest_sekcji = wszystkie_sekcje.length;

        for (x = 0; x <= ile_jest_sekcji - 1; x++)
        {
            wszystkie_sekcje[x].setAttribute('class', 'w_panelu');
        }

        //--------# Wystaw status o tym, że panel istnieje #--------//
        tool_destruction_status = 0;
    }
    else {
        //--------# NISZCZ ELEMENTY #--------//
        //--------# ZNISZCZ PANEL #--------//
        var panel_do_usuniecia = document.getElementById('sidebar_panel');
        panel_do_usuniecia.parentNode.removeChild(panel_do_usuniecia);

        //--------# ZNISZCZ WSZYSTKIE ELEMENTY DODATKOWE #--------//

        var wszystkie_elementy = document.getElementsByTagName('*');
        var ile_jest_elementow = wszystkie_elementy.length;

        var element_usuwany;
        var id_usuwanego_elementu;

            //-- Same oznaczenia-zaokroglone --//
/*
        var lista_elementow_oznaczonych_do_usuniecia_buttony = document.querySelectorAll("div[id^='oznaczony_element'");
        var ile_jest_elementow_button = lista_elementow_oznaczonych_do_usuniecia_buttony.length;

        for (c = 0; c <= ile_jest_elementow_button - 1; c++) {
            var do_ubicia = document.getElementById(lista_elementow_oznaczonych_do_usuniecia_buttony[c].id);
            var rodzic = do_ubicia.parentNode;

            rodzic.removeChild(do_ubicia);
        }

        */

        // Pobieranie divow zawierających ID
        var wszystkie_divy = document.getElementsByTagName('DIV');

        var tablica_divow_oznaczonych = [];
        var table_var = 0;

        var ilosc_divow = wszystkie_divy.length;

        for (c = 0; c <= ilosc_divow - 1; c++) {
            if (wszystkie_divy[c].id.match(/oznaczony_element/g)) {
                tablica_divow_oznaczonych[table_var] = wszystkie_divy[c];
                table_var++;
            }
        }
        // Usuwanie divow zawierających ID
        var ilosc_divow_oznaczonych = tablica_divow_oznaczonych.length;

        for (c = 0; c <= ilosc_divow_oznaczonych - 1; c++) {

            if (tablica_divow_oznaczonych[c].id.match(/oznaczony_element/g)) {

                var do_ubicia = tablica_divow_oznaczonych[c];
                var rodzic = do_ubicia.parentNode;
                rodzic.removeChild(do_ubicia);
            }

        }



       /* for (c = 0; c <= ilosc_divow - 1; c++)
        {

            if (wszystkie_divy[c].id.match(/oznaczony_element/g)) {

                var do_ubicia = wszystkie_divy[c];
                var rodzic = do_ubicia.parentNode;

                rodzic.removeChild(do_ubicia);

                wszystkie_divy = document.getElementsByTagName('DIV');;
                ilosc_divow = wszystkie_divy.length;
            }

        }*/

         //-- generalne ubijanie elementów z outlinem --//
        var ile_jest_elementow = wszystkie_elementy.length;
        for (c = 0; c <= ile_jest_elementow - 1; c++) {

            if (wszystkie_elementy[c].style.outline) {
                var element = wszystkie_elementy[c];
                element.style.outline = 'none';
            }
        }

        //-- generalne ubijanie elementów z borderem dodany przez toola --//
        for (c = 0; c <= ile_jest_elementow - 1; c++) {

            if (wszystkie_elementy[c].style.border) {
                var element = wszystkie_elementy[c];
                element.style.border = 'none';
            }
        }


        //-- generalne ubijanie wychodzących linków --//

        for (c = 0; c <= ile_jest_elementow - 1; c++) {

            var atrybut = wszystkie_elementy[c].getAttribute('vol-tool-external-links');

            if (atrybut != null) {
                var element = wszystkie_elementy[c];
                element.removeAttribute('style');
            }
        }


        //-- generalne ubijanie ilości znaków --//
        for (c = 0; c <= ile_jest_elementow - 1; c++) {

            var oryginalna_klasa = '';
            var obecna_klasa = wszystkie_elementy[c].getAttribute('class');

            if (obecna_klasa == null) {
                obecna_klasa == '';
            }
            else {
                oryginalna_klasa = obecna_klasa.replace(/znaki_tekstu/, '');
            }
            wszystkie_elementy[c].setAttribute('class', oryginalna_klasa);
        }


        // Wystaw informację o zniszczeniu //
        tool_destruction_status = 1;

    }
}

//validator
