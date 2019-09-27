'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARPlaneSelector,
  ViroBox,
  ViroNode,
  ViroButton,
  ViroARPlane,
  ViroSpotLight,
  ViroMaterials
} from 'react-viro';
import { View, Text } from 'react-native';
export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      message: "Wassupo!"
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >

        <ViroNode position={[0, 0, -1]}>
          <ViroText text={'Welcome to Tic-Tac-To VR!'} scale={[.5, .5, .5]} position={[0, 0.75, -1]} style={styles.header} />
          <ViroText text={this.state.message} scale={[.5, .5, .5]} position={[0, 0.5, -1]} style={styles.info} />
        </ViroNode>
        <ViroNode position={[0, -0.8, -1]} scale={[1, 1, 1]}>
          <ViroSpotLight position={[0, 10, 0]}
            color="yellow"
            direction={[0, -1, 0]}
            attenuationStartDistance={1}
            attenuationEndDistance={20}
            innerAngle={1}
            outerAngle={7}
            castsShadow={true} />
          <ViroBox position={[0, 0, 0]} scale={[1, 0.1, 1]} materials={['grid']} />
          <ViroNode position={[0, 0.4, 0]} scale={[1, 0.1, 1]}>
            <ViroBox position={[-.1, 0, -.1]} scale={[.1, .1, .1]} materials={['grid']} />
            <ViroBox position={[.1, 0, .1]} scale={[.1, .1, .1]} materials={['grid']} />
            <ViroBox position={[-.1, 0, .1]} scale={[.1, .1, .1]} materials={['grid']} />
            <ViroBox position={[.1, 0, -.1]} scale={[.1, .1, .1]} materials={['grid']} />
          </ViroNode>
        </ViroNode>
        {/* <ViroARPlaneSelector minWidth={0.2} minHeight={0.2} maxPlanes={2}>
          <ViroBox position={[0, 0, 0]} scale={[1, 0.1, 1]} />
        </ViroARPlaneSelector> */}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!!!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
    lightingModel: 'Lambert'
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: 'black',
    textShadowColor: 'white',
    textShadowRadius: 10,
    textShadowOffset: {
      height: 5,
      width: 5
    },
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  wassupoStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'blue',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = HelloWorldSceneAR;
