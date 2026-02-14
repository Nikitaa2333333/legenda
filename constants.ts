import { ChartBar, SearchCheck, Handshake, Key } from 'lucide-react';

export const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Аналитика и стратегия',
    description: 'Изучаем ваш запрос и оцениваем рынок. Формируем индивидуальную стратегию продажи или покупки.',
    icon: ChartBar,
  },
  {
    id: '02',
    title: 'Отбор и аудит',
    description: 'Выбираем лучшие лоты, юридический отдел «разбирает» каждый объект до мельчайших деталей.',
    icon: SearchCheck,
  },
  {
    id: '03',
    title: 'Переговоры и сделка',
    description: 'Добиваемся лучших условий, защищаем ваши интересы в документах и на всех этапах переговоров.',
    icon: Handshake,
  },
  {
    id: '04',
    title: 'Результат и сопровождение',
    description: 'Вы получаете ключи и нашу поддержку. Мы помогаем с управлением и дальнейшей перепродажей.',
    icon: Key,
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Виктор Гладких',
    image: '/images/victor.png',
  },
  {
    id: 2,
    name: 'Артур Калуцки',
    image: '/images/arthur.png',
  },
  {
    id: 3,
    name: 'Михаил Грант',
    image: '/images/michael.png',
  },
  {
    id: 4,
    name: 'Рамина Шамшерова',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Полина Соленова',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Анастасия Жукова',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Александр Зверев',
    image: '/images/alexander.jpg',
  },
];

export const PROPERTIES = [
  {
    id: 1,
    title: 'Таунхаус в ЖК «Варежки-3»',
    price: '17 100 000 ₽',
    specs: '130.3 м² • 4 комнаты',
    image: 'https://images.cdn-cian.ru/images/taunhaus-varezhki3-zhemchuzhnaya-ulica-2785055622-1.jpg',
    tag: 'Продажа',
  },
  {
    id: 2,
    title: 'Квартира в Новом Павлино',
    price: '6 199 990 ₽',
    specs: '30.9 м² • 1 комната • 8 эт.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
    tag: 'Продажа',
  },
  {
    id: 3,
    title: 'Видовые апартаменты в Электростали',
    price: '3 990 000 ₽',
    specs: '94 м² • Своб. планировка • 6 эт.',
    image: 'https://images.cdn-cian.ru/images/kvartira-elektrostal-prospekt-lenina-2590163129-1.jpg',
    tag: 'Продажа',
  },
  {
    id: 4,
    title: 'Светлая квартира в Ногинске',
    price: '3 990 000 ₽',
    specs: '31 м² • 1 комната • 3/5 эт.',
    image: 'https://images.cdn-cian.ru/images/kvartira-noginsk-elektricheskaya-ulica-2570911209-1.jpg',
    tag: 'Продажа',
  },
  {
    id: 5,
    title: 'Торговый центр в Балашихе',
    price: '49 900 000 ₽',
    specs: '239 м² • 2 этажа • Готовый бизнес',
    image: 'https://images.cdn-cian.ru/images/zdanie-balashiha-ulica-tvardovskogo-2796779493-1.jpg',
    tag: 'Инвестиции',
  },
  {
    id: 6,
    title: 'Помещение в ЖК (м. Молодёжная)',
    price: '300 000 ₽ / мес',
    specs: '100 м² • 1 эт. • Open space',
    image: 'https://images.cdn-cian.ru/images/nezhiloe-pomeshcenie-moskva-ulica-akademika-pavlova-2690995460-1.jpg',
    tag: 'Аренда',
  },
];