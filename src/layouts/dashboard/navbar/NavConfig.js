// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  events: getIcon('ic_home'),
  profile: getIcon('ic_user'),
  settings: getIcon('ic_settings')
};

const navConfig = [
  {
    subheader: 'general',
    items: [
      { title: 'Events', path: PATH_DASHBOARD.general.events, icon: ICONS.events },
      { title: 'profile', path: PATH_DASHBOARD.general.profile, icon: ICONS.profile },
      { title: 'settings', path: PATH_DASHBOARD.general.settings, icon: ICONS.settings }
    ],
  }
];

export default navConfig;
