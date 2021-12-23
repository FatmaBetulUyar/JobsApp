import React from 'react'
import { TouchableOpacity,View,Text} from 'react-native'
import styles from './JobCard.styles'


function JobCard({ job, onSelect }) {

  function renderLocation(){

    return job.locations.map(location=>{
        return <Text style={styles.country}>{location.name}</Text>;
    })

    function renderLevel(){

      return job.levels.map(level=>{
          return <Text style={styles.level}>{level.name}</Text>;
      })
  }
}
    return (
        <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text style={styles.title}>{job.name}</Text>
          <Text style={styles. company_name}>{job.company.name}</Text>
          <View style={styles.location}>
             {renderLocation()}
          </View>

          <Text style={styles.level}>{job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'Unknown Level'}</Text>
        </View>
      </View>
    </TouchableOpacity>
    )
}

export default JobCard
