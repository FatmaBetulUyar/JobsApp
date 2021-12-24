import React from 'react'
import { View ,Text,FlatList} from 'react-native'
import useFetch from "../../hooks/useFetch/useFetch";
import config from '../../../config';
import JobCard from '../../components/JobCard/JobCard';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
function Jobs({navigation}) {
    

    const { loading, data, error } = useFetch(config.API_JOBS_URL);
    console.log(data)
    console.log(data.results)

    const handleJobSelect = (id) => {
        navigation.navigate("JobDetails",{id});
      };
    
      const renderJob= ({ item }) => (
        <JobCard key={item.id} job={item} onSelect={()=>handleJobSelect(item.id)} />
      );

      if (error) {
        return <Error />;
      }
    
      if (loading) {
        return <Loading />;
      }

    return <FlatList key={data.id} style={{backgroundColor:"white"}} data={data.results} renderItem={renderJob} />;
}

export default Jobs
