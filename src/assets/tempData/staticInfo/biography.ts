import biography1 from '../images/biography/1.jpg';
import biography2 from '../images/biography/2.jpg';
import biography3 from '../images/biography/3.jpg';
import biography4 from '../images/biography/4.jpg';
import { IPage } from '../../../types';

export const biographyDate: IPage = {
  title: 'Біографія',
  content: [
    {
      type: 'text',
      textContent:
        '13 квітня 1887 року — на хуторі Ладанському на Сумщині народився Іван Кавалерідзе, скульптор, кінорежисер, драматург. Народився в селянській сім’ї нащадків грузинського князівського роду, чиї предки після завоювання Росією Кавказу були привезені в Україну. ',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        ' У 1909–1910 Іван провчився у Петербурзькій академії мистецтв у І. Гінцбурга. у 1910-1911 вдосконалював свою майстерність у Парижа, у приватній студії Наума Аронсона. \n У 1915 році Кавалерідзе мобілізували до царської армії. \n 1918–1928-го працював у відділі народної освіти в Ромнах.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: biography1,
      columns: 1,
    },
    {
      type: 'image',
      imageLink: biography2,
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Працюючи там у відділі народної освіти, він викладав малювання у 6 школах, вів міський драмгурток і був головним режисером Роменськогопересувного робітничо-селянського театру з 1925 по 1930. У 1928-1933-му — режисер Одеської кінофабрики.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'У 1934–1941-му — Київської кіностудії “Українфільм”. \n У 1957-1962-му – режисер Кіностудії імені Олександра Довженка. До самої смерті Кавалерідзе працював скульптором і писав п’єси. Помер у Києві 3 грудня 1978 року.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: biography3,
      columns: 1,
    },
    {
      type: 'image',
      imageLink: biography4,
      columns: 1,
    },
  ],
};
