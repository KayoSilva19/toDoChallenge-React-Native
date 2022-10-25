import { useState } from 'react';

import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';


import { styles } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

import IconCheck from 'react-native-vector-icons/AntDesign';

type Props = {
  name: string;
  onRemove: () => void;
}  
export function Task({ name, onRemove }: Props) {
  return (
    <View style={styles.task}>
      <View style={styles.taskView}>

      <Text style={styles.textTask}>{name}</Text>
      </View>

      <TouchableOpacity>
        <Icon
          name="ios-trash-outline"
          size={15}
          color="#808080"
          onPress={onRemove}
        />
      </TouchableOpacity>

    </View>
  );
}
