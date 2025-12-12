import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A1A2F',
  },
});

export const swipeStyles = StyleSheet.create({
  row: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  rowText: { fontSize: 18 },

  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});