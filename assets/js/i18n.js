/**
    mortgage_title: "Hypotheken-Sondertilgung Rechner",
    mortgage_sub: "Berechnen Sie, wie Sondertilgungen Ihre Laufzeit verkürzen und Zinskosten drastisch senken.",
    mortgage_title: "Remboursement Anticipé de Prêt Immobilier",
    mortgage_sub: "Calculez comment des versements anticipés réduisent la durée de votre prêt et vos intérêts.",
 * TheCalcHQ Multi-Language Translation (i18n) Engine - Complete Edition
 * Languages: English (en), Gujarati (gu), Hindi (hi), Spanish (es), French (fr), German (de)
 * Provides comprehensive translation across all 28 calculators, forms, and results.
 */

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

const TRANSLATIONS = {
  en: {
    // Navigation & Global
    nav_all: "All Calculators",
    nav_loan: "Loan / EMI",
    nav_meeting: "Meeting Cost",
    nav_compound: "Compound Interest",
    nav_margin: "Profit Margin",
    nav_privacy: "Privacy Policy",
    browse_all: "Browse All Tools",
    back_to_calc: "← Back to Calculators",
    all_tools_count: "All Tools (29)",
    cat_all: "All Tools (29)",
    cat_finance: "💰 Money & Loans",
    cat_civil: "🏗️ Civil & Steel",
    cat_corporate: "🏢 Corporate & Work",
    cat_health: "🧘 Health & Body",
    cat_food: "🍲 Food & Dining",
    cat_utility: "⚡ Daily Utilities",
    
    // Global Actions & Units
    copy: "Copy",
    copied: "Copied to clipboard!",
    reset: "Reset to Default",
    open_calc: "Open Calculator →",
    people: "people",
    minutes: "minutes",
    hours: "hours",
    days: "days",
    years: "years",
    months: "months",
    unit_metric: "Metric",
    unit_imperial: "Imperial",

    // Homepage Hero & Desk Calc
    hero_badge: "✨ 28 Free Professional Tools",
    hero_title_1: "Calculators for",
    hero_title_2: "Everyday Real Life",
    hero_desc: "From financial planning and health metrics to civil engineering and everyday math. 100% private, instant, and free.",
    search_placeholder: "Search across all 28 calculators (e.g. age, bmi, sip, loan, concrete)...",
    desk_calc_badge: "⚡ Instant Online Calculator",
    desk_calc_title: "Standard & Scientific Desk Calculator",
    desk_calc_sub: "Zero lag • 100% Client-Side",
    tab_standard: "Standard",
    tab_scientific: "Scientific",
    tape_history: "📜 Calculation Tape",
    clear_tape: "Clear",
    keyboard_hint: "⌨️ Keyboard & Numpad Supported (0-9, +, -, *, /, Enter, Backspace)",
    precision_tag: "TheCalcHQ Precision Math",
    
    // Badges
    badge_trending_1: "🔥 Trending #1",
    badge_trending_2: "🔥 Trending #2",
    badge_trending_3: "🔥 Trending #3",
    badge_popular: "⭐ Popular",
    badge_high_value: "💰 High Value",
    badge_civil: "🏗️ Civil #1",
    badge_daily: "⚡ Daily Essential",

    // 28 Calculators: Titles & Descriptions
    age_title: "Exact Chronological Age",
    age_sub: "Calculate your exact age in years, months, days, and live ticking seconds. Next birthday countdown & zodiac.",
    
    bmi_title: "BMI & Body Fat Calculator",
    bmi_sub: "Visual BMI gauge needle, WHO weight categories, target healthy weight, and US Navy body fat percentage.",
    
    sip_title: "SIP & Wealth Planner",
    sip_sub: "Forecast mutual fund returns on Monthly SIP, Lumpsum, and Step-Up investments with inflation-adjusted real purchasing power.",
    
    unit_title: "Universal Unit Converter",
    unit_sub: "Convert between metric and imperial across Length, Weight, Area, Volume, Temperature, Speed, and Digital Storage instantly.",
    
    loan_title: "Personal Loan & EMI",
    loan_sub: "Calculate monthly installment (EMI), total interest payable, loan repayment breakdown, and full amortization.",
    
    auto_loan_title: "Auto Loan & Car EMI",
    auto_loan_sub: "Calculate monthly car payment, down payment, trade-in value, sales tax, and annual amortization schedule.",
    
    pct_title: "Percentage & Discount",
    pct_sub: "Calculate sale price after coupon discounts, sales tax, percentage difference, and multi-item shopping carts.",
    
    pregnancy_title: "Pregnancy Due Date & EDD",
    pregnancy_sub: "Calculate estimated delivery date (EDD), gestational age in weeks & days, trimester progression, and milestone timeline.",
    
    compound_title: "Compound Interest Growth",
    compound_sub: "Project your wealth growth over time with monthly deposits, annual returns, and dynamic growth charts.",
    
    sleep_title: "Sleep Cycle & Wake Calculator",
    sleep_sub: "Wake up energized by timing your alarms to complete 90-minute REM cycles. Real-time suggested alarms with seconds.",
    
    calorie_title: "Calorie Deficit & TDEE",
    calorie_sub: "Calculate maintenance calories (TDEE) and exact daily calorie deficit target for healthy fat loss and macros.",
    
    timesheet_title: "Weekly Timesheet & Overtime",
    timesheet_sub: "Log clock-in/out times, deduct lunch breaks, calculate regular vs overtime (1.5x) hours, and weekly gross paycheck.",
    
    ovulation_title: "Ovulation & Period Tracker",
    ovulation_sub: "Estimate your 6-day fertile window, exact ovulation day, upcoming period dates, and a 3-month cycle forecast.",
    
    concrete_title: "Concrete Volume & Cement Bags",
    concrete_sub: "Calculate concrete volume for slabs, footings, and round columns. Computes required 50kg cement bags, sand, and aggregate.",
    
    water_title: "Daily Water Intake",
    water_sub: "Calculate optimal daily water requirement in Liters and 250mL glasses based on body weight, workout, and climate.",
    
    gpa_title: "College GPA & CGPA",
    gpa_sub: "Calculate your semester GPA, cumulative CGPA across 4.0 and 10.0 scales, quality points, and honours standing.",
    
    retirement_title: "Retirement & FIRE Planner",
    retirement_sub: "Determine your retirement nest egg corpus, monthly pension, inflation adjustment, and safe withdrawal rate (4% rule).",
    
    credit_card_title: "Credit Card Payoff",
    credit_card_sub: "Calculate months to become credit card debt-free, total interest charges, and see how extra payments accelerate payoff.",
    
    house_afford_title: "House Affordability",
    house_afford_sub: "Find out how much house you can afford based on income, down payment, debts, and standard DTI guidelines with PITI.",
    mortgage_title: "Mortgage Early Payoff",
    mortgage_sub: "Calculate how extra monthly, annual, or lump-sum payments accelerate your mortgage payoff and slash interest.",
    
    beam_steel_title: "Beam Steel Rebar BBS",
    beam_steel_sub: "Calculate main and extra rebar cutting lengths, unit weight (D²/162.28), and bar bending schedule (BBS) tonnage.",
    
    beam_stirrups_title: "Beam Stirrups (Ring) Converter",
    beam_stirrups_sub: "Compute stirrup cutting length with 135° standard seismic hooks, rings per beam, total ring count, and steel weight.",
    
    brick_wall_title: "Brick & Mortar Wall",
    brick_wall_sub: "Estimate required bricks count, 50kg cement bags, and sand volume for 4.5\" and 9\" masonry walls with deductions.",
    
    tile_title: "Flooring Tile & Square Feet",
    tile_sub: "Calculate exact number of tiles, packaging boxes, and total square footage needed for rooms with cutting wastage.",
    
    meeting_title: "Meeting Cost Calculator",
    meeting_sub: "Calculate the true financial salary cost of office meetings, Zoom calls, and standups. Real-time cost ticker and team setup.",
    
    salary_title: "Salary & In-Hand Calculator",
    salary_sub: "Calculate exact monthly take-home salary from Annual CTC, or convert hourly wages to annual pay with PF and tax options.",
    
    margin_title: "Profit Margin & Markup",
    margin_sub: "Calculate gross profit, net margin, and required markup percentages to price goods for maximum profit.",
    
    fuel_title: "Fuel Cost & Commute Tool",
    fuel_sub: "Calculate exact gas costs for daily office commutes or road trips. Split fuel easily with carpool passengers.",
    
    tip_title: "Tip & Bill Split Calculator",
    tip_sub: "Split restaurant checks evenly or by participant names with custom tip percentages, tax options, and instant summary.",

    footer_rights: "© 2026 TheCalcHQ. All rights reserved.",
    footer_desc: "Free, accurate, and instant tools designed to make calculations simple and private."
  },

  gu: {
    // Navigation & Global
    nav_all: "તમામ કેલ્ક્યુલેટર્સ",
    nav_loan: "લોન / EMI",
    nav_meeting: "મીટિંગ ખર્ચ",
    nav_compound: "ચક્રવૃદ્ધિ વ્યાજ",
    nav_margin: "પ્રોફિટ માર્જિન",
    nav_privacy: "પ્રાઈવસી પોલિસી",
    browse_all: "બધા ટૂલ્સ જુઓ",
    back_to_calc: "← કેલ્ક્યુલેટર્સ પર પાછા જાઓ",
    all_tools_count: "તમામ ૨૮ કેલ્ક્યુલેટર્સ",
    cat_all: "તમામ ૨૯ ટૂલ્સ",
    cat_finance: "💰 નાણાં અને લોન",
    cat_civil: "🏗️ સિવિલ અને સ્ટીલ",
    cat_corporate: "🏢 કોર્પોરેટ અને કામ",
    cat_health: "🧘 આરોગ્ય અને ફિટનેસ",
    cat_food: "🍲 ભોજન અને ડાઇનિંગ",
    cat_utility: "⚡ દૈનિક ઉપયોગી ટૂલ્સ",

    // Global Actions & Units
    copy: "કોપી કરો",
    copied: "ક્લિપબોર્ડમાં કોપી થઈ ગયું!",
    reset: "ડિફોલ્ટ કરો",
    open_calc: "કેલ્ક્યુલેટર ખોલો →",
    people: "લોકો",
    minutes: "મિનિટ",
    hours: "કલાક",
    days: "દિવસ",
    years: "વર્ષ",
    months: "મહિના",
    unit_metric: "મેટ્રિક",
    unit_imperial: "ઇમ્પિરિયલ",

    // Homepage Hero & Desk Calc
    hero_badge: "✨ ૨૮ મફત વ્યાવસાયિક કેલ્ક્યુલેટર્સ",
    hero_title_1: "દૈનિક જીવન માટેના",
    hero_title_2: "સૌથી ચોક્કસ કેલ્ક્યુલેટર્સ",
    hero_desc: "ફાઇનાન્શિયલ પ્લાનિંગ અને સ્વાસ્થ્યથી લઈને સિવિલ એન્જિનિયરિંગ અને રોજિંદા ગણિત સુધી. ૧૦૦% પ્રાઇવેટ, તાત્કાલિક અને મફત.",
    search_placeholder: "તમામ ૨૮ કેલ્ક્યુલેટર્સમાં સર્ચ કરો (દા.ત. age, bmi, sip, loan, concrete)...",
    desk_calc_badge: "⚡ ઇન્સ્ટન્ટ ઓનલાઇન કેલ્ક્યુલેટર",
    desk_calc_title: "સ્ટાન્ડર્ડ અને સાયન્ટિફિક ડેસ્ક કેલ્ક્યુલેટર",
    desk_calc_sub: "ઝીરો લેગ • ૧૦૦% ક્લાયન્ટ-સાઇડ",
    tab_standard: "સ્ટાન્ડર્ડ",
    tab_scientific: "સાયન્ટિફિક",
    tape_history: "📜 ગણતરી ટેપ હિસ્ટ્રી",
    clear_tape: "સાફ કરો",
    keyboard_hint: "⌨️ કીબોર્ડ અને નમપેડ સપોર્ટેડ (0-9, +, -, *, /, Enter, Backspace)",
    precision_tag: "TheCalcHQ પ્રિસિઝન મેથ",

    // Badges
    badge_trending_1: "🔥 ટ્રેન્ડિંગ #૧",
    badge_trending_2: "🔥 ટ્રેન્ડિંગ #૨",
    badge_trending_3: "🔥 ટ્રેન્ડિંગ #૩",
    badge_popular: "⭐ લોકપ્રિય",
    badge_high_value: "💰 હાઇ વેલ્યુ",
    badge_civil: "🏗️ સિવિલ #૧",
    badge_daily: "⚡ દૈનિક અનિવાર્ય",

    // 28 Calculators: Titles & Descriptions
    age_title: "ચોક્કસ ઉંમર કેલ્ક્યુલેટર",
    age_sub: "વર્ષ, મહિના, દિવસ અને લાઈવ સેકન્ડ્સ સાથે ચોક્કસ ઉંમર ગણો. નેક્સ્ટ બર્થડે કાઉન્ટડાઉન અને રાશિ.",

    bmi_title: "BMI અને બોડી ફેટ કેલ્ક્યુલેટર",
    bmi_sub: "વિઝ્યુઅલ બોડી ગેજ મીટર, WHO વજન કેટેગરીઝ, આદર્શ વજન અને US Navy બોડી ફેટ ટકાવારી.",

    sip_title: "SIP અને વેલ્થ પ્લાનર",
    sip_sub: "મંથલી SIP, લમ્પસમ અને સ્ટેપ-અપ રોકાણ પર વળતર અને મોંઘવારી એડજસ્ટેડ વાસ્તવિક મૂલ્ય ગણો.",

    unit_title: "યુનિવર્સલ યુનિટ કન્વર્ટર",
    unit_sub: "લંબાઈ, વજન, ક્ષેત્રફળ, કદ, તાપમાન, ઝડપ અને ડિજિટલ ડેટાનું સેકન્ડોમાં રૂપાંતરણ.",

    loan_title: "પર્સનલ લોન અને EMI",
    loan_sub: "માસિક હપ્તો (EMI), ચૂકવવાપાત્ર કુલ વ્યાજ અને લોન ચૂકવણીનું સંપૂર્ણ સમયપત્રક.",

    auto_loan_title: "કાર લોન અને વાહન EMI",
    auto_loan_sub: "કારનો માસિક હપ્તો, ડાઉન પેમેન્ટ, ટ્રેડ-ઇન વેલ્યુ, સેલ્સ ટેક્સ અને વાર્ષિક લોન શિડ્યુલ.",

    pct_title: "ટકાવારી અને ડિસ્કાઉન્ટ",
    pct_sub: "ડિસ્કાઉન્ટ પછીની કિંમત, જીએસટી/ટેક્સ, ટકાવારી તફાવત અને શોપિંગ કાર્ટ બિલિંગ.",

    pregnancy_title: "પ્રેગ્નન્સી ડ્યુ ડેટ (EDD)",
    pregnancy_sub: "બાળકના જન્મની અંદાજિત તારીખ (EDD), ગર્ભાવસ્થાના અઠવાડિયા અને દિવસો, અને ત્રિમાસિક પ્રગતિ.",

    compound_title: "ચક્રવૃદ્ધિ વ્યાજ અને વૃદ્ધિ",
    compound_sub: "માસિક ડિપોઝિટ્સ, વાર્ષિક વળતર અને વિઝ્યુઅલ ગ્રોથ ચાર્ટ સાથે સંપત્તિ વૃદ્ધિ ગણો.",

    sleep_title: "સ્લીપ સાયકલ અને વેક ટાઈમ",
    sleep_sub: "૯૦ મિનિટના REM સ્લીપ સાયકલ્સ પૂરા કરીને તાજગી સાથે જાગો. રીયલ-ટાઇમ એલાર્મ સૂચનો.",

    calorie_title: "કેલરી ડેફિસિટ અને TDEE",
    calorie_sub: "સ્વસ્થ વજન ઘટાડવા માટે શરીરની મેઇન્ટેનન્સ કેલરી (TDEE) અને દૈનિક કેલરી લક્ષ્ય.",

    timesheet_title: "સાપ્તાહિક ટાઇમશીટ અને ઓવરટાઇમ",
    timesheet_sub: "કામના કલાકો લોગ કરો, લંચ બ્રેક બાદ કરો, ૧.૫x ઓવરટાઇમ અને ગ્રોસ સાપ્તાહિક પગાર ગણો.",

    ovulation_title: "ઓવ્યુલેશન અને પીરિયડ ટ્રેકર",
    ovulation_sub: "૬ દિવસની પીક ફર્ટાઇલ વિન્ડો, ઓવ્યુલેશન તારીખ અને આગામી ૩ મહિનાનું સાયકલ કેલેન્ડર.",

    concrete_title: "કોંક્રિટ વોલ્યુમ અને સિમેન્ટ ગુણી",
    concrete_sub: "સ્લેબ, પાયા અને ગોળ કોલમ માટે કોંક્રિટ ઘનફળ. ૫૦ kg સિમેન્ટ ગુણી, રેતી અને કપચી ગણો.",

    water_title: "દૈનિક પાણીનું પ્રમાણ",
    water_sub: "શરીરના વજન, વર્કઆઉટ અને વાતાવરણ મુજબ દરરોજ પીવા માટે જરૂરી લિટર અને ગ્લાસ.",

    gpa_title: "કોલેજ GPA અને CGPA",
    gpa_sub: "સેમેસ્ટર GPA, 4.0 અને 10.0 સ્કેલ પર ક્યુમ્યુલેટિવ CGPA અને એકેડેમિક સ્ટેન્ડિંગ.",

    retirement_title: "રિટાયરમેન્ટ અને FIRE પ્લાનર",
    retirement_sub: "નિવૃત્તિ માટે જરૂરી ફંડ, માસિક પેન્શન, મોંઘવારી દર અને ૪% સેફ વિથડ્રોઅલ નિયમ.",

    credit_card_title: "ક્રેડિટ કાર્ડ પે-ઓફ",
    credit_card_sub: "ક્રેડિટ કાર્ડ દેવામાંથી મુક્ત થવાનો સમય, વ્યાજ ખર્ચ અને વધારાના પેમેન્ટથી થતી બચત.",

    house_afford_title: "ઘર ખરીદી બજેટ અને DTI",
    house_afford_sub: "આવક, ડાઉન પેમેન્ટ અને ૨૮/૩૬ DTI નિયમ મુજબ તમે કેટલા લાખનું ઘર ખરીદી શકો છો.",
    mortgage_title: "મોર્ગેજ વહેલું ચુકવણું કેલ્ક્યુલેટર",
    mortgage_sub: "વધારાની માસિક કે વાર્ષિક રકમ ભરીને હોમ લોન કેટલા વર્ષ વહેલી પૂર્ણ થશે અને કેટલું વ્યાજ બચશે તેની ગણતરી કરો.",

    beam_steel_title: "બીમ સ્ટીલ રીબાર BBS",
    beam_steel_sub: "મુખ્ય અને એક્સ્ટ્રા સળિયા લંબાઈ, યુનિટ વજન (D²/162.28) અને સ્ટીલ ટનેજ ગણતરી.",

    beam_stirrups_title: "બીમ સ્ટીરપ્સ (રીંગ) કન્વર્ટર",
    beam_stirrups_sub: "૧૩૫° હૂક સાથે રીંગ કટિંગ લંબાઈ, બીમ દીઠ રીંગ સંખ્યા અને સ્ટીલ વજન.",

    brick_wall_title: "ઈંટ અને ચણતર દીવાલ",
    brick_wall_sub: "૪.૫ અને ૯ ઇંચ દીવાલ માટે ઈંટોની સંખ્યા, ૫૦ kg સિમેન્ટ ગુણી અને રેતીનું પ્રમાણ.",

    tile_title: "ફ્લોરિંગ ટાઇલ્સ અને ચોરસ ફૂટ",
    tile_sub: "રૂમ માટે જરૂરી ટાઇલ્સની સંખ્યા, પેકિંગ બોક્સ (પેટીઓ) અને વેસ્ટેજ સાથે સ્ક્વેર ફીટ.",

    meeting_title: "કોર્પોરેટ મીટિંગ ખર્ચ",
    meeting_sub: "ઓફિસ મીટિંગ્સ, ઝૂમ કોલ્સ અને સ્ટેન્ડઅપ્સનો વાસ્તવિક નાણાકીય પગાર ખર્ચ ટીકર.",

    salary_title: "ઇન-હેન્ડ પગાર અને CTC",
    salary_sub: "વાર્ષિક CTC માંથી ચોખ્ખો માસિક ઇન-હેન્ડ પગાર અને PF/ગ્રેચ્યુઇટી વિકલ્પો.",

    margin_title: "પ્રોફિટ માર્જિન અને માર્કઅપ",
    margin_sub: "ગ્રોસ પ્રોફિટ, નેટ માર્જિન અને સાચો નફો મેળવવા માટે જરૂરી માર્કઅપ ટકાવારી.",

    fuel_title: "ઈંધણ ખર્ચ અને કમ્યુટ ટૂલ",
    fuel_sub: "દૈનિક ઓફિસ જવા-આવવાનો પેટ્રોલ/ડીઝલ ખર્ચ અને કારપૂલ મુસાફરો વચ્ચે વહેંચણી.",

    tip_title: "ટિપ અને બિલ સ્પ્લિટ",
    tip_sub: "રેસ્ટોરન્ટ બિલ સરખે ભાગે અથવા વ્યક્તિગત નામો મુજબ ટિપ સાથે વહેંચો.",

    footer_rights: "© 2026 TheCalcHQ. સર્વાધિકાર સુરક્ષિત.",
    footer_desc: "ગણતરીઓને સરળ, ઝડપી અને ખાનગી બનાવવા માટે રચાયેલા ૧૦૦% મફત ટૂલ્સ."
  },

  hi: {
    // Navigation & Global
    nav_all: "सभी कैलकुलेटर",
    nav_loan: "ऋण / EMI",
    nav_meeting: "मीटिंग लागत",
    nav_compound: "चक्रवृद्धि ब्याज",
    nav_margin: "लाभ मार्जिन",
    nav_privacy: "गोपनीयता नीति",
    browse_all: "सभी टूल्स देखें",
    back_to_calc: "← कैलकुलेटर पर वापस जाएं",
    all_tools_count: "सभी 29 टूल्स",
    cat_all: "सभी 29 टूल्स",
    cat_finance: "💰 वित्त एवं ऋण",
    cat_civil: "🏗️ सिविल एवं निर्माण",
    cat_corporate: "🏢 कॉर्पोरेट एवं कार्य",
    cat_health: "🧘 स्वास्थ्य एवं फिटनेस",
    cat_food: "🍲 खान-पान और डाइनिंग",
    cat_utility: "⚡ दैनिक उपयोगी उपकरण",

    // Global Actions & Units
    copy: "कॉपी करें",
    copied: "क्लिपबोर्ड पर कॉपी हो गया!",
    reset: "डिफ़ॉल्ट करें",
    open_calc: "कैलकुलेटर खोलें →",
    people: "लोग",
    minutes: "मिनट",
    hours: "घंटे",
    days: "दिन",
    years: "वर्ष",
    months: "महीने",
    unit_metric: "मीट्रिक",
    unit_imperial: "इंपीरियल",

    // Homepage Hero & Desk Calc
    hero_badge: "✨ 28 मुफ़्त व्यावसायिक टूल्स",
    hero_title_1: "दैनिक जीवन के लिए",
    hero_title_2: "सटीक कैलकुलेटर",
    hero_desc: "वित्तीय योजना और स्वास्थ्य से लेकर सिविल इंजीनियरिंग और दैनिक गणित तक। 100% निजी और मुफ़्त।",
    search_placeholder: "सभी 28 कैलकुलेटर में खोजें (उदा. age, bmi, sip, loan, concrete)...",
    desk_calc_badge: "⚡ इंस्टेंट ऑनलाइन कैलकुलेटर",
    desk_calc_title: "स्टैंडर्ड और साइंटिफिक डेस्क कैलकुलेटर",
    desk_calc_sub: "जीरो लैग • 100% क्लाइंट-साइड",
    tab_standard: "स्टैंडर्ड",
    tab_scientific: "साइंटिफिक",
    tape_history: "📜 गणना टेप इतिहास",
    clear_tape: "साफ़ करें",
    keyboard_hint: "⌨️ कीबोर्ड और नमपैड समर्थित (0-9, +, -, *, /, Enter, Backspace)",
    precision_tag: "TheCalcHQ प्रिसिजन मैथ",

    // Badges
    badge_trending_1: "🔥 ट्रेंडिंग #1",
    badge_trending_2: "🔥 ट्रेंडिंग #2",
    badge_trending_3: "🔥 ट्रेंडिंग #3",
    badge_popular: "⭐ लोकप्रिय",
    badge_high_value: "💰 उच्च मूल्य",
    badge_civil: "🏗️ सिविल #1",
    badge_daily: "⚡ दैनिक आवश्यक",

    // 28 Calculators: Titles & Descriptions
    age_title: "सटीक आयु कैलकुलेटर",
    age_sub: "वर्ष, महीने, दिन और लाइव सेकंड के साथ अपनी सटीक उम्र की गणना करें। जन्मदिन उलटी गिनती।",

    bmi_title: "BMI और बॉडी फैट कैलकुलेटर",
    bmi_sub: "विजुअल बीएमआई सुई गेज, डब्लूएचओ श्रेणियां, आदर्श वजन और अमेरिकी नौसेना बॉडी फैट प्रतिशत।",

    sip_title: "SIP और वेल्थ प्लानर",
    sip_sub: "मंथली एसआईपी, एकमुश्त और स्टेप-अप निवेश पर मुद्रास्फीति समायोजित भविष्य मूल्य की गणना करें।",

    unit_title: "यूनिवर्सल यूनिट कनवर्टर",
    unit_sub: "लंबाई, वजन, क्षेत्रफल, आयतन, तापमान, गति और डिजिटल डेटा का त्वरित रूपांतरण करें।",

    loan_title: "पर्सनल लोन और ईएमआई",
    loan_sub: "मासिक किस्त (EMI), देय कुल ब्याज और ऋण भुगतान की पूर्ण तालिका प्राप्त करें।",

    auto_loan_title: "ऑटो लोन और कार ईएमआई",
    auto_loan_sub: "मासिक कार भुगतान, डाउन पेमेंट, व्यापार मूल्य, बिक्री कर और वार्षिक ऋण अनुसूची।",

    pct_title: "प्रतिशत और छूट कैलकुलेटर",
    pct_sub: "छूट के बाद की कीमत, बिक्री कर, प्रतिशत अंतर और कई वस्तुओं का शॉपिंग कार्ट मूल्य।",

    pregnancy_title: "गर्भावस्था देय तिथि (EDD)",
    pregnancy_sub: "अंतिम मासिक धर्म (LMP) के आधार पर अनुमानित प्रसव तिथि (EDD) और तिमाही प्रगति।",

    compound_title: "चक्रवृद्धि ब्याज वृद्धि",
    compound_sub: "मासिक जमा, वार्षिक रिटर्न और डायनामिक चार्ट के साथ संपत्ति वृद्धि का पूर्वानुमान लगाएं।",

    sleep_title: "नींद चक्र और अलार्म समय",
    sleep_sub: "90 मिनट के REM चक्र पूरे करके तरोताजा जागें। सेकंड के साथ रीयल-टाइम अलार्म सुझाव।",

    calorie_title: "कैलोरी घाटा और TDEE",
    calorie_sub: "स्वस्थ वजन घटाने के लिए अपने दैनिक रखरखाव कैलोरी (TDEE) और लक्ष्य की गणना करें।",

    timesheet_title: "साप्ताहिक टाइमशीट और वेतन",
    timesheet_sub: "काम के घंटे लॉग करें, लंच ब्रेक घटाएं, 1.5x ओवरटाइम और सकल साप्ताहिक वेतन की गणना करें।",

    ovulation_title: "ओव्यूलेशन और अवधि ट्रैकर",
    ovulation_sub: "अपने 6-दिवसीय उपजाऊ समय, सटीक ओव्यूलेशन दिन और अगले 3 महीनों के चक्र का पूर्वानुमान लगाएं।",

    concrete_title: "कंक्रीट आयतन और सीमेंट बैग",
    concrete_sub: "स्लैब, नींव और गोल खंभों के लिए कंक्रीट आयतन। आवश्यक 50 किग्रा सीमेंट बैग, रेत और गिट्टी।",

    water_title: "दैनिक जल सेवन कैलकुलेटर",
    water_sub: "शरीर के वजन, कसरत की तीव्रता और जलवायु के आधार पर प्रतिदिन आवश्यक पानी की मात्रा।",

    gpa_title: "कॉलेज GPA और CGPA",
    gpa_sub: "सेमेस्टर जीपीए, 4.0 और 10.0 पैमाने पर कुल सीजीपीए और शैक्षणिक स्थिति की गणना करें।",

    retirement_title: "सेवानिवृत्ति और FIRE प्लानर",
    retirement_sub: "रिटायरमेंट के लिए आवश्यक कॉर्पस, मासिक पेंशन, मुद्रास्फीति और 4% सुरक्षित निकासी नियम।",

    credit_card_title: "क्रेडिट कार्ड ऋण मुक्ति",
    credit_card_sub: "क्रेडिट कार्ड ऋण से मुक्त होने का समय, ब्याज लागत और अतिरिक्त भुगतान से बचत।",

    house_afford_title: "घर खरीदने की क्षमता (बजट)",
    house_afford_sub: "अपनी आय, डाउन पेमेंट और 28/36 DTI नियमों के आधार पर जानें कि आप कितने का घर ले सकते हैं।",
    mortgage_title: "मॉर्गेज प्रीपेमेंट कैलकुलेटर",
    mortgage_sub: "अतिरिक्त मासिक या वार्षिक भुगतान करके होम लोन कितने वर्ष पहले खत्म होगा और कितना ब्याज बचेगा, गणना करें।",

    beam_steel_title: "बीम स्टील रीबार BBS",
    beam_steel_sub: "मुख्य और अतिरिक्त सरिया कटिंग लंबाई, प्रति मीटर वजन (D²/162.28) और टन भार।",

    beam_stirrups_title: "बीम स्टिरप्स (रिंग) कनवर्टर",
    beam_stirrups_sub: "135° हुक के साथ रिंग की लंबाई, प्रति बीम रिंग की संख्या और स्टील का वजन।",

    brick_wall_title: "ईंट और चिनाई दीवार कैलकुलेटर",
    brick_wall_sub: "4.5 और 9 इंच की दीवार के लिए ईंटों की संख्या, 50 किग्रा सीमेंट बैग और रेत का अनुमान।",

    tile_title: "फर्श टाइल और वर्ग फुट",
    tile_sub: "कमरों के लिए आवश्यक टाइल्स की संख्या, पैकेजिंग बॉक्स और अपव्यय के साथ कुल वर्ग फुट।",

    meeting_title: "कॉर्पोरेट मीटिंग लागत",
    meeting_sub: "कार्यालय बैठकों, ज़ूम कॉल और स्टैंडअप की वास्तविक वित्तीय लागत का लाइव टिकर।",

    salary_title: "इन-हैंड वेतन और सीटीसी",
    salary_sub: "वार्षिक सीटीसी से मासिक शुद्ध इन-हैंड वेतन, पीएफ और टैक्स कटौती की गणना करें।",

    margin_title: "लाभ मार्जिन और मार्कअप",
    margin_sub: "सकल लाभ, शुद्ध मार्जिन और सही लाभ मूल्य निर्धारण के लिए आवश्यक मार्कअप प्रतिशत।",

    fuel_title: "ईंधन लागत और यात्रा व्यय",
    fuel_sub: "दैनिक कार्यालय आवागमन या सड़क यात्राओं के लिए पेट्रोल/डीजल लागत और कारपूल शेयरिंग।",

    tip_title: "टिप और बिल विभाजन",
    tip_sub: "रेस्तरां बिल को समान रूप से या प्रतिभागियों के नाम के अनुसार उचित टिप के साथ विभाजित करें।",

    footer_rights: "© 2026 TheCalcHQ. सर्वाधिकार सुरक्षित।",
    footer_desc: "गणना को सरल, त्वरित और निजी बनाने के लिए डिज़ाइन किए गए 100% मुफ़्त टूल्स।"
  },

  es: {
    // Navigation & Global
    nav_all: "Todas las Calculadoras",
    nav_loan: "Préstamo / EMI",
    nav_meeting: "Costo de Reunión",
    nav_compound: "Interés Compuesto",
    nav_margin: "Margen de Ganancia",
    nav_privacy: "Política de Privacidad",
    browse_all: "Explorar Herramientas",
    back_to_calc: "← Volver a Calculadoras",
    all_tools_count: "Las 28 Herramientas",
    cat_all: "Las 28 Herramientas",
    cat_finance: "💰 Finanzas y Préstamos",
    cat_civil: "🏗️ Civil y Construcción",
    cat_corporate: "🏢 Trabajo y Negocios",
    cat_health: "🧘 Salud y Cuerpo",
    cat_food: "🍲 Comida y Restaurantes",
    cat_utility: "⚡ Utilidades Diarias",

    copy: "Copiar",
    copied: "¡Copiado al portapapeles!",
    reset: "Restablecer",
    open_calc: "Abrir Calculadora →",
    people: "personas",
    minutes: "minutos",
    hours: "horas",
    days: "días",
    years: "años",
    months: "meses",

    hero_badge: "✨ 28 Herramientas Profesionales Gratuitas",
    hero_title_1: "Calculadoras para la",
    hero_title_2: "Vida Diaria Real",
    hero_desc: "Desde finanzas personales y métricas de salud hasta ingeniería civil y matemáticas cotidianas. 100% privado y gratis.",
    search_placeholder: "Buscar en las 28 calculadoras (ej. edad, bmi, préstamo, concreto)...",
    desk_calc_badge: "⚡ Calculadora en Línea",
    desk_calc_title: "Calculadora Estándar y Científica",
    desk_calc_sub: "Sin demora • 100% local en tu navegador",
    tab_standard: "Estándar",
    tab_scientific: "Científica",
    tape_history: "📜 Cinta de Cálculo",
    clear_tape: "Borrar",

    badge_trending_1: "🔥 Tendencia #1",
    badge_trending_2: "🔥 Tendencia #2",
    badge_trending_3: "🔥 Tendencia #3",
    badge_popular: "⭐ Popular",
    badge_high_value: "💰 Alto Valor",
    badge_civil: "🏗️ Civil #1",
    badge_daily: "⚡ Esencial Diario",

    age_title: "Calculadora de Edad Exacta",
    age_sub: "Calcula tu edad cronológica exacta en años, meses, días y segundos en tiempo real. Cuenta regresiva de cumpleaños.",

    bmi_title: "Calculadora de IMC y Grasa Corporal",
    bmi_sub: "Indicador visual de IMC, categorías de peso de la OMS, peso objetivo saludable y grasa corporal de la Marina.",

    sip_title: "Planificador de Ahorro e Inversión",
    sip_sub: "Pronostica retornos de planes sistemáticos, pagos únicos e incrementos anuales ajustados por inflación.",

    unit_title: "Convertidor Universal de Unidades",
    unit_sub: "Convierte al instante entre métrico e imperial en Longitud, Peso, Área, Volumen, Temperatura y Velocidad.",

    loan_title: "Préstamo Personal y Cuota",
    loan_sub: "Calcula la cuota mensual, interés total a pagar y la tabla completa de amortización.",

    auto_loan_title: "Préstamo de Auto y Vehículo",
    auto_loan_sub: "Calcula el pago mensual del auto, enganche inicial, valor de intercambio, impuestos y amortización.",

    pct_title: "Porcentaje y Descuentos",
    pct_sub: "Calcula precios en oferta, cupones de descuento, impuestos de venta y diferencias de porcentaje.",

    pregnancy_title: "Fecha de Parto (FPP)",
    pregnancy_sub: "Calcula tu fecha estimada de parto (FPP), semanas y días de gestación y avance por trimestres.",

    compound_title: "Crecimiento de Interés Compuesto",
    compound_sub: "Proyecta el crecimiento de tu patrimonio con depósitos mensuales y gráficos interactivos.",

    sleep_title: "Ciclos de Sueño y Despertador",
    sleep_sub: "Despiértate con energía completando ciclos REM de 90 minutos. Sugerencias de alarmas en tiempo real.",

    calorie_title: "Déficit Calórico y TDEE",
    calorie_sub: "Calcula tu gasto energético diario (TDEE) y déficit calórico exacto para pérdida de grasa saludable.",

    timesheet_title: "Control de Horas y Horas Extras",
    timesheet_sub: "Registra entradas/salidas, descuenta pausas de comida, horas extras (1.5x) y salario semanal.",

    ovulation_title: "Calculadora de Ovulación",
    ovulation_sub: "Conoce tu ventana fértil de 6 días, fecha de ovulación y pronóstico de ciclos para los próximos 3 meses.",

    concrete_title: "Volumen de Concreto y Cemento",
    concrete_sub: "Calcula volumen para losas, zapatas y columnas redondas. Bolsas de cemento de 50 kg, arena y grava.",

    water_title: "Consumo Diario de Agua",
    water_sub: "Requerimiento diario óptimo de agua en litros y vasos según tu peso, ejercicio y clima.",

    gpa_title: "Calculadora de Promedio GPA / CGPA",
    gpa_sub: "Calcula tu promedio semestral y acumulado en escalas 4.0 y 10.0, puntos de calidad y honores académicos.",

    retirement_title: "Jubilación y FIRE",
    retirement_sub: "Calcula el fondo necesario para jubilarte, pensión mensual ajustada por inflación y regla del 4%.",

    credit_card_title: "Pago de Tarjeta de Crédito",
    credit_card_sub: "Calcula meses para liquidar tu tarjeta, costo total de intereses y ahorro con pagos adicionales.",

    house_afford_title: "Capacidad de Compra de Vivienda",
    house_afford_sub: "Descubre qué casa puedes pagar según tus ingresos, deudas mensuales y regla DTI 28/36.",
    mortgage_title: "Amortización Anticipada de Hipoteca",
    mortgage_sub: "Calcule cómo los pagos adicionales reducen años de su hipoteca y ahorran miles en intereses.",

    beam_steel_title: "Acero de Vigas y Ferralla BBS",
    beam_steel_sub: "Calcula longitudes de corte de varillas, peso unitario (D²/162.28) y tonelaje de despiece de acero.",

    beam_stirrups_title: "Estribos de Viga (Anillos)",
    beam_stirrups_sub: "Calcula longitud de corte con ganchos sísmicos a 135°, cantidad de estribos y peso en acero.",

    brick_wall_title: "Muros de Ladrillo y Mortero",
    brick_wall_sub: "Estima ladrillos necesarios, sacos de cemento y volumen de arena con deducción de puertas y ventanas.",

    tile_title: "Pisos, Baldosas y Metros Cuadrados",
    tile_sub: "Calcula baldosas necesarias, cajas y superficie total con margen de cortes y desperdicios.",

    meeting_title: "Costo de Reuniones de Trabajo",
    meeting_sub: "Calcula el costo salarial real de reuniones y videollamadas con cronómetro en tiempo real.",

    salary_title: "Salario Neto en Mano",
    salary_sub: "Convierte sueldo bruto a salario neto mensual con deducciones de impuestos y seguridad social.",

    margin_title: "Margen de Beneficio y Markup",
    margin_sub: "Calcula ganancia bruta, margen neto y el markup necesario para fijar precios comerciales.",

    fuel_title: "Costo de Combustible y Viaje",
    fuel_sub: "Calcula el costo exacto de gasolina para viajes y trayectos diarios. Divide el gasto entre pasajeros.",

    tip_title: "Propinas y División de Cuenta",
    tip_sub: "Divide cuentas de restaurante equitativamente o por nombres con porcentajes de propina personalizados.",

    footer_rights: "© 2026 TheCalcHQ. Todos los derechos reservados.",
    footer_desc: "Herramientas 100% gratuitas, privadas e instantáneas diseñadas para facilitar tus cálculos diarios."
  },

  fr: {
    nav_all: "Tous les Calculateurs",
    nav_loan: "Prêt / Mensualité",
    nav_meeting: "Coût de Réunion",
    nav_compound: "Intérêts Composés",
    nav_margin: "Marge Bénéficiaire",
    nav_privacy: "Politique de Confidentialité",
    browse_all: "Voir Tous les Outils",
    back_to_calc: "← Retour aux Calculateurs",
    all_tools_count: "Les 29 Outils",
    cat_all: "Les 29 Outils",
    cat_finance: "💰 Argent et Prêts",
    cat_civil: "🏗️ Bâtiment et Génie Civil",
    cat_corporate: "🏢 Entreprise et Travail",
    cat_health: "🧘 Santé et Corps",
    cat_food: "🍲 Repas et Restaurants",
    cat_utility: "⚡ Utilitaires du Quotidien",
    copy: "Copier",
    copied: "Copié dans le presse-papier !",
    reset: "Réinitialiser",
    open_calc: "Ouvrir le Calculateur →",
    hero_badge: "✨ 28 Outils Professionnels Gratuits",
    hero_title_1: "Des calculateurs pour la",
    hero_title_2: "Vraie Vie Quotidienne",
    hero_desc: "De la gestion financière et des indicateurs de santé au génie civil et aux mathématiques du quotidien. 100% privé et gratuit.",
    search_placeholder: "Rechercher parmi les 28 calculateurs...",
    badge_trending_1: "🔥 Tendance #1",
    badge_trending_2: "🔥 Tendance #2",
    badge_trending_3: "🔥 Tendance #3",
    badge_popular: "⭐ Populaire",
    age_title: "Calculateur d'Âge Exact",
    age_sub: "Calculez votre âge chronologique précis en années, mois, jours et secondes en direct.",
    bmi_title: "Calculateur d'IMC et Masse Grasse",
    bmi_sub: "Jauge visuelle d'IMC, poids idéal santé et pourcentage de graisse corporelle US Navy.",
    sip_title: "Simulateur d'Épargne et Rendement",
    sip_sub: "Prévoyez vos rendements d'épargne programmée et votre capital ajusté à l'inflation.",
    unit_title: "Convertisseur Universel d'Unités",
    unit_sub: "Convertissez instantanément longueurs, poids, surfaces, volumes, températures et vitesses.",
    footer_rights: "© 2026 TheCalcHQ. Tous droits réservés."
  },

  de: {
    nav_all: "Alle Rechner",
    nav_loan: "Kredit / Rate",
    nav_meeting: "Meeting-Kosten",
    nav_compound: "Zinseszins",
    nav_margin: "Gewinnmarge",
    nav_privacy: "Datenschutzerklärung",
    browse_all: "Alle Werkzeuge",
    back_to_calc: "← Zurück zu den Rechnern",
    all_tools_count: "Alle 29 Rechner",
    cat_all: "Alle 29 Rechner",
    cat_finance: "💰 Finanzen & Kredite",
    cat_civil: "🏗️ Bauwesen & Stahl",
    cat_corporate: "🏢 Beruf & Arbeit",
    cat_health: "🧘 Gesundheit & Körper",
    cat_food: "🍲 Essen & Gastronomie",
    cat_utility: "⚡ Tägliche Dienstprogramme",
    copy: "Kopieren",
    copied: "In die Zwischenablage kopiert!",
    reset: "Zurücksetzen",
    open_calc: "Rechner öffnen →",
    hero_badge: "✨ 28 kostenlose Profi-Rechner",
    hero_title_1: "Rechner für das",
    hero_title_2: "Echte Tägliche Leben",
    hero_desc: "Von Finanzplanung und Gesundheitswerten bis hin zu Bauingenieurwesen und Alltagsmathematik. 100% privat und kostenlos.",
    search_placeholder: "Alle 29 Rechner durchsuchen...",
    badge_trending_1: "🔥 Trend #1",
    badge_trending_2: "🔥 Trend #2",
    badge_trending_3: "🔥 Trend #3",
    badge_popular: "⭐ Beliebt",
    age_title: "Exakter Altersrechner",
    age_sub: "Berechnen Sie Ihr genaues Alter in Jahren, Monaten, Tagen und Live-Sekunden.",
    bmi_title: "BMI & Körperfett-Rechner",
    bmi_sub: "Visuelle BMI-Anzeige, WHO-Gewichtsklassen, Normalgewicht und US-Navy-Körperfettanteil.",
    sip_title: "Sparplan- & Vermögensrechner",
    sip_sub: "Berechnen Sie Renditen von monatlichen Sparplänen und Einmalanlagen mit Inflationsausgleich.",
    unit_title: "Universeller Einheitenrechner",
    unit_sub: "Rechnen Sie Längen, Gewichte, Flächen, Volumen, Temperaturen und Datenmengen blitzschnell um.",
    footer_rights: "© 2026 TheCalcHQ. Alle Rechte vorbehalten."
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('calchub_lang') || 'en';
    if (!TRANSLATIONS[this.currentLang]) this.currentLang = 'en';
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.mountLanguageDropdown();
        this.translatePage();
      });
    } else {
      this.mountLanguageDropdown();
      this.translatePage();
    }
  }

  setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
      this.currentLang = lang;
      localStorage.setItem('calchub_lang', lang);
      this.translatePage();
      
      // Synchronize all language selector dropdowns on the page
      document.querySelectorAll('.language-selector-mount select').forEach(sel => {
        sel.value = lang;
      });

      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
  }

  t(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || null;
  }

  translatePage() {
    // 1. Translate standard text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) {
        el.textContent = val;
      }
    });

    // 2. Translate elements that permit rich HTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.t(key);
      if (val) {
        el.innerHTML = val;
      }
    });

    // 3. Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.t(key);
      if (val) {
        el.setAttribute('placeholder', val);
      }
    });

    document.documentElement.lang = this.currentLang;
  }

  mountLanguageDropdown() {
    const containers = document.querySelectorAll('.language-selector-mount');
    if (!containers.length) return;

    const isMobile = window.innerWidth < 640;

    containers.forEach(container => {
      const select = document.createElement('select');
      select.setAttribute('aria-label', 'Select Language');
      select.className = 'text-[11px] sm:text-xs font-bold py-1 sm:py-1.5 px-1.5 sm:px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer transition';

      LANGUAGES.forEach(lang => {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = isMobile ? `${lang.flag} ${lang.code.toUpperCase()}` : `${lang.flag} ${lang.name}`;
        if (lang.code === this.currentLang) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });

      select.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });

      container.innerHTML = '';
      container.appendChild(select);
    });
  }
}

// Global Singleton
window.CalcI18n = new I18nManager();
