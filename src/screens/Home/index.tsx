import { useState } from 'react';

import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';

import { Task } from '../../components/Task';

import { styles } from './styles';

export function Home() {

  const [focus, setfocus] = useState(false);
  const [task, settask] = useState<string[]>([]);
  const [taskName, settaskName] = useState('');

  const countTaskAdd = task.length;

  function handleTaskAdd() {
    if (task.includes(taskName)) {
      return Alert.alert('Esta tarefa já foi adicionada!');
    }

    settask(prevState => [...prevState, taskName]);
    settaskName('');
  }

  function handleTaskRemove(nameTask: string) {
    if (task.includes(nameTask)) {
      return Alert.alert('Remover', `Remover a tarefa ${nameTask}?`, [
        {
          text: 'Sim',
          onPress: () => {
            settask(prevState => prevState.filter(t => t !== nameTask));
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        },
      ]);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>

        <Image
          source={require('../../assets/Logo.png')}
        />

        <View style={styles.contentForm}>
          <TextInput
            style={[styles.inputForm, {
              borderColor: focus
                ? '#5E60CE'
                : ''
            },
            { borderWidth: focus ? 1 : 0 }
            ]}

            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={() => {
              setfocus(true);
            }}

            onChangeText={settaskName}
            value={taskName}


          />
          <TouchableOpacity style={styles.buttonText}
            onPress={handleTaskAdd}
          >
            <Icon
              name="pluscircleo"
              size={20}
              color="#F2F2F2"
            />
          </TouchableOpacity>

        </View>

      </View>
      <View style={styles.containerTask}>

        <View style={styles.containerTaskTask}>
          <Text style={styles.textTaskCriadas}>Criadas</Text>
          <Text style={styles.counterTask}>{countTaskAdd}</Text>
        </View>
        <View style={styles.containerTaskTask}>
          <Text style={styles.textTaskConcluidas}>Concluidas</Text>
          <Text style={styles.counterTask}>0</Text>
        </View>
      </View>

      <View style={styles.containerTaskAdd}>
        <FlatList
          data={task}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item)} />
          )}

          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.taskNone}>
              <IconOcticons 
                name='paste'
                size={56}
                color='#808080'
              />

              <Text style={styles.textTaskNone}>
                Você ainda não tem tarefas cadastradas
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />

      </View>
    </View>

  );
}
