import { IPage } from '../../../types';
import slider1 from '../images/history/slider/1.jpg';
import slider2 from '../images/history/slider/2.jpg';
import slider3 from '../images/history/slider/3.jpg';
import slider4 from '../images/history/slider/4.jpg';
import slider5 from '../images/history/slider/5.jpg';
import slider6 from '../images/history/slider/6.jpg';
import slider7 from '../images/history/slider/7.jpg';
import slider8 from '../images/history/slider/8.jpg';
import slider9 from '../images/history/slider/9.jpg';
import history1 from '../images/history/1.jpg';
import history2 from '../images/history/2.jpg';
import history3 from '../images/history/3.jpg';
import history4 from '../images/history/4.jpg';

export const museumData: IPage = {
  title: 'Музей-майстерня І.Кавалерідзе — історія довжиною в життя',
  content: [
    {
      type: 'slider',
      images: [
        { imageLink: slider1, imageLabel: 'Музей-майстерня відкритий 15 листопада 1993.' },
        {
          imageLink: slider2,
          imageLabel:
            'Музей відкрито за розпорядженням Представника Президента України в м. Києві Леоніда Косаківського та за ініціативи видатних діячів культури, політиків.',
        },
        {
          imageLink: slider3,
          imageLabel:
            'Засновниками музею є Нонна Капельгородська — племінниця Івана Кавалерідзе, кінознавець, науковий працівник та Ростислав Синько —український кінорежисер.',
        },
        {
          imageLink: slider4,
          imageLabel:
            'Він розмістився у будинку, де видатний український діяч Іван Петрович Кавалерідзе в 1911 році працював над проектом пам’ятника княгині Ользі.',
        },
        {
          imageLink: slider5,
          imageLabel: 'У музеї зберігається понад 5000 експонатів, присвячених життю і творчості майстра.',
        },
        {
          imageLink: slider6,
          imageLabel:
            'У музеї демонструються проекти пам‘ятників, станкові скульптури, які зображують Тараса Шевченка, Григорія Сковороду, Лесю Українку, Миколу Амосова та інших видатних людей.',
        },
        { imageLink: slider7, imageLabel: 'Для огляду постійно відкрита меморіальна кімната — кабінет Івана Петровича.' },
        { imageLink: slider8, imageLabel: 'До уваги відвідувачів — оглядова екскурсія, відеозаписи кінофільмів І. Кавалерідзе.' },
        {
          imageLink: slider9,
          imageLabel: 'При музеї працює художня галерея, де експонуються твори сучасного образотворчого мистецтва України. ',
        },
      ],
      columns: 2,
    },
    {
      type: 'text',
      textContent:
        'Іван Кавалерідзе — видатна особистість, талановитий скульптор, великий кінорежисер і драматург. Він, безумовно, геній минулого століття, “український Мікеланджело”, як його називали. ',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Для тих, хто ще не знайомий з його творами мистецтва, створений Музей-майстерня Івана Кавалерідзе в місті Києві. Крім того, в музей-майстерні працює галерея “У домі Івана Кавалерідзе”.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: history1,
      columns: 1,
    },
    {
      type: 'image',
      imageLink: history2,
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Він був філософом своєї творчості. Неймовірна різноманітність талантів Кавалерідзе — скульптора, кінорежисера, драматурга — свідчить про його талант та неймовірний рівень осмислення реальності.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Кавалерідзе створював “пластичні” фільми, образи яких можна описати як кутасті, кубічно-чіткі, або рвані та бурхливі. Його скульптури — глибокі та майстерні, з відчуттям авторської душі та “думки серцем”.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: history3,
      columns: 1,
    },
    {
      type: 'image',
      imageLink: history4,
      columns: 1,
    },
  ],
};
