import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    height: 64,
    alignItems: "center",
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 8,
  },
  taskView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTask: {
    fontSize: 14,
    color: '#F2F2F2',
    marginRight: 8,
    marginLeft: 8
  }
 
});