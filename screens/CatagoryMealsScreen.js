import React from 'React';
import { Text, View, StyleSheet } from 'react-native';

const CatagoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Catagory Meal Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CatagoryMealsScreen;