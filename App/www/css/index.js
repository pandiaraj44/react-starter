import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "backgroundColor": "pink"
    },
    "footer": {
        "clear": "both",
        "position": "relative",
        "zIndex": 10,
        "height": 3,
        "marginTop": -3,
        "backgroundColor": "grey"
    },
    "content": {
        "backgroundColor": "white",
        "minHeight": "100%",
        "height": "100%",
        "paddingBottom": 6
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingBottom": 6
    },
    "loader": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "#666",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "zIndex": 10000000,
        "opacity": 0.4,
        "filter": "alpha(opacity=40)"
    }
});