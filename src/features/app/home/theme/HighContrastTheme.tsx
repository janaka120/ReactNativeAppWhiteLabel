import {StyleSheet} from 'react-native';
import {
  BLUE_1FC,
  PINK_2BB,
  PURPLE_FFC,
  WHITE_3FF,
  WHITE_FFF,
} from 'styles/Colors';
import BaseTheme from '_home/theme/BaseTheme';

const styles = StyleSheet.create({
  ...BaseTheme,
  main: {
    flex: 1,
    backgroundColor: WHITE_3FF,
  },
  header: {
    ...BaseTheme.header,
    backgroundColor: PURPLE_FFC,
  },
  clockCon: {
    ...BaseTheme.clockCon,
    borderColor: BLUE_1FC,
  },
  time: {
    ...BaseTheme.time,
    color: PINK_2BB,
  },
  timeUnit: {
    ...BaseTheme.timeUnit,
    color: WHITE_FFF,
  },
});

export default styles;

// https://envato.com/blog/color-scheme-trends-in-mobile-app-design/
