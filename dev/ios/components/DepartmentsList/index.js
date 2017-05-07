import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, View, ListView, StyleSheet, Text, Image } from 'react-native';

import DepartmentItem from '../DepartmentItem';
import CourseList from '../CourseList';

import API from '../../api';

class CourseContainer extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch({
      type: "FETCH_DEPARTMENTS",
      payload: API.Departments()
    });
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  selectDepartment(department) {
    this.props.dispatch({
      type: "SELECT_DEPARTMENT",
      value: department.department_key
    });
    this.props.navigator.push({
      title: department.title,
      component: CourseList
    });
  }

  render() {
    const dataSource = this.ds.cloneWithRows(this.props.departments);
    return <View>
        <ListView contentContainerStyle={styles.list}
          dataSource={dataSource}
          renderRow={(rowData) => DepartmentItem(rowData, this.selectDepartment.bind(this))}
        />
      </View>
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    backgroundColor: "#A31F34",
    fontWeight: "bold",
    padding: 2,
    width: "100%",
    textAlign: "center",
    fontSize: 15
  },
  list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  backdrop_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  container: {
    margin: 5,
    width: 145,
    height: 145,
  },
  backdrop: {
    width: 145,
    height: 145,
    justifyContent: 'flex-end',
  }
});

export default connect(store => {
  return {
    pending: store.main.pending,
    departments: store.main.departments,
  }
})(CourseContainer);