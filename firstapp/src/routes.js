import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainPage from './pages/main';

const NavigationStack = createStackNavigator({
    Main: {
        screen: MainPage
    }

})

const Routes = createAppContainer(NavigationStack);

export default Routes;

