import AlertOne from '../Components/Alert/AlertOne'
import AlertTwo from '../Components/Alert/AlertTwo'
import AlertThree from '../Components/Alert/AlertThree'
import ModalOne from '../Components/Modal/ModalOne'
import RatingOne from '../Components/Rating/RatingOne'
import AvatarOne from '../Components/Avatar/AvatarOne'
import CardOne from '../Components/Card/CardOne'

export interface Compontents {
  title:String
  description:String
  components: {
    id:String;
    name: string;        
    description: string;
    element: JSX.Element; 
  }[]
}

export const componentsMap = {
  Avatar: <AvatarOne />,
  Card: <CardOne />,
  Alert: <AlertOne />,
  Alert2: <AlertTwo />,
  Alert3: <AlertThree />,
  Rating: <RatingOne />,
  Modal: <ModalOne />,
  // Agrega más componentes aquí
};

export const componentsType: Compontents[] = [
  {
    title: 'Alert',
    description: 'Un componente de alerta que muestra notificaciones o advertencias.',
    components: [
      {
        id:'Alert',
        name: 'AlertOne',
        description: 'Una alerta básica para notificaciones.',
        element: componentsMap['Alert'],
      },
      {
        id:'Alert',
        name: 'AlertOne',
        description: 'Una alerta básica para notificaciones.',
        element: componentsMap['Alert2'],
      },
      {
        id:'Alert',
        name: 'AlertOne',
        description: 'Una alerta básica para notificaciones.',
        element: componentsMap['Alert3'],
      }
    ]
  },
  {
    title: 'Card',
    description: 'Un componente que muestra contenido en formato de tarjeta.',
    components: [
      {
        id:'Card',
        name: 'CardOne',
        description: 'Tarjeta básica con título y descripción.',
        element: componentsMap['Card'],
      },
      {
        id:'Card',
        name: 'CardTwo',
        description: 'Tarjeta básica con título y descripción.',
        element: componentsMap['Card'],
      }
    ]
  },
  {
    title: 'Button',
    description: 'Botón para ejecutar acciones.',
    components: [
      {
        id:'Card',
        name: 'ButtonPrimary',
        description: 'Un botón principal para acciones destacadas.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Avatar',
    description: 'Un componente que muestra una imagen de perfil o iniciales.',
    components: [
      {
        id:'Card',
        name: 'AvatarRound',
        description: 'Avatar con forma redonda.',
        element:componentsMap['Avatar'],
        }
    ]
  },
  {
    title: 'Badge',
    description: 'Un indicador que muestra el estado o una cantidad.',
    components: [
      {
        id:'Card',
        name: 'BadgeNotification',
        description: 'Una insignia para mostrar notificaciones.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Breadcrumb',
    description: 'Un componente de navegación que indica la jerarquía del sitio.',
    components: [
      {
        id:'Card',
        name: 'BreadcrumbNav',
        description: 'Navegación jerárquica con enlaces.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Checkbox',
    description: 'Un componente para seleccionar uno o más elementos.',
    components: [
      {
        id:'Card',
        name: 'CheckboxSelect',
        description: 'Un checkbox básico.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Collapse',
    description: 'Un componente que oculta o muestra contenido.',
    components: [
      {
        id:'Card',
        name: 'CollapsePanel',
        description: 'Panel colapsable que oculta el contenido hasta que se expande.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Dialog',
    description: 'Un cuadro de diálogo que muestra información importante.',
    components: [
      {
        id:'Card',
        name: 'DialogBox',
        description: 'Un diálogo modal básico.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Divider',
    description: 'Un componente para dividir secciones de contenido.',
    components: [
      {
        id:'Card',
        name: 'DividerLine',
        description: 'Una línea divisora simple.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Drawer',
    description: 'Un panel lateral deslizante que muestra contenido adicional.',
    components: [
      {
        id:'Card',
        name: 'DrawerPanel',
        description: 'Un panel deslizante desde el lateral.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Dropdown',
    description: 'Un menú desplegable que muestra opciones.',
    components: [
      {
        id:'Card',
        name: 'DropdownMenu',
        description: 'Un menú con opciones desplegables.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Form',
    description: 'Un conjunto de campos para que el usuario proporcione información.',
    components: [
      {
        id:'Card',
        name: 'BasicForm',
        description: 'Un formulario básico con varios campos.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Grid',
    description: 'Un sistema de diseño basado en una cuadrícula.',
    components: [
      {
        id:'Card',
        name: 'GridSystem',
        description: 'Sistema de cuadrícula para layout.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Icon',
    description: 'Un icono que representa una acción o información.',
    components: [
      {
        id:'Card',
        name: 'IconSymbol',
        description: 'Un icono simbólico básico.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Image',
    description: 'Un componente para mostrar imágenes.',
    components: [
      {
        id:'Card',
        name: 'ResponsiveImage',
        description: 'Una imagen que se ajusta al tamaño de pantalla.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Input',
    description: 'Un campo de entrada para recibir texto.',
    components: [
      {
        id:'Card',
        name: 'TextInput',
        description: 'Un campo de entrada de texto básico.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Label',
    description: 'Un componente de etiqueta para describir entradas.',
    components: [
      {
        id:'Card',
        name: 'InputLabel',
        description: 'Etiqueta básica para campos de formulario.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Link',
    description: 'Un enlace para redirigir a otra página.',
    components: [
      {
        id:'Card',
        name: 'Hyperlink',
        description: 'Un enlace clicable.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'List',
    description: 'Un componente que muestra una lista de elementos.',
    components: [
      {
        id:'Card',
        name: 'OrderedList',
        description: 'Una lista ordenada.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Menu',
    description: 'Un componente de menú con opciones.',
    components: [
      {
        id:'Card',
        name: 'NavigationMenu',
        description: 'Un menú de navegación con varias opciones.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Modal',
    description: 'Un componente modal para mostrar contenido en una capa superior.',
    components: [
      {
        id:'Card',
        name: 'BasicModal',
        description: 'Un modal emergente básico.',
        element:componentsMap['Modal'],
        }
    ]
  },
  {
    title: 'Popover',
    description: 'Un cuadro emergente que muestra más información al hacer hover o click.',
    components: [
      {
        id:'Card',
        name: 'InfoPopover',
        description: 'Un cuadro emergente para mostrar detalles adicionales.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Pagination',
    description: 'Un componente de paginación para navegar entre páginas de contenido.',
    components: [
      {
        id:'Card',
        name: 'PageNavigation',
        description: 'Un conjunto de botones para navegar entre páginas.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Progress',
    description: 'Un componente que muestra el progreso de una tarea.',
    components: [
      {
        id:'Card',
        name: 'ProgressBar',
        description: 'Una barra que indica el progreso completado.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Radio',
    description: 'Un conjunto de botones de opción para seleccionar una sola opción.',
    components: [
      {
        id:'Card',
        name: 'RadioOption',
        description: 'Un botón de opción básico.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Rating',
    description: 'Un componente que permite a los usuarios calificar algo.',
    components: [
      {
        id:'Card',
        name: 'StarRating',
        description: 'Un sistema de calificación basado en estrellas.',
        element:componentsMap['Rating'],
        }
    ]
  },
  {
    title: 'Select',
    description: 'Un menú desplegable para seleccionar opciones.',
    components: [
      {
        id:'Card',
        name: 'DropdownSelect',
        description: 'Un campo de selección desplegable.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Skeleton',
    description: 'Un componente que indica la carga de contenido.',
    components: [
      {
        id:'Card',
        name: 'LoadingSkeleton',
        description: 'Un marcador de posición que indica carga.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Slider',
    description: 'Un control deslizante para ajustar valores.',
    components: [
      {
        id:'Card',
        name: 'RangeSlider',
        description: 'Un control deslizante para seleccionar un rango de valores.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Spinner',
    description: 'Un indicador visual de carga.',
    components: [
      {
        id:'Card',
        name: 'LoadingSpinner',
        description: 'Un indicador de que el contenido está cargando.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Switch',
    description: 'Un componente de interruptor para alternar entre dos estados.',
    components: [
      {
        id:'Card',
        name: 'ToggleSwitch',
        description: 'Un interruptor básico de encendido/apagado.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Table',
    description: 'Un componente de tabla para mostrar datos en filas y columnas.',
    components: [
      {
        id:'Card',
        name: 'DataTable',
        description: 'Una tabla para organizar datos.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Tabs',
    description: 'Un componente de pestañas para navegar entre diferentes secciones de contenido.',
    components: [
      {
        id:'Card',
        name: 'TabNavigation',
        description: 'Pestañas de navegación entre diferentes vistas.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Tag',
    description: 'Un pequeño indicador que muestra categorías o etiquetas.',
    components: [
      {
        id:'Card',
        name: 'CategoryTag',
        description: 'Una etiqueta para mostrar una categoría.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Textarea',
    description: 'Un área de texto para recibir entradas largas del usuario.',
    components: [
      {
        id:'Card',
        name: 'TextAreaInput',
        description: 'Un campo de texto expandido para entradas más largas.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Toast',
    description: 'Un componente de notificación emergente temporal.',
    components: [
      {
        id:'Card',
        name: 'NotificationToast',
        description: 'Una notificación que aparece y desaparece automáticamente.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Tooltip',
    description: 'Una breve descripción o información que aparece al pasar el cursor.',
    components: [
      {
        id:'Card',
        name: 'HoverTooltip',
        description: 'Una pequeña descripción que aparece al hacer hover sobre un elemento.',
        element:componentsMap['Card'],
        }
    ]
  },
  {
    title: 'Upload',
    description: 'Un componente que permite subir archivos.',
    components: [
      {
        id:'Card',
        name: 'FileUpload',
        description: 'Un campo de subida de archivos.',
        element:componentsMap['Card'],
        }
    ]
  }
];