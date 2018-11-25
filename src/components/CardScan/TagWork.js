import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const TagWork = ({ name, onHandleTag }) => {
  const styles = {
    tagContainer: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginTop: 5,
      backgroundColor: '#979797',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginLeft: 3,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: '#666',
    },
    icon: {
      marginLeft: 10,
    },
  }
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={() => onHandleTag(name)}>
        <Icon.Ionicons style={styles.icon} name="ios-close" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

TagWork.propTypes = {
  name: PropTypes.string.isRequired,
  onHandleTag: PropTypes.func.isRequired,
}

export default TagWork
