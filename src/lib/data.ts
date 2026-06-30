// Контент-модель сервиса «Практические инструктажи по спецтехнике».
// Источник правды: Технотранс-исходники/data.json и Каталог_инструктажей.md.
// Каталог статичный (как в PRD). Динамические данные (заявки) хранятся в PostgreSQL.

export type Variant = {
  audience: string;
  group?: string;
  duration: string;
  price: string;
  travelExcluded?: boolean;
  perPerson?: boolean;
};

export type Program = {
  operator?: string[];
  mechanic?: string[];
  combined?: string[];
};

export type Equipment = {
  id: number;
  title: string;
  format: string; // РФ / г. Курган / Завод, Курган
  instructor: string;
  certificate: "kurgandormash" | null;
  noAccess?: boolean; // не показывать строку про допуск УТМ (№16, №17)
  progWork?: boolean; // программа в работе
  variants: Variant[];
  program: Program | null;
};

const kuznetsovOperator = [
  "Конструктивные особенности",
  "Принципы работы",
  "Ежедневный осмотр",
  "Расположение компонентов",
  "Каталог запасных частей",
  "Система смазки",
  "Правила нахождения на машине при проведении работ",
];

const kuznetsovMechanic = [
  "Конструктивные особенности",
  "Принципы работы",
  "Ежедневный осмотр",
  "Правила проведения ТО",
  "Осмотр при ТО",
  "Правила проведения инспекции и дефектовки",
  "Расположение компонентов",
  "Диагностика и поиск неисправностей",
  "Каталог запасных частей",
  "Электрическая система / схемы",
  "Гидравлическая система / схемы",
  "Система смазки",
  "Правила нахождения на машине при проведении работ",
  "Правила нахождения на объекте, где проводятся работы",
  "ТБ при проведении монтажных, демонтажных и диагностических работ",
];

const ttMechanic = [
  "Конструкция, компоновка, расположение агрегатов и сервисных зон",
  "Органы управления и индикация",
  "Безопасный доступ и эксплуатационные ограничения",
  "Предсменный осмотр и ежедневное ТО",
  "Плановое ТО: виды, периодичность, регламентные операции",
  "Система смазки, фильтры, рабочие жидкости",
  "Гидравлика, трансмиссия, тормоза, электрооборудование",
  "Типовые неисправности и первичная диагностика (дефектовка)",
  "ТБ при осмотре и сервисных работах",
];

export const contact = {
  person: "Юлия Сергеевна Катаева",
  department: "Учебный отдел ООО «НПФ «Технотранс»",
  phone: "+7 912 577 7006",
  phoneTel: "+79125777006",
  email: "julia.kataeva@gmail.com",
  max: "https://max.ru/u/f9LHodD0cOLB4Mw8v5WNO50wueIY2IK3A2Feq0OS1vCulLlh9PsWgO3kR0c",
  telegram: "https://t.me/Julia_S_Kataeva",
};

export const equipment: Equipment[] = [
  { id: 1, title: "Карьерный экскаватор", format: "РФ", instructor: "Кузнецов А. В.", certificate: null,
    variants: [
      { audience: "Оператор", group: "до 5 человек", duration: "3 дня", price: "300 000 ₽", travelExcluded: true },
      { audience: "Механик", group: "до 15 человек", duration: "5 дней", price: "480 000 ₽", travelExcluded: true },
    ], program: { operator: kuznetsovOperator, mechanic: kuznetsovMechanic } },
  { id: 2, title: "Дорожно-строительный экскаватор", format: "РФ", instructor: "Кузнецов А. В.", certificate: null,
    variants: [
      { audience: "Оператор", group: "до 5 человек", duration: "3 дня", price: "150 000 ₽", travelExcluded: true },
      { audience: "Механик", group: "до 15 человек", duration: "5 дней", price: "240 000 ₽", travelExcluded: true },
    ], program: { operator: kuznetsovOperator, mechanic: kuznetsovMechanic } },
  { id: 3, title: "Экскаватор-погрузчик UMG TLB 827", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: { operator: [
      "Назначение и конструкция экскаватора-погрузчика", "Требования безопасности и предсменный осмотр",
      "Запуск, движение, маневрирование", "Работа фронтальным погрузочным оборудованием",
      "Перевод в режим экскаватора, работа стабилизаторами", "Работа экскаваторным оборудованием (обратная лопата)",
      "Завершение работы и безопасная постановка машины"], mechanic: ttMechanic } },
  { id: 4, title: "Карьерный самосвал", format: "РФ", instructor: "Кузнецов А. В.", certificate: null,
    variants: [{ audience: "Оператор", group: "до 5 человек", duration: "3 дня", price: "240 000 ₽", travelExcluded: true }],
    program: { operator: kuznetsovOperator } },
  { id: 5, title: "Сочленённый самосвал", format: "РФ", instructor: "Кузнецов А. В.", certificate: null,
    variants: [{ audience: "Оператор", group: "до 5 человек", duration: "3 дня", price: "150 000 ₽", travelExcluded: true }],
    program: { operator: kuznetsovOperator } },
  { id: 6, title: "Колёсный бульдозер", format: "РФ", instructor: "Кузнецов А. В.", certificate: null,
    variants: [{ audience: "Оператор", group: "до 5 человек", duration: "3 дня", price: "150 000 ₽", travelExcluded: true }],
    program: { operator: kuznetsovOperator } },
  { id: 7, title: "Карьерный фронтальный погрузчик", format: "РФ", instructor: "Кузнецов А. В.", certificate: null,
    variants: [{ audience: "Оператор", group: "до 5 человек", duration: "3 дня", price: "150 000 ₽", travelExcluded: true }],
    program: { operator: kuznetsovOperator } },
  { id: 8, title: "Фронтальный погрузчик Hitachi LX70-7", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: { operator: [
      "Назначение и конструкция колёсного погрузчика", "Требования безопасности и предсменный осмотр",
      "Запуск, движение, маневрирование", "Работа стрелой и ковшом, транспортное положение ковша",
      "Цикл работы с материалом: подъезд, врезание, набор, транспортирование, выгрузка",
      "Завершение работы и безопасная постановка машины"], mechanic: ttMechanic } },
  { id: 9, title: "Вилочный погрузчик GEKA D50", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: { operator: [
      "Назначение и конструкция вилочного погрузчика", "Требования безопасности и предсменный осмотр",
      "Запуск, движение, маневрирование, парковка",
      "Работа грузоподъёмником: подвод вил под поддон, подъём, транспортирование, установка груза",
      "Транспортное положение груза, скоростные ограничения, работа в ограниченном пространстве",
      "Завершение работы и безопасная постановка машины"], mechanic: ttMechanic } },
  { id: 10, title: "Мини-погрузчик Термит ПмК-10-01", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: "kurgandormash",
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: { operator: [
      "Назначение и конструкция мини-погрузчика с бортовым поворотом",
      "Требования безопасности (ремень-блокировка) и предсменный осмотр", "Запуск, движение, маневрирование",
      "Работа стрелой и ковшом, транспортное положение ковша",
      "Цикл работы с сыпучим материалом: подъезд, врезание, набор, транспортирование, выгрузка",
      "Работа со сменным навесным оборудованием", "Завершение работы и безопасная постановка машины"], mechanic: ttMechanic } },
  { id: 11, title: "Снегоболотоход БУРЛАК 6×6 ШНД", format: "Завод Бурлак, г. Курган", instructor: "Завод Бурлак", certificate: null,
    variants: [{ audience: "Оператор-механик", group: "до 6 человек", duration: "4 дня", price: "270 000 ₽" }],
    program: { combined: [
      "Основные сведения по эксплуатации, обслуживанию и ремонту вездеходной техники",
      "Особенности эксплуатации «Бурлак»: ограничения, подготовка новой машины, обкатка, пуск/остановка двигателя, экстремальные условия",
      "Особенности вождения: подъёмы и спуски, склон, снег, слабонесущий грунт, плохая видимость, водные преграды, буксировка",
      "Техническое обслуживание: виды и периодичность, ГСМ, порядок; ТО систем",
      "Ремонт: типовые неисправности двигателя, трансмиссии, электрооборудования; ремонт шин",
      "Консервация и хранение: условия и сроки, кратковременное и длительное хранение"] } },
  { id: 12, title: "Снегоболотоход ФЕНИКС ШС-04-02", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: null, progWork: true },
  { id: 13, title: "Тракторы (МТЗ, Т-150К, ДТ-75Т, TS-240)", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: null, progWork: true },
  { id: 14, title: "Полуприцеп РУТТ с КМУ", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [{ audience: "Оператор-механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true }],
    program: { combined: [
      "Назначение и состав полуприцепа и гидроманипулятора, органы управления, эксплуатационные ограничения, требования безопасности",
      "Осмотр и подготовка к работе; перевод из транспортного положения в рабочее и обратно",
      "Работа опорами (аутригерами), ВОМ",
      "Рабочий цикл манипулятором: захват, подъём, перемещение, укладка; ротатор, телескоп, стрелы",
      "Ежедневное ТО; смазка, фильтры, рабочие жидкости, сезонные особенности",
      "Типовые неисправности и случаи немедленного прекращения работы",
      "Завершение цикла, безопасная постановка; ТБ при обслуживании"] } },
  { id: 15, title: "Форвардер АМКОДОР 2662-01", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null,
    variants: [
      { audience: "Оператор", duration: "от 4 часов", price: "2 000 ₽/час" },
      { audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true },
    ], program: null, progWork: true },
  { id: 16, title: "Харвестерная голова UFM X600", format: "г. Курган", instructor: "Казаков А. И. / Орлов А. Н.", certificate: null, noAccess: true,
    variants: [{ audience: "Механик", duration: "2 дня (16 часов)", price: "20 000 ₽", perPerson: true }],
    program: null, progWork: true },
  { id: 17, title: "Асфальтосмесительная установка XAP123R", format: "РФ", instructor: "—", certificate: null, noAccess: true,
    variants: [
      { audience: "Оператор", duration: "в работе", price: "в работе" },
      { audience: "Механик", duration: "в работе", price: "в работе" },
    ], program: null, progWork: true },
];

export function getEquipment(id: number) {
  return equipment.find((e) => e.id === id);
}
