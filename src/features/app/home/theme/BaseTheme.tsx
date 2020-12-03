import {StyleSheet} from 'react-native';
import {GRAY_6B6, GRAY_95B, WHITE_3F2, WHITE_FFF} from '_styles/Colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WHITE_FFF,
  },
  header: {
    backgroundColor: WHITE_3F2,
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: WHITE_FFF,
  },
  clockCon: {
    borderColor: WHITE_FFF,
    borderWidth: 1,
    borderRadius: 100,
    padding: 25,
    alignItems: 'center',
    width: 200,
    height: 200,
    justifyContent: 'center',
  },
  timeCon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  time: {
    fontSize: 28,
    color: GRAY_95B,
  },
  timeUnit: {
    color: GRAY_6B6,
  },
});

export default styles;

// https://envato.com/blog/color-scheme-trends-in-mobile-app-design/
