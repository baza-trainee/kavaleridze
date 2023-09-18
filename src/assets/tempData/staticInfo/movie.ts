import movie1 from '../images/movie/1.jpg';
import movie2 from '../images/movie/2.jpg';
import { IPage } from '../../../types';

export const movieData: IPage = {
  title: 'Кіно',
  content: [
    {
      type: 'text',
      textContent:
        'Як кінорежисер, Кавалерідзе створив лише 9 повнометражних фільмів. В кіно Кавалерідзе прийшов після знайомства з Олександром Довженком і заступником голови ВУФКУ Зіновієм Сидерським. Його кінематографічним дебютом став фільм “Злива” 1929 року, який було втрачено при загадкових обставинах. Наступний фільм “Перекоп” 1930 р., близький до епічного кіно, третій — побудований на монтажних прийомах “Штурмові ночі”, 1931 р. та один з перших звукових фільмів “Коліївщина” 1933 р. Ці роботи не знаходять  підтримки у радянських кінокритиків.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Поворотним для творчої діяльності Івана Кавалерідзе та для радянського кіно взагалі, стала кінострічка “Прометей” 1936 р. До дискусії навколо цього фільму долучається велика кількість критиків, митців і навіть голова радянської кінематографії, партійний діяч в тому числі, Борис Шумяцький. Фільм отримав від нього розгромну критику. Це ознаменувало прихід соцреалістичного методу в кіно того часу і відкидання всього експериментального та новаторського.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: movie1,
      columns: 2,
    },
    {
      type: 'text',
      textContent:
        'Б. Шумяцький, зокрема, фактично “поховав” фільм “Прометей” у статті “Просте й зрозуміле кіномистецтво”. Після такого резонансу в культурному середовищі радянської України 30-х років, Кавалерідзе переводять знімати безконфліктні музичні кіно-опери. Наприклад, “Наталка Полтавка” 1936 року, “Запорожець за Дунаєм” 1937 р. Під час зйомок чергового фільму “Олекса Довбуш” 1941 року, Іван Кавалерізде опиняється під німецькою окупацією. Він не втрачає потягу до мистецької праці, тому намагається  домовитися про співпрацю з німецькою владою. ',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Це була його помилка, оскільки тавро колабораціоніста в Радянському Союзі закріпилось за ним дуже міцно. Тому працювати в кіно йому більше не давали. Лише в роки “відлиги” Кавалерідзе зняв два фільми “Григорій Сковорода” 1959 року і “Повія” 1961 року. Ці фільми зняті в старомодній манері, притаманній його фільмам 30-х років. Тому не мали вибухового успіху. Періодично в 60-х митець повертався і до скульптурної діяльності.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: movie2,
      columns: 2,
    },
  ],
};
