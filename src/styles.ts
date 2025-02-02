import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  rootWrapper: {
    ...StyleSheet.absoluteFillObject,
    elevation: 999999,
    zIndex: 999999,
  },
  toastWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  toastContainer: {
    position: "absolute",
    left: 16,
    right: 16,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    minHeight: 46,
    marginTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  toastContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  toastText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  descriptionText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 12,
    marginTop: 4,
    lineHeight: 20,
  },
  dismissButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
