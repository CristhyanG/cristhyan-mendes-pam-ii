import { Image, StyleSheet, ImageSourcePropType } from "react-native";
import * as React from 'react';

interface ImageViewerProps {
    placeholderImageSource: ImageSourcePropType;
    selectedImage: any;

}
export default function ImageViewer ({placeholderImageSource, selectedImage}: ImageViewerProps){
    const imageSource = selectedImage ? {uri: selectedImage} : placeholderImageSource;

    return(
        <Image source={selectedImage} style={styles.image} />
    );
}
const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 400,
        borderRadius: 18,
    },
})