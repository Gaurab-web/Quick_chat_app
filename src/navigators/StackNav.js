import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FbPosting from '../screens/home/FbPosting';
// import Home from '../screens/home/Home';
// import Login from '../screens/home/Login';
// import Product from '../screens/home/Product';
// import RanPro from '../screens/home/RanPro';
import Search from '../screens/home/Search';
// import SubProduct from '../screens/home/SubProduct';
// import VideoNew from '../screens/home/VideoNew';


const StackNav = () => {
  const Stack = createStackNavigator();
  const Screens ={
    // Search:Search,
    FbPosting:FbPosting
  }
      
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {Object.entries({
          ...Screens,
        }).map(([name, component]) => {
          return <Stack.Screen key={name} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
