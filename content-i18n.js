/* ===== MULTILINGUAL PAGE CONTENT ===== */

const PAGE_CONTENT = {
  ru: {
    'page.kodeks.eyebrow': 'Законодательство',
    'page.kodeks.subtitle': 'Уголовный кодекс Республики Таджикистан устанавливает ответственность за мошенничество — хищение чужого имущества путём обмана или злоупотребления доверием.',
    'page.kodeks.intro': '<strong style="color:var(--cyan)">Мошенничество</strong> — это хищение чужого имущества или приобретение права на чужое имущество путём обмана либо злоупотребления доверием.',
    'page.diary.eyebrow': 'Личные финансы',
    'page.diary.subtitle': 'Отслеживайте доходы и расходы, ставьте финансовые цели и контролируйте свой бюджет.',
    'page.diary.bridgeTitle': 'Зачем это здесь?',
    'page.diary.bridgeText': 'Контроль расходов помогает заметить подозрительные списания, не попасть в импульсивные переводы мошенникам и накопить резервный фонд — вашу подушку на случай финансового удара.',
    'page.diary.bridgeLink': 'Как действовать при краже →',
    'page.faq.eyebrow': 'Справочник',
    'page.faq.subtitle': 'Всё, что нужно знать о финансовом мошенничестве и методах защиты.',
    'page.quiz.eyebrow': 'Самопроверка',
    'page.quiz.subtitle': '10 вопросов о финансовой безопасности и мошенничестве. Проверьте свои знания!',
    'page.game.eyebrow': 'Интерактив',
    'page.game.subtitle': 'Пять режимов: ловите мошенников, торгуйте на бирже, распознавайте скам, находите фишинг и не попадайтесь в финансовую пирамиду.',
    'page.news.eyebrow': 'Актуально',
    'page.news.subtitle': 'Последние случаи мошенничества и советы по защите от банков и экспертов.',
    'page.news.source': 'Источники: ФИНфорс, Азия-Плюс, банки · Статья 247 УК →',
    'page.news.tipTitle': 'Совет недели',
    'page.news.tipText': 'Никогда не включайте демонстрацию экрана при видеозвонке с незнакомыми людьми. Мошенники могут видеть коды из SMS и получить доступ к вашему банку за считанные секунды.',
    'about.p1': '«Сипари Молй» — информационно-образовательная платформа, созданная студентами для повышения уровня финансовой грамотности населения Таджикистана.',
    'about.p2': 'Наш девиз: <strong style="color:var(--cyan)">«Сипари Молй — сипари шумо аз қаллобӣ»</strong> — мы ваш щит против мошенников в финансовом мире.',
    'about.p3': 'Здесь собраны простые инструкции, правовая база, тренажёры и мини-игры, которые помогают распознавать опасные ситуации до потери денег.',
    'home.contacts1': '<strong>102</strong> — полиция (мошенничество)',
    'home.contacts2': '<strong>1885</strong> — Национальный банк Таджикистана',
    'home.contacts3': '<strong>115</strong> — единый номер доверия (РТ)',
    'diary.balance': 'Текущий баланс',
    'diary.income': 'Доходы',
    'diary.expense': 'Расходы',
    'diary.addTx': '+ Добавить транзакцию',
    'diary.goals': 'Цели на месяц',
    'diary.goal1': '🚨 Резервный фонд',
    'diary.goal2': '📱 Новый телефон',
    'diary.goal3': '✈️ Путешествие',
    'diary.newTx': 'Новая транзакция',
    'diary.typeIncome': '+ Доход',
    'diary.typeExpense': '− Расход',
    'diary.labelName': 'Название',
    'diary.labelAmount': 'Сумма (сомони)',
    'diary.labelCat': 'Категория',
    'diary.labelDate': 'Дата',
    'diary.save': 'Сохранить',
    'diary.emptyTitle': 'Транзакций пока нет',
    'diary.emptyDesc': 'Нажмите «+ Добавить транзакцию», чтобы начать',
    'quiz.restart': 'Пройти снова',
    'quiz.qNum': 'Вопрос {n} из {total}',
    'quiz.next': 'Следующий вопрос →',
    'quiz.correct': '✅ Правильно!',
    'quiz.wrong': '❌ Неверно',
    'quiz.resultGold': 'Отлично! Вы отлично разбираетесь в финансовой безопасности. Ваши средства под надёжной защитой!',
    'quiz.resultSilver': 'Хороший результат! Несколько пробелов в знаниях ещё есть. Прочитайте раздел «Частые вопросы».',
    'quiz.resultBronze': 'Есть над чем поработать. Изучите наш справочник — это поможет защитить свои деньги!',
    'scam.intro': 'Нажмите «Начать», чтобы проверить, сможете ли вы отличить мошенничество от безопасной ситуации.',
    'scam.timeUp': '⏱ Время вышло!',
    'scam.correct': '✅ Верно!',
    'scam.wrong': '❌ Неверно.',
    'scam.points': '+{n} очков',
    'scam.wrongAnswer': 'Неверный ответ',
    'scam.endScore': 'Игра окончена! Ваш счёт: {score} из {max}.',
    'scam.endGreat': 'Отличная финансовая интуиция!',
    'scam.endGood': 'Хороший результат!',
    'scam.endTry': 'Попробуйте ещё — это тренирует бдительность!',
    'risk.lowTitle': 'Низкий риск',
    'risk.lowMsg': 'Вы на правильном пути! Закрепите знания в квизе и мини-играх.',
    'risk.midTitle': 'Средний риск',
    'risk.midMsg': 'Есть пробелы — прочитайте FAQ по SMS и звонкам, пройдите квиз.',
    'risk.highTitle': 'Высокий риск',
    'risk.highMsg': 'Вы в зоне повышенной уязвимости. Начните с экстренного сценария и FAQ.',
    'risk.btnQuiz': 'Полный квиз',
    'risk.btnEmergency': 'Экстренная помощь',
    'risk.btnFaq': 'FAQ',
    'game.invest.title': '📊 Биржа Молй — Симулятор трейдера',
    'game.invest.select': 'Выберите актив для покупки/продажи',
    'game.invest.selected': 'Выбран актив',
    'game.invest.buy': 'Купить',
    'game.invest.sell': 'Продать',
    'game.invest.next': 'Следующий раунд →',
    'game.invest.portfolio': '💼 Мой портфель',
    'game.invest.cash': '💵 Наличные',
    'game.hud.score': 'Счёт',
    'game.hud.lives': 'Жизни',
    'game.hud.time': 'Время',
    'game.hud.level': 'Уровень',
    'game.hud.round': 'Раунд',
    'game.hud.streak': 'Серия',
    'game.hud.mistakes': 'Ошибки',
    'game.hud.balance': 'Баланс',
    'game.hud.yield': 'Доход',
    'game.hud.risk': 'Риск',
    'game.scam.start': '▶ Начать игру',
    'game.scam.scamBtn': '🚨 Мошенничество',
    'game.scam.safeBtn': '✅ Безопасно',
    'game.scam.next': 'Следующий раунд →',
    'game.scam.restart': '▶ Играть снова'
  },
  en: {
    'page.kodeks.eyebrow': 'Legislation',
    'page.kodeks.subtitle': 'The Criminal Code of the Republic of Tajikistan establishes liability for fraud: taking another person’s property by deception or abuse of trust.',
    'page.kodeks.intro': '<strong style="color:var(--cyan)">Fraud</strong> means stealing property or obtaining rights to another person’s property through deception or abuse of trust.',
    'page.diary.eyebrow': 'Personal finance',
    'page.diary.subtitle': 'Track income and expenses, set financial goals, and keep your budget under control.',
    'page.diary.bridgeTitle': 'Why is this here?',
    'page.diary.bridgeText': 'Expense control helps you notice suspicious charges, avoid impulsive transfers to scammers, and build an emergency fund for financial shocks.',
    'page.diary.bridgeLink': 'What to do after theft →',
    'page.faq.eyebrow': 'Handbook',
    'page.faq.subtitle': 'Everything you need to know about financial fraud and protection methods.',
    'page.quiz.eyebrow': 'Self-check',
    'page.quiz.subtitle': '10 questions about financial security and fraud. Test your knowledge!',
    'page.game.eyebrow': 'Interactive',
    'page.game.subtitle': 'Five modes: catch scammers, trade on the exchange, identify scams, find phishing, and avoid financial pyramids.',
    'page.news.eyebrow': 'Current',
    'page.news.subtitle': 'Recent fraud cases and protection advice from banks and experts.',
    'page.news.source': 'Sources: FINforce, Asia-Plus, banks · Criminal Code Article 247 →',
    'page.news.tipTitle': 'Tip of the week',
    'page.news.tipText': 'Never share your screen during a video call with strangers. Scammers can see SMS codes and access your bank in seconds.',
    'about.p1': 'Sipari Moli is an educational information platform created by students to improve financial literacy in Tajikistan.',
    'about.p2': 'Our motto is <strong style="color:var(--cyan)">“Sipari Moli — your shield against fraud”</strong>: we help you protect yourself in the financial world.',
    'about.p3': 'The site brings together simple instructions, legal references, trainers, and mini-games that help people recognize dangerous situations before money is lost.',
    'home.contacts1': '<strong>102</strong> — police (fraud)',
    'home.contacts2': '<strong>1885</strong> — National Bank of Tajikistan',
    'home.contacts3': '<strong>115</strong> — single helpline (RT)',
    'diary.balance': 'Current balance',
    'diary.income': 'Income',
    'diary.expense': 'Expenses',
    'diary.addTx': '+ Add transaction',
    'diary.goals': 'Monthly goals',
    'diary.goal1': '🚨 Emergency fund',
    'diary.goal2': '📱 New phone',
    'diary.goal3': '✈️ Travel',
    'diary.newTx': 'New transaction',
    'diary.typeIncome': '+ Income',
    'diary.typeExpense': '− Expense',
    'diary.labelName': 'Name',
    'diary.labelAmount': 'Amount (somoni)',
    'diary.labelCat': 'Category',
    'diary.labelDate': 'Date',
    'diary.save': 'Save',
    'diary.emptyTitle': 'No transactions yet',
    'diary.emptyDesc': 'Click “+ Add transaction” to begin',
    'quiz.restart': 'Restart quiz',
    'quiz.qNum': 'Question {n} of {total}',
    'quiz.next': 'Next question →',
    'quiz.correct': '✅ Correct!',
    'quiz.wrong': '❌ Wrong',
    'quiz.resultGold': 'Excellent! You understand financial security very well.',
    'quiz.resultSilver': 'Good result! A few gaps remain — read the FAQ section.',
    'quiz.resultBronze': 'Room to improve. Study our handbook to protect your money!',
    'scam.intro': 'Press Start to see if you can tell scams from safe situations.',
    'scam.timeUp': '⏱ Time is up!',
    'scam.correct': '✅ Correct!',
    'scam.wrong': '❌ Wrong.',
    'scam.points': '+{n} points',
    'scam.wrongAnswer': 'Wrong answer',
    'scam.endScore': 'Game over! Your score: {score} of {max}.',
    'scam.endGreat': 'Great financial intuition!',
    'scam.endGood': 'Good result!',
    'scam.endTry': 'Try again — it trains your vigilance!',
    'risk.lowTitle': 'Low risk',
    'risk.lowMsg': 'You are on the right track! Reinforce knowledge in the quiz and mini-games.',
    'risk.midTitle': 'Medium risk',
    'risk.midMsg': 'There are gaps — read the FAQ on SMS and calls, take the quiz.',
    'risk.highTitle': 'High risk',
    'risk.highMsg': 'You are highly vulnerable. Start with emergency help and the FAQ.',
    'risk.btnQuiz': 'Full quiz',
    'risk.btnEmergency': 'Emergency help',
    'risk.btnFaq': 'FAQ',
    'game.invest.title': '📊 Moli Exchange — Trader simulator',
    'game.invest.select': 'Choose an asset to buy or sell',
    'game.invest.selected': 'Selected asset',
    'game.invest.buy': 'Buy',
    'game.invest.sell': 'Sell',
    'game.invest.next': 'Next round →',
    'game.invest.portfolio': '💼 My portfolio',
    'game.invest.cash': '💵 Cash',
    'game.hud.score': 'Score',
    'game.hud.lives': 'Lives',
    'game.hud.time': 'Time',
    'game.hud.level': 'Level',
    'game.hud.round': 'Round',
    'game.hud.streak': 'Streak',
    'game.hud.mistakes': 'Mistakes',
    'game.hud.balance': 'Balance',
    'game.hud.yield': 'Yield',
    'game.hud.risk': 'Risk',
    'game.scam.start': '▶ Start game',
    'game.scam.scamBtn': '🚨 Scam',
    'game.scam.safeBtn': '✅ Safe',
    'game.scam.next': 'Next round →',
    'game.scam.restart': '▶ Play again'
  },
  tg: {
    'page.kodeks.eyebrow': 'Қонунгузорӣ',
    'page.kodeks.subtitle': 'Кодекси ҷиноятии Ҷумҳурии Тоҷикистон барои қаллобӣ ҷавобгарӣ муқаррар мекунад: тасарруфи молу мулки дигарон бо роҳи фиреб ё суиистифода аз боварӣ.',
    'page.kodeks.intro': '<strong style="color:var(--cyan)">Қаллобӣ</strong> — тасарруфи молу мулки дигарон ё ба даст овардани ҳуқуқ ба молу мулки дигарон бо роҳи фиреб ё суиистифода аз боварӣ мебошад.',
    'page.diary.eyebrow': 'Молияи шахсӣ',
    'page.diary.subtitle': 'Даромад ва хароҷотро пайгирӣ кунед, ҳадафҳои молиявӣ гузоред ва буҷаро назорат намоед.',
    'page.diary.bridgeTitle': 'Ин барои чӣ лозим аст?',
    'page.diary.bridgeText': 'Назорати хароҷот ба шумо кумак мекунад, ки гирифтани маблағи шубҳанокро зуд бинед, ба интиқоли эҳсосии пул ба қаллобон наафтед ва барои ҳолатҳои ногаҳонӣ захираи молиявӣ ҷамъ кунед.',
    'page.diary.bridgeLink': 'Ҳангоми дуздии пул чӣ бояд кард →',
    'page.faq.eyebrow': 'Роҳнамо',
    'page.faq.subtitle': 'Ҳама чиз дар бораи қаллобии молиявӣ ва роҳҳои ҳифз аз он.',
    'page.quiz.eyebrow': 'Худсанҷӣ',
    'page.quiz.subtitle': '10 савол дар бораи амнияти молиявӣ ва қаллобӣ. Дониши худро санҷед!',
    'page.game.eyebrow': 'Интерактив',
    'page.game.subtitle': 'Панҷ реҷа: қаллобонро ёбед, дар биржа савдо кунед, қаллобиро шиносед, фишингро пайдо кунед ва ба пирамидаи молиявӣ наафтед.',
    'page.news.eyebrow': 'Муҳим',
    'page.news.subtitle': 'Ҳодисаҳои охирини қаллобӣ ва маслиҳатҳои ҳифз аз бонкҳо ва коршиносон.',
    'page.news.source': 'Манбаъҳо: ФИНфорс, Азия-Плюс, бонкҳо · Моддаи 247 КҶ →',
    'page.news.tipTitle': 'Маслиҳати ҳафта',
    'page.news.tipText': 'Ҳангоми занги видеоӣ бо шахсони ношинос ҳеҷ гоҳ намоиши экранро фаъол накунед. Қаллобон метавонанд рамзҳои СМС-ро бинанд ва дар чанд сония ба бонки шумо дастрасӣ гиранд.',
    'about.p1': '«Сипари Молӣ» — платформаи иттилоотию омӯзишӣ мебошад, ки донишҷӯён барои баланд бардоштани саводнокии молиявии аҳолии Тоҷикистон омода кардаанд.',
    'about.p2': 'Шиори мо: <strong style="color:var(--cyan)">«Сипари Молӣ — сипари шумо аз қаллобӣ»</strong>. Мо дар ҷаҳони молиявӣ сипари амнияти шумо ҳастем.',
    'about.p3': 'Дар ин ҷо дастурҳои содда, маълумоти ҳуқуқӣ, машқҳо ва бозиҳои кӯтоҳ ҷамъ шудаанд, то ҳолатҳои хатарнокро пеш аз аз даст додани пул шиносед.',
    'home.contacts1': '<strong>102</strong> — милитсия (қаллобӣ)',
    'home.contacts2': '<strong>1885</strong> — Бонки миллии Тоҷикистон',
    'home.contacts3': '<strong>115</strong> — рақами ягонаи боварӣ',
    'diary.balance': 'Бақияи ҷорӣ',
    'diary.income': 'Даромад',
    'diary.expense': 'Хароҷот',
    'diary.addTx': '+ Иловаи амалиёт',
    'diary.goals': 'Ҳадафҳои моҳона',
    'diary.goal1': '🚨 Захираи эҳтиётӣ',
    'diary.goal2': '📱 Телефони нав',
    'diary.goal3': '✈️ Сафар',
    'diary.newTx': 'Амалиёти нав',
    'diary.typeIncome': '+ Даромад',
    'diary.typeExpense': '− Хароҷот',
    'diary.labelName': 'Ном',
    'diary.labelAmount': 'Маблағ (сомонӣ)',
    'diary.labelCat': 'Гурӯҳ',
    'diary.labelDate': 'Сана',
    'diary.save': 'Нигоҳ доштан',
    'diary.emptyTitle': 'Ҳанӯз амалиёт нест',
    'diary.emptyDesc': 'Барои оғоз «+ Иловаи амалиёт»-ро пахш кунед',
    'quiz.restart': 'Аз нав гузаштан',
    'quiz.qNum': 'Саволи {n} аз {total}',
    'quiz.next': 'Саволи навбатӣ →',
    'quiz.correct': '✅ Дуруст!',
    'quiz.wrong': '❌ Нодуруст',
    'quiz.resultGold': 'Олӣ! Шумо дар амнияти молиявӣ хуб медонед. Маблағҳои шумо дар ҳифзи бехатаранд!',
    'quiz.resultSilver': 'Натиҷаи хуб! Баъзе холигиҳо боқӣ мондаанд — қисми «Саволҳои такрорӣ»-ро хонед.',
    'quiz.resultBronze': 'Ҳанӯз ҷой барои рушд аст. Роҳнаморо омӯзед — ин ба ҳифзи пул кумак мекунад!',
    'scam.intro': '«Оғоз»-ро пахш кунед, то бинед, оё қаллобиро аз ҳолати бехатар ҷудо карда метавонед.',
    'scam.timeUp': '⏱ Вақт тамом шуд!',
    'scam.correct': '✅ Дуруст!',
    'scam.wrong': '❌ Нодуруст.',
    'scam.points': '+{n} хол',
    'scam.wrongAnswer': 'Ҷавоби нодуруст',
    'scam.endScore': 'Бозӣ анҷом ёфт! Ҳисоби шумо: {score} аз {max}.',
    'scam.endGreat': 'Интуитсияи молиявии олӣ!',
    'scam.endGood': 'Натиҷаи хуб!',
    'scam.endTry': 'Боз кӯшиш кунед — ин ҳушёриро тренирует!',
    'risk.lowTitle': 'Хатари паст',
    'risk.lowMsg': 'Шумо дар роҳи дуруст ҳастед! Донишро дар викторина ва бозиҳо тақвият диҳед.',
    'risk.midTitle': 'Хатари миёна',
    'risk.midMsg': 'Холигиҳо мавҷуданд — FAQ дар бораи СМС ва зангҳоро хонед, викторинаро гузаред.',
    'risk.highTitle': 'Хатари баланд',
    'risk.highMsg': 'Шумо дар зонаи омасияти баланд ҳастед. Аз кумаки фаврӣ ва FAQ оғоз кунед.',
    'risk.btnQuiz': 'Викторинаи пурра',
    'risk.btnEmergency': 'Кумаки фаврӣ',
    'risk.btnFaq': 'FAQ',
    'game.invest.title': '📊 Биржаи Молӣ — Машқгоҳи савдогар',
    'game.invest.select': 'Дороиро барои харид ё фурӯш интихоб кунед',
    'game.invest.selected': 'Дороии интихобшуда',
    'game.invest.buy': 'Харидан',
    'game.invest.sell': 'Фурӯхтан',
    'game.invest.next': 'Даври навбатӣ →',
    'game.invest.portfolio': '💼 Сандуқи ман',
    'game.invest.cash': '💵 Пули нақд',
    'game.hud.score': 'Ҳисоб',
    'game.hud.lives': 'Ҷонҳо',
    'game.hud.time': 'Вақт',
    'game.hud.level': 'Сатҳ',
    'game.hud.round': 'Давр',
    'game.hud.streak': 'Пайдарпайӣ',
    'game.hud.mistakes': 'Хатоҳо',
    'game.hud.balance': 'Бақия',
    'game.hud.yield': 'Даромад',
    'game.hud.risk': 'Хатар',
    'game.scam.start': '▶ Оғози бозӣ',
    'game.scam.scamBtn': '🚨 Қаллобӣ',
    'game.scam.safeBtn': '✅ Бехатар',
    'game.scam.next': 'Даври навбатӣ →',
    'game.scam.restart': '▶ Боз аз нав'
  },
  uz: {
    'page.kodeks.eyebrow': 'Qonunchilik',
    'page.kodeks.subtitle': 'Tojikiston Respublikasi Jinoyat kodeksi firibgarlik uchun javobgarlik belgilaydi: aldash yoki ishonchni suiiste’mol qilish orqali boshqaning mulkini egallash.',
    'page.kodeks.intro': '<strong style="color:var(--cyan)">Firibgarlik</strong> — aldash yoki ishonchni suiiste’mol qilish orqali boshqaning mulkini egallash yoki mulkka bo‘lgan huquqni qo‘lga kiritishdir.',
    'page.diary.eyebrow': 'Shaxsiy moliya',
    'page.diary.subtitle': 'Daromad va xarajatlarni kuzating, moliyaviy maqsad qo‘ying va byudjetni nazorat qiling.',
    'page.diary.bridgeTitle': 'Bu nima uchun kerak?',
    'page.diary.bridgeText': 'Xarajatlarni nazorat qilish shubhali yechimlarni tez payqash, firibgarlarga hissiyot bilan pul o‘tkazmaslik va favqulodda holat uchun zaxira jamg‘arishga yordam beradi.',
    'page.diary.bridgeLink': 'O‘g‘irlikda nima qilish kerak →',
    'page.faq.eyebrow': 'Ma’lumotnoma',
    'page.faq.subtitle': 'Moliyaviy firibgarlik va himoya usullari haqida bilishingiz kerak bo‘lgan hamma narsa.',
    'page.quiz.eyebrow': 'O‘zini tekshirish',
    'page.quiz.subtitle': 'Moliyaviy xavfsizlik va firibgarlik haqida 10 savol. Bilimingizni tekshiring!',
    'page.game.eyebrow': 'Interaktiv',
    'page.game.subtitle': 'Beshta rejim: firibgarlarni ushlang, birjada savdo qiling, aldovni taning, fishingni toping va moliyaviy piramidaga tushmang.',
    'page.news.eyebrow': 'Dolzarb',
    'page.news.subtitle': 'So‘nggi firibgarlik holatlari hamda banklar va ekspertlardan himoya bo‘yicha maslahatlar.',
    'page.news.source': 'Manbalar: FINforce, Asia-Plus, banklar · JK 247-modda →',
    'page.news.tipTitle': 'Hafta maslahati',
    'page.news.tipText': 'Begonalar bilan videoqo‘ng‘iroqda hech qachon ekran namoyishini yoqmang. Firibgarlar SMS kodlarini ko‘rib, bir necha soniyada bankingizga kira oladi.',
    'about.p1': '“Sipari Moli” — Tojikiston aholisi moliyaviy savodxonligini oshirish uchun talabalar yaratgan axborot-ta’lim platformasi.',
    'about.p2': 'Shiorimiz: <strong style="color:var(--cyan)">“Sipari Moli — firibgarlikdan qalqoningiz”</strong>. Biz moliyaviy dunyoda himoyangiz bo‘lamiz.',
    'about.p3': 'Bu yerda pul yo‘qotishdan oldin xavfli vaziyatlarni tanishga yordam beradigan sodda yo‘riqnomalar, huquqiy ma’lumotlar, mashqlar va mini-o‘yinlar jamlangan.',
    'home.contacts1': '<strong>102</strong> — militsiya (firibgarlik)',
    'home.contacts2': '<strong>1885</strong> — Tojikiston Milliy banki',
    'home.contacts3': '<strong>115</strong> — yagona ishonch raqami',
    'diary.balance': 'Joriy balans',
    'diary.income': 'Daromad',
    'diary.expense': 'Xarajat',
    'diary.addTx': '+ Tranzaksiya qo‘shish',
    'diary.goals': 'Oylik maqsadlar',
    'diary.goal1': '🚨 Zaxira jamg‘arma',
    'diary.goal2': '📱 Yangi telefon',
    'diary.goal3': '✈️ Sayohat',
    'diary.newTx': 'Yangi tranzaksiya',
    'diary.typeIncome': '+ Daromad',
    'diary.typeExpense': '− Xarajat',
    'diary.labelName': 'Nomi',
    'diary.labelAmount': 'Miqdor (somoniy)',
    'diary.labelCat': 'Kategoriya',
    'diary.labelDate': 'Sana',
    'diary.save': 'Saqlash',
    'diary.emptyTitle': 'Hali tranzaksiyalar yo‘q',
    'diary.emptyDesc': 'Boshlash uchun “+ Tranzaksiya qo‘shish” tugmasini bosing',
    'quiz.restart': 'Qayta o‘tish',
    'quiz.qNum': '{total} tadan {n}-savol',
    'quiz.next': 'Keyingi savol →',
    'quiz.correct': '✅ To‘g‘ri!',
    'quiz.wrong': '❌ Noto‘g‘ri',
    'quiz.resultGold': 'A’lo! Moliyaviy xavfsizlikni yaxshi bilasiz.',
    'quiz.resultSilver': 'Yaxshi natija! Ba’zi bo‘shliqlar qoldi — FAQ bo‘limini o‘qing.',
    'quiz.resultBronze': 'Yana ishlash kerak. Qo‘llanmamizni o‘rganing — bu pulingizni himoya qiladi!',
    'scam.intro': 'Firibgarlikni xavfsiz vaziyatdan ajrata olasizmi — tekshirish uchun boshlang.',
    'scam.timeUp': '⏱ Vaqt tugadi!',
    'scam.correct': '✅ To‘g‘ri!',
    'scam.wrong': '❌ Noto‘g‘ri.',
    'scam.points': '+{n} ochko',
    'scam.wrongAnswer': 'Noto‘g‘ri javob',
    'scam.endScore': 'O‘yin tugadi! Hisobingiz: {score} / {max}.',
    'scam.endGreat': 'Ajoyib moliyaviy sezgi!',
    'scam.endGood': 'Yaxshi natija!',
    'scam.endTry': 'Yana urinib ko‘ring — bu e’tiborlilikni oshiradi!',
    'risk.lowTitle': 'Past xavf',
    'risk.lowMsg': 'To‘g‘ri yo‘ldasiz! Bilimlarni viktorina va mini-o‘yinlarda mustahkamlang.',
    'risk.midTitle': 'O‘rtacha xavf',
    'risk.midMsg': 'Bo‘shliqlar bor — SMS va qo‘ng‘iroqlar bo‘yicha FAQ o‘qing, viktorinadan o‘ting.',
    'risk.highTitle': 'Yuqori xavf',
    'risk.highMsg': 'Zaiflik yuqori. Favqulodda yordam va FAQ dan boshlang.',
    'risk.btnQuiz': 'To‘liq viktorina',
    'risk.btnEmergency': 'Favqulodda yordam',
    'risk.btnFaq': 'FAQ',
    'game.invest.title': '📊 Moli birjasi — Treyder simulyatori',
    'game.invest.select': 'Sotib olish yoki sotish uchun aktiv tanlang',
    'game.invest.selected': 'Tanlangan aktiv',
    'game.invest.buy': 'Sotib olish',
    'game.invest.sell': 'Sotish',
    'game.invest.next': 'Keyingi raund →',
    'game.invest.portfolio': '💼 Mening portfelim',
    'game.invest.cash': '💵 Naqd pul',
    'game.hud.score': 'Hisob',
    'game.hud.lives': 'Jonlar',
    'game.hud.time': 'Vaqt',
    'game.hud.level': 'Daraja',
    'game.hud.round': 'Raund',
    'game.hud.streak': 'Seriya',
    'game.hud.mistakes': 'Xatolar',
    'game.hud.balance': 'Balans',
    'game.hud.yield': 'Daromad',
    'game.hud.risk': 'Xavf',
    'game.scam.start': '▶ O‘yinni boshlash',
    'game.scam.scamBtn': '🚨 Firibgarlik',
    'game.scam.safeBtn': '✅ Xavfsiz',
    'game.scam.next': 'Keyingi raund →',
    'game.scam.restart': '▶ Qayta o‘ynash'
  }
};

const FAQ_ITEMS = {
  ru: [
    {
      id: 'faq-vishing',
      title: '📞 Что такое вишинг?',
      search: 'вишинг телефон звонок сотрудник банка код sms',
      html: `<p><strong>Вишинг</strong> — телефонное мошенничество, когда злоумышленники звонят и пытаются выманить деньги, код из SMS, PIN, CVV или доступ к банковскому приложению.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Как это выглядит</div>«Мы из банка» · «На вас оформляют кредит» · «Переведите деньги на безопасный счёт» · «Назовите код, чтобы остановить операцию»</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Положите трубку, даже если звонящий пугает срочностью.</li>
          <li><span class="step-num">2</span>Позвоните в банк сами по номеру на карте или официальном сайте.</li>
          <li><span class="step-num">3</span>Заблокируйте карту, если уже назвали данные или код.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Главное правило</div>Банк никогда не просит PIN, CVV, пароль, код из SMS или перевод на «безопасный счёт».</div>`
    },
    {
      id: 'faq-phishing',
      title: '🎣 Что такое фишинг?',
      search: 'фишинг сайт подделка ссылка captcha пароль логин',
      html: `<p><strong>Фишинг</strong> — обман через поддельные сайты, письма и сообщения, которые копируют банк, магазин, доставку или государственный сервис.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Fake CAPTCHA</div>Если сайт просит открыть командную строку, вставить текст или выполнить «проверку» вне браузера — это не CAPTCHA, а попытка установить вредоносную программу.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Проверяйте адрес сайта по буквам.</li>
          <li><span class="step-num">✓</span>Не вводите данные карты после перехода из SMS или мессенджера.</li>
          <li><span class="step-num">✓</span>Используйте двухфакторную аутентификацию.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Быстрая проверка</div>Откройте сайт банка вручную из закладок или через официальный поиск, а не по присланной ссылке.</div>`
    },
    {
      id: 'faq-smishing',
      title: '📱 Что такое смишинг?',
      search: 'смишинг sms сообщение карта заблокирована ссылка',
      html: `<p><strong>Смишинг</strong> — мошенничество через SMS: сообщение пугает блокировкой карты, обещает приз или просит «подтвердить доставку» по ссылке.</p>
        <div class="info-box warning"><div class="box-title">🚨 Типичные сообщения</div>«Карта заблокирована» · «Оплатите доставку» · «Ваш кабинет взломан» · «Получите компенсацию»</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Не открывайте ссылку из SMS.</li>
          <li><span class="step-num">2</span>Не звоните по номеру из сообщения.</li>
          <li><span class="step-num">3</span>Проверьте ситуацию в официальном приложении или по номеру на карте.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Защита</div>Удалите сообщение после проверки и предупредите близких, если схема массовая.</div>`
    },
    {
      id: 'faq-jobphish',
      title: '💼 Что такое джоб-фишинг?',
      search: 'джоб фишинг работа вакансия собеседование экран',
      html: `<p><strong>Джоб-фишинг</strong> — мошенничество под видом вакансии. Цель — получить деньги за «оформление», украсть документы или увидеть коды через демонстрацию экрана.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Красные флаги</div>Просят оплатить обучение или доступ · обещают высокий доход без опыта · просят показать экран телефона · отправляют ссылку на сайт-клон вакансий</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Не включайте демонстрацию экрана незнакомому HR.</li>
          <li><span class="step-num">2</span>Не отправляйте фото паспорта до проверки компании.</li>
          <li><span class="step-num">3</span>Проверяйте домен, ИНН, отзывы и официальные контакты работодателя.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Запомните</div>Настоящий работодатель платит вам, а не требует предоплату.</div>`
    },
    {
      id: 'faq-chargeback',
      title: '💳 Что делать, если списали деньги с карты?',
      search: 'списали деньги карта чарджбэк возврат заявление',
      html: `<p>Если вы увидели списание, которое не совершали, действуйте сразу: время повышает шанс остановить операцию.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Заблокируйте карту в приложении или звонком в банк.</li>
          <li><span class="step-num">2</span>Запросите выписку и детали операции.</li>
          <li><span class="step-num">3</span>Подайте заявление о несогласии с операцией в течение суток.</li>
          <li><span class="step-num">4</span>Обратитесь в полицию и сохраните талон-уведомление.</li>
          <li><span class="step-num">5</span>Сохраните SMS, письма, чеки и скриншоты.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">ℹ️ Когда возможен возврат</div>Банк рассматривает спор, особенно если операция прошла без подтверждения клиента или с нарушением правил безопасности.</div>`
    },
    {
      id: 'faq-phone',
      title: '📞 Как распознать мошенника по телефону?',
      search: 'телефон мошенник банк pin cvv срочно',
      html: `<p>Телефонный мошенник старается не дать вам времени подумать: пугает, торопит и переводит разговор к секретным данным.</p>
        <div class="info-box warning"><div class="box-title">🚨 Красные флаги</div>«Служба безопасности банка» · «Центральный банк» · «Ваши деньги сейчас украдут» · «Назовите код» · «Установите приложение» · «Включите экран»</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Не спорьте и не доказывайте — завершите звонок.</li>
          <li><span class="step-num">✓</span>Перезвоните в банк сами.</li>
          <li><span class="step-num">✓</span>Сообщите о номере в банк и близким.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Правило паузы</div>Любая просьба «сделать прямо сейчас» — повод остановиться и проверить информацию.</div>`
    },
    {
      id: 'faq-credit',
      title: '🏦 Что делать, если мошенники оформили кредит на ваше имя?',
      search: 'кредит мошенники оформили имя договор банк полиция',
      html: `<p>Кредит, оформленный без вашего согласия, нужно оспаривать официально и письменно.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Немедленно уведомите банк о мошенничестве.</li>
          <li><span class="step-num">2</span>Напишите заявление о непричастности к сделке.</li>
          <li><span class="step-num">3</span>Потребуйте копии договора, анкеты, записи звонков и данные устройства.</li>
          <li><span class="step-num">4</span>Обратитесь в полицию с заявлением.</li>
          <li><span class="step-num">5</span>Проверьте кредитную историю и заблокируйте доступ к украденным данным.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Важно</div>Не начинайте платить по чужому кредиту без консультации: платежи могут выглядеть как признание долга.</div>`
    },
    {
      id: 'faq-online',
      title: '🔒 Как защититься от онлайн-мошенников?',
      search: 'онлайн защита 2fa пароль карта браузер',
      html: `<p>Онлайн-безопасность строится на привычках: проверять источник, ограничивать доступ и не хранить лишние данные там, где их могут украсть.</p>
        <div class="info-box tip"><div class="box-title">🛡️ Топ-правила безопасности</div>Включите защиту сейчас, пока не случилась проблема.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Включите двухфакторную аутентификацию.</li>
          <li><span class="step-num">✓</span>Используйте разные пароли для банка, почты и соцсетей.</li>
          <li><span class="step-num">✓</span>Не сохраняйте карту в браузере на чужих устройствах.</li>
          <li><span class="step-num">✓</span>Поставьте лимиты на онлайн-платежи.</li>
          <li><span class="step-num">✓</span>Регулярно проверяйте выписку.</li>
        </ul>`
    }
  ],
  en: [
    {
      id: 'faq-vishing',
      title: '📞 What is vishing?',
      search: 'vishing phone call bank employee code sms',
      html: `<p><strong>Vishing</strong> is phone fraud: scammers call and try to get money, an SMS code, PIN, CVV, or access to your banking app.</p>
        <div class="info-box warning"><div class="box-title">⚠️ What it sounds like</div>“We are from the bank” · “A loan is being issued in your name” · “Move money to a safe account” · “Tell us the code to stop the operation”</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Hang up, even if the caller pressures you.</li>
          <li><span class="step-num">2</span>Call the bank yourself using the number on your card or official website.</li>
          <li><span class="step-num">3</span>Block your card if you already shared data or a code.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Main rule</div>A bank never asks for your PIN, CVV, password, SMS code, or a transfer to a “safe account”.</div>`
    },
    {
      id: 'faq-phishing',
      title: '🎣 What is phishing?',
      search: 'phishing fake website link captcha password login',
      html: `<p><strong>Phishing</strong> is deception through fake websites, emails, and messages that imitate a bank, shop, delivery service, or government portal.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Fake CAPTCHA</div>If a site asks you to open a command line, paste text, or perform a “check” outside the browser, it is not a CAPTCHA. It is an attempt to install malware.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Check the website address letter by letter.</li>
          <li><span class="step-num">✓</span>Do not enter card data after following a link from SMS or messenger.</li>
          <li><span class="step-num">✓</span>Use two-factor authentication.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Quick check</div>Open your bank manually from bookmarks or official search results, not from a link someone sent.</div>`
    },
    {
      id: 'faq-smishing',
      title: '📱 What is smishing?',
      search: 'smishing sms message card blocked link',
      html: `<p><strong>Smishing</strong> is fraud through SMS. The message may scare you with a blocked card, promise a prize, or ask you to “confirm delivery” through a link.</p>
        <div class="info-box warning"><div class="box-title">🚨 Typical messages</div>“Your card is blocked” · “Pay for delivery” · “Your account was hacked” · “Claim compensation”</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Do not open the SMS link.</li>
          <li><span class="step-num">2</span>Do not call the number from the message.</li>
          <li><span class="step-num">3</span>Check the situation in the official app or by calling the number on your card.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Protection</div>After checking, delete the message and warn relatives if the scheme is spreading.</div>`
    },
    {
      id: 'faq-jobphish',
      title: '💼 What is job phishing?',
      search: 'job phishing work vacancy interview screen sharing',
      html: `<p><strong>Job phishing</strong> is fraud disguised as a vacancy. Scammers want payment for “registration”, copies of documents, or screen access to see confirmation codes.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Red flags</div>They ask you to pay for training or access · promise high pay without experience · ask you to share your phone screen · send links to clone job sites</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Do not share your screen with an unknown recruiter.</li>
          <li><span class="step-num">2</span>Do not send passport photos before verifying the company.</li>
          <li><span class="step-num">3</span>Check the domain, registration details, reviews, and official contacts.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Remember</div>A real employer pays you. They do not require prepayment.</div>`
    },
    {
      id: 'faq-chargeback',
      title: '💳 What should I do if money was charged from my card?',
      search: 'card charge money chargeback refund dispute',
      html: `<p>If you see a card charge you did not make, act immediately. Speed improves the chance of stopping the operation.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Block the card in the app or by calling the bank.</li>
          <li><span class="step-num">2</span>Request a statement and operation details.</li>
          <li><span class="step-num">3</span>File a transaction dispute within 24 hours.</li>
          <li><span class="step-num">4</span>Report the case to the police and keep the confirmation slip.</li>
          <li><span class="step-num">5</span>Save SMS, emails, receipts, and screenshots.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">ℹ️ When a refund is possible</div>The bank reviews the dispute, especially if the transaction was made without customer confirmation or security rules were violated.</div>`
    },
    {
      id: 'faq-phone',
      title: '📞 How can I recognize a phone scammer?',
      search: 'phone scammer bank pin cvv urgent',
      html: `<p>A phone scammer tries to stop you from thinking clearly: they scare you, rush you, and steer the conversation toward secret data.</p>
        <div class="info-box warning"><div class="box-title">🚨 Red flags</div>“Bank security” · “Central bank” · “Your money is being stolen” · “Tell us the code” · “Install this app” · “Turn on screen sharing”</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Do not argue. End the call.</li>
          <li><span class="step-num">✓</span>Call the bank yourself.</li>
          <li><span class="step-num">✓</span>Report the number to the bank and warn relatives.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Pause rule</div>Any request to act “right now” is a reason to stop and verify.</div>`
    },
    {
      id: 'faq-credit',
      title: '🏦 What if scammers took a loan in my name?',
      search: 'loan scammers issued in my name bank police',
      html: `<p>A loan issued without your consent must be disputed officially and in writing.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Notify the bank about fraud immediately.</li>
          <li><span class="step-num">2</span>Submit a statement that you did not participate in the deal.</li>
          <li><span class="step-num">3</span>Request the contract, application form, call recordings, and device data.</li>
          <li><span class="step-num">4</span>File a police report.</li>
          <li><span class="step-num">5</span>Check your credit history and block access to stolen data.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Important</div>Do not start paying someone else’s loan without advice. Payments can look like debt acceptance.</div>`
    },
    {
      id: 'faq-online',
      title: '🔒 How can I protect myself online?',
      search: 'online protection 2fa password card browser',
      html: `<p>Online safety is built on habits: check the source, limit access, and do not store unnecessary data where it can be stolen.</p>
        <div class="info-box tip"><div class="box-title">🛡️ Top safety rules</div>Turn on protection before a problem happens.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Enable two-factor authentication.</li>
          <li><span class="step-num">✓</span>Use different passwords for banking, email, and social media.</li>
          <li><span class="step-num">✓</span>Do not save card data in a browser on shared devices.</li>
          <li><span class="step-num">✓</span>Set limits for online payments.</li>
          <li><span class="step-num">✓</span>Check your statement regularly.</li>
        </ul>`
    }
  ],
  tg: [
    {
      id: 'faq-vishing',
      title: '📞 Вишинг чист?',
      search: 'вишинг телефон занг бонк рамз смс',
      html: `<p><strong>Вишинг</strong> — қаллобии телефонӣ мебошад: қаллобон занг мезананд ва мехоҳанд пул, рамзи СМС, рамзи махфии корт, маълумоти корт ё дастрасӣ ба барномаи бонкро гиранд.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Ин чӣ гуна садо медиҳад</div>«Мо аз бонк ҳастем» · «Ба номи шумо қарз мегиранд» · «Пулро ба ҳисоби бехатар гузаронед» · «Барои боздоштани амалиёт рамзро гӯед»</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Гӯшакро гузоред, ҳатто агар шуморо тарсонанд.</li>
          <li><span class="step-num">2</span>Худатон ба бонк аз рӯйи рақами корт ё сомонаи расмӣ занг занед.</li>
          <li><span class="step-num">3</span>Агар маълумот ё рамзро гуфта бошед, кортро банд кунед.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Қоидаи асосӣ</div>Бонк ҳеҷ гоҳ рамзи махфӣ, маълумоти махфии корт, гузарвожа, рамзи СМС ё интиқол ба «ҳисоби бехатар»-ро талаб намекунад.</div>`
    },
    {
      id: 'faq-phishing',
      title: '🎣 Фишинг чист?',
      search: 'фишинг сомонаи қалбакӣ пайванд гузарвожа воридшавӣ',
      html: `<p><strong>Фишинг</strong> — фиреб тавассути сомонаҳо, номаҳо ва паёмҳои қалбакӣ мебошад, ки ба бонк, мағоза, хадамоти расонидан ё портали давлатӣ монанд карда мешаванд.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Санҷиши қалбакӣ</div>Агар сомона талаб кунад, ки равзанаи фармонро кушоед, матн гузоред ё «санҷиш»-ро берун аз браузер иҷро кунед, ин санҷиши амниятӣ нест. Ин кӯшиши насби барномаи зараровар аст.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Нишонии сомонаро ҳарф ба ҳарф санҷед.</li>
          <li><span class="step-num">✓</span>Пас аз пайванди СМС ё паёмрасон маълумоти кортро ворид накунед.</li>
          <li><span class="step-num">✓</span>Тасдиқи дуомиларо фаъол кунед.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Санҷиши зуд</div>Сомонаи бонкро худатон аз нишонаҳои нигоҳдошта ё ҷустуҷӯи расмӣ кушоед, на аз пайванди фиристодашуда.</div>`
    },
    {
      id: 'faq-smishing',
      title: '📱 Смишинг чист?',
      search: 'смишинг смс паём корт банд пайванд',
      html: `<p><strong>Смишинг</strong> — қаллобӣ тавассути СМС мебошад. Паём метавонад бо бастани корт тарсонад, туҳфа ваъда диҳад ё барои «тасдиқи расонидан» пайванд фиристад.</p>
        <div class="info-box warning"><div class="box-title">🚨 Паёмҳои маъмул</div>«Корти шумо банд шуд» · «Пардохти расониданро кунед» · «Ҳисоби шумо рахна шуд» · «Ҷубронпулӣ гиред»</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Пайванди дохили СМС-ро накушоед.</li>
          <li><span class="step-num">2</span>Ба рақами дохили паём занг назанед.</li>
          <li><span class="step-num">3</span>Ҳолатро дар барномаи расмӣ ё бо занг ба рақами корт санҷед.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Ҳифз</div>Пас аз санҷиш паёмро тоза кунед ва агар тарҳ паҳн шуда бошад, наздиконро огоҳ намоед.</div>`
    },
    {
      id: 'faq-jobphish',
      title: '💼 Фишинги корӣ чист?',
      search: 'фишинги корӣ кор ҷойи кор суҳбат экран',
      html: `<p><strong>Фишинги корӣ</strong> — қаллобӣ зери номи ҷойи кор мебошад. Қаллобон барои «расмият», ҳуҷҷатҳо ё дидани рамзҳо тавассути намоиши экран дастрасӣ мехоҳанд.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Нишонаҳои хатар</div>Барои омӯзиш ё дастрасӣ пул мехоҳанд · маоши баланд бе таҷриба ваъда медиҳанд · намоиши экрани телефонро талаб мекунанд · пайванди сомонаи қалбакии ҷойҳои кор мефиристанд</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Ба корманди ношинос намоиши экранро фаъол накунед.</li>
          <li><span class="step-num">2</span>То санҷидани ширкат акси шиносномаро нафиристед.</li>
          <li><span class="step-num">3</span>Нишонии сомона, маълумоти бақайдгирӣ, назарҳо ва тамосҳои расмиро санҷед.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Дар хотир доред</div>Корфармои ҳақиқӣ ба шумо маош медиҳад, на аз шумо пешпардохт мегирад.</div>`
    },
    {
      id: 'faq-chargeback',
      title: '💳 Агар аз корт пул гирифта шуд, чӣ бояд кард?',
      search: 'корт пул гирифтанд баргардонидан ариза амалиёт',
      html: `<p>Агар гирифтани маблағеро бинед, ки худатон анҷом надодаед, фавран амал кунед. Суръат имкони боздоштани амалиётро зиёд мекунад.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Кортро дар барнома ё бо занг ба бонк банд кунед.</li>
          <li><span class="step-num">2</span>Иқтибос ва маълумоти амалиётро талаб намоед.</li>
          <li><span class="step-num">3</span>Дар давоми як шабонарӯз аризаи норозигӣ аз амалиётро пешниҳод кунед.</li>
          <li><span class="step-num">4</span>Ба милитсия муроҷиат кунед ва ҳуҷҷати қабули аризаро нигоҳ доред.</li>
          <li><span class="step-num">5</span>СМС, номаҳо, чекҳо ва аксҳои экранро нигоҳ доред.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">ℹ️ Кай баргардонидан мумкин аст</div>Бонк баҳсро месанҷад, махсусан агар амалиёт бе тасдиқи муштарӣ ё бо вайрон шудани қоидаҳои амниятӣ гузашта бошад.</div>`
    },
    {
      id: 'faq-phone',
      title: '📞 Қаллобро аз телефон чӣ гуна шиносем?',
      search: 'телефон қаллоб бонк рамз таъҷилӣ',
      html: `<p>Қаллобони телефонӣ намегузоранд, ки шумо ором фикр кунед: метарсонанд, шитоб медиҳанд ва суҳбатро ба маълумоти махфӣ мебаранд.</p>
        <div class="info-box warning"><div class="box-title">🚨 Нишонаҳои сурх</div>«Хадамоти амнияти бонк» · «Бонки марказӣ» · «Пули шуморо медузданд» · «Рамзро гӯед» · «Ин барномаро насб кунед» · «Намоиши экранро фаъол кунед»</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Баҳс накунед, зангро қатъ кунед.</li>
          <li><span class="step-num">✓</span>Худатон ба бонк занг занед.</li>
          <li><span class="step-num">✓</span>Рақамро ба бонк хабар диҳед ва наздиконро огоҳ кунед.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Қоидаи таваққуф</div>Ҳар дархости «ҳозир иҷро кунед» сабаб аст, ки истед ва маълумотро санҷед.</div>`
    },
    {
      id: 'faq-credit',
      title: '🏦 Агар қаллобон ба номи шумо қарз гирифта бошанд, чӣ бояд кард?',
      search: 'қарз қаллобон номи ман бонк милитсия',
      html: `<p>Қарзе, ки бе розигии шумо гирифта шудааст, бояд расман ва хаттӣ баҳс карда шавад.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Фавран ба бонк дар бораи қаллобӣ хабар диҳед.</li>
          <li><span class="step-num">2</span>Ариза нависед, ки шумо дар аҳд иштирок надоштед.</li>
          <li><span class="step-num">3</span>Нусхаи шартнома, саволнома, сабти зангҳо ва маълумоти дастгоҳро талаб кунед.</li>
          <li><span class="step-num">4</span>Ба милитсия ариза диҳед.</li>
          <li><span class="step-num">5</span>Таърихи қарзиро санҷед ва дастрасӣ ба маълумоти дуздидашударо банд кунед.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Муҳим</div>Бе машварат пардохти қарзи дигаронро оғоз накунед: пардохт метавонад ҳамчун эътирофи қарз фаҳмида шавад.</div>`
    },
    {
      id: 'faq-online',
      title: '🔒 Аз қаллобони интернетӣ чӣ гуна ҳифз шавем?',
      search: 'интернет амният гузарвожа корт браузер',
      html: `<p>Амнияти интернетӣ аз одатҳои доимӣ оғоз мешавад: манбаъро санҷед, дастрасиро маҳдуд кунед ва маълумоти зиёдатиро дар ҷойи осебпазир нигоҳ надоред.</p>
        <div class="info-box tip"><div class="box-title">🛡️ Қоидаҳои асосии амният</div>Ҳифзро пеш аз ба миён омадани мушкил фаъол кунед.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Тасдиқи дуомиларо фаъол кунед.</li>
          <li><span class="step-num">✓</span>Барои бонк, почта ва шабакаҳои иҷтимоӣ гузарвожаҳои гуногун истифода баред.</li>
          <li><span class="step-num">✓</span>Маълумоти кортро дар браузери дастгоҳи умумӣ нигоҳ надоред.</li>
          <li><span class="step-num">✓</span>Барои пардохтҳои интернетӣ маҳдудият гузоред.</li>
          <li><span class="step-num">✓</span>Иқтибоси ҳисобро мунтазам санҷед.</li>
        </ul>`
    }
  ],
  uz: [
    {
      id: 'faq-vishing',
      title: '📞 Vishing nima?',
      search: 'vishing telefon qo‘ng‘iroq bank kod sms',
      html: `<p><strong>Vishing</strong> — telefon orqali firibgarlik. Firibgarlar qo‘ng‘iroq qilib pul, SMS kodi, PIN, CVV yoki bank ilovasiga kirishni olishga urinadi.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Bu qanday ko‘rinadi</div>“Biz bankdanmiz” · “Nomigizga kredit olinmoqda” · “Pulni xavfsiz hisobga o‘tkazing” · “Operatsiyani to‘xtatish uchun kodni ayting”</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Qo‘ng‘iroqni tugating, sizni shoshirishsa ham.</li>
          <li><span class="step-num">2</span>Kartadagi yoki rasmiy saytdagi raqam orqali bankka o‘zingiz qo‘ng‘iroq qiling.</li>
          <li><span class="step-num">3</span>Ma’lumot yoki kodni aytgan bo‘lsangiz, kartani bloklang.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Asosiy qoida</div>Bank hech qachon PIN, CVV, parol, SMS kodi yoki “xavfsiz hisob”ga pul o‘tkazishni so‘ramaydi.</div>`
    },
    {
      id: 'faq-phishing',
      title: '🎣 Fishing nima?',
      search: 'fishing soxta sayt havola captcha parol login',
      html: `<p><strong>Fishing</strong> — bank, do‘kon, yetkazib berish xizmati yoki davlat portaliga o‘xshatilgan soxta saytlar, xatlar va xabarlar orqali aldash.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Soxta CAPTCHA</div>Agar sayt buyruq satrini ochish, matn qo‘yish yoki brauzerdan tashqarida “tekshiruv” bajarishni so‘rasa, bu CAPTCHA emas. Bu zararli dastur o‘rnatish urinishidir.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Sayt manzilini harfma-harf tekshiring.</li>
          <li><span class="step-num">✓</span>SMS yoki messenjer havolasidan keyin karta ma’lumotini kiritmang.</li>
          <li><span class="step-num">✓</span>Ikki bosqichli tasdiqlashni yoqing.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Tez tekshiruv</div>Bank saytini yuborilgan havoladan emas, saqlangan manzil yoki rasmiy qidiruv orqali oching.</div>`
    },
    {
      id: 'faq-smishing',
      title: '📱 Smishing nima?',
      search: 'smishing sms xabar karta blok havola',
      html: `<p><strong>Smishing</strong> — SMS orqali firibgarlik. Xabar karta bloklangani bilan qo‘rqitishi, sovrin va’da qilishi yoki “yetkazib berishni tasdiqlash” uchun havola yuborishi mumkin.</p>
        <div class="info-box warning"><div class="box-title">🚨 Odatdagi xabarlar</div>“Kartangiz bloklandi” · “Yetkazib berish uchun to‘lang” · “Hisobingiz buzildi” · “Kompensatsiya oling”</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>SMS ichidagi havolani ochmang.</li>
          <li><span class="step-num">2</span>Xabardagi raqamga qo‘ng‘iroq qilmang.</li>
          <li><span class="step-num">3</span>Holatni rasmiy ilova yoki kartadagi raqam orqali tekshiring.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Himoya</div>Tekshiruvdan keyin xabarni o‘chiring va sxema ommaviy bo‘lsa yaqinlaringizni ogohlantiring.</div>`
    },
    {
      id: 'faq-jobphish',
      title: '💼 Ish bo‘yicha fishing nima?',
      search: 'ish fishing vakansiya suhbat ekran',
      html: `<p><strong>Ish bo‘yicha fishing</strong> — vakansiya niqobidagi firibgarlik. Maqsad “rasmiylashtirish” uchun pul olish, hujjatlarni o‘g‘irlash yoki ekran orqali kodlarni ko‘rish.</p>
        <div class="info-box warning"><div class="box-title">⚠️ Xavf belgilari</div>O‘qish yoki kirish uchun to‘lov so‘rashadi · tajribasiz yuqori maosh va’da qilishadi · telefon ekranini ko‘rsatishni so‘rashadi · vakansiya saytining soxta nusxasini yuborishadi</div>
        <ul class="step-list">
          <li><span class="step-num">1</span>Noma’lum kadrlar xodimiga ekran namoyishini yoqmang.</li>
          <li><span class="step-num">2</span>Kompaniyani tekshirmasdan pasport rasmini yubormang.</li>
          <li><span class="step-num">3</span>Domen, ro‘yxat ma’lumotlari, fikrlar va rasmiy kontaktlarni tekshiring.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Esda tuting</div>Haqiqiy ish beruvchi sizga pul to‘laydi, sizdan oldindan pul olmaydi.</div>`
    },
    {
      id: 'faq-chargeback',
      title: '💳 Kartadan pul yechilsa nima qilish kerak?',
      search: 'karta pul yechildi chargeback qaytarish ariza',
      html: `<p>O‘zingiz qilmagan yechimni ko‘rsangiz, darhol harakat qiling. Tezlik operatsiyani to‘xtatish imkonini oshiradi.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Kartani ilova yoki bankka qo‘ng‘iroq qilib bloklang.</li>
          <li><span class="step-num">2</span>Ko‘chirma va operatsiya tafsilotlarini so‘rang.</li>
          <li><span class="step-num">3</span>Bir sutka ichida operatsiyaga norozilik arizasini bering.</li>
          <li><span class="step-num">4</span>Militsiyaga murojaat qiling va ariza qabul qilinganini tasdiqlovchi hujjatni saqlang.</li>
          <li><span class="step-num">5</span>SMS, xatlar, cheklar va skrinshotlarni saqlang.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">ℹ️ Qachon pul qaytishi mumkin</div>Bank nizoni ko‘rib chiqadi, ayniqsa operatsiya mijoz tasdig‘isiz yoki xavfsizlik qoidalari buzilgan holda o‘tgan bo‘lsa.</div>`
    },
    {
      id: 'faq-phone',
      title: '📞 Telefon firibgarini qanday tanish mumkin?',
      search: 'telefon firibgar bank pin cvv shoshilinch',
      html: `<p>Telefon firibgari sizga o‘ylashga vaqt bermaslikka urinadi: qo‘rqitadi, shoshiradi va suhbatni maxfiy ma’lumotlarga buradi.</p>
        <div class="info-box warning"><div class="box-title">🚨 Qizil belgilar</div>“Bank xavfsizlik xizmati” · “Markaziy bank” · “Pulingiz o‘g‘irlanmoqda” · “Kodni ayting” · “Ilovani o‘rnating” · “Ekranni ko‘rsating”</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Bahslashmang, qo‘ng‘iroqni tugating.</li>
          <li><span class="step-num">✓</span>Bankka o‘zingiz qo‘ng‘iroq qiling.</li>
          <li><span class="step-num">✓</span>Raqam haqida bankka xabar bering va yaqinlaringizni ogohlantiring.</li>
        </ul>
        <div class="info-box success"><div class="box-title">✅ Tanaffus qoidasi</div>“Hozir bajaring” degan har qanday talab to‘xtab, ma’lumotni tekshirish uchun sababdir.</div>`
    },
    {
      id: 'faq-credit',
      title: '🏦 Firibgarlar nomingizga kredit olsa nima qilish kerak?',
      search: 'kredit firibgarlar nomimga bank militsiya',
      html: `<p>Roziligingizsiz olingan kreditni rasmiy va yozma tartibda nizolash kerak.</p>
        <ul class="step-list">
          <li><span class="step-num">1</span>Bankka firibgarlik haqida darhol xabar bering.</li>
          <li><span class="step-num">2</span>Bitimga aloqangiz yo‘qligi haqida ariza yozing.</li>
          <li><span class="step-num">3</span>Shartnoma, anketa, qo‘ng‘iroq yozuvlari va qurilma ma’lumotlarini talab qiling.</li>
          <li><span class="step-num">4</span>Militsiyaga ariza bering.</li>
          <li><span class="step-num">5</span>Kredit tarixini tekshiring va o‘g‘irlangan ma’lumotlarga kirishni bloklang.</li>
        </ul>
        <div class="info-box tip"><div class="box-title">🛡️ Muhim</div>Maslahat olmasdan begona kreditni to‘lashni boshlamang: to‘lovlar qarzni tan olishdek ko‘rinishi mumkin.</div>`
    },
    {
      id: 'faq-online',
      title: '🔒 Onlayn firibgarlardan qanday himoyalanish mumkin?',
      search: 'onlayn himoya 2fa parol karta brauzer',
      html: `<p>Onlayn xavfsizlik odatlardan boshlanadi: manbani tekshirish, kirishni cheklash va ortiqcha ma’lumotni o‘g‘irlanishi mumkin joyda saqlamaslik.</p>
        <div class="info-box tip"><div class="box-title">🛡️ Asosiy xavfsizlik qoidalari</div>Muammo bo‘lishidan oldin himoyani yoqing.</div>
        <ul class="step-list">
          <li><span class="step-num">✓</span>Ikki bosqichli tasdiqlashni yoqing.</li>
          <li><span class="step-num">✓</span>Bank, pochta va ijtimoiy tarmoqlar uchun turli parollardan foydalaning.</li>
          <li><span class="step-num">✓</span>Umumiy qurilmadagi brauzerda karta ma’lumotini saqlamang.</li>
          <li><span class="step-num">✓</span>Onlayn to‘lovlar uchun limit qo‘ying.</li>
          <li><span class="step-num">✓</span>Ko‘chirmani muntazam tekshiring.</li>
        </ul>`
    }
  ]
};

const KODEKS_PARTS = {
  ru: [
    { title: 'Часть 1 — Базовое мошенничество', badge: 'до 2 лет', html: `<div class="article-sub"><p>Хищение чужого имущества или приобретение права на чужое имущество путём обмана либо злоупотребления доверием.</p></div><div class="penalty-box"><strong>⚖️ Наказание</strong><span>Штраф от 250 до 365 показателей для расчётов, или ограничение свободы до 3 лет, или лишение свободы до 2 лет. (ЗРТ 21.07.10 №617)</span></div>` },
    { title: 'Часть 2 — Квалифицирующие обстоятельства', badge: 'до 5 лет', html: `<ul class="article-list"><li data-item="а">Совершённое повторно</li><li data-item="б">Группой лиц по предварительному сговору</li><li data-item="в">Причинившее значительный ущерб гражданину</li><li data-item="г">Лицом с использованием служебного положения</li></ul><div class="penalty-box"><strong>⚖️ Наказание</strong><span>Штраф от 365 до 912 показателей для расчётов или лишение свободы от 2 до 5 лет с лишением права занимать должности до 5 лет или без такового. (ЗРТ 17.05.04 №35; ЗРТ 21.07.10 №617)</span></div>` },
    { title: 'Часть 3 — Крупный размер, организованная группа', badge: 'до 8 лет', html: `<ul class="article-list"><li data-item="а">В крупном размере</li><li data-item="б">Организованной группой</li><li data-item="в">При опасном рецидиве</li></ul><div class="penalty-box"><strong>⚖️ Наказание</strong><span>Штраф от 912 до 1460 показателей или лишение свободы от 5 до 8 лет с конфискацией имущества или без таковой и лишением права занимать должности до 5 лет. (ЗРТ 21.07.10 №617)</span></div>` },
    { title: 'Часть 4 — Особо опасный рецидив, особо крупный размер', badge: 'до 12 лет', html: `<ul class="article-list"><li data-item="а">При особо опасном рецидиве</li><li data-item="б">В особо крупном размере</li></ul><div class="penalty-box"><strong>⚖️ Наказание</strong><span>Штраф от 1460 до 2190 показателей или лишение свободы от 8 до 12 лет с конфискацией имущества и лишением права занимать должности до 5 лет или без такового. (ЗРТ 21.07.10 №617)</span></div>` }
  ],
  en: [
    { title: 'Part 1 — Basic Fraud', badge: 'up to 2 years', html: `<div class="article-sub"><p>Stealing another person’s property or acquiring rights to it through deception or abuse of trust.</p></div><div class="penalty-box"><strong>⚖️ Penalty</strong><span>A fine from 250 to 365 calculation indicators, restriction of liberty up to 3 years, or imprisonment up to 2 years. (LRT 21.07.10 No. 617)</span></div>` },
    { title: 'Part 2 — Aggravating Circumstances', badge: 'up to 5 years', html: `<ul class="article-list"><li data-item="a">Committed repeatedly</li><li data-item="b">Committed by a group by prior agreement</li><li data-item="c">Causing significant damage to a citizen</li><li data-item="d">Committed using an official position</li></ul><div class="penalty-box"><strong>⚖️ Penalty</strong><span>A fine from 365 to 912 calculation indicators or imprisonment from 2 to 5 years, with or without deprivation of the right to hold certain positions for up to 5 years. (LRT 17.05.04 No. 35; LRT 21.07.10 No. 617)</span></div>` },
    { title: 'Part 3 — Large Scale or Organized Group', badge: 'up to 8 years', html: `<ul class="article-list"><li data-item="a">Committed on a large scale</li><li data-item="b">Committed by an organized group</li><li data-item="c">Committed with dangerous recidivism</li></ul><div class="penalty-box"><strong>⚖️ Penalty</strong><span>A fine from 912 to 1460 calculation indicators or imprisonment from 5 to 8 years, with or without confiscation of property and deprivation of the right to hold positions for up to 5 years. (LRT 21.07.10 No. 617)</span></div>` },
    { title: 'Part 4 — Especially Dangerous Recidivism or Especially Large Scale', badge: 'up to 12 years', html: `<ul class="article-list"><li data-item="a">Especially dangerous recidivism</li><li data-item="b">Especially large scale</li></ul><div class="penalty-box"><strong>⚖️ Penalty</strong><span>A fine from 1460 to 2190 calculation indicators or imprisonment from 8 to 12 years with confiscation of property and with or without deprivation of the right to hold positions for up to 5 years. (LRT 21.07.10 No. 617)</span></div>` }
  ],
  tg: [
    { title: 'Қисми 1 — Қаллобии асосӣ', badge: 'то 2 сол', html: `<div class="article-sub"><p>Тасарруфи молу мулки дигарон ё ба даст овардани ҳуқуқ ба молу мулки дигарон бо роҳи фиреб ё суиистифода аз боварӣ.</p></div><div class="penalty-box"><strong>⚖️ Ҷазо</strong><span>Ҷарима аз 250 то 365 нишондиҳанда барои ҳисобҳо, ё маҳдуд кардани озодӣ то 3 сол, ё маҳрум сохтан аз озодӣ то 2 сол. (ЗРТ 21.07.10 №617)</span></div>` },
    { title: 'Қисми 2 — Ҳолатҳои вазнинкунанда', badge: 'то 5 сол', html: `<ul class="article-list"><li data-item="а">Такроран содиршуда</li><li data-item="б">Аз ҷониби гурӯҳи шахсон бо маслиҳати пешакӣ</li><li data-item="в">Бо расонидани зарари назаррас ба шаҳрванд</li><li data-item="г">Бо истифода аз мақоми хизматӣ</li></ul><div class="penalty-box"><strong>⚖️ Ҷазо</strong><span>Ҷарима аз 365 то 912 нишондиҳанда барои ҳисобҳо ё маҳрум сохтан аз озодӣ аз 2 то 5 сол, бо маҳрум кардан аз ҳуқуқи ишғоли вазифаҳо то 5 сол ё бе он. (ЗРТ 17.05.04 №35; ЗРТ 21.07.10 №617)</span></div>` },
    { title: 'Қисми 3 — Андозаи калон ё гурӯҳи муташаккил', badge: 'то 8 сол', html: `<ul class="article-list"><li data-item="а">Дар андозаи калон</li><li data-item="б">Аз ҷониби гурӯҳи муташаккил</li><li data-item="в">Ҳангоми ретсидиви хавфнок</li></ul><div class="penalty-box"><strong>⚖️ Ҷазо</strong><span>Ҷарима аз 912 то 1460 нишондиҳанда ё маҳрум сохтан аз озодӣ аз 5 то 8 сол, бо мусодираи молу мулк ё бе он ва маҳрум кардан аз ҳуқуқи ишғоли вазифаҳо то 5 сол. (ЗРТ 21.07.10 №617)</span></div>` },
    { title: 'Қисми 4 — Ретсидиви махсусан хавфнок ё андозаи махсусан калон', badge: 'то 12 сол', html: `<ul class="article-list"><li data-item="а">Ҳангоми ретсидиви махсусан хавфнок</li><li data-item="б">Дар андозаи махсусан калон</li></ul><div class="penalty-box"><strong>⚖️ Ҷазо</strong><span>Ҷарима аз 1460 то 2190 нишондиҳанда ё маҳрум сохтан аз озодӣ аз 8 то 12 сол бо мусодираи молу мулк ва маҳрум кардан аз ҳуқуқи ишғоли вазифаҳо то 5 сол ё бе он. (ЗРТ 21.07.10 №617)</span></div>` }
  ],
  uz: [
    { title: '1-qism — Asosiy firibgarlik', badge: '2 yilgacha', html: `<div class="article-sub"><p>Aldash yoki ishonchni suiiste’mol qilish orqali boshqaning mulkini egallash yoki mulkka bo‘lgan huquqni qo‘lga kiritish.</p></div><div class="penalty-box"><strong>⚖️ Jazo</strong><span>Hisoblash ko‘rsatkichining 250 dan 365 baravarigacha jarima, 3 yilgacha ozodlikni cheklash yoki 2 yilgacha ozodlikdan mahrum qilish. (TRQ 21.07.10 №617)</span></div>` },
    { title: '2-qism — Og‘irlashtiruvchi holatlar', badge: '5 yilgacha', html: `<ul class="article-list"><li data-item="a">Takroran sodir etilgan</li><li data-item="b">Oldindan til biriktirgan guruh tomonidan</li><li data-item="c">Fuqaroga sezilarli zarar yetkazgan</li><li data-item="d">Xizmat mavqeidan foydalangan holda</li></ul><div class="penalty-box"><strong>⚖️ Jazo</strong><span>Hisoblash ko‘rsatkichining 365 dan 912 baravarigacha jarima yoki 2 yildan 5 yilgacha ozodlikdan mahrum qilish, 5 yilgacha lavozim egallash huquqidan mahrum qilish yoki busiz. (TRQ 17.05.04 №35; TRQ 21.07.10 №617)</span></div>` },
    { title: '3-qism — Yirik miqdor yoki uyushgan guruh', badge: '8 yilgacha', html: `<ul class="article-list"><li data-item="a">Yirik miqdorda</li><li data-item="b">Uyushgan guruh tomonidan</li><li data-item="c">Xavfli retsidiv holatida</li></ul><div class="penalty-box"><strong>⚖️ Jazo</strong><span>Hisoblash ko‘rsatkichining 912 dan 1460 baravarigacha jarima yoki 5 yildan 8 yilgacha ozodlikdan mahrum qilish, mol-mulkni musodara qilish yoki qilmaslik hamda lavozim egallash huquqidan 5 yilgacha mahrum qilish. (TRQ 21.07.10 №617)</span></div>` },
    { title: '4-qism — O‘ta xavfli retsidiv yoki o‘ta yirik miqdor', badge: '12 yilgacha', html: `<ul class="article-list"><li data-item="a">O‘ta xavfli retsidivda</li><li data-item="b">O‘ta yirik miqdorda</li></ul><div class="penalty-box"><strong>⚖️ Jazo</strong><span>Hisoblash ko‘rsatkichining 1460 dan 2190 baravarigacha jarima yoki 8 yildan 12 yilgacha ozodlikdan mahrum qilish, mol-mulkni musodara qilish va 5 yilgacha lavozim egallash huquqidan mahrum qilish yoki busiz. (TRQ 21.07.10 №617)</span></div>` }
  ]
};

const FEATURES = {
  ru: [
    { title: 'Защита от мошенников', desc: 'Узнайте схемы и методы мошенников до того, как попадёте в ловушку' },
    { title: 'Финансовая грамотность', desc: 'Повышайте знания через статьи, FAQ и интерактивные тесты' },
    { title: 'Дневник денег', desc: 'Контролируйте доходы, расходы и финансовые цели' },
    { title: 'Правовая база', desc: 'Статья 247 УК РТ — знайте права и наказания за мошенничество' }
  ],
  en: [
    { title: 'Fraud protection', desc: 'Learn scam schemes before you fall into a trap' },
    { title: 'Financial literacy', desc: 'Improve knowledge through articles, FAQ, and interactive tests' },
    { title: 'Money diary', desc: 'Track income, expenses, and financial goals' },
    { title: 'Legal basis', desc: 'Article 247 of Tajikistan’s Criminal Code — know your rights and penalties' }
  ],
  tg: [
    { title: 'Ҳифз аз қаллобон', desc: 'Тарҳҳои қаллобиро пеш аз афтодан ба дом омӯзед' },
    { title: 'Саводнокии молиявӣ', desc: 'Донишро тавассути мақолаҳо, FAQ ва санҷишҳои интерактивӣ баланд бардоред' },
    { title: 'Рӯзномаи пул', desc: 'Даромад, хароҷот ва ҳадафҳои молиявиро назорат кунед' },
    { title: 'Асоси ҳуқуқӣ', desc: 'Моддаи 247 КҶ — ҳуқуқҳо ва ҷазоро барои қаллобӣ донед' }
  ],
  uz: [
    { title: 'Firibgarlikdan himoya', desc: 'Tuzoqqa tushishdan oldin firibgarlik sxemalarini bilib oling' },
    { title: 'Moliyaviy savodxonlik', desc: 'Maqolalar, FAQ va interaktiv testlar orqali bilim oshiring' },
    { title: 'Pul kundaligi', desc: 'Daromad, xarajat va moliyaviy maqsadlarni nazorat qiling' },
    { title: 'Huquqiy asos', desc: 'JK 247-modda — huquqlar va jazolarni bilib oling' }
  ]
};

const QUIZ_I18N = {
  ru: [
    { q: 'Что такое вишинг?', opts: ['Мошенничество через телефонные звонки', 'Взлом банкоматов', 'Поддельный сайт банка', 'Кража карты из кошелька'], correct: 0, exp: 'Вишинг — телефонное мошенничество, когда звонят и пытаются выманить данные или деньги.', faq: 'faq-vishing', faqLabel: 'Подробнее о вишинге' },
    { q: 'Что нельзя называть по телефону «сотруднику банка»?', opts: ['Ваш город проживания', 'PIN-код и CVV карты', 'Имя и фамилию', 'Номер офиса банка'], correct: 1, exp: 'PIN-код, CVV и коды из SMS — секретные данные. Настоящий банк их не попросит.', faq: 'faq-phone', faqLabel: 'Как распознать мошенника' },
    { q: 'SMS сообщает: «Карта заблокирована, перейдите по ссылке». Что делать?', opts: ['Перейти по ссылке', 'Позвонить по номеру из SMS', 'Позвонить в банк по официальному номеру', 'Переслать SMS друзьям'], correct: 2, exp: 'Проверяйте информацию только через официальный номер банка или приложение.', faq: 'faq-smishing', faqLabel: 'Что такое смишинг' },
    { q: 'Что такое смишинг?', opts: ['Мошенничество через SMS', 'Взлом смартфона', 'Кража через банкомат', 'Поддельное приложение'], correct: 0, exp: 'Смишинг — SMS-мошенничество со ссылками, угрозами или ложными обещаниями.', faq: 'faq-smishing', faqLabel: 'Защита от SMS-мошенников' },
    { q: 'Работодатель просит включить демонстрацию экрана на собеседовании. Что делать?', opts: ['Включить сразу', 'Отказаться', 'Показать только банк', 'Согласиться после оплаты'], correct: 1, exp: 'Через демонстрацию экрана мошенники видят коды и банковские уведомления.', faq: 'faq-jobphish', faqLabel: 'Джоб-фишинг' },
    { q: 'Сайт просит открыть командную строку и вставить текст для CAPTCHA. Что это?', opts: ['Обычная проверка', 'Обновление браузера', 'Схема Fake CAPTCHA', 'Проверка банка'], correct: 2, exp: 'Легитимные CAPTCHA не требуют командной строки. Это признак вредоносной схемы.', faq: 'faq-phishing', faqLabel: 'Что такое фишинг' },
    { q: 'Мошенники оформили кредит на ваше имя. Первый шаг?', opts: ['Начать платить', 'Уведомить банк и подать заявление о непричастности', 'Подождать', 'Взять новый кредит'], correct: 1, exp: 'Нужно сразу письменно уведомить банк и обратиться в полицию.', faq: 'faq-credit', faqLabel: 'Кредит на ваше имя' },
    { q: 'С карты списали деньги без вашего согласия. Когда подать заявление?', opts: ['Через 7 дней', 'Через месяц', 'В течение суток', 'Когда будет время'], correct: 2, exp: 'Чем быстрее подано заявление о несогласии, тем выше шанс возврата.', faq: 'faq-chargeback', faqLabel: 'Что делать при списании' },
    { q: 'Поддельные сайты-клоны банков — это пример чего?', opts: ['Вишинга', 'Смишинга', 'Фишинга', 'Джоб-фишинга'], correct: 2, exp: 'Фишинг использует сайты-клоны для кражи логинов, паролей и данных карт.', faq: 'faq-phishing', faqLabel: 'Признаки фишинга' },
    { q: 'Что такое двухфакторная аутентификация?', opts: ['Два банковских счёта', 'Дополнительное подтверждение входа', 'Два PIN-кода', 'Двойной лимит'], correct: 1, exp: '2FA добавляет второй фактор: одноразовый код, приложение или биометрию.', faq: 'faq-online', faqLabel: 'Онлайн-защита' }
  ],
  en: [
    { q: 'What is vishing?', opts: ['Fraud through phone calls', 'ATM hacking', 'A fake bank website', 'Stealing a card from a wallet'], correct: 0, exp: 'Vishing is phone fraud where callers try to get data or money.', faq: 'faq-vishing', faqLabel: 'More about vishing' },
    { q: 'What should you never tell a “bank employee” by phone?', opts: ['Your city', 'Card PIN and CVV', 'Your first and last name', 'Bank office number'], correct: 1, exp: 'PIN, CVV, and SMS codes are secret. A real bank will not ask for them.', faq: 'faq-phone', faqLabel: 'Recognize phone scammers' },
    { q: 'An SMS says: “Your card is blocked, follow the link.” What should you do?', opts: ['Follow the link', 'Call the SMS number', 'Call the bank using an official number', 'Forward the SMS to friends'], correct: 2, exp: 'Verify only through the bank’s official number or app.', faq: 'faq-smishing', faqLabel: 'What is smishing' },
    { q: 'What is smishing?', opts: ['Fraud through SMS', 'Smartphone hacking', 'ATM theft', 'A fake app'], correct: 0, exp: 'Smishing is SMS fraud with links, threats, or false promises.', faq: 'faq-smishing', faqLabel: 'SMS scam protection' },
    { q: 'A recruiter asks you to share your screen during an interview. What should you do?', opts: ['Turn it on immediately', 'Refuse', 'Show only your bank', 'Agree after payment'], correct: 1, exp: 'Screen sharing lets scammers see codes and banking notifications.', faq: 'faq-jobphish', faqLabel: 'Job phishing' },
    { q: 'A website asks you to open a command line and paste text for CAPTCHA. What is it?', opts: ['Normal check', 'Browser update', 'Fake CAPTCHA scheme', 'Bank verification'], correct: 2, exp: 'Legitimate CAPTCHA does not require a command line. It is a malware sign.', faq: 'faq-phishing', faqLabel: 'What is phishing' },
    { q: 'Scammers took a loan in your name. What is the first step?', opts: ['Start paying', 'Notify the bank and file a non-involvement statement', 'Wait', 'Take another loan'], correct: 1, exp: 'You must notify the bank in writing and report to the police.', faq: 'faq-credit', faqLabel: 'Loan in your name' },
    { q: 'Money was charged from your card without consent. When should you file a dispute?', opts: ['In 7 days', 'In a month', 'Within 24 hours', 'Whenever convenient'], correct: 2, exp: 'The sooner the dispute is filed, the better the refund chance.', faq: 'faq-chargeback', faqLabel: 'Unauthorized charge' },
    { q: 'Fake clone websites of banks are an example of what?', opts: ['Vishing', 'Smishing', 'Phishing', 'Job phishing'], correct: 2, exp: 'Phishing uses cloned websites to steal logins, passwords, and card data.', faq: 'faq-phishing', faqLabel: 'Phishing signs' },
    { q: 'What is two-factor authentication?', opts: ['Two bank accounts', 'An extra login confirmation', 'Two PIN codes', 'A double limit'], correct: 1, exp: '2FA adds a second factor: one-time code, app approval, or biometrics.', faq: 'faq-online', faqLabel: 'Online protection' }
  ],
  tg: [
    { q: 'Вишинг чист?', opts: ['Қаллобӣ тавассути занги телефонӣ', 'Рахнаи худпардоз', 'Сомонаи қалбакии бонк', 'Дуздии корт аз ҳамён'], correct: 0, exp: 'Вишинг қаллобии телефонӣ аст: занг мезананд ва маълумот ё пул талаб мекунанд.', faq: 'faq-vishing', faqLabel: 'Бештар дар бораи вишинг' },
    { q: 'Ба «корманди бонк» дар телефон чиро гуфтан мумкин нест?', opts: ['Шаҳри зиндагӣ', 'Рамзи махфӣ ва маълумоти махфии корт', 'Ному насаб', 'Рақами идораи бонк'], correct: 1, exp: 'Рамзи махфӣ, маълумоти махфии корт ва рамзҳои СМС сир мебошанд. Бонки ҳақиқӣ онҳоро намепурсад.', faq: 'faq-phone', faqLabel: 'Шинохтани қаллоб дар телефон' },
    { q: 'СМС мегӯяд: «Корт банд шуд, ба пайванд гузаред». Чӣ мекунед?', opts: ['Пайвандро мекушоям', 'Ба рақами СМС занг мезанам', 'Ба бонк аз рақами расмӣ занг мезанам', 'СМС-ро ба дӯстон мефиристам'], correct: 2, exp: 'Маълумотро танҳо тавассути рақами расмии бонк ё барномаи расмӣ санҷед.', faq: 'faq-smishing', faqLabel: 'Смишинг чист' },
    { q: 'Смишинг чист?', opts: ['Қаллобӣ тавассути СМС', 'Рахнаи телефон', 'Дуздӣ аз худпардоз', 'Барномаи қалбакӣ'], correct: 0, exp: 'Смишинг қаллобии СМС бо пайванд, таҳдид ё ваъдаи дурӯғ аст.', faq: 'faq-smishing', faqLabel: 'Ҳифз аз СМС-қаллобон' },
    { q: 'Корфармо дар суҳбат намоиши экранро мехоҳад. Чӣ бояд кард?', opts: ['Фавран фаъол кардан', 'Рад кардан', 'Танҳо бонкро нишон додан', 'Пас аз пардохт розӣ шудан'], correct: 1, exp: 'Тавассути намоиши экран қаллобон рамзҳо ва огоҳиномаҳои бонкиро мебинанд.', faq: 'faq-jobphish', faqLabel: 'Фишинги корӣ' },
    { q: 'Сомона барои санҷиш равзанаи фармон ва гузоштани матнро талаб мекунад. Ин чист?', opts: ['Санҷиши одӣ', 'Навсозии браузер', 'Санҷиши қалбакӣ', 'Санҷиши бонк'], correct: 2, exp: 'Санҷиши қонунӣ равзанаи фармон намехоҳад. Ин нишонаи барномаи зараровар аст.', faq: 'faq-phishing', faqLabel: 'Фишинг чист' },
    { q: 'Қаллобон ба номи шумо қарз гирифтанд. Қадами аввал?', opts: ['Пардохтро оғоз кардан', 'Ба бонк хабар додан ва аризаи иштирок надоштан навиштан', 'Интизор шудан', 'Қарзи дигар гирифтан'], correct: 1, exp: 'Бояд фавран ба бонк хаттӣ хабар диҳед ва ба милитсия муроҷиат кунед.', faq: 'faq-credit', faqLabel: 'Қарз ба номи шумо' },
    { q: 'Аз корт бе розигӣ пул гирифтанд. Аризаро кай додан лозим?', opts: ['Пас аз 7 рӯз', 'Пас аз як моҳ', 'Дар давоми як шабонарӯз', 'Ҳар вақте ки фурсат шуд'], correct: 2, exp: 'Ҳар қадар зудтар ариза дода шавад, имкони баргардонидан зиёдтар аст.', faq: 'faq-chargeback', faqLabel: 'Ҳангоми гирифтани пул' },
    { q: 'Сомонаҳои қалбакии бонкҳо мисоли чист?', opts: ['Вишинг', 'Смишинг', 'Фишинг', 'Фишинги корӣ'], correct: 2, exp: 'Фишинг сомонаҳои монандро барои дуздии воридшавӣ, гузарвожа ва маълумоти корт истифода мебарад.', faq: 'faq-phishing', faqLabel: 'Нишонаҳои фишинг' },
    { q: 'Тасдиқи дуомила чист?', opts: ['Ду ҳисоби бонкӣ', 'Тасдиқи иловагии воридшавӣ', 'Ду рамзи махфӣ', 'Маҳдудияти дукарата'], correct: 1, exp: 'Тасдиқи дуомила омили дуюм илова мекунад: рамзи якдафъаина, тасдиқи барнома ё биометрия.', faq: 'faq-online', faqLabel: 'Ҳифзи интернетӣ' }
  ],
  uz: [
    { q: 'Vishing nima?', opts: ['Telefon qo‘ng‘iroqlari orqali firibgarlik', 'Bankomatni buzish', 'Soxta bank sayti', 'Hamyondan karta o‘g‘irlash'], correct: 0, exp: 'Vishing — qo‘ng‘iroq qilib ma’lumot yoki pul olishga urinish.', faq: 'faq-vishing', faqLabel: 'Vishing haqida batafsil' },
    { q: 'Telefon orqali “bank xodimi”ga nimani aytmaslik kerak?', opts: ['Yashash shahri', 'Karta PIN va CVV kodi', 'Ism va familiya', 'Bank ofisi raqami'], correct: 1, exp: 'PIN, CVV va SMS kodlari maxfiy. Haqiqiy bank ularni so‘ramaydi.', faq: 'faq-phone', faqLabel: 'Telefon firibgarini tanish' },
    { q: 'SMS: “Kartangiz bloklandi, havolaga o‘ting”. Nima qilasiz?', opts: ['Havolaga o‘taman', 'SMSdagi raqamga qo‘ng‘iroq qilaman', 'Bankning rasmiy raqamiga qo‘ng‘iroq qilaman', 'SMSni do‘stlarga yuboraman'], correct: 2, exp: 'Ma’lumotni faqat bankning rasmiy raqami yoki ilovasi orqali tekshiring.', faq: 'faq-smishing', faqLabel: 'Smishing nima' },
    { q: 'Smishing nima?', opts: ['SMS orqali firibgarlik', 'Telefonni buzish', 'Bankomat orqali o‘g‘irlik', 'Soxta ilova'], correct: 0, exp: 'Smishing — havola, tahdid yoki yolg‘on va’da bilan SMS firibgarligi.', faq: 'faq-smishing', faqLabel: 'SMS firibgarlaridan himoya' },
    { q: 'Ish beruvchi suhbatda ekran namoyishini so‘rayapti. Nima qilish kerak?', opts: ['Darhol yoqish', 'Rad etish', 'Faqat bankni ko‘rsatish', 'To‘lovdan keyin rozi bo‘lish'], correct: 1, exp: 'Ekran namoyishi orqali firibgarlar kodlar va bank xabarlarini ko‘radi.', faq: 'faq-jobphish', faqLabel: 'Ish bo‘yicha fishing' },
    { q: 'Sayt CAPTCHA uchun buyruq satrini ochib matn qo‘yishni so‘raydi. Bu nima?', opts: ['Oddiy tekshiruv', 'Brauzer yangilanishi', 'Soxta CAPTCHA sxemasi', 'Bank tekshiruvi'], correct: 2, exp: 'Qonuniy CAPTCHA buyruq satrini talab qilmaydi. Bu zararli sxema belgisi.', faq: 'faq-phishing', faqLabel: 'Fishing nima' },
    { q: 'Firibgarlar nomingizga kredit oldi. Birinchi qadam?', opts: ['To‘lashni boshlash', 'Bankka xabar berish va aloqador emaslik arizasi yozish', 'Kutish', 'Yangi kredit olish'], correct: 1, exp: 'Bankka yozma xabar berish va militsiyaga murojaat qilish kerak.', faq: 'faq-credit', faqLabel: 'Nomingizga kredit' },
    { q: 'Kartadan roziligingizsiz pul yechildi. Arizani qachon berish kerak?', opts: ['7 kundan keyin', 'Bir oydan keyin', 'Bir sutka ichida', 'Vaqt bo‘lganda'], correct: 2, exp: 'Norozilik arizasi qanchalik tez berilsa, qaytarish imkoni shunchalik yuqori.', faq: 'faq-chargeback', faqLabel: 'Ruxsatsiz yechim' },
    { q: 'Banklarning soxta klon saytlari nimaga misol?', opts: ['Vishing', 'Smishing', 'Fishing', 'Ish fishingi'], correct: 2, exp: 'Fishing login, parol va karta ma’lumotini o‘g‘irlash uchun klon saytlardan foydalanadi.', faq: 'faq-phishing', faqLabel: 'Fishing belgilar' },
    { q: 'Ikki bosqichli tasdiqlash nima?', opts: ['Ikki bank hisobi', 'Kirishni qo‘shimcha tasdiqlash', 'Ikki PIN kod', 'Ikki baravar limit'], correct: 1, exp: 'Ikki bosqichli tasdiqlash ikkinchi omil qo‘shadi: bir martalik kod, ilova tasdig‘i yoki biometrika.', faq: 'faq-online', faqLabel: 'Onlayn himoya' }
  ]
};

const SCAM_I18N = {
  ru: [
    { icon: '📱', text: 'SMS: «Ваша карта заблокирована. Срочно перейдите по ссылке и подтвердите данные».', isScam: true, exp: 'Банки не отправляют ссылки для разблокировки карты. Звоните по номеру на карте.' },
    { icon: '🏦', text: 'Вы сами открыли официальное приложение банка и перевели деньги родственнику.', isScam: false, exp: 'Это безопасно: вы сами инициировали операцию через официальный канал.' },
    { icon: '💼', text: 'HR на видеособеседовании просит включить демонстрацию экрана «для проверки навыков».', isScam: true, exp: 'Через экран видны SMS-коды и банковские уведомления.' },
    { icon: '🎁', text: 'Сайт сообщает: «Вы выиграли телефон! Заплатите 500 сомони за доставку».', isScam: true, exp: 'Приз плюс небольшой сбор — классическая схема предоплаты.' },
    { icon: '🔐', text: 'Банк прислал push в официальное приложение: «Подтвердите вход с нового устройства — Да/Нет».', isScam: false, exp: 'Push в официальном приложении — нормальная защита. Отклоните, если вход не ваш.' },
    { icon: '👤', text: 'Друг в мессенджере просит срочно перевести деньги, но пишет непривычным стилем.', isScam: true, exp: 'Аккаунт мог быть взломан. Позвоните другу голосом.' },
    { icon: '🧾', text: 'Вы оплачиваете коммунальные услуги через официальный сайт банка или госуслуги.', isScam: false, exp: 'Проверенный государственный или банковский сервис — безопасный канал оплаты.' },
    { icon: '🪪', text: '«Посредник» обещает паспорт за 2 дня, просит сканы документов и предоплату на карту физлица.', isScam: true, exp: 'Документы оформляются только через официальные каналы. Предоплата физлицу — риск.' }
  ],
  en: [
    { icon: '📱', text: 'SMS: “Your card is blocked. Follow the link urgently and confirm your data.”', isScam: true, exp: 'Banks do not send unblock links. Call the number on your card.' },
    { icon: '🏦', text: 'You opened the official bank app yourself and transferred money to a relative.', isScam: false, exp: 'This is safe: you initiated the operation through an official channel.' },
    { icon: '💼', text: 'A recruiter asks you to share your screen during a video interview “to test skills”.', isScam: true, exp: 'Screen sharing can reveal SMS codes and bank notifications.' },
    { icon: '🎁', text: 'A website says: “You won a phone! Pay 500 somoni for delivery.”', isScam: true, exp: 'A prize plus a small fee is a classic prepayment scam.' },
    { icon: '🔐', text: 'Your bank sends a push in the official app: “Confirm login from a new device — Yes/No.”', isScam: false, exp: 'A push in the official app is normal protection. Reject it if the login is not yours.' },
    { icon: '👤', text: 'A friend in messenger urgently asks for money, but the writing style feels unusual.', isScam: true, exp: 'The account may be hacked. Call your friend by voice.' },
    { icon: '🧾', text: 'You pay utility bills through the official bank or government services website.', isScam: false, exp: 'A verified government or banking service is a safe payment channel.' },
    { icon: '🪪', text: 'A “middleman” promises a passport in 2 days and asks for document scans and prepayment to a personal card.', isScam: true, exp: 'Documents are issued only through official channels. Prepayment to an individual is risky.' }
  ],
  tg: [
    { icon: '📱', text: 'СМС: «Корти шумо банд шуд. Фавран ба пайванд гузаред ва маълумотро тасдиқ кунед».', isScam: true, exp: 'Бонкҳо барои кушодани корт пайванд намефиристанд. Ба рақами корт занг занед.' },
    { icon: '🏦', text: 'Шумо худатон барномаи расмии бонкро кушодед ва ба хешованд пул гузарондед.', isScam: false, exp: 'Ин бехатар аст: амалиётро худатон тавассути роҳи расмӣ оғоз кардед.' },
    { icon: '💼', text: 'Корманди ҷойи кор дар суҳбати видеоӣ барои «санҷиши малака» намоиши экранро талаб мекунад.', isScam: true, exp: 'Аз экран рамзҳои СМС ва огоҳиномаҳои бонкӣ дида мешаванд.' },
    { icon: '🎁', text: 'Сомона мегӯяд: «Шумо телефон бурдед! Барои расонидан 500 сомонӣ пардохт кунед».', isScam: true, exp: 'Туҳфа ва пардохти хурд — тарҳи маъмули пешпардохти қаллобон аст.' },
    { icon: '🔐', text: 'Бонк дар барномаи расмӣ огоҳӣ фиристод: «Воридшавӣ аз дастгоҳи навро тасдиқ мекунед — Ҳа/Не».', isScam: false, exp: 'Огоҳӣ дар барномаи расмӣ ҳифзи муқаррарӣ аст. Агар воридшавӣ аз шумо набошад, рад кунед.' },
    { icon: '👤', text: 'Дӯст дар паёмрасон фавран пул мехоҳад, вале тарзи навишташ ғайриодӣ аст.', isScam: true, exp: 'Ҳисоб метавонад рахна шуда бошад. Ба дӯстатон бо овоз занг занед.' },
    { icon: '🧾', text: 'Шумо хизматрасониҳои коммуналиро тавассути сомонаи расмии бонк ё хадамоти давлатӣ пардохт мекунед.', isScam: false, exp: 'Хадамоти расмии давлатӣ ё бонкӣ роҳи бехатари пардохт аст.' },
    { icon: '🪪', text: '«Миёнарав» шиносномаро дар 2 рӯз ваъда медиҳад, нусхаи ҳуҷҷатҳо ва пешпардохт ба корти шахсиро мехоҳад.', isScam: true, exp: 'Ҳуҷҷатҳо танҳо тавассути роҳҳои расмӣ дода мешаванд. Пешпардохт ба шахси воқеӣ хатарнок аст.' }
  ],
  uz: [
    { icon: '📱', text: 'SMS: “Kartangiz bloklandi. Zudlik bilan havolaga o‘tib ma’lumotni tasdiqlang.”', isScam: true, exp: 'Banklar kartani ochish uchun havola yubormaydi. Kartadagi raqamga qo‘ng‘iroq qiling.' },
    { icon: '🏦', text: 'Siz rasmiy bank ilovasini o‘zingiz ochib, qarindoshingizga pul o‘tkazdingiz.', isScam: false, exp: 'Bu xavfsiz: operatsiyani rasmiy kanal orqali o‘zingiz boshladingiz.' },
    { icon: '💼', text: 'Kadrlar xodimi video suhbatda “ko‘nikmalarni tekshirish” uchun ekran namoyishini so‘raydi.', isScam: true, exp: 'Ekran orqali SMS kodlari va bank xabarlari ko‘rinadi.' },
    { icon: '🎁', text: 'Sayt: “Telefon yutdingiz! Yetkazish uchun 500 somoniy to‘lang.”', isScam: true, exp: 'Sovrin va kichik to‘lov — oldindan to‘lov firibgarligining klassik sxemasi.' },
    { icon: '🔐', text: 'Bank rasmiy ilovada push yubordi: “Yangi qurilmadan kirishni tasdiqlaysizmi — Ha/Yo‘q.”', isScam: false, exp: 'Rasmiy ilovadagi push oddiy himoya. Kirish sizniki bo‘lmasa, rad eting.' },
    { icon: '👤', text: 'Do‘st messenjerda shoshilinch pul so‘raydi, lekin yozish uslubi g‘alati.', isScam: true, exp: 'Hisob buzilgan bo‘lishi mumkin. Do‘stingizga ovozli qo‘ng‘iroq qiling.' },
    { icon: '🧾', text: 'Kommunal xizmatlarni bank yoki davlat xizmatlarining rasmiy sayti orqali to‘laysiz.', isScam: false, exp: 'Tekshirilgan davlat yoki bank xizmati xavfsiz to‘lov kanalidir.' },
    { icon: '🪪', text: '“Vositachi” pasportni 2 kunda va’da qiladi, hujjat skanlari va jismoniy shaxs kartasiga oldindan to‘lov so‘raydi.', isScam: true, exp: 'Hujjatlar faqat rasmiy kanallar orqali beriladi. Jismoniy shaxsga oldindan to‘lov xavfli.' }
  ]
};

const RISK_I18N = {
  ru: [
    { q: 'Переходите ли вы по ссылкам из SMS о «блокировке карты»?', risky: [0, 2], opts: ['Да, если похоже на банк', 'Нет — проверяю сам', 'Иногда'] },
    { q: 'Можете ли вы назвать PIN или код из SMS по просьбе «сотрудника банка»?', risky: [0, 2], opts: ['Да, если звонят из банка', 'Никогда', 'Если очень срочно'] },
    { q: 'Включали ли вы демонстрацию экрана незнакомому HR или консультанту?', risky: [0], opts: ['Да', 'Нет', 'Просили, но я отказался'] }
  ],
  en: [
    { q: 'Do you follow SMS links about a “blocked card”?', risky: [0, 2], opts: ['Yes, if it looks like the bank', 'No — I verify myself', 'Sometimes'] },
    { q: 'Would you tell a “bank employee” your PIN or SMS code?', risky: [0, 2], opts: ['Yes, if they call from the bank', 'Never', 'If it is very urgent'] },
    { q: 'Have you shared your screen with an unknown recruiter or consultant?', risky: [0], opts: ['Yes', 'No', 'They asked, but I refused'] }
  ],
  tg: [
    { q: 'Оё ба пайвандҳои СМС дар бораи «банд шудани корт» мегузаред?', risky: [0, 2], opts: ['Ҳа, агар ба бонк монанд бошад', 'Не — худам месанҷам', 'Баъзан'] },
    { q: 'Оё ба «корманди бонк» рамзи махфӣ ё рамзи СМС-ро мегӯед?', risky: [0, 2], opts: ['Ҳа, агар аз бонк занг зананд', 'Ҳеҷ гоҳ', 'Агар бисёр таъҷилӣ бошад'] },
    { q: 'Оё ба корманди ношинос ё мушовир намоиши экранро фаъол кардаед?', risky: [0], opts: ['Ҳа', 'Не', 'Пурсиданд, вале рад кардам'] }
  ],
  uz: [
    { q: '“Karta bloklandi” haqidagi SMS havolalariga o‘tasizmi?', risky: [0, 2], opts: ['Ha, bankka o‘xshasa', 'Yo‘q — o‘zim tekshiraman', 'Ba’zan'] },
    { q: '“Bank xodimi” so‘rasa PIN yoki SMS kodni aytasizmi?', risky: [0, 2], opts: ['Ha, bankdan qo‘ng‘iroq qilishsa', 'Hech qachon', 'Juda shoshilinch bo‘lsa'] },
    { q: 'Noma’lum kadrlar xodimi yoki maslahatchiga ekran namoyishini yoqqanmisiz?', risky: [0], opts: ['Ha', 'Yo‘q', 'So‘rashgan, lekin rad etganman'] }
  ]
};

const DIARY_CATS = {
  ru: ['💼 Работа', '🍔 Еда', '🚌 Транспорт', '🏠 Жильё', '🎮 Развлечения', '🏥 Здоровье', '📚 Образование', '👕 Одежда', '💳 Переводы', '🎁 Подарок', '📦 Другое'],
  en: ['💼 Work', '🍔 Food', '🚌 Transport', '🏠 Housing', '🎮 Entertainment', '🏥 Health', '📚 Education', '👕 Clothing', '💳 Transfers', '🎁 Gift', '📦 Other'],
  tg: ['💼 Кор', '🍔 Хӯрок', '🚌 Нақлиёт', '🏠 Манзил', '🎮 Фароғат', '🏥 Саломатӣ', '📚 Таҳсил', '👕 Либос', '💳 Интиқолҳо', '🎁 Туҳфа', '📦 Дигар'],
  uz: ['💼 Ish', '🍔 Ovqat', '🚌 Transport', '🏠 Uy-joy', '🎮 Ko‘ngilochar', '🏥 Sog‘liq', '📚 Ta’lim', '👕 Kiyim', '💳 O‘tkazmalar', '🎁 Sovg‘a', '📦 Boshqa']
};

const GAME_TEXT = {
  ru: {
    fraudRulesTitle: 'Правила игры',
    fraudRules: ['Нажимай на мошенников 🦹 — получаешь очки', 'Не нажимай на честных граждан 👤 — теряешь жизнь', 'Мошенники мигают красным, граждане — синим', 'С каждым уровнем скорость увеличивается', 'Игра заканчивается при 0 жизней или истечении времени'],
    scamRulesTitle: 'Правила игры',
    scamRules: ['Читайте ситуацию и решайте: это мошенничество или безопасно', 'На каждый ответ — 12 секунд, за серию правильных ответов больше очков', 'После ответа вы увидите объяснение', '8 реальных сценариев: SMS, звонки, мессенджеры, работа'],
    phishRulesTitle: 'Правила игры',
    phishRules: ['Из четырёх ссылок выберите фишинговую', 'Ищите опечатки, лишние дефисы и странные домены', '3 ошибки — игра окончена', 'Настоящие банки не просят данные по ссылке из SMS'],
    pyramidRulesTitle: 'Правила игры',
    pyramidRules: ['Каждый раунд доход растёт, но риск обвала увеличивается', '«Реинвестировать» — рискнуть всем балансом', '«Вывести деньги» — забрать выигрыш и закончить игру', 'Если пирамида рухнет — вы теряете всё'],
    fraudStartTitle: 'Поймай мошенника!',
    fraudStartDesc: 'Нажимай на мошенников 🦹 и игнорируй честных граждан 👤. У тебя 3 жизни!',
    fraudStart: '▶ Начать игру',
    fraudWin: 'Отличная реакция! Вы поймали мошенников.',
    fraudLose: 'Игра окончена. Попробуйте ещё раз и следите за красными сигналами.',
    fraudTimeUp: 'Время вышло!'
  },
  en: {
    fraudRulesTitle: 'Game rules',
    fraudRules: ['Click scammers 🦹 to earn points', 'Do not click honest citizens 👤 or you lose a life', 'Scammers flash red, citizens flash blue', 'Speed increases with each level', 'The game ends at 0 lives or when time runs out'],
    scamRulesTitle: 'Game rules',
    scamRules: ['Read the situation and decide: scam or safe', 'You have 12 seconds per answer; streaks give more points', 'After each answer you get an explanation', '8 real-life scenarios: SMS, calls, messengers, jobs'],
    phishRulesTitle: 'Game rules',
    phishRules: ['Choose the phishing link from four links', 'Look for typos, extra hyphens, and strange domains', '3 mistakes end the game', 'Real banks do not ask for data through SMS links'],
    pyramidRulesTitle: 'Game rules',
    pyramidRules: ['Every round increases profit and collapse risk', '“Reinvest” means risking your full balance', '“Cash out” means taking winnings and ending the game', 'If the pyramid collapses, you lose everything'],
    fraudStartTitle: 'Catch the scammer!',
    fraudStartDesc: 'Click scammers 🦹 and ignore honest citizens 👤. You have 3 lives!',
    fraudStart: '▶ Start game',
    fraudWin: 'Great reaction! You caught the scammers.',
    fraudLose: 'Game over. Try again and watch the red signals.',
    fraudTimeUp: 'Time is up!'
  },
  tg: {
    fraudRulesTitle: 'Қоидаҳои бозӣ',
    fraudRules: ['Ба қаллобон 🦹 пахш кунед — хол мегиред', 'Ба шаҳрвандони ростқавл 👤 пахш накунед — ҷон гум мекунед', 'Қаллобон сурх, шаҳрвандон кабуд медурахшанд', 'Бо ҳар сатҳ суръат зиёд мешавад', 'Бозӣ бо тамом шудани ҷонҳо ё вақт анҷом меёбад'],
    scamRulesTitle: 'Қоидаҳои бозӣ',
    scamRules: ['Ҳолатро хонед ва қарор кунед: қаллобӣ ё бехатар', 'Барои ҳар ҷавоб 12 сония доред; пайдарпайии ҷавобҳои дуруст холро зиёд мекунад', 'Пас аз ҷавоб шарҳро мебинед', '8 ҳолати воқеӣ: СМС, зангҳо, паёмрасонҳо, кор'],
    phishRulesTitle: 'Қоидаҳои бозӣ',
    phishRules: ['Аз чор пайванд пайванди фишингиро интихоб кунед', 'Хатоҳои ҳарфӣ, аломатҳои зиёдатӣ ва доменҳои шубҳанокро ҷустуҷӯ кунед', '3 хато — анҷоми бозӣ', 'Бонкҳои ҳақиқӣ маълумотро тавассути пайванди СМС намепурсанд'],
    pyramidRulesTitle: 'Қоидаҳои бозӣ',
    pyramidRules: ['Ҳар давр даромад зиёд мешавад, вале хатари фурӯпошӣ ҳам меафзояд', '«Аз нав сармоягузорӣ» — хавф кардани тамоми бақия', '«Гирифтани пул» — гирифтани бурд ва анҷоми бозӣ', 'Агар пирамида фурӯ резад, ҳама чизро аз даст медиҳед'],
    fraudStartTitle: 'Қаллобро дастгир кунед!',
    fraudStartDesc: 'Ба қаллобон 🦹 пахш кунед ва шаҳрвандони ростқавлро 👤 нодида гиред. Шумо 3 ҷон доред!',
    fraudStart: '▶ Оғози бозӣ',
    fraudWin: 'Вокуниши олӣ! Шумо қаллобонро ёфтед.',
    fraudLose: 'Бозӣ анҷом ёфт. Бори дигар кӯшиш кунед ва ба нишонаҳои сурх диққат диҳед.',
    fraudTimeUp: 'Вақт тамом шуд!'
  },
  uz: {
    fraudRulesTitle: 'O‘yin qoidalari',
    fraudRules: ['Firibgarlarni 🦹 bosing — ochko olasiz', 'Halol fuqarolarni 👤 bosmang — jon yo‘qotasiz', 'Firibgarlar qizil, fuqarolar ko‘k yonib turadi', 'Har darajada tezlik oshadi', 'O‘yin jonlar yoki vaqt tugaganda yakunlanadi'],
    scamRulesTitle: 'O‘yin qoidalari',
    scamRules: ['Vaziyatni o‘qing va qaror qiling: firibgarlikmi yoki xavfsizmi', 'Har javob uchun 12 soniya; to‘g‘ri javob seriyasi ko‘proq ochko beradi', 'Javobdan keyin izohni ko‘rasiz', '8 real ssenariy: SMS, qo‘ng‘iroqlar, messenjerlar, ish'],
    phishRulesTitle: 'O‘yin qoidalari',
    phishRules: ['To‘rtta havoladan fishing havolasini tanlang', 'Imlo xatolari, ortiqcha defislar va shubhali domenlarni izlang', '3 xato — o‘yin tugaydi', 'Haqiqiy banklar SMS havolasi orqali ma’lumot so‘ramaydi'],
    pyramidRulesTitle: 'O‘yin qoidalari',
    pyramidRules: ['Har raund daromad oshadi, lekin qulash xavfi ham oshadi', '“Qayta investitsiya” — butun balansni xavfga qo‘yish', '“Pulni chiqarish” — yutuqni olib o‘yinni tugatish', 'Piramida qulab tushsa, hammasini yo‘qotasiz'],
    fraudStartTitle: 'Firibgarni ushlang!',
    fraudStartDesc: 'Firibgarlarni 🦹 bosing va halol fuqarolarni 👤 e’tiborsiz qoldiring. Sizda 3 jon bor!',
    fraudStart: '▶ O‘yinni boshlash',
    fraudWin: 'Ajoyib reaksiya! Firibgarlarni ushladingiz.',
    fraudLose: 'O‘yin tugadi. Qayta urinib ko‘ring va qizil belgilarni kuzating.',
    fraudTimeUp: 'Vaqt tugadi!'
  }
};
