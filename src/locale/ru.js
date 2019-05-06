export default {
  route: {
    dashboard: 'Главная',
    // introduction: 'Introduction',
    // documentation: 'Documentation',
    // guide: 'Guide',
    // pagePermission: 'Page Permission',
    // rolePermission: 'Role Permission',
    permission: 'Разрешения',
    permissions: {
      admin: 'Админ',
      editor: 'Редактор',
      visitor: 'Посетитель'
    },
    vuetify: 'Vuetify',
    vuetifyComponents: {
      components: 'Компоненты',
      alert: 'Предупреждения',
      buttons: 'Кнопки',
      calendar: 'Календарь'
    },
    errors: 'Ошибки',
    errorPages: {
      page401: '401',
      page403: '403',
      page404: '404',
      page500: '500'
    },
    nested: {
      nested: 'Вложенные',
      nested1: 'Уровень 1',
      nested2: 'Уровень 2',
      nested3: 'Уровень 3'
    }
  },
  toolbar: {
    appname: 'Приложение',
    settings: 'Настройки',
    profile: 'Профиль',
    logout: 'Выйти'
  },
  settings: {
    title: 'Внешний Вид',
    default: 'По умолчанию',
    toolbarDense: 'Toolbar dense',
    navbarLogo: 'Navbar logo',
    settingsBtn: 'Setting btn'
  },
  login: {
    titleIn: 'Форма авторизации',
    titleUn: 'Форма регистрации',
    singIn: 'Войти',
    singUp: 'Войти', // "Зарегистрироваться" - верстка плывет, если не убрать кнопки
    email: 'Эл. почта',
    password: 'Пароль',
    confirm: 'Подтвердить'
  }
};