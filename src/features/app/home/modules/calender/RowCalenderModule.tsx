import React from 'react';
import {StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const RowCalenderModule = () => {
  return <CalendarStrip style={styles.container} selectedDate={new Date()} />;
};

export default RowCalenderModule;

const styles = StyleSheet.create({
  container: {height: 200, width: '100%'},
});
