import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    
  },
  contentHeader: {
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
    marginLeft: 24,
  },
  contentForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop: 40,
   
  },
  inputForm: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    marginRight: 4,
    color: '#FFF',
   
  },
  buttonText: {
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTasks: {
   

  },
  containerTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 24,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 20,

  },
  containerTaskTask: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTaskCriadas: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 16,
    
  },
  textTaskConcluidas: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 16,
  },
  counterTask: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  containerTaskAdd: {
    marginRight: 24,
    marginLeft: 24,
    flex: 1,
  },
  taskNone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 68,
  },
  textTaskNone: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 16,
    textAlign: 'center',
    marginTop: 16,
  },
 
 
});