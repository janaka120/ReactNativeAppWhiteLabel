import {StyleSheet} from 'react-native';
import BaseTheme from '_home/theme/BaseTheme';
import {PINK_EDF, BLUE_BF2, BLUE_2FF, WHITE_FFF} from '_styles/Colors';

const styles = StyleSheet.create({
  ...BaseTheme,
  main: {
    flex: 1,
    backgroundColor: BLUE_2FF,
  },
  header: {
    ...BaseTheme.header,
    backgroundColor: BLUE_BF2,
  },
  clockCon: {
    ...BaseTheme.clockCon,
    borderColor: PINK_EDF,
  },
  time: {
    ...BaseTheme.time,
    color: WHITE_FFF,
  },
  timeUnit: {
    ...BaseTheme.timeUnit,
    color: WHITE_FFF,
  },
});

export default styles;
