// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  transfer: getIcon('ic_home'),
  withdraw: getIcon('ic_booking'),
  transactions: getIcon('ic_sdt'),
  profile: getIcon('ic_user'),
  settings: getIcon('ic_settings')
};

const navConfig = [
  {
    subheader: 'general',
    items: [
      { title: 'Events', path: PATH_DASHBOARD.general.events, icon: ICONS.transfer },
      { title: 'profile', path: PATH_DASHBOARD.general.profile, icon: ICONS.profile },
      { title: 'settings', path: PATH_DASHBOARD.general.settings, icon: ICONS.settings }
    ],
  }
];

export default navConfig;
