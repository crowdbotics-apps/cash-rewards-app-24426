import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings203225Navigator from '../features/Settings203225/navigator';
import Settings203217Navigator from '../features/Settings203217/navigator';
import UserProfile203215Navigator from '../features/UserProfile203215/navigator';
import BlankScreen0203193Navigator from '../features/BlankScreen0203193/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings203225: { screen: Settings203225Navigator },
Settings203217: { screen: Settings203217Navigator },
UserProfile203215: { screen: UserProfile203215Navigator },
BlankScreen0203193: { screen: BlankScreen0203193Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
