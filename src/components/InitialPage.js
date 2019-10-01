import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';


const styles = StyleSheet.create({
    slide: {
        flex: 1,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    title: {
        fontWeight: "bold"
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    container: {
        height: "100%"
    },
    header: {
        backgroundColor: "#ab7adb",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "10%",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    div: {
        justifyContent: "center",
        width: "33%"
    },
    textSecond: {
        textAlign: "center", 
        color:"white",
        fontSize:20, 
        fontWeight:"bold"
    }
});



const slides = [
    {
        key: 'k1',
        title: 'Recepção',
        text: 'Sejam bem vindos ao meu aplicativo!',
        image: {
            uri:
                'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#ab7adb',
    },
    {
        key: 'k2',
        title: 'Apresentação',
        text: 'Me chamo João Arruda. Tenho 19 anos e estou me desenvolvendo como programador mobile',
        image: {
            uri:
                'https://pbs.twimg.com/profile_images/981366156647960577/jytjxXKx_400x400.jpg',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#9855db',
    },
    {
        key: 'k3',
        title: 'Vamos lá!',
        text: 'Este app em questão trará um aplicativo de mapas muito legal! Divirta-se! :D',
        image: require('../image/hello.jpg'),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#7617d6',
    },
];



class InitialPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_Main_App: false
        };
    }


    onRegionChange(region) {
        this.state.region.setValue(region);
    }


    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
    };
    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };

    render() {
        if (this.state.show_Main_App) {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.div}>
                            <Text style={styles.text}>
                            </Text>
                        </View>
                        <View style={styles.div}>
                            <Text style={styles.textSecond}>
                                Mapa
                            </Text>
                        </View>
                        <View style={styles.div}>
                        </View>
                    </View>
                </SafeAreaView>
            );
        } else {
            return ( 
                <AppIntroSlider slides={slides} onDone={this.on_Done_all_slides}
                    showSkipButton={true}
                    onSkip={this.on_Skip_slides}
                    skipLabel={'Pular'}
                    doneLabel={'Pronto!'}
                    nextLabel={'Próximo'}
                    prevLabel={'Voltar'}
                />
            );
        }
    }
}

export default InitialPage;
