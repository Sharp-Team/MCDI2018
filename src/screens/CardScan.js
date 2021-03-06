import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { CardLocation, CardScopeScan, CardSearchWork } from '../components/CardScan'

const styles = StyleSheet.create({
  titleContainer: {
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    paddingTop: 80,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  buttonSignUp: {
    backgroundColor: '#2DD754',
    borderRadius: 4,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 50,
  },

  textSignUp: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
})

export default class CardScan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialDataSearch: [],
      initialData: [
        'Sửa xe máy',
        'Sửa xe đạp',
        'Vá xăm',
        'Thay dầu',
        'Sửa máy tính',
        'Sửa máy tính',
        'Sửa ô tô',
      ],
      check: false,
    }
    this.onHandleTag = this.onHandleTag.bind(this)
    this.onSelectTag = this.onSelectTag.bind(this)
  }

  onHandleTag = name => {
    const { initialDataSearch } = this.state
    const newData = initialDataSearch
    newData.map((item, index) => {
      if (item.endsWith(name)) {
        newData.splice(index, 1)
      }
      this.setState({ initialDataSearch: newData })
      return ''
    })
  }

  onSelectTag = name => {
    const { initialDataSearch } = this.state
    let { check } = this.state
    const newData = initialDataSearch
    newData.map(item => {
      if (item === name) {
        check = true
        return null
      }
      return null
    })
    if (check === false) {
      newData.push(name)
      this.setState({ initialDataSearch: newData })
    }
    this.setState({ check: false })
  }

  render() {
    const { initialData, initialDataSearch } = this.state
    return (
      <ScrollView contentContainerStyle={styles.cardScanContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>TÌM QUANH ĐÂY</Text>
        </View>
        <CardLocation />
        <CardSearchWork
          tagWork={initialDataSearch}
          onHandleTag={this.onHandleTag}
          onSelectTag={this.onSelectTag}
          initialData={initialData}
        />
        <CardScopeScan />
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.textSignUp}>Bắt đầu quét</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
