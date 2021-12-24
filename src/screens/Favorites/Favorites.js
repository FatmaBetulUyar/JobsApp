import React from 'react'
import { FlatList, Text ,View} from 'react-native'
import { useSelector } from 'react-redux'
import EmptyList from '../../components/EmptyList/EmptyList'
import FavoriteJobCard from '../../components/FavoriteJobCard'
function Favorites({navigation}) {

    const favorites=useSelector(favorite=>favorite.favoriteList);

    const handleJobSelect=(id)=>{
        navigation.navigate('Details',{id})
    }
    
    const renderFavorites = ({item}) => {
        return (
          <FavoriteJobCard
            job={item}
            onSelect={() => handleJobSelect(item.id)}
          />
        );
      };
    
      return (
        <View>
          {favorites.length > 0 ? (
            <FlatList   data={favorites} renderItem={renderFavorites} />
          ) : (
            <EmptyList />
          )}
        </View>
      );
    };

export default Favorites
