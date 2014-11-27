 var one = "";
        var ten = "";
        var hundred = "";
        var thousand = "";
        var ten_thousand = "";
        var lakh = "";
        var ten_lakh = "";
        var core = "";
        var ten_core = "";
        var arab = "";
        var ten_arab = "";
        var kharab = "";
        var ten_kharab = "";


        var partten = "";
        var parthundred = "";
        var partthousand = "";
        var partlakh = "";
        var partcore = "";
        var partarab = "";
        var partkharab = "";
        var partpaisa;
        


        var amountInWord = "";


       



       

        function converttoword() {

            number = document.getElementById('txtInput').value;

            one = "";
            ten = "";
            hundred = "";
            thousand = "";
            ten_thousand = "";
            lakh = "";
            ten_lakh = "";
            core = "";
            ten_core = "";
            arab = "";
            ten_arab = "";
            kharab = "";
            ten_kharab = "";


            partten = "";
            parthundred = "";
            partthousand = "";
            partlakh = "";
            partcore = "";
            partarab = "";
            partkharab = "";


            amountInWord = "";



           

            number = number.toString();
            var totalmoney = number.split('.');
            var main_money = totalmoney[0];

            if (totalmoney.length > 1)
            {

                partpaisa = totalmoney[1];
                partpaisa = partpaisa.substr(0, 2);
            }
            else
            {
                partpaisa = "0";
            }





            main_money = main_money.toString();
            if (main_money.length > 13) {
                alert("Range Exceeds");
                return;
            }

             for (var i = main_money.length - 1; i >= 0; i--) {
                
                if (i == main_money.length - 1)
                {
                    one = main_money[i];

                }
                else if (i == main_money.length - 2)
                {
                    ten = main_money[i];

                }
                else if (i == main_money.length - 3)
                {
                    hundred = main_money[i];
                }
                else if (i == main_money.length - 4)
                {
                    thousand = main_money[i];
                }
                else if (i == main_money.length - 5)
                {
                    ten_thousand = main_money[i];
                }
                else if (i == main_money.length - 6)
                {
                    lakh = main_money[i];
                }
                else if (i == main_money.length - 7)
                {
                    ten_lakh = main_money[i];
                }
                else if (i == main_money.length - 8)
                {
                    core = main_money[i];
                }
                else if (i == main_money.length - 9)
                {
                    ten_core = main_money[i];
                }
                else if (i == main_money.length - 10)
                {
                    arab = main_money[i];
                }
                else if (i == main_money.length - 11)
                {
                    ten_arab = main_money[i];
                }
                else if (i == main_money.length - 12)
                {
                    kharab = main_money[i];
                }
                else if (i == main_money.length - 13)
                {
                    ten_kharab = main_money[i];
                }

            }

           

            partkharab = (ten_kharab + kharab);
            partarab = (ten_arab + arab);
            partcore = (ten_core + core);
            partlakh = (ten_lakh + lakh);
            partthousand = (ten_thousand + thousand);
            parthundred = (hundred);
            partten = ten + one;

          


            if (partkharab != "")
            {
                if (partkharab[0] == '0') {
                    partkharab = partkharab.replace('0', '');
                }



            }

            if (partarab != "")
            {

                if (partarab[0] == '0')
                {
                    partkharab = partarab.replace('0', '');
                }




            }

            if (partcore != "")
            {
                if (partcore[0] == '0')
                {
                    partcore = partcore.replace('0', '');
                }



            }
            if (partlakh != "")
            {
                if (partlakh[0] == '0')
                {
                    partlakh = partlakh.replace('0', '');
                }

            }
            if (partthousand != "")
            {


                if (partthousand[0] == '0')
                {
                    partthousand = partthousand.replace('0', '');
                }


            }
            if (parthundred != "")
            {
                if (parthundred[0] == '0')
                {
                    parthundred = parthundred.replace('0', '');

                }

            }
            if (partten != "")
            {

                if (partten[0] == '0')
                {

                    partten = partten.replace('0', '');

                }
                // MessageBox.Show(partten);


            }

            if (partpaisa != "")
            {

                if (partpaisa[0] == '0')
                {

                    partpaisa = partpaisa.replace('0', '');

                }
              

            }

         
            partkharab = gettext(partkharab);
            partarab = gettext(partarab);
            partcore = gettext(partcore);
            partlakh = gettext(partlakh);
            partthousand = gettext(partthousand);
            parthundred = gettext(parthundred);


            partten = gettext(partten);

         

            partpaisa = gettext(partpaisa);


            if (partkharab != "")
            {

                amountInWord = partkharab + "खरब ";

            }

            if (partarab != "")
            {
                amountInWord += partarab + "अरब ";

            }

            if (partcore != "")
            {
                amountInWord += partcore + "करोड ";

            }
            if (partlakh != "")
            {

                amountInWord += partlakh + "लाख ";

            }
            if (partthousand != "")
            {

                amountInWord += partthousand + "हजार ";

            }
            if (parthundred != "")
            {

                amountInWord += parthundred + "सय ";

            }
            if (partten != "")
            {

                amountInWord += partten;

            }
            if (amountInWord == "") {
                 amountInWord ="शुन्य"
            }
            amountInWord += " रुपैँया ";
            if (partpaisa != "")
            {

                amountInWord += " र " + partpaisa + "  पैशा";

            }


            document.getElementById('txtoutput').value = amountInWord + "  मात्र";
           

        }


        function gettext(text) {
            
       

            switch (text)
            {


                case "1":
                    return "एक ";

                case "2":
                    return "दुई ";

                case "3":
                    return "तीन ";

                case "4":
                    return "चार ";

                case "5":
                    return "पाँच ";

                case "6":
                    return "छ ";

                case "7":
                    return "सात ";

                case "8":
                    return "आठ ";

                case "9":
                    return "नौ ";

                case "10":
                    return "दश ";

                case "11":
                    return "एघार ";
                case "12":
                    return "बाह्र ";
                case "13":
                    return "तेह्र ";
                case "14":
                    return "चौध ";

                case "15":
                    return "पन्ध्र ";

                case "16":
                    return "सोह्र ";

                case "17":
                    return "सत्र ";

                case "18":
                    return "अठार ";

                case "19":
                    return "उन्नाईस ";
                case "20":
                    return "बीस ";

                case "21":
                    return "एक्काईस ";
                    break;

                case "22":
                    return "बाईस ";

                case "23":
                    return "तेईस ";

                case "24":
                    return "चौबीस ";

                case "25":
                    return "पच्चीस ";

                case "26":
                    return "छब्बिस ";

                case "27":
                    return "सत्ताईस ";

                case "28":
                    return "अठ्ठाईस ";

                case "29":
                    return "उनन्तीस ";

                case "30":
                    return "तीस ";
                case "31":
                    return "एकतीस ";


                case "32":
                    return "बत्तीस ";

                case "33":
                    return "तेतीत्स ";

                case "34":
                    return "चौँतीस ";

                case "35":
                    return "पैँतीस ";

                case "36":
                    return "छत्तीस ";

                case "37":
                    return "सैँतीस ";

                case "38":
                    return "अठ्तीस ";

                case "39":
                    return "उनन्चालीस ";

                case "40":
                    return "चालीस ";

                case "41":
                    return "एकचालीस ";

                case "42":
                    return "बयालीस ";

                case "43":
                    return "त्रियालीस ";
                case "44":
                    return "चौवालीस ";

                case "45":
                    return "पैँचालीस ";

                case "46":
                    return "छयालीस ";

                case "47":
                    return "सत्चालीस ";

                case "48":
                    return "अठ्चालीस ";

                case "49":
                    return "उनन्पचास ";

                case "50":
                    return "पचास ";

                case "51":
                    return "एकाउन्न ";
                    break;

                case "52":
                    return "बाउन्न ";

                case "53":
                    return "त्रिपन्न ";

                case "54":
                    return "चौवन्न ";

                case "55":
                    return "पच्पन्न ";

                case "56":
                    return "छपन्न ";

                case "57":
                    return "सन्ताउन्न ";

                case "58":
                    return "अन्ठाउन्न ";

                case "59":
                    return "उन्साठी ";

                case "60":
                    return "साठी ";

                case "61":
                    return "एकसठ्ठी ";


                case "62":
                    return "बैसठ्ठी ";

                case "63":
                    return "त्रिसठ्ठी ";

                case "64":
                    return "चौँसठ्ठी ";

                case "65":
                    return "पैँसठ्ठी ";

                case "66":
                    return "छैँसठ्ठी ";

                case "67":
                    return "सत्सठ्ठी ";

                case "68":
                    return "अठ्सठ्ठी ";

                case "69":
                    return "उनन्सत्तरी ";

                case "70":
                    return "सत्तरी ";


                case "71":
                    return "एकत्तर ";
                    break;

                case "72":
                    return "बहत्तर ";

                case "73":
                    return "तिरत्तर ";

                case "74":
                    return "चौरत्तर ";

                case "75":
                    return "पचत्तर ";

                case "76":
                    return "छेयत्तर ";

                case "77":
                    return "सतत्तर ";

                case "78":
                    return "अठत्तर";

                case "79":
                    return "उनन्असी ";

                case "80":
                    return "असी ";

                case "81":
                    return "एकासी ";


                case "82":
                    return "बयासी ";

                case "83":
                    return "त्रियासी ";

                case "84":
                    return "चौरासी ";

                case "85":
                    return "पचासी ";

                case "86":
                    return "छैयासी ";

                case "87":
                    return "सतासी ";

                case "88":
                    return "अठासी ";

                case "89":
                    return "उनन्नब्बे";

                case "90":
                    return "नब्बे ";

                case "91":
                    return "एक्कानब्बे ";
                
                case "92":
                    return "बयानब्बे ";

                case "93":
                    return "त्रियानब्बे ";

                case "94":
                    return "चौरानब्बे ";

                case "95":
                    return "पन्चानब्बे ";

                case "96":
                    return "छयानन्बे ";

                case "97":
                    return "सन्तानब्बे ";

                case "98":
                    return "अन्ठानब्बे ";

                case "99":
                    return "उनन्सय ";




            }



            return "";
        }