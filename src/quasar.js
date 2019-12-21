import Vue from 'vue';

import './styles/quasar.styl';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import {
  QSelect,
  QTooltip,
  QChip,
  Quasar,
  QDialog,
  ClosePopup,
  QBtnToggle,
  QTable,
  QAvatar,
  QExpansionItem,
  QEditor,
  QCard,
  QCardSection,
  QCardActions,
  QLayout,
  QHeader,
  QDrawer,
  QOptionGroup,
  QPageContainer,
  QPage,
  QRadio,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QImg,
  QList,
  QInput,
  QItem,
  QItemSection,
  QItemLabel,
  QTabs,
  QTab,
  QRouteTab,
  QParallax,
  QSeparator,
  QSpace,
  QStepper,
  QStep,
  QStepperNavigation,
  QTimeline,
  QTimelineEntry,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QUploader,
  QToggle,
} from 'quasar';

Vue.use(Quasar, {
  config: {
    extras: [
      'fontawesome-v5',
    ]
  },
  components: {
    QToggle,
    QSelect,
    QDialog,
    QChip,
    QTooltip,
    QUploader,
    QBtnToggle,
    QTable,
    QAvatar,
    QLayout,
    QExpansionItem,
    QCard,
    QCardSection,
    QCardActions,
    QHeader,
    QDrawer,
    QOptionGroup,
    QPageContainer,
    QPage,
    QRadio,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QImg,
    QList,
    QInput,
    QItem,
    QItemSection,
    QItemLabel,
    QTabs,
    QTab,
    QRouteTab,
    QParallax,
    QSeparator,
    QSpace,
    QStepper,
    QStep,
    QStepperNavigation,
    QTimeline,
    QTimelineEntry,
    QCard,
    QCardSection,
    QCardActions,
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
  },
  directives: {
    ClosePopup
  },
  plugins: {
  },
});
