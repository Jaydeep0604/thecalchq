/**
 * CalcHub Multi-Language Translation (i18n) Engine - Complete Edition
 * Languages: English (en), Spanish (es), Hindi (hi), French (fr), German (de)
 * Provides comprehensive translation across all 12 calculators, forms, and results.
 */

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
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
    all_tools_count: "All 12 Tools",
    cat_corporate: "🏢 Corporate & Work",
    cat_civil: "🏗️ Civil & Steel",
    cat_food: "🍲 Food & Dining",
    cat_finance: "💰 Money & Loans",
    cat_health: "🧘 Self & Health",
    beam_steel_title: "Beam Steel Rebar Converter",
    beam_stirrups_title: "Beam Stirrups (Ring) Converter",
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
    round_up_tip: "Round up per person (whole dollar)",
    salary_mode_hourly: "Hourly Wage",
    salary_mode_annual: "Annual Salary",
    meeting_timer_start: "▶ Start Live Ticker",
    meeting_timer_pause: "⏸ Pause",
    meeting_timer_reset: "↺ Reset",
    meeting_ticker_live: "Live Meeting Cost",
    trip_one_way: "One-Way",
    trip_round_trip: "Round Trip (2x)",
    calorie_gain_target: "Lean Muscle Surplus (+300 kcal)",
    calorie_mild_loss: "Mild Fat Loss (-250 kcal)",
    protein: "Protein",
    carbs: "Carbs",
    fats: "Fats",

    // Homepage Hero
    hero_badge: "✨ Corporate, Food, Health & Financial Tools",
    hero_title_1: "Calculators for",
    hero_title_2: "Everyday Real Life",
    hero_desc: "From corporate meeting costs and dinner bill splits to home loans, sleep cycles, and calorie targets. 100% private, instant, and free.",
    search_placeholder: "Search (e.g. meeting, bill split, sleep, loan, fuel, calorie)...",

    // 1. Meeting Cost
    meeting_title: "Meeting Cost Calculator",
    meeting_sub: "Calculate the true financial salary cost of office meetings, Zoom calls, and standups.",
    meeting_attendees: "Number of Attendees",
    meeting_wage: "Average Hourly Rate per Person",
    meeting_duration: "Meeting Duration",
    meeting_total: "Total Meeting Cost",
    meeting_cost_min: "Cost Per Minute",
    meeting_cost_person: "Cost Per Person",
    meeting_annual: "Annual Cost (If held weekly)",

    // 2. Tip & Bill Split
    tip_title: "Tip & Bill Split Calculator",
    tip_sub: "Easily split restaurant checks and calculate fair tips with friends and colleagues.",
    tip_bill_amount: "Total Check / Bill Amount",
    tip_percentage: "Tip Percentage",
    tip_split_between: "Split Between",
    tip_each_pays: "Each Person Pays",
    tip_original_check: "Original Food & Drinks Bill",
    tip_total_tip: "Total Tip",
    tip_per_person: "Tip Per Person",
    tip_total_with_tip: "Total Bill with Tip",

    // 3. Sleep Cycle
    sleep_title: "Sleep Cycle & Wake-Up Calculator",
    sleep_sub: "Wake up energized by timing your alarms to complete 90-minute REM cycles instead of groggy in deep sleep.",
    sleep_tab_wake: "I want to wake up at...",
    sleep_tab_now: "If I go to bed now...",
    sleep_prompt: "What time do you need to wake up?",
    sleep_fall_asleep_note: "Includes an average of 14 minutes to fall asleep.",

    // 4. Fuel & Commute
    fuel_title: "Fuel Cost & Commute Calculator",
    fuel_sub: "Calculate trip gas expenses, split fuel costs with passengers, and project monthly driving budgets.",
    fuel_distance: "Trip Distance",
    fuel_efficiency: "Fuel Efficiency (MPG / km/L)",
    fuel_price: "Fuel Price (per gallon/liter)",
    fuel_carpool: "Split Ride With (Passengers)",
    fuel_total: "Total Trip Fuel Cost",
    fuel_required: "Fuel Required",
    fuel_cost_rider: "Cost Per Person",
    fuel_monthly: "Monthly Work Commute (20 days)",

    // 5. Recipe Scaler
    recipe_title: "Recipe Portion & Servings Scaler",
    recipe_sub: "Multiply or divide your recipe ingredients effortlessly when cooking for a crowd or meal-prepping for one.",
    recipe_orig_servings: "Original Recipe Serves",
    recipe_target_servings: "Desired Target Servings",
    recipe_scale_factor: "Scale Multiplier",
    recipe_ingredients: "Ingredients List",
    recipe_add_row: "+ Add Ingredient",
    recipe_copy_list: "📋 Copy Scaled List",

    // 6. Calorie & TDEE
    calorie_title: "Calorie Deficit & TDEE Calculator",
    calorie_sub: "Determine your daily maintenance calories and personalized deficit targets for sustainable fat loss.",
    calorie_gender: "Biological Sex",
    calorie_age: "Age",
    calorie_height: "Height",
    calorie_weight: "Weight",
    calorie_activity: "Daily Activity Level",
    calorie_tdee: "Maintenance Calories (TDEE)",
    calorie_bmr: "Basal Metabolic Rate (BMR)",
    calorie_loss_target: "Weight Loss Deficit Target",

    // 7. Loan & EMI
    loan_title: "Loan & EMI Calculator",
    loan_sub: "Estimate your monthly payment, total interest cost, and visual payment breakdown.",
    loan_param: "Loan Parameters",
    loan_amount: "Loan Amount",
    loan_rate: "Annual Interest Rate (APR)",
    loan_term: "Loan Term (Duration)",
    loan_monthly_pay: "Monthly Payment (EMI)",
    loan_principal: "Principal Loan Amount",
    loan_total_interest: "Total Interest Payable",
    loan_total_repay: "Total Amount to Repay",
    loan_amortization: "Annual Amortization Schedule",

    // 8. Compound Interest
    compound_title: "Compound Interest Calculator",
    compound_sub: "Project your wealth growth over time with monthly deposits, annual returns, and dynamic growth charts.",
    compound_start: "Initial Starting Deposit",
    compound_monthly: "Monthly Contribution",
    compound_return: "Estimated Annual Return Rate",
    compound_horizon: "Investment Horizon",
    compound_freq: "Compounding Frequency",
    compound_future: "Total Future Balance",
    compound_principal_total: "Total Money Contributed",
    compound_interest_total: "Total Compound Interest Earned",

    // 9. Profit Margin
    margin_title: "Profit Margin & Markup Calculator",
    margin_sub: "Calculate gross profit, net margin, and required markup percentages to price goods for profit.",
    margin_cogs: "Cost to Produce or Buy (COGS)",
    margin_revenue: "Retail Selling Price (Revenue)",
    margin_fees: "Additional Unit Fees",
    margin_net_profit: "Net Profit Per Unit",
    margin_pct: "Profit Margin",
    margin_markup: "Markup",

    // 10. Salary to Hourly
    salary_title: "Hourly to Salary Converter",
    salary_sub: "Convert annual salary to hourly, weekly, bi-weekly, and monthly rates with customizable hours.",
    salary_pay_rate: "Pay Rate",
    salary_hours_week: "Hours Worked Per Week",
    salary_weeks_year: "Paid Weeks Per Year",
    salary_annual_total: "Total Annual Salary",
    salary_hourly_rate: "Hourly Rate",
    salary_weekly: "Weekly Pay",
    salary_monthly: "Monthly Average Pay",

    // 11. Mortgage Payoff
    mortgage_title: "Mortgage Early Payoff Calculator",
    mortgage_sub: "Discover how making extra principal payments cuts years and tens of thousands in interest off your mortgage.",
    mortgage_balance: "Remaining Mortgage Balance",
    mortgage_rate: "Interest Rate (%)",
    mortgage_term: "Remaining Term (Years)",
    mortgage_extra: "Extra Monthly Payment",
    mortgage_saved: "Total Interest Saved",
    standard_payment: "Standard Monthly Payment",
    new_payment: "New Payment (with Extra)",
    new_payoff_term: "New Payoff Term",

    // 12. Percentage & Discount
    pct_title: "Percentage & Discount Calculator",
    pct_sub: "Quickly calculate sale price after coupon discounts, sales tax, percentage difference, and retail savings.",
    pct_orig_price: "Original Price",
    pct_discount_off: "Discount (% Off)",
    pct_final_price: "Final Sale Price",
    pct_you_save: "You Save",

    // Footer
    footer_rights: "© 2026 CalcHub. All rights reserved.",
    footer_disclaimer: "All calculations are for educational and informational purposes."
  },

  es: {
    nav_all: "Calculadoras",
    nav_loan: "Préstamos / EMI",
    nav_meeting: "Costo de Reunión",
    nav_compound: "Interés Compuesto",
    nav_margin: "Margen de Ganancia",
    nav_privacy: "Privacidad",
    browse_all: "Ver Todas las Herramientas",
    back_to_calc: "← Volver a Calculadoras",
    all_tools_count: "Las 12 Herramientas",
    cat_corporate: "🏢 Trabajo y Oficina",
    cat_civil: "🏗️ Construcción y Acero",
    cat_food: "🍲 Comida y Restaurantes",
    cat_finance: "💰 Dinero y Préstamos",
    cat_health: "🧘 Salud y Diario",
    beam_steel_title: "Calculadora de Acero para Vigas",
    beam_stirrups_title: "Calculadora de Estribos (Anillos)",
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
    unit_metric: "Métrico",
    unit_imperial: "Imperial",
    round_up_tip: "Redondear por persona (moneda entera)",
    salary_mode_hourly: "Tarifa por Hora",
    salary_mode_annual: "Salario Anual",
    meeting_timer_start: "▶ Iniciar Cronómetro",
    meeting_timer_pause: "⏸ Pausar",
    meeting_timer_reset: "↺ Reiniciar",
    meeting_ticker_live: "Costo en Vivo de Reunión",
    trip_one_way: "Ida Solo",
    trip_round_trip: "Ida y Vuelta (2x)",
    calorie_gain_target: "Ganancia Muscular (+300 kcal)",
    calorie_mild_loss: "Pérdida Leve de Grasa (-250 kcal)",
    protein: "Proteínas",
    carbs: "Carbohidratos",
    fats: "Grasas",

    hero_badge: "✨ Herramientas Diarias, Corporativas y Financieras",
    hero_title_1: "Calculadoras para la",
    hero_title_2: "Vida Real Cotidiana",
    hero_desc: "Desde costos de reuniones en el trabajo y propinas en cenas hasta préstamos, ciclos de sueño y calorías diarias. 100% privado y gratuito.",
    search_placeholder: "Buscar (ej. reunión, propina, sueño, préstamo, combustible, calorías)...",

    meeting_title: "Calculadora de Costo de Reunión",
    meeting_sub: "Descubre el costo real en sueldos de tus reuniones de oficina, llamadas de Zoom y reuniones de equipo.",
    meeting_attendees: "Número de Participantes",
    meeting_wage: "Sueldo Promedio por Hora (Persona)",
    meeting_duration: "Duración de la Reunión",
    meeting_total: "Costo Total de la Reunión",
    meeting_cost_min: "Costo por Minuto",
    meeting_cost_person: "Costo por Asistente",
    meeting_annual: "Costo Anual (Si es semanal)",

    tip_title: "Calculadora de Propinas y División de Cuenta",
    tip_sub: "Divide cuentas de restaurantes y calcula propinas justas fácilmente con amigos y colegas.",
    tip_bill_amount: "Monto Total de la Cuenta",
    tip_percentage: "Porcentaje de Propina",
    tip_split_between: "Dividir Entre",
    tip_each_pays: "Cada Persona Paga",
    tip_original_check: "Monto de la Comida",
    tip_total_tip: "Propina Total",
    tip_per_person: "Propina por Persona",
    tip_total_with_tip: "Total con Propina",

    sleep_title: "Calculadora de Ciclos de Sueño y Despertar",
    sleep_sub: "Despiértate con energía sincronizando tus alarmas con ciclos REM de 90 minutos en lugar de despertar cansado en sueño profundo.",
    sleep_tab_wake: "Quiero despertar a las...",
    sleep_tab_now: "Si me acuesto ahora...",
    sleep_prompt: "¿A qué hora necesitas despertar?",
    sleep_fall_asleep_note: "Incluye un promedio de 14 minutos para conciliar el sueño.",

    fuel_title: "Calculadora de Combustible y Trayectos",
    fuel_sub: "Calcula los gastos de gasolina para viajes y trayectos diarios a la oficina. Divide costos con pasajeros.",
    fuel_distance: "Distancia del Viaje",
    fuel_efficiency: "Consumo de Combustible (MPG / km/L)",
    fuel_price: "Precio del Combustible (por galón/litro)",
    fuel_carpool: "Dividir con Pasajeros",
    fuel_total: "Costo Total de Combustible",
    fuel_required: "Combustible Necesario",
    fuel_cost_rider: "Costo por Persona",
    fuel_monthly: "Gasto Mensual de Oficina (20 días)",

    recipe_title: "Escalador de Porciones y Recetas",
    recipe_sub: "Multiplica o divide las cantidades de ingredientes fácilmente al cocinar para grupos o preparar comidas.",
    recipe_orig_servings: "Porciones de la Receta Original",
    recipe_target_servings: "Porciones Deseadas",
    recipe_scale_factor: "Factor de Escala",
    recipe_ingredients: "Lista de Ingredientes",
    recipe_add_row: "+ Agregar Ingrediente",
    recipe_copy_list: "📋 Copiar Lista Escalada",

    calorie_title: "Calculadora de Déficit Calórico y TDEE",
    calorie_sub: "Determina tus calorías diarias de mantenimiento y tu déficit personalizado para perder grasa saludablemente.",
    calorie_gender: "Sexo Biológico",
    calorie_age: "Edad",
    calorie_height: "Altura",
    calorie_weight: "Peso",
    calorie_activity: "Nivel de Actividad Diaria",
    calorie_tdee: "Calorías de Mantenimiento (TDEE)",
    calorie_bmr: "Metabolismo Basal (BMR)",
    calorie_loss_target: "Objetivo para Perder Peso (-500 kcal)",

    loan_title: "Calculadora de Préstamos y Cuotas (EMI)",
    loan_sub: "Calcula tu cuota mensual, interés total y tabla de amortización detallada.",
    loan_param: "Parámetros del Préstamo",
    loan_amount: "Monto del Préstamo",
    loan_rate: "Tasa de Interés Anual (APR)",
    loan_term: "Plazo del Préstamo",
    loan_monthly_pay: "Pago Mensual (Cuota)",
    loan_principal: "Capital Solicitado",
    loan_total_interest: "Total de Intereses a Pagar",
    loan_total_repay: "Monto Total a Devolver",
    loan_amortization: "Tabla de Amortización Anual",

    compound_title: "Calculadora de Interés Compuesto",
    compound_sub: "Proyecta tu patrimonio futuro con aportaciones mensuales y crecimiento compuesto.",
    compound_start: "Depósito Inicial",
    compound_monthly: "Aporte Mensual",
    compound_return: "Rendimiento Anual Estimado",
    compound_horizon: "Horizonte de Inversión",
    compound_freq: "Frecuencia de Capitalización",
    compound_future: "Saldo Futuro Total",
    compound_principal_total: "Total Aportado",
    compound_interest_total: "Total de Intereses Ganados",

    margin_title: "Calculadora de Margen de Ganancia y Markup",
    margin_sub: "Calcula precios de venta, margen bruto y markup para tu negocio.",
    margin_cogs: "Costo del Producto (COGS)",
    margin_revenue: "Precio de Venta (Ingresos)",
    margin_fees: "Tarifas Adicionales por Unidad",
    margin_net_profit: "Ganancia Neta por Unidad",
    margin_pct: "Margen de Ganancia",
    margin_markup: "Markup",

    salary_title: "Conversor de Sueldo por Hora a Anual",
    salary_sub: "Convierte salarios anuales a tarifas por hora, semanales y mensuales.",
    salary_pay_rate: "Tarifa de Pago",
    salary_hours_week: "Horas Trabajadas por Semana",
    salary_weeks_year: "Semanas Pagadas por Año",
    salary_annual_total: "Salario Anual Total",
    salary_hourly_rate: "Tarifa por Hora",
    salary_weekly: "Pago Semanal",
    salary_monthly: "Promedio Mensual",

    mortgage_title: "Calculadora de Pago Anticipado de Hipoteca",
    mortgage_sub: "Averigua cuánto tiempo y dinero ahorras aportando pagos extra a tu préstamo hipotecario.",
    mortgage_balance: "Saldo Pendiente de Hipoteca",
    mortgage_rate: "Tasa de Interés (%)",
    mortgage_term: "Plazo Restante (Años)",
    mortgage_extra: "Pago Mensual Adicional",
    mortgage_saved: "Total de Intereses Ahorrados",
    standard_payment: "Pago Mensual Estándar",
    new_payment: "Nuevo Pago (con Extra)",
    new_payoff_term: "Nuevo Plazo de Amortización",

    pct_title: "Calculadora de Porcentajes y Descuentos",
    pct_sub: "Calcula precios rebajados, cupones de descuento y diferencias porcentuales.",
    pct_orig_price: "Precio Original",
    pct_discount_off: "Descuento (% Descuento)",
    pct_final_price: "Precio Final con Descuento",
    pct_you_save: "Tú Ahorras",

    footer_rights: "© 2026 CalcHub. Todos los derechos reservados.",
    footer_disclaimer: "Todos los cálculos tienen fines educativos e informativos."
  },

  hi: {
    nav_all: "सभी कैलकुलेटर",
    nav_loan: "ऋण / EMI",
    nav_meeting: "मीटिंग लागत",
    nav_compound: "चक्रवृद्धि ब्याज",
    nav_margin: "लाभ मार्जिन",
    nav_privacy: "गोपनीयता",
    browse_all: "सभी टूल्स देखें",
    back_to_calc: "← वापस कैलकुलेटर पर",
    all_tools_count: "सभी 12 टूल्स",
    cat_corporate: "🏢 कार्यालय और कॉर्पोरेट",
    cat_civil: "🏗️ सिविल और सरिया (स्टील)",
    cat_food: "🍲 भोजन और रेस्तरां",
    cat_finance: "💰 धन और ऋण",
    cat_health: "🧘 स्वास्थ्य और दिनचर्या",
    beam_steel_title: "बीम सरिया (स्टील) कैलकुलेटर",
    beam_stirrups_title: "बीम रिंग (स्टिरप्स) कैलकुलेटर",
    copy: "कॉपी करें",
    copied: "क्लिपबोर्ड पर कॉपी किया गया!",
    reset: "रीसेट करें",
    open_calc: "कैलकुलेटर खोलें →",
    people: "लोग",
    minutes: "मिनट",
    hours: "घंटे",
    days: "दिन",
    years: "वर्ष",
    months: "महीने",
    unit_metric: "मीट्रिक",
    unit_imperial: "इंपीरियल",
    round_up_tip: "प्रति व्यक्ति राउंड अप (पूरा रुपया)",
    salary_mode_hourly: "प्रति घंटा दर",
    salary_mode_annual: "वार्षिक वेतन",
    meeting_timer_start: "▶ लाइव टिकर शुरू करें",
    meeting_timer_pause: "⏸ रोकें",
    meeting_timer_reset: "↺ रीसेट",
    meeting_ticker_live: "लाइव मीटिंग लागत",
    trip_one_way: "एक तरफा",
    trip_round_trip: "आना-जाना (2x)",
    calorie_gain_target: "मांसपेशी निर्माण (+300 किलो कैलोरी)",
    calorie_mild_loss: "हल्की वसा हानि (-250 किलो कैलोरी)",
    protein: "प्रोटीन",
    carbs: "कार्ब्स",
    fats: "वसा",

    hero_badge: "✨ कॉर्पोरेट, भोजन, स्वास्थ्य और वित्तीय टूल्स",
    hero_title_1: "दैनिक वास्तविक जीवन के",
    hero_title_2: "कैलकुलेटर",
    hero_desc: "ऑफिस मीटिंग की लागत और डिनर बिल विभाजन से लेकर लोन EMI, नींद के चक्र और कैलोरी लक्ष्यों तक। 100% सुरक्षित और मुफ्त।",
    search_placeholder: "खोजें (उदा. मीटिंग, बिल, नींद, लोन, ईंधन, कैलोरी)...",

    meeting_title: "कॉर्पोरेट मीटिंग लागत कैलकुलेटर",
    meeting_sub: "ऑफिस मीटिंग्स, ज़ूम कॉल्स और स्टैंडअप की वास्तविक वेतन लागत की गणना करें।",
    meeting_attendees: "उपस्थित लोगों की संख्या",
    meeting_wage: "प्रति व्यक्ति औसत प्रति घंटा वेतन",
    meeting_duration: "मीटिंग की अवधि",
    meeting_total: "कुल मीटिंग लागत",
    meeting_cost_min: "प्रति मिनट लागत",
    meeting_cost_person: "प्रति व्यक्ति लागत",
    meeting_annual: "वार्षिक लागत (यदि साप्ताहिक हो)",

    tip_title: "टिप और ग्रुप बिल स्प्लिट कैलकुलेटर",
    tip_sub: "दोस्तों और सहकर्मियों के साथ रेस्तरां का बिल आसानी से बांटें और टिप की गणना करें।",
    tip_bill_amount: "कुल बिल राशि",
    tip_percentage: "टिप प्रतिशत",
    tip_split_between: "लोगों में बांटें",
    tip_each_pays: "प्रत्येक व्यक्ति का भुगतान",
    tip_original_check: "भोजन का मूल बिल",
    tip_total_tip: "कुल टिप",
    tip_per_person: "प्रति व्यक्ति टिप",
    tip_total_with_tip: "टिप सहित कुल बिल",

    sleep_title: "नींद चक्र और जागने का समय कैलकुलेटर",
    sleep_sub: "गहरी नींद के बीच थकान से जागने के बजाय 90-मिनट के REM चक्र के अंत में तरोताजा जागें।",
    sleep_tab_wake: "मुझे इस समय जागना है...",
    sleep_tab_now: "यदि मैं अभी सो जाऊं...",
    sleep_prompt: "आपको किस समय जागना है?",
    sleep_fall_asleep_note: "नींद आने में औसतन 14 मिनट शामिल हैं।",

    fuel_title: "ईंधन लागत और यात्रा कैलकुलेटर",
    fuel_sub: "दैनिक ऑफिस यात्रा या सड़क यात्रा के लिए गैस खर्च की गणना करें और यात्रियों में बांटें।",
    fuel_distance: "यात्रा दूरी",
    fuel_efficiency: "ईंधन माइलेज (MPG / km/L)",
    fuel_price: "ईंधन दर (प्रति लीटर/गैलन)",
    fuel_carpool: "यात्रियों में बांटें",
    fuel_total: "कुल यात्रा ईंधन खर्च",
    fuel_required: "आवश्यक ईंधन",
    fuel_cost_rider: "प्रति व्यक्ति लागत",
    fuel_monthly: "मासिक ऑफिस आवागमन (20 दिन)",

    recipe_title: "रेसिपी सर्विंग्स और भाग स्केलर",
    recipe_sub: "मेहमानों के लिए या एक व्यक्ति के लिए खाना बनाते समय सामग्री को आसानी से गुणा या भाग करें।",
    recipe_orig_servings: "मूल रेसिपी सर्विंग्स",
    recipe_target_servings: "वांछित सर्विंग्स",
    recipe_scale_factor: "स्केल गुणक",
    recipe_ingredients: "सामग्री की सूची",
    recipe_add_row: "+ सामग्री जोड़ें",
    recipe_copy_list: "📋 स्केल की गई सूची कॉपी करें",

    calorie_title: "कैलोरी डेफिसिट और TDEE कैलकुलेटर",
    calorie_sub: "दैनिक कैलोरी रखरखाव (TDEE) और स्वस्थ वजन घटाने के लिए सटीक डेफिसिट लक्ष्य जानें।",
    calorie_gender: "जैविक लिंग",
    calorie_age: "आयु",
    calorie_height: "ऊंचाई",
    calorie_weight: "वजन",
    calorie_activity: "दैनिक गतिविधि स्तर",
    calorie_tdee: "रखरखाव कैलोरी (TDEE)",
    calorie_bmr: "बेसल मेटाबॉलिक रेट (BMR)",
    calorie_loss_target: "वजन घटाने का लक्ष्य (-500 kcal)",

    loan_title: "लोन और EMI कैलकुलेटर",
    loan_sub: "मासिक किस्त (EMI), कुल देय ब्याज और पूर्ण परिशोधन अनुसूची देखें।",
    loan_param: "ऋण पैरामीटर",
    loan_amount: "ऋण राशि (Loan Amount)",
    loan_rate: "वार्षिक ब्याज दर (APR)",
    loan_term: "ऋण अवधि",
    loan_monthly_pay: "मासिक भुगतान (EMI)",
    loan_principal: "मूल राशि (Principal)",
    loan_total_interest: "कुल देय ब्याज",
    loan_total_repay: "कुल चुकाने योग्य राशि",
    loan_amortization: "वार्षिक परिशोधन अनुसूची",

    compound_title: "चक्रवृद्धि ब्याज कैलकुलेटर",
    compound_sub: "मासिक जमा और चक्रवृद्धि वृद्धि के साथ अपने भविष्य के धन का अनुमान लगाएं।",
    compound_start: "प्रारंभिक जमा",
    compound_monthly: "मासिक योगदान",
    compound_return: "अनुमानित वार्षिक रिटर्न दर",
    compound_horizon: "निवेश अवधि",
    compound_freq: "चक्रवृद्धि आवृत्ति",
    compound_future: "कुल भविष्य मूल्य",
    compound_principal_total: "कुल जमा राशि",
    compound_interest_total: "कुल चक्रवृद्धि ब्याज",

    margin_title: "लाभ मार्जिन और मार्कअप कैलकुलेटर",
    margin_sub: "विक्रय मूल्य, सकल मार्जिन और मार्कअप की सटीक गणना करें।",
    margin_cogs: "उत्पाद लागत (COGS)",
    margin_revenue: "बिक्री मूल्य (Revenue)",
    margin_fees: "अतिरिक्त इकाई शुल्क",
    margin_net_profit: "प्रति इकाई शुद्ध लाभ",
    margin_pct: "लाभ मार्जिन",
    margin_markup: "मार्कअप",

    salary_title: "घंटे की मजदूरी से वार्षिक वेतन कनवर्टर",
    salary_sub: "वार्षिक वेतन को प्रति घंटा, साप्ताहिक और मासिक आय में बदलें।",
    salary_pay_rate: "वेतन दर",
    salary_hours_week: "प्रति सप्ताह कार्य घंटे",
    salary_weeks_year: "प्रति वर्ष भुगतान सप्ताह",
    salary_annual_total: "कुल वार्षिक वेतन",
    salary_hourly_rate: "प्रति घंटा दर",
    salary_weekly: "साप्ताहिक वेतन",
    salary_monthly: "मासिक औसत आय",

    mortgage_title: "होम लोन जल्दी चुकाने का कैलकुलेटर",
    mortgage_sub: "देखें कि अतिरिक्त मासिक भुगतान से आपके कितने साल और लाखों रुपये का ब्याज बचता है।",
    mortgage_balance: "शेष लोन राशि",
    mortgage_rate: "ब्याज दर (%)",
    mortgage_term: "शेष अवधि (वर्ष)",
    mortgage_extra: "अतिरिक्त मासिक भुगतान",
    mortgage_saved: "कुल बचाया गया ब्याज",
    standard_payment: "मानक मासिक किस्त",
    new_payment: "नया मासिक भुगतान (अतिरिक्त सहित)",
    new_payoff_term: "कर्ज मुक्ति की नई अवधि",

    pct_title: "प्रतिशत और छूट कैलकुलेटर",
    pct_sub: "छूट के बाद अंतिम कीमत, बिक्री कर और प्रतिशत अंतर की गणना करें।",
    pct_orig_price: "मूल मूल्य",
    pct_discount_off: "छूट (% छूट)",
    pct_final_price: "अंतिम बिक्री मूल्य",
    pct_you_save: "आपकी बचत",

    footer_rights: "© 2026 CalcHub. सर्वाधिकार सुरक्षित।",
    footer_disclaimer: "सभी गणनाएं केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए हैं।"
  },

  fr: {
    nav_all: "Calculatrices",
    nav_loan: "Prêt / EMI",
    nav_meeting: "Coût Réunion",
    nav_compound: "Intérêts Composés",
    nav_margin: "Marge Bénéficiaire",
    nav_privacy: "Confidentialité",
    browse_all: "Voir Tous les Outils",
    back_to_calc: "← Retour aux Calculatrices",
    all_tools_count: "Les 12 Outils",
    cat_corporate: "🏢 Entreprise & Travail",
    cat_civil: "🏗️ Génie Civil & Acier",
    cat_food: "🍲 Repas & Cuisine",
    cat_finance: "💰 Argent & Prêts",
    cat_health: "🧘 Santé & Quotidien",
    beam_steel_title: "Convertisseur d'Armatures de Poutres",
    beam_stirrups_title: "Calculateur de Cadres (Étriers)",
    copy: "Copier",
    copied: "Copié dans le presse-papiers !",
    reset: "Réinitialiser",
    open_calc: "Ouvrir la Calculatrice →",
    people: "personnes",
    minutes: "minutes",
    hours: "heures",
    days: "jours",
    years: "ans",
    months: "mois",
    unit_metric: "Métrique",
    unit_imperial: "Impérial",
    round_up_tip: "Arrondir par personne (chiffre rond)",
    salary_mode_hourly: "Taux Horaire",
    salary_mode_annual: "Salaire Annuel",
    meeting_timer_start: "▶ Démarrer le Chrono",
    meeting_timer_pause: "⏸ Pause",
    meeting_timer_reset: "↺ Réinitialiser",
    meeting_ticker_live: "Coût de Réunion en Direct",
    trip_one_way: "Aller Simple",
    trip_round_trip: "Aller-Retour (2x)",
    calorie_gain_target: "Surplus Prise de Muscle (+300 kcal)",
    calorie_mild_loss: "Perte Légère (-250 kcal)",
    protein: "Protéines",
    carbs: "Glucides",
    fats: "Lipides",

    hero_badge: "✨ Outils Pratiques, Professionnels et Financiers",
    hero_title_1: "Des Calculatrices pour la",
    hero_title_2: "Vraie Vie Quotidienne",
    hero_desc: "Du coût des réunions professionnelles et partage d'addition au restaurant jusqu'aux prêts, cycles de sommeil et calories. 100% privé et gratuit.",
    search_placeholder: "Rechercher (ex. réunion, addition, sommeil, prêt, carburant, calories)...",

    meeting_title: "Calculateur de Coût de Réunion",
    meeting_sub: "Découvrez le coût salarial réel de vos réunions de bureau, appels Zoom et points d'équipe.",
    meeting_attendees: "Nombre de Participants",
    meeting_wage: "Taux Horaire Moyen par Personne",
    meeting_duration: "Durée de la Réunion",
    meeting_total: "Coût Total de la Réunion",
    meeting_cost_min: "Coût par Minute",
    meeting_cost_person: "Coût par Participant",
    meeting_annual: "Coût Annuel (Si hebdomadaire)",

    tip_title: "Calculateur de Pourboire et Partage d'Addition",
    tip_sub: "Partagez facilement les additions au restaurant et calculez des pourboires équitables entre collègues et amis.",
    tip_bill_amount: "Montant Total de l'Addition",
    tip_percentage: "Pourcentage de Pourboire",
    tip_split_between: "Diviser Entre",
    tip_each_pays: "Chaque Personne Paie",
    tip_original_check: "Montant du Repas",
    tip_total_tip: "Total Pourboire",
    tip_per_person: "Pourboire par Personne",
    tip_total_with_tip: "Total avec Pourboire",

    sleep_title: "Calculateur de Cycles de Sommeil et Réveil",
    sleep_sub: "Réveillez-vous en pleine forme en synchronisant vos alarmes avec vos cycles REM de 90 minutes.",
    sleep_tab_wake: "Je veux me réveiller à...",
    sleep_tab_now: "Si je me couche maintenant...",
    sleep_prompt: "À quelle heure devez-vous vous réveiller ?",
    sleep_fall_asleep_note: "Prend en compte 14 minutes moyennes pour s'endormir.",

    fuel_title: "Calculateur de Carburant et Trajets",
    fuel_sub: "Calculez vos dépenses de carburant pour vos trajets domicile-travail ou vacances. Partagez les frais.",
    fuel_distance: "Distance du Trajet",
    fuel_efficiency: "Consommation (MPG / L/100km)",
    fuel_price: "Prix du Carburant (par litre/gallon)",
    fuel_carpool: "Partager avec Passagers",
    fuel_total: "Coût Total du Carburant",
    fuel_required: "Carburant Nécessaire",
    fuel_cost_rider: "Coût par Passager",
    fuel_monthly: "Budget Trajet Travail Mensuel (20 jours)",

    recipe_title: "Ajusteur de Portions et Recettes",
    recipe_sub: "Multipliez ou divisez les proportions de vos ingrédients facilement en cuisinant pour des invités.",
    recipe_orig_servings: "Portions de la Recette Originale",
    recipe_target_servings: "Portions Souhaitées",
    recipe_scale_factor: "Facteur Multiplicateur",
    recipe_ingredients: "Liste des Ingrédients",
    recipe_add_row: "+ Ajouter un Ingrédient",
    recipe_copy_list: "📋 Copier la Liste Ajustée",

    calorie_title: "Calculateur de Déficit Calorique & TDEE",
    calorie_sub: "Déterminez vos calories de maintien et votre déficit idéal pour perdre de la graisse durablement.",
    calorie_gender: "Sexe Biologique",
    calorie_age: "Âge",
    calorie_height: "Taille",
    calorie_weight: "Poids",
    calorie_activity: "Niveau d'Activité Quotidienne",
    calorie_tdee: "Calories de Maintien (TDEE)",
    calorie_bmr: "Métabolisme de Base (BMR)",
    calorie_loss_target: "Cible Perte de Poids (-500 kcal)",

    loan_title: "Calculateur de Prêt et Mensualités",
    loan_sub: "Estimez vos mensualités, le coût total des intérêts et le tableau d'amortissement.",
    loan_param: "Paramètres du Prêt",
    loan_amount: "Montant du Prêt",
    loan_rate: "Taux d'Intérêt Annuel (APR)",
    loan_term: "Durée du Prêt",
    loan_monthly_pay: "Mensualité Estimée",
    loan_principal: "Capital Emprunté",
    loan_total_interest: "Total des Intérêts",
    loan_total_repay: "Montant Total Remboursé",
    loan_amortization: "Tableau d'Amortissement Annuel",

    compound_title: "Calculateur d'Intérêts Composés",
    compound_sub: "Projetez l'évolution de votre patrimoine avec versements réguliers et intérêts composés.",
    compound_start: "Dépôt Initial",
    compound_monthly: "Versement Mensuel",
    compound_return: "Taux de Rendement Annuel Estimé",
    compound_horizon: "Horizon d'Investissement",
    compound_freq: "Fréquence de Capitalisation",
    compound_future: "Capital Final Estimé",
    compound_principal_total: "Total des Versements",
    compound_interest_total: "Total des Intérêts Générés",

    margin_title: "Calculateur de Marge et Coefficient",
    margin_sub: "Déterminez vos prix de vente et optimisez vos marges commerciales.",
    margin_cogs: "Coût de Revient (Achat)",
    margin_revenue: "Prix de Vente",
    margin_fees: "Frais Supplémentaires",
    margin_net_profit: "Bénéfice Net Unitaire",
    margin_pct: "Marge Bénéficiaire",
    margin_markup: "Taux de Marque",

    salary_title: "Convertisseur Salaire Horaire en Annuel",
    salary_sub: "Convertissez facilement votre salaire annuel en taux horaire, hebdomadaire et mensuel.",
    salary_pay_rate: "Taux de Rémunération",
    salary_hours_week: "Heures Travaillées par Semaine",
    salary_weeks_year: "Semaines Payées par An",
    salary_annual_total: "Salaire Annuel Total",
    salary_hourly_rate: "Taux Horaire",
    salary_weekly: "Salaire Hebdomadaire",
    salary_monthly: "Moyenne Mensuelle",

    mortgage_title: "Calculateur Remboursement Anticipé Prêt",
    mortgage_sub: "Découvrez le temps et les milliers d'euros d'intérêts économisés grâce aux paiements supplémentaires.",
    mortgage_balance: "Capital Restant Dû",
    mortgage_rate: "Taux d'Intérêt (%)",
    mortgage_term: "Durée Restante (Années)",
    mortgage_extra: "Versement Mensuel Supplémentaire",
    mortgage_saved: "Intérêts Totaux Économisés",
    standard_payment: "Mensualité Standard",
    new_payment: "Nouvelle Mensualité (avec Extra)",
    new_payoff_term: "Nouvelle Durée de Remboursement",

    pct_title: "Calculateur de Pourcentages et Réductions",
    pct_sub: "Calculez les remises de soldes, taxes et différences en pourcentage en un clin d'œil.",
    pct_orig_price: "Prix d'Origine",
    pct_discount_off: "Remise (% Réduction)",
    pct_final_price: "Prix Final Remisé",
    pct_you_save: "Vous Économisez",

    footer_rights: "© 2026 CalcHub. Tous droits réservés.",
    footer_disclaimer: "Tous les calculs sont fournis à titre éducatif et indicatif."
  },

  de: {
    nav_all: "Alle Rechner",
    nav_loan: "Kredit / Rate",
    nav_meeting: "Meeting-Kosten",
    nav_compound: "Zinseszins",
    nav_margin: "Gewinnmarge",
    nav_privacy: "Datenschutz",
    browse_all: "Alle Tools Ansehen",
    back_to_calc: "← Zurück zu den Rechnern",
    all_tools_count: "Alle 12 Tools",
    cat_corporate: "🏢 Beruf & Büro",
    cat_civil: "🏗️ Bauwesen & Bewehrung",
    cat_food: "🍲 Essen & Restaurant",
    cat_finance: "💰 Geld & Kredite",
    cat_health: "🧘 Gesundheit & Alltag",
    beam_steel_title: "Trägerbewehrungs-Rechner",
    beam_stirrups_title: "Bügelbewehrungs-Rechner",
    copy: "Kopieren",
    copied: "In die Zwischenablage kopiert!",
    reset: "Zurücksetzen",
    open_calc: "Rechner Öffnen →",
    people: "Personen",
    minutes: "Minuten",
    hours: "Stunden",
    days: "Tage",
    years: "Jahre",
    months: "Monate",
    unit_metric: "Metrisch",
    unit_imperial: "Imperial",
    round_up_tip: "Pro Person aufrunden (ganzer Betrag)",
    salary_mode_hourly: "Stundenlohn",
    salary_mode_annual: "Jahresgehalt",
    meeting_timer_start: "▶ Live-Ticker starten",
    meeting_timer_pause: "⏸ Pause",
    meeting_timer_reset: "↺ Zurücksetzen",
    meeting_ticker_live: "Laufende Meeting-Kosten",
    trip_one_way: "Einfache Fahrt",
    trip_round_trip: "Hin- & Rückfahrt (2x)",
    calorie_gain_target: "Muskelaufbau (+300 kcal)",
    calorie_mild_loss: "Leichtes Defizit (-250 kcal)",
    protein: "Eiweiß",
    carbs: "Kohlenhydrate",
    fats: "Fette",

    hero_badge: "✨ Rechner für Beruf, Essen, Fitness & Finanzen",
    hero_title_1: "Rechner für das",
    hero_title_2: "Echte Tägliche Leben",
    hero_desc: "Von Meeting-Kosten im Büro und Trinkgeld beim Essen bis zu Krediten, Schlafzyklen und Kalorien. 100% sicher, privat und kostenlos.",
    search_placeholder: "Suchen (z.B. Meeting, Trinkgeld, Schlaf, Kredit, Sprit, Kalorien)...",

    meeting_title: "Meeting-Kosten-Rechner",
    meeting_sub: "Berechnen Sie die echten Gehaltskosten von Besprechungen, Zoom-Calls und Standups.",
    meeting_attendees: "Teilnehmeranzahl",
    meeting_wage: "Durchschnittlicher Stundenlohn pro Person",
    meeting_duration: "Meeting-Dauer",
    meeting_total: "Gesamte Meeting-Kosten",
    meeting_cost_min: "Kosten pro Minute",
    meeting_cost_person: "Kosten pro Teilnehmer",
    meeting_annual: "Jährliche Kosten (falls wöchentlich)",

    tip_title: "Trinkgeld- & Rechnungsrechner",
    tip_sub: "Teilen Sie Restaurantrechnungen fair auf und berechnen Sie Trinkgelder mit Freunden und Kollegen.",
    tip_bill_amount: "Rechnungsbetrag",
    tip_percentage: "Trinkgeld in %",
    tip_split_between: "Aufteilen Auf",
    tip_each_pays: "Pro Person Zu Zahlen",
    tip_original_check: "Reiner Rechnungsbetrag",
    tip_total_tip: "Gesamtes Trinkgeld",
    tip_per_person: "Trinkgeld pro Person",
    tip_total_with_tip: "Gesamtbetrag inkl. Trinkgeld",

    sleep_title: "Schlafzyklus- & Weckrechner",
    sleep_sub: "Wachen Sie energiegeladen auf, indem Sie Ihre Weckzeit auf 90-Minuten-REM-Zyklen abstimmen.",
    sleep_tab_wake: "Ich möchte aufwachen um...",
    sleep_tab_now: "Wenn ich jetzt ins Bett gehe...",
    sleep_prompt: "Um wie viel Uhr müssen Sie aufstehen?",
    sleep_fall_asleep_note: "Beinhaltet durchschnittlich 14 Minuten Einschlafzeit.",

    fuel_title: "Spritkosten- & Pendelrechner",
    fuel_sub: "Berechnen Sie Benzinkosten für Fahrten ins Büro oder Ausflüge. Teilen Sie Kosten mit Mitfahrern.",
    fuel_distance: "Fahrtstrecke",
    fuel_efficiency: "Kraftstoffverbrauch (MPG / L/100km)",
    fuel_price: "Kraftstoffpreis (pro Liter/Gallone)",
    fuel_carpool: "Mitfahrgelegenheit (Personen)",
    fuel_total: "Gesamte Treibstoffkosten",
    fuel_required: "Benötigter Kraftstoff",
    fuel_cost_rider: "Kosten pro Mitfahrer",
    fuel_monthly: "Monatliche Pendelkosten (20 Tage)",

    recipe_title: "Rezept- & Portionsumrechner",
    recipe_sub: "Passen Sie Zutatenmengen kinderleicht an, wenn Sie für Gäste kochen oder Meal Prep betreiben.",
    recipe_orig_servings: "Ursprüngliche Portionen",
    recipe_target_servings: "Gewünschte Portionen",
    recipe_scale_factor: "Umrechnungsfaktor",
    recipe_ingredients: "Zutatenliste",
    recipe_add_row: "+ Zutat Hinzufügen",
    recipe_copy_list: "📋 Skalierte Liste Kopieren",

    calorie_title: "Kaloriendefizit- & TDEE-Rechner",
    calorie_sub: "Ermitteln Sie Ihren täglichen Kalorienbedarf und Ihr Defizitziel für nachhaltiges Abnehmen.",
    calorie_gender: "Biologisches Geschlecht",
    calorie_age: "Alter",
    calorie_height: "Körpergröße",
    calorie_weight: "Gewicht",
    calorie_activity: "Tägliches Aktivitätsniveau",
    calorie_tdee: "Gesamtumsatz (TDEE)",
    calorie_bmr: "Grundumsatz (BMR)",
    calorie_loss_target: "Fettverlust-Ziel (-500 kcal)",

    loan_title: "Kredit- & Ratenrechner",
    loan_sub: "Ermitteln Sie monatliche Raten, Zinskosten und den Tilgungsplan.",
    loan_param: "Kreditdaten",
    loan_amount: "Kreditbetrag",
    loan_rate: "Sollzins p.a. (APR)",
    loan_term: "Laufzeit",
    loan_monthly_pay: "Monatliche Rate",
    loan_principal: "Nettodarlehen",
    loan_total_interest: "Gesamte Zinskosten",
    loan_total_repay: "Gesamtbetrag Rückzahlung",
    loan_amortization: "Jährlicher Tilgungsplan",

    compound_title: "Zinseszinsrechner",
    compound_sub: "Berechnen Sie Ihren Vermögensaufbau mit Sparraten und Zinseszinseffekt.",
    compound_start: "Anfangskapital",
    compound_monthly: "Monatliche Sparrate",
    compound_return: "Erwartete Jahresrendite",
    compound_horizon: "Anlagedauer",
    compound_freq: "Zinsperiode",
    compound_future: "Endkapital",
    compound_principal_total: "Eingezahltes Kapital",
    compound_interest_total: "Erwirtschaftete Zinsen",

    margin_title: "Gewinnspannen- & Aufschlagsrechner",
    margin_sub: "Berechnen Sie Verkaufspreise, Handelsspannen und Rohgewinn.",
    margin_cogs: "Einkaufspreis / Herstellkosten (COGS)",
    margin_revenue: "Verkaufspreis (Umsatz)",
    margin_fees: "Zusatzkosten pro Stück",
    margin_net_profit: "Nettogewinn pro Stück",
    margin_pct: "Gewinnmarge",
    margin_markup: "Aufschlag",

    salary_title: "Stundenlohn- in Jahresgehaltsrechner",
    salary_sub: "Wandeln Sie Ihr Jahresgehalt in Stunden-, Wochen- und Monatslöhne um.",
    salary_pay_rate: "Vergütungssatz",
    salary_hours_week: "Arbeitsstunden pro Woche",
    salary_weeks_year: "Bezahlte Wochen pro Jahr",
    salary_annual_total: "Jahresgehalt Gesamt",
    salary_hourly_rate: "Stundenlohn",
    salary_weekly: "Wochenlohn",
    salary_monthly: "Monatsdurchschnitt",

    mortgage_title: "Sondertilgungsrechner Baufinanzierung",
    mortgage_sub: "Erfahren Sie, wie viel Zeit und Zehntausende Euro Zinsen Sie durch Sondertilgungen sparen.",
    mortgage_balance: "Restschuld",
    mortgage_rate: "Zinssatz (%)",
    mortgage_term: "Restlaufzeit (Jahre)",
    mortgage_extra: "Monatliche Sondertilgung",
    mortgage_saved: "Gesparte Zinsen Gesamt",
    standard_payment: "Reguläre Monatsrate",
    new_payment: "Neue Monatsrate (inkl. Sondertilgung)",
    new_payoff_term: "Neue Gesamtlaufzeit",

    pct_title: "Prozent- & Rabattrechner",
    pct_sub: "Berechnen Sie Rabattpreise, Mehrwertsteuer und prozentuale Preisunterschiede blitzschnell.",
    pct_orig_price: "Ursprünglicher Preis",
    pct_discount_off: "Rabatt (% Ersparnis)",
    pct_final_price: "Endpreis nach Rabatt",
    pct_you_save: "Ihre Ersparnis",

    footer_rights: "© 2026 CalcHub. Alle Rechte vorbehalten.",
    footer_disclaimer: "Alle Berechnungen dienen ausschließlich zu Bildungs- und Informationszwecken."
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
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
  }

  t(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || null;
  }

  translatePage() {
    // Translate text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) {
        el.textContent = val;
      }
    });

    // Translate input placeholders
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
