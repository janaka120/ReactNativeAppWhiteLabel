import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import moment from 'moment';

import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '_home/theme';
import {YELLOW_A87} from 'styles/Colors';

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const dayIcon = useMemo(() => {
    const day = new Date();
    const hr = day.getHours();
    if (hr > 6 && hr < 18) {
      return <Icon name="sun-o" size={24} color={YELLOW_A87} />;
    } else {
      return <Icon name="moon-o" size={24} color={YELLOW_A87} />;
    }
  }, []);
  return (
    <SafeAreaView style={Styles.main}>
      <View style={Styles.main}>
        <View style={Styles.header}>
          <View style={Styles.clockCon}>
            {dayIcon}
            <View style={Styles.timeCon}>
              <Text>
                <Text style={Styles.time}>{moment().format('hh')}</Text>
                <Text style={Styles.timeUnit}>{' h'}</Text>
              </Text>
              <Text>
                <Text style={Styles.time}>{moment().format('mm')}</Text>
                <Text style={Styles.timeUnit}>{' m'}</Text>
              </Text>
              <Text>
                <Text style={Styles.time}>{moment().format('ss')}</Text>
                <Text style={Styles.timeUnit}>{' s'}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
