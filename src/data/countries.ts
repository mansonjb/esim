// Destination catalogue. Each country becomes one programmatic page at
// /esim/[slug]. priceTier is a seed multiplier applied to provider base prices
// (see data/plans.ts) so comparison tables look realistic per destination;
// replace with real affiliate-feed pricing when you wire one in.

export type Region =
  | "Europe"
  | "Asia"
  | "Middle East"
  | "Africa"
  | "North America"
  | "Caribbean & Central America"
  | "South America"
  | "Oceania";

export type Country = {
  slug: string;
  name: string;
  iso2: string;
  region: Region;
  priceTier: number;
  popular?: boolean;
  networks: string[];
};

export const COUNTRIES: Country[] = [
  // ---------------------------------------------------------------- Europe
  { slug: "spain", name: "Spain", iso2: "ES", region: "Europe", priceTier: 0.95, popular: true, networks: ["Movistar", "Vodafone", "Orange"] },
  { slug: "italy", name: "Italy", iso2: "IT", region: "Europe", priceTier: 0.95, popular: true, networks: ["TIM", "Vodafone", "WindTre"] },
  { slug: "france", name: "France", iso2: "FR", region: "Europe", priceTier: 0.95, popular: true, networks: ["Orange", "SFR", "Bouygues"] },
  { slug: "united-kingdom", name: "United Kingdom", iso2: "GB", region: "Europe", priceTier: 1.0, popular: true, networks: ["EE", "Vodafone", "O2"] },
  { slug: "germany", name: "Germany", iso2: "DE", region: "Europe", priceTier: 1.0, popular: true, networks: ["Telekom", "Vodafone", "O2"] },
  { slug: "greece", name: "Greece", iso2: "GR", region: "Europe", priceTier: 0.95, popular: true, networks: ["Cosmote", "Vodafone", "Nova"] },
  { slug: "portugal", name: "Portugal", iso2: "PT", region: "Europe", priceTier: 0.95, popular: true, networks: ["MEO", "NOS", "Vodafone"] },
  { slug: "netherlands", name: "Netherlands", iso2: "NL", region: "Europe", priceTier: 1.0, popular: true, networks: ["KPN", "Vodafone", "Odido"] },
  { slug: "switzerland", name: "Switzerland", iso2: "CH", region: "Europe", priceTier: 1.3, networks: ["Swisscom", "Sunrise", "Salt"] },
  { slug: "austria", name: "Austria", iso2: "AT", region: "Europe", priceTier: 1.0, networks: ["A1", "Magenta", "Drei"] },
  { slug: "ireland", name: "Ireland", iso2: "IE", region: "Europe", priceTier: 1.0, networks: ["Vodafone", "Three", "Eir"] },
  { slug: "turkey", name: "Turkey", iso2: "TR", region: "Europe", priceTier: 0.85, popular: true, networks: ["Turkcell", "Vodafone", "Türk Telekom"] },
  { slug: "croatia", name: "Croatia", iso2: "HR", region: "Europe", priceTier: 0.9, popular: true, networks: ["A1", "Hrvatski Telekom", "Telemach"] },
  { slug: "iceland", name: "Iceland", iso2: "IS", region: "Europe", priceTier: 1.2, popular: true, networks: ["Síminn", "Vodafone", "Nova"] },
  { slug: "norway", name: "Norway", iso2: "NO", region: "Europe", priceTier: 1.2, networks: ["Telenor", "Telia", "Ice"] },
  { slug: "sweden", name: "Sweden", iso2: "SE", region: "Europe", priceTier: 1.05, networks: ["Telia", "Tele2", "Telenor"] },
  { slug: "denmark", name: "Denmark", iso2: "DK", region: "Europe", priceTier: 1.05, networks: ["TDC", "Telia", "Telenor"] },
  { slug: "finland", name: "Finland", iso2: "FI", region: "Europe", priceTier: 1.05, networks: ["Elisa", "Telia", "DNA"] },
  { slug: "belgium", name: "Belgium", iso2: "BE", region: "Europe", priceTier: 1.0, networks: ["Proximus", "Orange", "BASE"] },
  { slug: "czechia", name: "Czechia", iso2: "CZ", region: "Europe", priceTier: 0.9, networks: ["O2", "T-Mobile", "Vodafone"] },
  { slug: "poland", name: "Poland", iso2: "PL", region: "Europe", priceTier: 0.85, networks: ["Orange", "Play", "Plus"] },
  { slug: "hungary", name: "Hungary", iso2: "HU", region: "Europe", priceTier: 0.9, networks: ["Magyar Telekom", "Yettel", "One"] },
  { slug: "romania", name: "Romania", iso2: "RO", region: "Europe", priceTier: 0.85, networks: ["Orange", "Vodafone", "Digi"] },
  { slug: "bulgaria", name: "Bulgaria", iso2: "BG", region: "Europe", priceTier: 0.85, networks: ["A1", "Yettel", "Vivacom"] },
  { slug: "slovakia", name: "Slovakia", iso2: "SK", region: "Europe", priceTier: 0.9, networks: ["Orange", "Telekom", "O2"] },
  { slug: "slovenia", name: "Slovenia", iso2: "SI", region: "Europe", priceTier: 0.95, networks: ["Telekom Slovenije", "A1", "Telemach"] },
  { slug: "serbia", name: "Serbia", iso2: "RS", region: "Europe", priceTier: 0.85, networks: ["MTS", "Yettel", "A1"] },
  { slug: "montenegro", name: "Montenegro", iso2: "ME", region: "Europe", priceTier: 0.9, networks: ["Crnogorski Telekom", "One", "m:tel"] },
  { slug: "albania", name: "Albania", iso2: "AL", region: "Europe", priceTier: 0.85, networks: ["One", "Vodafone", "ALBtelecom"] },
  { slug: "bosnia-and-herzegovina", name: "Bosnia and Herzegovina", iso2: "BA", region: "Europe", priceTier: 0.85, networks: ["BH Telecom", "m:tel", "HT Eronet"] },
  { slug: "north-macedonia", name: "North Macedonia", iso2: "MK", region: "Europe", priceTier: 0.85, networks: ["A1", "Telekom", "Lycamobile"] },
  { slug: "estonia", name: "Estonia", iso2: "EE", region: "Europe", priceTier: 0.95, networks: ["Telia", "Elisa", "Tele2"] },
  { slug: "latvia", name: "Latvia", iso2: "LV", region: "Europe", priceTier: 0.95, networks: ["LMT", "Tele2", "Bite"] },
  { slug: "lithuania", name: "Lithuania", iso2: "LT", region: "Europe", priceTier: 0.95, networks: ["Telia", "Bite", "Tele2"] },
  { slug: "luxembourg", name: "Luxembourg", iso2: "LU", region: "Europe", priceTier: 1.05, networks: ["POST", "Orange", "Tango"] },
  { slug: "cyprus", name: "Cyprus", iso2: "CY", region: "Europe", priceTier: 0.95, popular: true, networks: ["Cyta", "Epic", "PrimeTel"] },
  { slug: "malta", name: "Malta", iso2: "MT", region: "Europe", priceTier: 0.95, networks: ["Epic", "Melita", "GO"] },
  { slug: "moldova", name: "Moldova", iso2: "MD", region: "Europe", priceTier: 0.85, networks: ["Orange", "Moldcell", "Unite"] },
  { slug: "georgia", name: "Georgia", iso2: "GE", region: "Europe", priceTier: 0.85, networks: ["Magti", "Silknet", "Cellfie"] },
  { slug: "armenia", name: "Armenia", iso2: "AM", region: "Europe", priceTier: 0.85, networks: ["Team", "Ucom", "Viva"] },
  { slug: "andorra", name: "Andorra", iso2: "AD", region: "Europe", priceTier: 1.05, networks: ["Andorra Telecom"] },
  { slug: "monaco", name: "Monaco", iso2: "MC", region: "Europe", priceTier: 1.1, networks: ["Monaco Telecom"] },
  { slug: "liechtenstein", name: "Liechtenstein", iso2: "LI", region: "Europe", priceTier: 1.2, networks: ["FL1", "Salt"] },
  { slug: "san-marino", name: "San Marino", iso2: "SM", region: "Europe", priceTier: 1.0, networks: ["TIM San Marino"] },
  { slug: "gibraltar", name: "Gibraltar", iso2: "GI", region: "Europe", priceTier: 1.0, networks: ["Gibtelecom"] },
  { slug: "faroe-islands", name: "Faroe Islands", iso2: "FO", region: "Europe", priceTier: 1.2, networks: ["Faroese Telecom", "Hey"] },

  // ------------------------------------------------------------------ Asia
  { slug: "japan", name: "Japan", iso2: "JP", region: "Asia", priceTier: 1.15, popular: true, networks: ["NTT Docomo", "SoftBank", "KDDI au"] },
  { slug: "thailand", name: "Thailand", iso2: "TH", region: "Asia", priceTier: 0.8, popular: true, networks: ["AIS", "TrueMove", "dtac"] },
  { slug: "india", name: "India", iso2: "IN", region: "Asia", priceTier: 0.8, popular: true, networks: ["Jio", "Airtel"] },
  { slug: "indonesia", name: "Indonesia", iso2: "ID", region: "Asia", priceTier: 0.8, popular: true, networks: ["Telkomsel", "XL", "Indosat"] },
  { slug: "vietnam", name: "Vietnam", iso2: "VN", region: "Asia", priceTier: 0.8, popular: true, networks: ["Viettel", "Vinaphone", "Mobifone"] },
  { slug: "singapore", name: "Singapore", iso2: "SG", region: "Asia", priceTier: 1.0, popular: true, networks: ["Singtel", "StarHub", "M1"] },
  { slug: "south-korea", name: "South Korea", iso2: "KR", region: "Asia", priceTier: 1.05, popular: true, networks: ["SKT", "KT", "LG U+"] },
  { slug: "malaysia", name: "Malaysia", iso2: "MY", region: "Asia", priceTier: 0.85, popular: true, networks: ["Maxis", "Celcom", "Digi"] },
  { slug: "philippines", name: "Philippines", iso2: "PH", region: "Asia", priceTier: 0.8, popular: true, networks: ["Globe", "Smart", "DITO"] },
  { slug: "china", name: "China", iso2: "CN", region: "Asia", priceTier: 1.0, networks: ["China Mobile", "China Unicom"] },
  { slug: "hong-kong", name: "Hong Kong", iso2: "HK", region: "Asia", priceTier: 1.0, popular: true, networks: ["CSL", "3", "SmarTone"] },
  { slug: "taiwan", name: "Taiwan", iso2: "TW", region: "Asia", priceTier: 0.95, popular: true, networks: ["Chunghwa", "Taiwan Mobile", "FarEasTone"] },
  { slug: "macau", name: "Macau", iso2: "MO", region: "Asia", priceTier: 1.0, networks: ["CTM", "China Telecom", "3"] },
  { slug: "cambodia", name: "Cambodia", iso2: "KH", region: "Asia", priceTier: 0.8, networks: ["Cellcard", "Smart", "Metfone"] },
  { slug: "laos", name: "Laos", iso2: "LA", region: "Asia", priceTier: 0.85, networks: ["Unitel", "Lao Telecom", "ETL"] },
  { slug: "sri-lanka", name: "Sri Lanka", iso2: "LK", region: "Asia", priceTier: 0.8, popular: true, networks: ["Dialog", "Mobitel", "Hutch"] },
  { slug: "nepal", name: "Nepal", iso2: "NP", region: "Asia", priceTier: 0.8, networks: ["Ncell", "Nepal Telecom"] },
  { slug: "bhutan", name: "Bhutan", iso2: "BT", region: "Asia", priceTier: 0.9, networks: ["TashiCell", "B-Mobile"] },
  { slug: "maldives", name: "Maldives", iso2: "MV", region: "Asia", priceTier: 1.1, popular: true, networks: ["Dhiraagu", "Ooredoo"] },
  { slug: "bangladesh", name: "Bangladesh", iso2: "BD", region: "Asia", priceTier: 0.8, networks: ["Grameenphone", "Robi", "Banglalink"] },
  { slug: "pakistan", name: "Pakistan", iso2: "PK", region: "Asia", priceTier: 0.8, networks: ["Jazz", "Zong", "Telenor"] },
  { slug: "mongolia", name: "Mongolia", iso2: "MN", region: "Asia", priceTier: 0.9, networks: ["Mobicom", "Unitel", "Skytel"] },
  { slug: "brunei", name: "Brunei", iso2: "BN", region: "Asia", priceTier: 0.95, networks: ["DST", "imagine", "Progresif"] },
  { slug: "kazakhstan", name: "Kazakhstan", iso2: "KZ", region: "Asia", priceTier: 0.85, networks: ["Kcell", "Beeline", "Tele2"] },
  { slug: "uzbekistan", name: "Uzbekistan", iso2: "UZ", region: "Asia", priceTier: 0.85, networks: ["Ucell", "Beeline", "Mobiuz"] },
  { slug: "kyrgyzstan", name: "Kyrgyzstan", iso2: "KG", region: "Asia", priceTier: 0.85, networks: ["Beeline", "MegaCom", "O!"] },
  { slug: "tajikistan", name: "Tajikistan", iso2: "TJ", region: "Asia", priceTier: 0.85, networks: ["Tcell", "Megafon", "Babilon"] },
  { slug: "azerbaijan", name: "Azerbaijan", iso2: "AZ", region: "Asia", priceTier: 0.85, networks: ["Azercell", "Bakcell", "Nar"] },
  { slug: "timor-leste", name: "Timor-Leste", iso2: "TL", region: "Asia", priceTier: 0.95, networks: ["Telkomcel", "Telemor", "Timor Telecom"] },
  { slug: "myanmar", name: "Myanmar", iso2: "MM", region: "Asia", priceTier: 0.85, networks: ["MPT", "Ooredoo", "ATOM"] },

  // ----------------------------------------------------------- Middle East
  { slug: "united-arab-emirates", name: "United Arab Emirates", iso2: "AE", region: "Middle East", priceTier: 1.2, popular: true, networks: ["Etisalat", "du"] },
  { slug: "saudi-arabia", name: "Saudi Arabia", iso2: "SA", region: "Middle East", priceTier: 1.1, popular: true, networks: ["STC", "Mobily", "Zain"] },
  { slug: "qatar", name: "Qatar", iso2: "QA", region: "Middle East", priceTier: 1.15, networks: ["Ooredoo", "Vodafone"] },
  { slug: "israel", name: "Israel", iso2: "IL", region: "Middle East", priceTier: 1.0, popular: true, networks: ["Partner", "Cellcom", "Pelephone"] },
  { slug: "jordan", name: "Jordan", iso2: "JO", region: "Middle East", priceTier: 0.9, popular: true, networks: ["Zain", "Orange", "Umniah"] },
  { slug: "bahrain", name: "Bahrain", iso2: "BH", region: "Middle East", priceTier: 1.05, networks: ["Batelco", "stc", "Zain"] },
  { slug: "kuwait", name: "Kuwait", iso2: "KW", region: "Middle East", priceTier: 1.05, networks: ["Zain", "stc", "Ooredoo"] },
  { slug: "oman", name: "Oman", iso2: "OM", region: "Middle East", priceTier: 1.05, networks: ["Omantel", "Ooredoo", "Vodafone"] },
  { slug: "lebanon", name: "Lebanon", iso2: "LB", region: "Middle East", priceTier: 0.95, networks: ["Alfa", "touch"] },
  { slug: "iraq", name: "Iraq", iso2: "IQ", region: "Middle East", priceTier: 0.9, networks: ["Zain", "Asiacell", "Korek"] },

  // --------------------------------------------------------- North America
  { slug: "united-states", name: "United States", iso2: "US", region: "North America", priceTier: 1.0, popular: true, networks: ["T-Mobile", "AT&T"] },
  { slug: "canada", name: "Canada", iso2: "CA", region: "North America", priceTier: 1.05, popular: true, networks: ["Bell", "Rogers", "Telus"] },
  { slug: "mexico", name: "Mexico", iso2: "MX", region: "North America", priceTier: 0.9, popular: true, networks: ["Telcel", "AT&T", "Movistar"] },

  // ----------------------------------------- Caribbean & Central America
  { slug: "costa-rica", name: "Costa Rica", iso2: "CR", region: "Caribbean & Central America", priceTier: 0.95, popular: true, networks: ["Kölbi", "Claro", "Movistar"] },
  { slug: "panama", name: "Panama", iso2: "PA", region: "Caribbean & Central America", priceTier: 0.95, networks: ["+Móvil", "Tigo", "Digicel"] },
  { slug: "guatemala", name: "Guatemala", iso2: "GT", region: "Caribbean & Central America", priceTier: 0.9, networks: ["Tigo", "Claro"] },
  { slug: "nicaragua", name: "Nicaragua", iso2: "NI", region: "Caribbean & Central America", priceTier: 0.9, networks: ["Claro", "Tigo"] },
  { slug: "honduras", name: "Honduras", iso2: "HN", region: "Caribbean & Central America", priceTier: 0.9, networks: ["Tigo", "Claro"] },
  { slug: "el-salvador", name: "El Salvador", iso2: "SV", region: "Caribbean & Central America", priceTier: 0.9, networks: ["Tigo", "Claro", "Movistar"] },
  { slug: "belize", name: "Belize", iso2: "BZ", region: "Caribbean & Central America", priceTier: 1.0, networks: ["Digi", "Smart"] },
  { slug: "dominican-republic", name: "Dominican Republic", iso2: "DO", region: "Caribbean & Central America", priceTier: 0.95, popular: true, networks: ["Claro", "Altice", "Viva"] },
  { slug: "jamaica", name: "Jamaica", iso2: "JM", region: "Caribbean & Central America", priceTier: 1.0, popular: true, networks: ["Digicel", "Flow"] },
  { slug: "bahamas", name: "Bahamas", iso2: "BS", region: "Caribbean & Central America", priceTier: 1.1, networks: ["BTC", "Aliv"] },
  { slug: "barbados", name: "Barbados", iso2: "BB", region: "Caribbean & Central America", priceTier: 1.05, networks: ["Flow", "Digicel"] },
  { slug: "trinidad-and-tobago", name: "Trinidad and Tobago", iso2: "TT", region: "Caribbean & Central America", priceTier: 1.0, networks: ["bmobile", "Digicel"] },
  { slug: "aruba", name: "Aruba", iso2: "AW", region: "Caribbean & Central America", priceTier: 1.05, networks: ["Setar", "Digicel"] },
  { slug: "curacao", name: "Curaçao", iso2: "CW", region: "Caribbean & Central America", priceTier: 1.05, networks: ["Flow", "Digicel"] },
  { slug: "puerto-rico", name: "Puerto Rico", iso2: "PR", region: "Caribbean & Central America", priceTier: 1.0, popular: true, networks: ["Claro", "T-Mobile", "Liberty"] },
  { slug: "cayman-islands", name: "Cayman Islands", iso2: "KY", region: "Caribbean & Central America", priceTier: 1.1, networks: ["Flow", "Digicel"] },
  { slug: "turks-and-caicos", name: "Turks and Caicos", iso2: "TC", region: "Caribbean & Central America", priceTier: 1.1, networks: ["Flow", "Digicel"] },
  { slug: "bermuda", name: "Bermuda", iso2: "BM", region: "Caribbean & Central America", priceTier: 1.15, networks: ["One", "Digicel"] },
  { slug: "saint-lucia", name: "Saint Lucia", iso2: "LC", region: "Caribbean & Central America", priceTier: 1.05, networks: ["Flow", "Digicel"] },
  { slug: "antigua-and-barbuda", name: "Antigua and Barbuda", iso2: "AG", region: "Caribbean & Central America", priceTier: 1.05, networks: ["Flow", "Digicel"] },
  { slug: "cuba", name: "Cuba", iso2: "CU", region: "Caribbean & Central America", priceTier: 1.2, networks: ["Cubacel"] },

  // --------------------------------------------------------- South America
  { slug: "brazil", name: "Brazil", iso2: "BR", region: "South America", priceTier: 0.9, popular: true, networks: ["Vivo", "Claro", "TIM"] },
  { slug: "argentina", name: "Argentina", iso2: "AR", region: "South America", priceTier: 0.9, popular: true, networks: ["Personal", "Claro", "Movistar"] },
  { slug: "peru", name: "Peru", iso2: "PE", region: "South America", priceTier: 0.9, popular: true, networks: ["Claro", "Movistar", "Entel"] },
  { slug: "colombia", name: "Colombia", iso2: "CO", region: "South America", priceTier: 0.9, popular: true, networks: ["Claro", "Movistar", "Tigo"] },
  { slug: "chile", name: "Chile", iso2: "CL", region: "South America", priceTier: 0.9, popular: true, networks: ["Entel", "Movistar", "Claro"] },
  { slug: "ecuador", name: "Ecuador", iso2: "EC", region: "South America", priceTier: 0.9, networks: ["Claro", "Movistar", "CNT"] },
  { slug: "bolivia", name: "Bolivia", iso2: "BO", region: "South America", priceTier: 0.9, networks: ["Entel", "Tigo", "Viva"] },
  { slug: "uruguay", name: "Uruguay", iso2: "UY", region: "South America", priceTier: 0.95, networks: ["Antel", "Movistar", "Claro"] },
  { slug: "paraguay", name: "Paraguay", iso2: "PY", region: "South America", priceTier: 0.9, networks: ["Tigo", "Personal", "Claro"] },
  { slug: "suriname", name: "Suriname", iso2: "SR", region: "South America", priceTier: 1.0, networks: ["Telesur", "Digicel"] },
  { slug: "guyana", name: "Guyana", iso2: "GY", region: "South America", priceTier: 1.0, networks: ["GTT", "Digicel"] },

  // ---------------------------------------------------------------- Africa
  { slug: "egypt", name: "Egypt", iso2: "EG", region: "Africa", priceTier: 0.85, popular: true, networks: ["Orange", "Vodafone", "Etisalat"] },
  { slug: "morocco", name: "Morocco", iso2: "MA", region: "Africa", priceTier: 0.85, popular: true, networks: ["Maroc Telecom", "Orange", "inwi"] },
  { slug: "south-africa", name: "South Africa", iso2: "ZA", region: "Africa", priceTier: 0.9, popular: true, networks: ["Vodacom", "MTN", "Cell C"] },
  { slug: "kenya", name: "Kenya", iso2: "KE", region: "Africa", priceTier: 0.85, popular: true, networks: ["Safaricom", "Airtel"] },
  { slug: "tanzania", name: "Tanzania", iso2: "TZ", region: "Africa", priceTier: 0.85, popular: true, networks: ["Vodacom", "Airtel", "Tigo"] },
  { slug: "tunisia", name: "Tunisia", iso2: "TN", region: "Africa", priceTier: 0.85, networks: ["Ooredoo", "Tunisie Telecom", "Orange"] },
  { slug: "ghana", name: "Ghana", iso2: "GH", region: "Africa", priceTier: 0.85, networks: ["MTN", "Telecel", "AirtelTigo"] },
  { slug: "nigeria", name: "Nigeria", iso2: "NG", region: "Africa", priceTier: 0.85, networks: ["MTN", "Airtel", "Glo"] },
  { slug: "senegal", name: "Senegal", iso2: "SN", region: "Africa", priceTier: 0.9, networks: ["Orange", "Free", "Expresso"] },
  { slug: "rwanda", name: "Rwanda", iso2: "RW", region: "Africa", priceTier: 0.85, networks: ["MTN", "Airtel"] },
  { slug: "uganda", name: "Uganda", iso2: "UG", region: "Africa", priceTier: 0.85, networks: ["MTN", "Airtel"] },
  { slug: "zambia", name: "Zambia", iso2: "ZM", region: "Africa", priceTier: 0.9, networks: ["MTN", "Airtel", "Zamtel"] },
  { slug: "zimbabwe", name: "Zimbabwe", iso2: "ZW", region: "Africa", priceTier: 0.95, networks: ["Econet", "NetOne", "Telecel"] },
  { slug: "botswana", name: "Botswana", iso2: "BW", region: "Africa", priceTier: 0.95, networks: ["Mascom", "Orange", "beMobile"] },
  { slug: "namibia", name: "Namibia", iso2: "NA", region: "Africa", priceTier: 0.95, networks: ["MTC", "TN Mobile"] },
  { slug: "madagascar", name: "Madagascar", iso2: "MG", region: "Africa", priceTier: 0.9, networks: ["Telma", "Orange", "Airtel"] },
  { slug: "mauritius", name: "Mauritius", iso2: "MU", region: "Africa", priceTier: 1.0, popular: true, networks: ["Emtel", "my.t", "Chili"] },
  { slug: "seychelles", name: "Seychelles", iso2: "SC", region: "Africa", priceTier: 1.1, networks: ["Cable & Wireless", "Airtel"] },
  { slug: "ethiopia", name: "Ethiopia", iso2: "ET", region: "Africa", priceTier: 0.9, networks: ["Ethio Telecom", "Safaricom"] },
  { slug: "ivory-coast", name: "Ivory Coast", iso2: "CI", region: "Africa", priceTier: 0.9, networks: ["Orange", "MTN", "Moov"] },
  { slug: "cameroon", name: "Cameroon", iso2: "CM", region: "Africa", priceTier: 0.9, networks: ["MTN", "Orange"] },
  { slug: "mozambique", name: "Mozambique", iso2: "MZ", region: "Africa", priceTier: 0.9, networks: ["Vodacom", "Tmcel", "Movitel"] },
  { slug: "malawi", name: "Malawi", iso2: "MW", region: "Africa", priceTier: 0.9, networks: ["TNM", "Airtel"] },
  { slug: "angola", name: "Angola", iso2: "AO", region: "Africa", priceTier: 0.95, networks: ["Unitel", "Movicel"] },
  { slug: "cape-verde", name: "Cape Verde", iso2: "CV", region: "Africa", priceTier: 1.0, networks: ["CVMóvel", "Unitel T+"] },
  { slug: "gambia", name: "Gambia", iso2: "GM", region: "Africa", priceTier: 0.9, networks: ["Africell", "QCell", "Gamcel"] },
  { slug: "gabon", name: "Gabon", iso2: "GA", region: "Africa", priceTier: 0.95, networks: ["Airtel", "Moov"] },
  { slug: "djibouti", name: "Djibouti", iso2: "DJ", region: "Africa", priceTier: 1.0, networks: ["Djibouti Telecom"] },
  { slug: "reunion", name: "Réunion", iso2: "RE", region: "Africa", priceTier: 1.0, networks: ["Orange", "SFR", "Free"] },
  { slug: "comoros", name: "Comoros", iso2: "KM", region: "Africa", priceTier: 1.0, networks: ["Telma", "Comoros Telecom"] },
  { slug: "eswatini", name: "Eswatini", iso2: "SZ", region: "Africa", priceTier: 0.95, networks: ["MTN", "Eswatini Mobile"] },
  { slug: "lesotho", name: "Lesotho", iso2: "LS", region: "Africa", priceTier: 0.95, networks: ["Vodacom", "Econet"] },

  // --------------------------------------------------------------- Oceania
  { slug: "australia", name: "Australia", iso2: "AU", region: "Oceania", priceTier: 1.05, popular: true, networks: ["Telstra", "Optus", "Vodafone"] },
  { slug: "new-zealand", name: "New Zealand", iso2: "NZ", region: "Oceania", priceTier: 1.1, popular: true, networks: ["Spark", "One NZ", "2degrees"] },
  { slug: "fiji", name: "Fiji", iso2: "FJ", region: "Oceania", priceTier: 1.1, popular: true, networks: ["Vodafone", "Digicel"] },
  { slug: "french-polynesia", name: "French Polynesia", iso2: "PF", region: "Oceania", priceTier: 1.3, networks: ["Vini", "Vodafone", "Ora"] },
  { slug: "new-caledonia", name: "New Caledonia", iso2: "NC", region: "Oceania", priceTier: 1.3, networks: ["OPT Mobilis"] },
  { slug: "samoa", name: "Samoa", iso2: "WS", region: "Oceania", priceTier: 1.2, networks: ["Digicel", "Vodafone"] },
  { slug: "tonga", name: "Tonga", iso2: "TO", region: "Oceania", priceTier: 1.2, networks: ["Digicel", "TCC"] },
  { slug: "vanuatu", name: "Vanuatu", iso2: "VU", region: "Oceania", priceTier: 1.2, networks: ["Digicel", "Vodafone"] },
  { slug: "cook-islands", name: "Cook Islands", iso2: "CK", region: "Oceania", priceTier: 1.3, networks: ["Vodafone Cook Islands"] },
  { slug: "palau", name: "Palau", iso2: "PW", region: "Oceania", priceTier: 1.3, networks: ["PNCC", "Palau Mobile"] },
  { slug: "guam", name: "Guam", iso2: "GU", region: "Oceania", priceTier: 1.1, networks: ["GTA", "Docomo Pacific", "IT&E"] },
  { slug: "papua-new-guinea", name: "Papua New Guinea", iso2: "PG", region: "Oceania", priceTier: 1.15, networks: ["Digicel", "Vodafone", "Telikom"] },
];

export const COUNTRY_BY_SLUG: Record<string, Country> = COUNTRIES.reduce(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {} as Record<string, Country>,
);

export function getCountry(slug: string): Country | undefined {
  return COUNTRY_BY_SLUG[slug];
}

export const POPULAR_COUNTRIES = COUNTRIES.filter((c) => c.popular);

export const REGIONS: Region[] = [
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "North America",
  "Caribbean & Central America",
  "South America",
  "Oceania",
];

export function countriesByRegion(region: Region): Country[] {
  return COUNTRIES.filter((c) => c.region === region).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

// Flag emoji from ISO-3166 alpha-2 code (regional indicator symbols).
export function flagEmoji(iso2: string): string {
  return iso2
    .toUpperCase()
    .replace(/./g, (ch) =>
      String.fromCodePoint(127397 + ch.charCodeAt(0)),
    );
}
