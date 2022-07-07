/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

            // Пагинация
            /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },

            // Брейкпоинты
            /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
            // События
            on: {},
        });
    }

    let tailSlider = new Swiper(".tail__slider", {
        // Эффекты переключения слайдов.
        // Листание
        //effect: 'slide',

        // Эффекты переключения слайдов.
        // Cмена прозрачности
        effect: "fade",
        // Дополнение к fade
        fadeEffect: {
            // Параллельная
            // смена прозрачности
            crossFade: true,
        },

        /*
		// Эффекты переключения слайдов.
		// Переворот
		effect: 'flip',
		// Дополнение к flip
		flipEffect: {
			// Тень
			slideShadows: true,
			// Показ только активного слайда
			limitRotation: true
		},
		*/
        /*
		// Эффекты переключения слайдов.
		// Куб
		effect: 'cube',
		// Дополнение к cube
		cubeEffect: {
			// Настройки тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		*/
        /*
		// Эффекты переключения слайдов.
		// Эффект потока
		effect: 'coverflow',
		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slideShadows: true,
		},
		*/

        // Arrows
        navigation: {
            nextEl: ".tail__arrow_next",
            prevEl: ".tail__arrow_prev",
        },

        observer: true,
        observeParents: true,
        // Количество слайдов для показа
        slidesPerView: 1,
        // Отступ между слайдами
        spaceBetween: 0,
        // Автовысота
        autoHeight: false,
        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,
        adaptiveHeight: true,

        // Скролл
        /*
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true
		},
		*/

        // Включение/отключение
        // перетаскивания на ПК
        simulateTouch: true,
        // Чувствительность свайпа
        touchRatio: 1,

        // Угол срабатывания свайпа/перетаскивания
        touchAngle: 45,
        // Курсор перетаскивания
        grabCursor: true,
        // Переключение при клике на слайд
        slideToClickedSlide: false,

        // Навигация по хешу
        hashNavigation: {
            // Отслеживать состояние
            watchState: true,
        },

        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },
        // Количество пролистываемых слайдов
        slidesPerGroup: 1,

        // Активный слайд по центру
        centeredSlides: false,

        // Стартовый слайд.
        initialSlide: 0,

        // Мультирядность
        slidesPerColumn: 1,

        // Бесконечный слайдер
        loop: true,

        // Кол-во дублирующих слайдов
        loopedSlides: 0,

        // Свободный режим
        freeMode: false,

        // Автопрокрутка
        /*
		autoplay: {
			// Пауза между прокруткой
			delay: 1000,
			// Закончить на последнем слайде
			stopOnLastSlide: true,
			// Отключить после ручного переключения
			disableOnInteraction: false
		},
		*/

        // Скорость
        speed: 800,

        // Вертикальный слайдер
        direction: "horizontal", //'vertical'

        // Отключить предзагрузка картинок
        preloadImages: false,
        // Lazy Loading
        // (подгрузка картинок)

        lazy: {
            // Подгружать на старте
            // переключения слайда
            loadOnTransitionStart: false,

            // Подгрузить предыдущую
            // и следующую картинки
            loadPrevNext: false,
        },

        // Слежка за видимыми слайдами
        watchSlidesProgress: false,

        // Добавление класса видимым слайдам
        watchSlidesVisibility: false,
        /*
	
		// Зум картинки
		zoom: {
			// Макимальное увеличение
			maxRatio: 5,
			// Минимальное увеличение
			minRatio: 1,
		},
		*/

        // Миниатюры (превью)
        /*
		thumbs: {
			// Свайпер с мениатюрами
			// и его настройки
			swiper: {
				el: '.image-mini-slider',
				slidesPerView: 5,
			}
		},
		*/

        /*
		// Передача управления
		controller: {
			control: myTextSlider
		},
		*/

        /*
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,
			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,
		*/

        /*
			// Управление колесом мыши
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 0,
				// Класс объекта на котором
				// будет срабатывать прокрутка мышью.
				//eventsTarget: ".image-slider"
			},
		*/
        on: {
            lazyImageReady: function () {
                ibg();
            },
        },
    });

    let tripSlider = new Swiper(".slider-trip__body", {
        // Эффекты переключения слайдов.
        // Листание
        //effect: 'slide',

        // Эффекты переключения слайдов.
        // Cмена прозрачности
        effect: "fade",
        // Дополнение к fade
        fadeEffect: {
            // Параллельная
            // смена прозрачности
            crossFade: true,
        },

        /*
		// Эффекты переключения слайдов.
		// Переворот
		effect: 'flip',
		// Дополнение к flip
		flipEffect: {
			// Тень
			slideShadows: true,
			// Показ только активного слайда
			limitRotation: true
		},
		*/
        /*
		// Эффекты переключения слайдов.
		// Куб
		effect: 'cube',
		// Дополнение к cube
		cubeEffect: {
			// Настройки тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		*/
        /*
		// Эффекты переключения слайдов.
		// Эффект потока
		effect: 'coverflow',
		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slideShadows: true,
		},
		*/

        // Arrows
        navigation: {
            nextEl: ".trip__arrow_next",
            prevEl: ".trip__arrow_prev",
        },

        observer: true,
        observeParents: true,
        // Количество слайдов для показа
        slidesPerView: 1,
        // Отступ между слайдами
        spaceBetween: 0,
        // Автовысота
        autoHeight: false,
        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,
        adaptiveHeight: true,

        // Скролл
        /*
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true
		},
		*/

        // Включение/отключение
        // перетаскивания на ПК
        simulateTouch: true,
        // Чувствительность свайпа
        touchRatio: 1,

        // Угол срабатывания свайпа/перетаскивания
        touchAngle: 45,
        // Курсор перетаскивания
        grabCursor: true,
        // Переключение при клике на слайд
        slideToClickedSlide: false,

        // Навигация по хешу
        hashNavigation: {
            // Отслеживать состояние
            watchState: true,
        },

        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },
        // Количество пролистываемых слайдов
        slidesPerGroup: 1,

        // Активный слайд по центру
        centeredSlides: false,

        // Стартовый слайд.
        initialSlide: 0,

        // Мультирядность
        slidesPerColumn: 1,

        // Бесконечный слайдер
        loop: true,

        // Кол-во дублирующих слайдов
        loopedSlides: 0,

        // Свободный режим
        freeMode: false,

        // Автопрокрутка
        /*
		autoplay: {
			// Пауза между прокруткой
			delay: 1000,
			// Закончить на последнем слайде
			stopOnLastSlide: true,
			// Отключить после ручного переключения
			disableOnInteraction: false
		},
		*/

        // Скорость
        speed: 800,

        // Вертикальный слайдер
        direction: "horizontal", //'vertical'

        // Отключить предзагрузка картинок
        preloadImages: false,
        // Lazy Loading
        // (подгрузка картинок)

        lazy: {
            // Подгружать на старте
            // переключения слайда
            loadOnTransitionStart: false,

            // Подгрузить предыдущую
            // и следующую картинки
            loadPrevNext: false,
        },

        // Слежка за видимыми слайдами
        watchSlidesProgress: false,

        // Добавление класса видимым слайдам
        watchSlidesVisibility: false,
        /*
	
		// Зум картинки
		zoom: {
			// Макимальное увеличение
			maxRatio: 5,
			// Минимальное увеличение
			minRatio: 1,
		},
		*/

        // Миниатюры (превью)
        /*
		thumbs: {
			// Свайпер с мениатюрами
			// и его настройки
			swiper: {
				el: '.image-mini-slider',
				slidesPerView: 5,
			}
		},
		*/

        /*
		// Передача управления
		controller: {
			control: myTextSlider
		},
		*/

        /*
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,
			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,
		*/

        /*
			// Управление колесом мыши
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 0,
				// Класс объекта на котором
				// будет срабатывать прокрутка мышью.
				//eventsTarget: ".image-slider"
			},
		*/
        on: {
            lazyImageReady: function () {
                ibg();
            },
        },
    });
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});
