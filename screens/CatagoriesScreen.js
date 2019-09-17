import React from 'React';
import { Text, View, StyleSheet } from 'react-native';

const CatagoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Catagories Screen!</Text>
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

export default CatagoriesScreen;