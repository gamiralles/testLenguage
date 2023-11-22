import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            "glaciar_perito_moreno": {
              "title": "Texto prueba",
        
              "info": "Perito Moreno Glacier is one of the main tourist attractions in Argentina's Patagonia region. It is located in Los Glaciares National Park, in the province of Santa Cruz. It is one of the largest glaciers in the world, with an area of 250 square kilometers.",
        
              "piGL": "Important points:",
        
              "infoPiGla":"It is located just 80 kilometers from the city of El Calafate, making it a very popular tourist destination.",
        
              "infoPiGlb":"It advances at a speed of 2 meters per day, which generates a unique phenomenon in the world: the detachment of huge blocks of ice, which fall into Lake Argentino with a deafening roar.",
        
              "infoPiGlc":"The best time to visit it is during the summer months, when temperatures are higher and the weather is more stable.",
        
              "qhGL":"What to do?",
        
              "infoQhGla":"Walk along the walkways. Enter the forest, allowing you to experience the magic of the glacier from a unique perspective with excellent panoramic views.",
        
              "infoQhGlb":"Minitrekking on the glacier. Walk on the ice, experiencing the power and strength of nature.",
        
              "infoQhGlc":"Navigation of all the glaciers. Enjoy a boat ride on Lake Argentino, observing the glaciers Perito Moreno, Upsala, Spegazzini and others up close, enjoying the panoramic views of Patagonia.",
        
              "infoQhGld":"Blue Safari, navigate in search of native fauna, observing penguins, sea lions, birds and other animals. Enjoy an unforgettable natural spectacle.",
        
              "infoQhGle":"Kayaking in front of the glacier. Paddle among the icebergs that break off from the glacier, feeling the excitement of being surrounded by ice, a unique experience in Patagonia.",
        
              "nsGl":"Our services:",
        
              "infoNsGla":"Transfer to the national park.",
        
              "infoNsGlb":"Transfer to Punta Bandera port.",
        
              "infoNsGlc":"Transfer to Bajo las Sombras port."
            },
        
            "chalten": {
              "title":"El Chalten",
        
              "info":"El Chalten is a town located north of Los Glaciares National Park, in the province of Santa Cruz. It is a popular destination for hikers, mountaineers, and nature lovers.",
        
              "piCh":"Important points:",
        
              "infoPiCha":"El Chalten is the base for exploring Cerro Fitz Roy, one of the most emblematic mountains in Patagonia.",
        
              "infoPiChb":"The town also offers a variety of other activities, such as hiking, fishing, kayaking, and rafting.",
        
              "infoPiChc":"The best time to visit El Chalten is during the summer months, when temperatures are higher and the weather is more stable.",
        
              "qhCh":"What to do?",
        
              "infoQhCha":"At 12.5 kilometers from El Chalten, there is Laguna de los Tres, one of the most popular hikes in Patagonia. With an average difficulty, the trail offers privileged views of the imposing Cerro Fitz Roy, one of the most emblematic summits in the region.",
        
              "infoQhChb":"At 9.5 kilometers from El Chalten, there is Laguna Torre, another of the most popular hikes in the region. With an average difficulty, the trail offers views of the base of Cerro Torre, one of the most challenging mountains in the world.",
        
              "infoQhChc":"At 4 kilometers from El Chalten, there is Laguna Capri, a quiet place ideal for relaxing and enjoying nature. With a low difficulty, the trail offers the view of a blue lagoon surrounded by native forest.",
        
              "infoQhChd":"At 3.5 kilometers from El Chalten, there is Chorrillo del Salto, a beautiful melting waterfall. With a low difficulty, the trail offers views of the waterfall and the native forest.",
        
              "infoQhChe":"At 37 kilometers from El Chalten, there is Lago del Desierto, an imposing mirror of crystal-clear water surrounded by a natural landscape of hills, mountains, and forest.",
        
              "nsCh":"Our services:",
        
              "infoNsCha":"Full Day Chalten, round trip day leaving from El Calafate",
        
              "infoNsChb":"Airport transfer FTE - El Chalten",
        
              "infoNsChc":"Transfer EL Calafate - El Chalten"
            },
        
            "austral": {
              "titleAu":"Carretera Austral",
        
              "infoAu":"The Carretera Austral is a 1,240-kilometer route that runs through Chilean Patagonia. It is one of the most scenic routes in the world, as it passes through forests, mountains, glaciers, and lakes.",
        
              "piAu":"Important points:",
        
              "infoPiAua":"It starts its journey in the city of El Calafate and ends in the city of Bariloche.",
        
              "infoPiAub":"It crosses the iconic Ruta Nacional 40 of Argentina and the Ruta Austral 7 of Chilean Patagonia.",
        
              "infoPiAuc":"The best time to do it is during the summer months, when temperatures are higher and the weather is more stable.",
        
              "qhAu":"What to do?",
        
              "infoQhAua":"Sendero de Colores in the PN Patagonia, enjoy a walk along a colorful trail experiencing the natural beauty of Patagonia. A walk ideal for all ages.",
        
              "infoQhAub":"Capillas de Mármol, visit one of the most iconic natural wonders of Patagonia, know its marble rock formations sculpted by water and wind for millions of years. A perfect navigation for nature and photography lovers.",
        
              "infoQhAuc":"Cabalgata por el Cerro Castillo, explore the trails of the PN, experience Patagonia in a unique way, with panoramic views of the snow-capped peaks and native forests.",
        
              "infoQhAud":"PN Queulat and Natural Hot Springs, visit the PN and discover its glaciers, forests, and waterfalls. Relax in the natural hot springs of Puyuhuapi, perfect for resting and enjoying Nature.",
        
              "infoQhAue":"Rafting on the Futaleufu river, live the excitement in one of the fastest rivers in South America, challenge the white waters and experience the adrenaline of nature, an ideal activity for adventure lovers.",
        
              "nsAu":"Our services:",
        
              "infoNsAua":"6-day and 5-night tour.",
        
              "infoNsAub":"Transfers and logistics, throughout the tour.",
        
              "infoNsAuc":"Accommodation and excursion reservations."
            }
        }
    },
    es: {
        translation: {
            "moreno": {
                "titleGL": "Texto en español",
          
                "infoGLa": "El Glaciar Perito Moreno es uno de los principales atractivos turísticos de la Patagonia Argentina. Se encuentra en el Parque Nacional Los Glaciares, en la provincia de Santa Cruz. Es uno de los glaciares más grandes del mundo, con una superficie de 250 kilómetros cuadrados.",
          
                "piGL": "Puntos Importantes",
          
                "infoPiGla": "Se encuentra a solo 80 kilómetros de la ciudad de El Calafate, lo que lo hace un destino turístico muy popular.",
          
                "infoPiGlb": "Avanza a una velocidad de 2 metros por día, lo que genera un fenómeno único en el mundo: el desprendimiento de enormes bloques de hielo, que caen al lago Argentino con un estruendo atronador.",
          
                "infoPiGlc": "El mejor momento para visitarlo es durante los meses de verano, cuando las temperaturas son más altas y el clima es mas estable.",
          
                "qhGL": "Que hacer?",
          
                "infoQhGla": "Recorrido por las Pasarelas. Adentrate en el bosque permitiendo vivir la magia del Glaciar desde una perspectiva única con unas excelentes vistas Panorámicas.",
          
                "infoQhGlb": "Minitrekking por el Glaciar. Camina sobre el hielo experimentando la fuerza y el poder de la Naturaleza.",
          
                "infoQhGlc": "Navegación por Todos los Glaciares. Disfruta de un paseo en barco por el Lago Argentino, observa de cerca los glaciares Perito Moreno, Upsala, Spegazzini y otros, disfrutando de las vistas panorámicas de la Patagonia.",
          
                "infoQhGld": "Safari Azul, navega en busca de fauna autóctona observando pingüinos lobos marinos aves y otros animales. Disfruta de un espectáculo natural Inolvidable.",
          
                "infoQhGle": "Kayak frente al Glaciar. Remá entre los icebergs que se desprenden del Glaciar, sintiendo la emoción de estar rodeado de hielo, una experiencia única en la Patagonia.",
          
                "nsGl": "Nuestro Servicio",
          
                "infoNsGla": "Traslado al Parque Nacional",
          
                "infoNsGlb": "Traslado al Puerto Punta Bandera",
          
                "infoNsGlc": "Traslado al Puerto Bajo las Sombras"
              },
          
              "Chalten": {
                "titleCh": "El Chalten",
          
                "infoCh": "El Chalten es un pueblo ubicado al Norte del Parque Nacional Los Glaciares, en la provincia de Santa Cruz. Es un destino popular para los amantes del trekking, el montañismo y la naturaleza.",
          
                "piCh": "Puntos Importantes",
          
                "infoPiCha": "El Chalten es la base para explorar el Cerro Fitz Roy, una de las montañas más emblemáticas de la Patagonia.",
          
                "infoPiChb": "El pueblo también ofrece una variedad de otras actividades, como caminatas, pesca, kayak y rafting.",
          
                "infoPiChc": "El mejor momento para visitar El Chalten es durante los meses de verano, cuando las temperaturas son más altas y el clima es mas estable.",
          
                "qhCh": "Que Hacer?",
          
                "infoQhCha": "A 12,5 kilómetros de El Chalten, se encuentra la Laguna de los Tres, uno de los trekkings más populares de la Patagonia. Con una dificultad media, el sendero ofrece vistas privilegiadas del imponente Cerro Fitz Roy, una de las cumbres más emblemáticas de la región.",
          
                "infoQhChb": "A 9,5 kilómetros de El Chalten, se encuentra la Laguna Torre, otro de los trekkings más populares de la región. Con una dificultad media, el sendero ofrece vistas de la base del Cerro Torre, una de las montañas más desafiantes del mundo.",
          
                "infoQhChc": "A 4 kilómetros de El Chalten, se encuentra la Laguna Capri, un tranquilo lugar ideal para relajarse y disfrutar de la naturaleza. Con una dificultad baja, el sendero ofrece la vista de una laguna de aguas azules rodeada de bosque nativo.",
          
                "infoQhChd": "A 3,5 kilómetros de El Chalten, se encuentra el Chorrillo del Salto, una hermosa cascada de deshielo. Con una dificultad baja, el sendero ofrece vistas de la cascada y el bosque nativo.",
          
                "infoQhChe": "A 37 kilómetros de El Chalten, se encuentra el Lago del Desierto, un imponente espejo de agua cristalina rodeado de un paisaje natural de cerros, montañas y bosque",
          
                "nsCh": "Nuestro Servicio",
          
                "infoNsCha": "Full Day Chalten, ida y vuelta el día saliendo desde El Calafate",
          
                "infoNsChb": "Traslado Aeropuerto FTE - El Chalten",
          
                "infoNsChc": "Traslado EL Calafate - El Chalten"
              },
          
              "austral": {
                "titleAu": "CARRETERA AUSTRAL",
          
                "infoAu": "La Carretera Austral es una ruta de 1.240 kilómetros que recorre la Patagonia Chilena. Es una de las rutas más pintorescas del mundo, ya que atraviesa bosques, montañas, glaciares y lagos.",
          
                "piAu": "Puntos Importantes",
          
                "infoPiAua": "Inicia su recorrido en la ciudad de El Calafate y finaliza en la ciudad de Bariloche.",
          
                "infoPiAub": "Recorre la emblemática Ruta Nacional 40 de Argentina y la ruta austral 7 de la Patagonia Chilena.",
          
                "infoPiAuc": "El mejor momento para hacerlo es durante los meses de verano, cuando las temperaturas son más altas y el clima es mas estable.",
          
                "qhAu": "Que hacer?",
          
                "infoQhAua": "Sendero de Colores en el PN Patagonia, disfruta de un paseo por un sendero de colores experimentando la belleza natural de la Patagonia. Una caminata ideal para todas las edades.",
          
                "infoQhAub": "Capillas de Mármol, visita una de las maravillas naturales más icónicas de la Patagonia, conoce sus formaciones rocosas de mármol esculpidas por el agua y el viento durante millones de años. Una navegación perfecta para los amantes de la naturaleza y la fotografía.",
          
                "infoQhAuc": "Cabalgata por el Cerro Castillo, recorre los senderos del PN, experimenta la Patagonia de una manera única, con vistas panorámicas de los picos nevados y los bosques nativos.",
          
                "infoQhAud": "PN Queulat y Baños en termas naturales, visita el PN y descubrí sus glaciares, bosques y cascadas. Relajate en las termas naturales de Puyuhuapi, perfecto para descansar y disfrutar de la Naturaleza.",
          
                "infoQhAue": "Rafting por el rio Futaleufu, vivi la emoción en uno de los ríos más rápidos de America del Sur, desafía las aguas bravas y experimenta la adrenalina de la naturaleza, una actividad ideal para los amantes de la aventura.",
          
                "nsAu": "Nuestro Servicio",
          
                "infoNsAua": "Recorrido de 6 días y 5 noches.",
          
                "infoNsAub": "Traslados y logísticas, a lo largo de todo el recorrido.",
          
                "infoNsAuc": "Reservas de alojamiento y excursiones."
              }
        }
    }
    }
  });

export default i18n;