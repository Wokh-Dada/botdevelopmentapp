export const formCommunication = {
  id: '1',
  formInterviewText: [
    {
      nameInterview: 'Как вас зовут',
      businessInterview: 'У вас уже есть бизнес',
      businessSelect: [
        {id: 1, select: 'Да', selected: true},
        {id: 2, select: 'Планирую открыть', selected: false},
        {id: 3, select: 'Нет', selected: false},
      ],
      websiteInterview: 'Ссылка на ваш сайт (если есть)',
      numberInterview: 'Ваш номер',
      btnText: 'Создать бота'
    }
  ]
};

export const header = {
  id: 'header',
  logoUrl: "5.jpg",
  phoneNumber: '+7 995 606 84 62',
  menu: [
    {id: 1, linkName: 'Возможности', menuLine: 'menuLine.svg'},
    {id: 2, linkName: 'Преимущества', menuLine: 'menuLine.svg'},
    {id: 3, linkName: 'Для кого', menuLine: 'menuLine.svg'},
  ]
};

export const ProductPresentation = {
  imgUrl: "phone.svg",
  icon: [
    {id: 'whatsApp', img: 'waaa.svg'},
    {id: 'telegram', img: 'telegram.png'},
    {id: 'viber', img: 'viber.png'},
    {id: 'mes', img: 'fb.svg'},
    {id: 'vk', img: 'vk.svg'},
  ],
  title: [
    {
      id: 1,
      text:
        "Сделаем\n" +
        "\nчат-бота для\n" +
        "\nтвоего бизнеса\n",
      imgUrl: "Vector.svg",
      behindText: 'за', price: '9 900 ₽',
      btnText: 'Создать бота'
    },
  ]
};

export const ProductInformation = {
  title: "Что умеют чат-боты",
  infoBlock: [
    {
      id: 1,
      outerImg: 'productInfoImg_1.svg',
      innerImg: 'rocket_1.svg',
      text: `
            Чат-бот может приводить вам
                <strong>
                    <span style="color: rgb(255, 208, 0);">
                        новых клиентов
                    </span>
                </strong>`,
      btnText: 'То, что мне нужно!'
    },
    {
      id: 2,
      outerImg: 'productInfoImg_2.svg',
      innerImg: 'profit_1.svg',
      text: `
            Чат-бот может
              <strong>
                <span data-redactor-tag="span" style="color: rgb(255, 208, 0);">
                    увеличить конверсию
                </span>
              </strong> вашего сайта или повторные продажи имеющимся клиентам`,
      btnText: 'Хочу такого!'
    },
    {
      id: 3,
      outerImg: 'productInfoImg_3.svg',
      innerImg: 'training_1.svg',
      text: `
            Чат-бот может
            <span style="color: rgb(255, 208, 0);">
              <strong>обучать </strong>
            </span>
            ваших клиентов и
             <strong>
               <span style="color: rgb(255, 208, 0);">
                 сотрудников
               </span>
             </strong>`,
      btnText: 'Точно для нас!'
    },
    {
      id: 4,
      outerImg: 'productInfoImg_4.svg',
      innerImg: 'chatbot_1.svg',
      text: `
            Чат-бот может выполнять роли секретаря, администратора,
            продавца. специалиста техподдержки,
            <strong>
              <span style="color: rgb(255, 208, 0);">
                сопровождая
              </span>
            </strong>
            ваших
            <span style="color: rgb(255, 208, 0);">
              <strong>
                клиентов
              </strong>
            </span>
            по всему циклу сделки.`,
      btnText: 'Подходит!'
    },
    {
      id: 5,
      outerImg: 'productInfoImg_5.svg',
      innerImg: 'plane_1.svg',
      text: `
            Чат-бот может рассылать вашим клиентам полезную
            информацию, подготовить их к покупке,
            <strong>
              <span style="color: rgb(255, 208, 0);">
                осуществить допродажу
              </span>
            </strong> дополнительных
            товаров или услуг.`,
      btnText: 'Идеально, беру!'
    },
  ]
};

export const TransitionCreateBot = {
  title: [
    {
      id: 1,
      imgUrl: "undraw_chat_bot_kli5.svg",
      title:
        `Создай <br/> своего бота`
    },
  ],
  follow: [
    {
      id: 2,
      text:
        `Выберите необходимый
         функционал бота в этой
         форме чтобы
         <strong>
           <span style="color: rgb(255, 208, 0);">
             составить шаблон бота
           </span>
         </strong>`,
      btnText: 'Создать бота'
    },
  ]
};


export const PerformanceAndBenefits = {
  PerformanceandBenefitsbckgrnd: 'bg.svg',
  PerformanceInformation: [
    {
      imgUrl: 'perfomansInfoImg.svg',
      title: 'Где использование ботов будет наиболее эффективным.',
      ContentRightEndText: 'ВАШ БИЗНЕС',
      ContentLeftEndText: 'ВАШ БИЗНЕС',
      btnText: 'Разработать →',
      right: [
        {
          id: 1,
          text: 'Агентства недвижимости и застройщики',
        },
        {
          id: 2,
          text: 'Дизайн и ремонт квартир',
        },
        {
          id: 3,
          text: 'Юридические услуги',
        },
        {
          id: 4,
          text: 'Автошколы',
        },
        {
          id: 5,
          text: 'Автосервисы',
        },
        {
          id: 6,
          text: 'Страховые компании и брокеры',
        },
        {
          id: 7,
          text: 'Ремонт бытовой техники',
        },
        {
          id: 8,
          text: 'Маникюр, ресницы, перманентный макияж, прически',
        },
        {
          id: 9,
          text: 'Медицинские центры',
        }, {
          id: 10,
          text: 'Курсы иностранных языков',
        },
        {
          id: 11,
          text: 'Изготовление мебели',
        },
        {
          id: 12,
          text: 'Транспортные компании (такси, перевозки)',
        },
        {
          id: 13,
          text: 'Купля-продажа недвижимости',
        }
      ],
      left: [
        {
          id: 1,
          text: 'Еда (Ресторан, доставка)',
        },
        {
          id: 2,
          text: 'Одежда, обувь и аксессуары',
        },
        {
          id: 3,
          text: 'Автосалоны и запчасти',
        },
        {
          id: 4,
          text: 'Товары для ремонта',
        },
        {
          id: 5,
          text: 'Товары для дома и дачи',
        },
        {
          id: 6,
          text: 'Товары для спорта и отдыха',
        },
        {
          id: 7,
          text: 'Товары для красоты и здоровья',
        },
        {
          id: 8,
          text: 'Салоны цветов и подарков',
        },
        {
          id: 9,
          text: 'Компьютеры, электроника и бытовая техника',
        },
        {
          id: 10,
          text: 'Любые интернет-магазины',
        },
        {
          id: 11,
          text: 'Игрушки, игры и развлечения',
        },
        {
          id: 12,
          text: 'Узкоспециализированные товары',
        },
        {
          id: 13,
          text: 'Книги и обучающие материалы',
        },
      ]
    }
  ],

  BenefitsBots: [
    {
      title: "Преимущества чат-ботов",
      infoBlock: [
        {
          id: 1,
          outerImg: 'Ellipse_12.svg',
          innerImg: '1.svg',
          title: 'Низкая цена',
          text: 'Бот поможет оптимизировать затраты на сотрудников'
        },
        {
          id: 2,
          outerImg: 'Ellipse_12.svg',
          innerImg: '2.svg',
          title: 'Рост конверсии',
          text: 'Бот увеличивает приток клиентов с сайта, и привлекает новых клиентов'
        },
        {
          id: 3,
          outerImg: 'Ellipse_12.svg',
          innerImg: '3.svg',
          title: 'Работает 24/7',
          text: 'Бот не отдыхает, не обедает, не спит'
        },
        {
          id: 4,
          outerImg: 'Ellipse_12.svg',
          innerImg: '10.svg',
          title: 'Высокая скорость работы',
          text: 'Бот отвечает моментально'
        },
        {
          id: 5,
          outerImg: 'Ellipse_12.svg',
          innerImg: '5.svg',
          title: 'Простое обслуживание',
          text: 'Бота легко дорабатывать и обновлять'
        },
        {
          id: 6,
          outerImg: 'Ellipse_12.svg',
          innerImg: '6.svg',
          title: 'Автоматизация рутины',
          text: 'Бот экономит ваше время автоматически выполняя любые типовые задачи'
        },
      ]
    }
  ]
};

export const Consultation = {
  imgUrl: 'undraw_moving_forwar.svg',
  title: 'Бесплатная консультация',
  text: `
        Расскажем какой
            <strong>
                <span style="color: rgb(255, 208, 0);">
                    чат-бот
                </span>
            </strong> подойдет
            <strong>
                <span style="color: rgb(255, 208, 0);">
                    вашему бизнесу
                 </span>
            </strong>`,
  btnText: 'Хочу консультацию'
};

export const Tariffs = {
  dinamicImg: 'tariffsDinamicImg.svg',
  dinamicText: '$',
  title: "Тарифы",
  bckgrndImg: 'undraw_work_chat_erd.svg',
  infoBlock: [
    {
      id: 1,
      outerImg: 'Ellipse_11.svg',
      innerImg: 'boy_1.svg',
      class: 'small',
      title: 'Чат-бот визитка',
      text: 'Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых услугах.',
      priceText: 'узнайте стоимость',
      btnText: 'Заказать бота'
    },
    {
      id: 2,
      outerImg: 'Ellipse_11.svg',
      innerImg: 'icons8-chuck-norris-.png',
      class: 'big',
      title: 'Чат-бот лидогенератор',
      text: 'Помогает обрабатывать запросы клиентов в мессенджерах.\n' +
        'В режиме "вопрос-ответ" узнает потребность клиента, собирает контактные данные и отправляет заявку на вашу почту или в CRM.',
      priceText: 'узнайте стоимость',
      btnText: 'Заказать бота'
    },
    {
      id: 3,
      outerImg: 'Ellipse_11.svg',
      innerImg: 'darth.svg',
      class: 'small',
      title: 'Чат-бот магазин',
      text: 'Чат-бот знакомит покупателя с ассортиментом товаров\n.' +
        'Главное меню с кнопками помогает покупателю сформировать заказ и оплатить его банковской картой.',
      priceText: 'узнайте стоимость',
      btnText: 'Заказать бота'
    },
  ]
};
