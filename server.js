const fs = require("fs");

const cities = [
  "Dallas",
  "New York",
  "Orlando",
  "Dnipro",
  "Kharkiv",
  "Kyiv",
  "Lviv",
  "Odesa",
  "Kherson",
  "Kremenchuk",
  "Ivano-Frankivsk",
  "Sofia",
  "Varna",
  "London",
  "Tbilisi",
  "Yerevan",
  "Zug",
  "Riga",
  "Montevideo",
  "Almaty",
  "Astana",
  "Dubai",
  "Krakow",
  "Lodz",
  "Lublin",
  "Wroclaw",
  "Munich",
  "Belgrade",
  "Novi Sad",
  "Remote.UA",
  "Remote.EU",
  "Remote.GE",
];

const projects = [
  "Idle -> Self Education",
  "Idle -> Self Education",
  "Idle -> Self Education",
  "Idle -> Self Education",
  "Idle -> Self Education",

  "Project A",
  "Project AA",
  "Project AAA",

  "Project B",
  "Project BB",
  "Project BBB",

  "Project C",
  "Project CC",
  "Project CCC",

  "Project D",
  "Project DD",
  "Project DDD",

  "Project E",
  "Project EE",
  "Project EEE",

  "Project F",
  "Project FF",
  "Project FFF",

  "Project G",
  "Project GG",
  "Project GGG",

  "Project H",
  "Project HH",
  "Project HHH",

  "Project I",
  "Project II",
  "Project III",

  "Project G",
  "Project GG",
  "Project GGG",

  "Project K",
  "Project KK",
  "Project KKK",

  "Project L",
  "Project LL",
  "Project LLL",

  "Project M",
  "Project MM",
  "Project MMM",

  "Project N",
  "Project NN",
  "Project NNN",

  "Project P",
  "Project PP",
  "Project PPP",

  "Project Q",
  "Project QQ",
  "Project QQQ",

  "Project R",
  "Project RR",
  "Project RRR",

  "Project S",
  "Project SS",
  "Project SSS",

  "Project T",
  "Project TT",
  "Project TTT",

  "Project U",
  "Project UU",
  "Project UUU",

  "Project W",
  "Project WW",
  "Project WWW",

  "Project X",
  "Project XX",
  "Project XXX",

  "Project W",
  "Project WW",
  "Project WWW",

  "Idle -> Self Education",
  "Idle -> Self Education",
  "Idle -> Self Education",
  "Idle -> Self Education",
  "Idle -> Self Education",
];

const categories = [
  "Apple",
  "Banana",
  "Orange",
  "Lemon",
  "Pineapple",
  "Mango",
  "Peach",
  "Cherry",
  "Strawberry",
  "Grape",
];

const names = [
  "Natalia Kovalenko",
  "Tatiana Smirnova",
  "Andrei Karpov",
  "Anastasia Volkova",
  "Sergei Novikov",
  "Anna Gorbacheva",
  "Alexei Morozov",
  "Yulia Popova",
  "Nikita Savin",
  "Elena Ivanova",
  "Maxim Filippov",
  "Victoria Sokolova",
  "Pavel Antonov",
  "Margarita Petrova",
  "Anton Ivanov",
  "Svetlana Romanova",
  "Boris Kuznetsov",
  "Ekaterina Kozlova",
  "Vitaly Belov",
  "Ksenia Kuznetsova",
  "Ivanova Maria",
  "Alexey Smirnov",
  "Anastasiya Konstantinova",
  "Petr Kovalenko",
  "Ekaterina Smirnova",
  "Nikolay Kuznetsov",
  "Daria Petrova",
  "Dmitriy Novikov",
  "Veronika Ivanova",
  "Andrey Petrov",
  "Elena Kuznetsova",
  "Viktoriya Volkova",
  "Konstantin Karpov",
  "Yana Morozova",
  "Maksim Popov",
  "Inna Smirnova",
  "Vasiliy Kuznetsov",
  "Polina Ivanova",
  "Ivan Petrov",
  "Kira Sokolova",
  "Nikita Kovalenko",
  "Kristina Ivanova",
  "Sergey Morozov",
  "Nadezhda Ivanova",
  "Andrei Belov",
  "Alexandr Ivanov",
  "Dmitry Petrov",
  "Sergey Sidorov",
  "Nikolay Kuznetsov",
  "Pavel Popov",
  "Marina Smirnova",
  "Ekaterina Ivanova",
  "Svetlana Petrova",
  "Natalia Kuznetsova",
  "Anna Popova",
  "Roman Novikov",
  "Igor Morozov",
  "Andrey Belov",
  "Yuriy Volkov",
  "Vladimir Vorobev",
  "Irina Kuzmina",
  "Olga Ivanova",
  "Vladislav Gusev",
  "Ivan Semyonov",
  "Artem Vinogradov",
  "Polina Kozlova",
  "Mariya Kuznetsova",
  "Yana Ivanova",
  "Darya Popova",
  "Kseniya Petrova",
  "Olivia Smith",
  "Charlotte Johnson",
  "Sophia Brown",
  "Eleanor Jones",
  "Amelia Davis",
  "Emma Wilson",
  "Ava Taylor",
  "Lily Anderson",
  "Grace Robinson",
  "Igor Ivanov",
  "Olga Petrova",
  "Vladimir Orlov",
  "Marina Sokolova",
  "Dmitry Kuznetsov",
  "Hazel Wright",
  "Lucy White",
  "Stella Green",
  "Emily Adams",
  "Luna Baker",
  "Elena Petrova",
  "Yulia Morozova",
  "Tatiana Sidorova",
  "Maxim Sokolov",
  "Anton Lebedev",
  "Chloe Parker",
  "Isla Carter",
  "Avery Collins",
  "Zoe Mitchell",
  "Leah Murphy",
  "Madison Foster",
  "Abigail Turner",
  "Evelyn Kelly",
  "Nora Hayes",
  "Aria Cooper",
  "Mila Ross",
  "Ella Nelson",
  "Aurora Powell",
  "Victoria Sullivan",
  "Harper Phillips",
  "Scarlett Reid",
  "William Brown",
  "Liam Davis",
  "James Smith",
  "Davit Kvachadze",
  "Giorgi Bregvadze",
  "Tamaz Chikovani",
  "Benjamin Wilson",
  "Noah Martin",
  "Henry Jones",
  "Ethan Clark",
  "Oliver Anderson",
  "Lucas Taylor",
  "Mason Carter",
  "Alexander Wright",
  "Michael Robinson",
  "Daniel Green",
  "Jacob Adams",
  "Matthew Baker",
  "Samuel Parker",
  "David Collins",
  "Nicholas Mitchell",
  "Christopher Kelly",
  "Joseph Hayes",
  "Andrew Cooper",
  "Aidynov Aizere",
  "Akzholov Ardak",
  "Alibekova Gulnur",
  "Amanzholov Marat",
  "Asylbekova Kamshat",
  "Bakytzhanov Zhanbolat",
  "Dauletova Ainur",
  "Erbolatov Marlen",
  "Kamalova Dina",
  "Kasymov Daniyar",
  "Madiyarov Aybek",
  "Nurlybekova Anar",
  "Sagynyshova Aida",
  "Serikbayev Kuanysh",
  "Zhaksylykov Yerkebulan",
  "Natia Javakhishvili",
  "Mariam Kipiani",
  "Nino Gogoladze",
  "Lela Abashidze",
  "Irakli Inasaridze",
  "Maka Gugunava",
  "Tamar Gamkrelidze",
  "Shalva Gogichaishvili",
  "Keti Dolidze",
  "Vakhtang Margvelashvili",
  "Ana Shavgulidze",
  "Zurab Khidasheli",
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomInt2 = (min, max) => {
    return +((Math.random() * (max - min + 1)) + min).toFixed(2);
  };

const data = [];

for (let i = 0; i < 4500; i++) {
  const id = i + 1;
  const icon = "";
  const userName = names[getRandomInt(0, names.length - 1)];
  const location = cities[getRandomInt(0, cities.length - 1)];
  const project = projects[getRandomInt(0, projects.length - 1)];
  const practice = "Other";
  const category = categories[getRandomInt(0, categories.length - 1)];
  const sumOfCriteries = getRandomInt2(1, 9);

  const item = {
    id,
    icon,
    userName,
    location,
    project,
    practice,
    category,
    sumOfCriteries,
  };

  data.push(item);
}

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile("data.json", jsonData, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data written to file successfully.");
  }
});
